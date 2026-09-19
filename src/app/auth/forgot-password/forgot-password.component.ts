import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  private cdr = inject(ChangeDetectorRef);
  form: FormGroup;
  loading = false;
  error = '';
  success = '';
  userId = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({ user_name: ['', Validators.required] });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';
    this.auth.forgotPassword(this.form.value).subscribe({
      next: res => {
        this.loading = false;
        if (res.statusCode === 200 && res.data) {
          this.userId = res.data.user_id;
          this.router.navigate(['/auth/reset-password'], { queryParams: { user_id: this.userId } });
        } else {
          this.error = res.errorMessage || 'Failed to send OTP';
        }
        this.notifyView();
      },
      error: err => {
        this.loading = false;
        this.error = err?.error?.errorMessage || 'User not found';
        this.notifyView();
      }
    });
  }

  get f() { return this.form.controls; }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
