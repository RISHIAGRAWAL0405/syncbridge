import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private cdr = inject(ChangeDetectorRef);
  form: FormGroup;
  loading = false;
  error = '';
  showPassword = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';
    this.auth.login(this.form.value).subscribe({
      next: res => {
        this.loading = false;
        if (res.statusCode === 200) {
          const userType = res.data?.user?.userType;
          if (userType === 'CLIENT') {
            this.router.navigate(['/client/calendar']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.error = res.errorMessage || 'Login failed';
        }
        this.notifyView();
      },
      error: err => {
        this.loading = false;
        this.error = err?.error?.errorMessage || 'Invalid credentials';
        this.notifyView();
      }
    });
  }

  get f() { return this.form.controls; }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
