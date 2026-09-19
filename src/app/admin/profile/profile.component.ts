import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ProfileService } from '../../core/services/profile.service';
import { UserDto } from '../../core/models/api.models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  profile: UserDto | null = null;
  loading = true;
  saving = false;
  error = '';
  success = '';
  activeTab: 'details' | 'password' | 'status' = 'details';
  detailsForm: FormGroup;
  passwordForm: FormGroup;
  statusForm: FormGroup;
  baseUrl = environment.apiBaseUrl.replace('/api', '');

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      profile_url: ['']
    });
    this.passwordForm = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatch });
    this.statusForm = this.fb.group({
      online_status: [''],
      status_message: ['']
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.profileService.getMyProfile().pipe(
      finalize(() => this.finishLoading())
    ).subscribe({
      next: r => {
        if (r.data) {
          this.profile = r.data;
          this.detailsForm.patchValue(r.data);
          this.statusForm.patchValue(r.data);
        }
        this.notifyView();
      }
    });
  }

  saveDetails(): void {
    if (this.detailsForm.invalid) { this.detailsForm.markAllAsTouched(); return; }
    this.saving = true;
    this.profileService.updateProfileDetails(this.detailsForm.value).subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) { this.success = 'Profile updated'; this.clearSuccessLater(); }
        else { this.error = res.errorMessage || 'Failed'; }
        this.notifyView();
      },
      error: err => { this.saving = false; this.error = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
    });
  }

  changePassword(): void {
    if (this.passwordForm.invalid) { this.passwordForm.markAllAsTouched(); return; }
    this.saving = true;
    this.profileService.changePassword({
      old_password: this.passwordForm.value.old_password,
      new_password: this.passwordForm.value.new_password
    }).subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) { this.success = 'Password changed'; this.passwordForm.reset(); this.clearSuccessLater(); }
        else { this.error = res.errorMessage || 'Failed'; }
        this.notifyView();
      },
      error: err => { this.saving = false; this.error = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
    });
  }

  updateStatus(): void {
    this.saving = true;
    const { online_status, status_message } = this.statusForm.value;
    const obs1 = this.profileService.updateOnlineStatus(online_status);
    const obs2 = this.profileService.updateStatusMessage(status_message);
    obs1.subscribe();
    obs2.subscribe({
      next: () => { this.saving = false; this.success = 'Status updated'; this.clearSuccessLater(); this.notifyView(); },
      error: () => { this.saving = false; this.notifyView(); }
    });
  }

  onImageChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.profileService.updateProfileImage(file).subscribe({
      next: res => {
        if (res.data?.profileUrl) this.loadProfile();
        this.notifyView();
      }
    });
  }

  passwordMatch(group: FormGroup) {
    const p = group.get('new_password')?.value;
    const c = group.get('confirm_password')?.value;
    return p === c ? null : { mismatch: true };
  }

  get initials(): string {
    if (!this.profile) return 'U';
    return `${this.profile.first_name?.charAt(0) || ''}${this.profile.last_name?.charAt(0) || ''}`.toUpperCase();
  }

  get df() { return this.detailsForm.controls; }
  get pf() { return this.passwordForm.controls; }

  private finishLoading(): void {
    queueMicrotask(() => {
      this.loading = false;
      this.notifyView();
    });
  }

  private clearSuccessLater(): void {
    setTimeout(() => {
      this.success = '';
      this.notifyView();
    }, 3000);
  }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
