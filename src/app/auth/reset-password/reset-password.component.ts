import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  form: FormGroup;
  loading = false;
  error = '';
  success = '';
  userId = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      otp_code: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParamMap.get('user_id') || '';
  }

  passwordMatch(group: FormGroup) {
    const p = group.get('new_password')?.value;
    const c = group.get('confirm_password')?.value;
    return p === c ? null : { mismatch: true };
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';
    this.auth.resetPassword({
      user_id: this.userId,
      otp_code: this.form.value.otp_code,
      new_password: this.form.value.new_password
    }).subscribe({
      next: res => {
        this.loading = false;
        if (res.statusCode === 200) {
          this.success = 'Password reset successfully!';
          setTimeout(() => this.router.navigate(['/auth/login']), 2000);
        } else {
          this.error = res.errorMessage || 'Reset failed';
        }
        this.notifyView();
      },
      error: err => {
        this.loading = false;
        this.error = err?.error?.errorMessage || 'Invalid OTP or expired';
        this.notifyView();
      }
    });
  }

  get f() { return this.form.controls; }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
