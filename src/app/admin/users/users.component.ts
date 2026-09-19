import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { RoleService } from '../../core/services/role.service';
import { UserDto, RoleDto } from '../../core/models/api.models';
import { UserType } from '../../core/constants/app.constants';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  users: UserDto[] = [];
  roles: RoleDto[] = [];
  loading = true;
  saving = false;
  error = '';
  success = '';
  showModal = false;
  editingUser: UserDto | null = null;
  form: FormGroup;
  userTypes = Object.values(UserType);
  searchTerm = '';

  constructor(private userService: UserService, private roleService: RoleService, private fb: FormBuilder) {
    this.form = this.fb.group({
      user_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile: [''],
      user_type: [UserType.USER, Validators.required],
      password: ['', Validators.required],
      designation_name: [''],
      department_name: [''],
      role_id: [null]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
    this.roleService.getAllRoles().subscribe(r => {
      if (r.data) this.roles = r.data;
      this.notifyView();
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getAllUsers()
      .pipe(finalize(() => this.finishLoading()))
      .subscribe({
        next: r => {
          if (r.data) this.users = r.data;
          this.notifyView();
        }
      });
  }

  openCreate(): void {
    this.editingUser = null;
    this.form.reset({ user_type: UserType.USER });
    this.form.get('password')?.setValidators(Validators.required);
    this.form.get('password')?.updateValueAndValidity();
    this.showModal = true;
    this.error = '';
  }

  openEdit(user: UserDto): void {
    this.editingUser = user;
    this.form.patchValue({ ...user, role_id: user.role?.role_id || null });
    this.form.get('password')?.clearValidators();
    this.form.get('password')?.updateValueAndValidity();
    this.showModal = true;
    this.error = '';
  }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.error = '';
    const obs = this.editingUser
      ? this.userService.updateUser(this.editingUser.user_id, this.form.value)
      : this.userService.createUser(this.form.value);

    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `User ${this.editingUser ? 'updated' : 'created'} successfully`;
          this.showModal = false;
          this.loadUsers();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || 'Operation failed';
        }
        this.notifyView();
      },
      error: err => {
        this.saving = false;
        this.error = err?.error?.errorMessage || 'Operation failed';
        this.notifyView();
      }
    });
  }

  toggleStatus(user: UserDto): void {
    this.userService.setActiveInactive(user.user_id, !user.is_active).subscribe({
      next: () => this.loadUsers()
    });
  }

  get filteredUsers(): UserDto[] {
    if (!this.searchTerm) return this.users;
    const t = this.searchTerm.toLowerCase();
    return this.users.filter(u =>
      u.full_name?.toLowerCase().includes(t) ||
      u.email?.toLowerCase().includes(t) ||
      u.user_name?.toLowerCase().includes(t)
    );
  }

  get f() { return this.form.controls; }

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
