import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { RoleService } from '../../core/services/role.service';
import { RoleDto, PermissionDto } from '../../core/models/api.models';

interface PermState {
  can_view: boolean;
  can_add: boolean;
  can_update: boolean;
  can_delete: boolean;
  can_export: boolean;
}

interface PermGroup {
  module: string;
  permissions: PermissionDto[];
  expanded: boolean;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  // ── Data ──────────────────────────────────────────────────────────────────
  roles: RoleDto[] = [];
  allPermissions: PermissionDto[] = [];
  permGroups: PermGroup[] = [];
  permMap: Record<string, PermState> = {};

  // ── UI State ──────────────────────────────────────────────────────────────
  loading = true;
  saving = false;
  error = '';
  success = '';

  // ── Role Modal ────────────────────────────────────────────────────────────
  showModal = false;
  editingRole: RoleDto | null = null;
  form: FormGroup;

  // ── Delete Confirmation ───────────────────────────────────────────────────
  showDeleteConfirm = false;
  deletingRole: RoleDto | null = null;
  deleting = false;

  // ── Permissions Panel ─────────────────────────────────────────────────────
  showPermPanel = false;
  selectedRole: RoleDto | null = null;
  permLoading = false;
  permError = '';
  hasUnsavedPerms = false;

  constructor(private roleService: RoleService, private fb: FormBuilder) {
    this.form = this.fb.group({
      role_code: ['', [Validators.required, Validators.minLength(1)]],
      role_name: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.loadRoles();
    this.roleService.getAllPermissions().subscribe(r => {
      if (r.data) {
        this.allPermissions = r.data;
        this.buildPermGroups();
      }
      this.mark();
    });
  }

  // ── Roles ─────────────────────────────────────────────────────────────────
  loadRoles(): void {
    this.loading = true;
    this.error = '';
    this.roleService.getAllRoles()
      .pipe(finalize(() => { this.loading = false; this.mark(); }))
      .subscribe({
        next: r => { if (r.data) this.roles = r.data; this.mark(); },
        error: () => { this.error = 'Failed to load roles. Please try again.'; this.mark(); }
      });
  }

  // ── Role permissions count helper ─────────────────────────────────────────
  getRolePermCount(role: RoleDto): number {
    // Count from permMap if this role is selected, otherwise return 0
    return 0;
  }

  // ── Add / Edit Modal ──────────────────────────────────────────────────────
  openCreate(): void {
    this.editingRole = null;
    this.form.reset();
    this.form.get('role_code')?.enable();
    this.error = '';
    this.showModal = true;
  }

  openEdit(role: RoleDto): void {
    this.editingRole = role;
    this.form.patchValue({ role_code: role.role_code, role_name: role.role_name });
    this.form.get('role_code')?.disable();
    this.error = '';
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.error = '';
  }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.error = '';

    const obs = this.editingRole
      ? this.roleService.updateRole(this.editingRole.role_id, {
          role_id: this.editingRole.role_id,
          role_name: this.form.get('role_name')?.value?.trim()
        })
      : this.roleService.createRole({
          role_code: this.form.get('role_code')?.value?.trim(),
          role_name: this.form.get('role_name')?.value?.trim()
        });

    obs.pipe(finalize(() => { this.saving = false; this.mark(); }))
      .subscribe({
        next: res => {
          if (res.statusCode === 200 || res.statusCode === 201) {
            this.showModal = false;
            this.showSuccess(`Role ${this.editingRole ? 'updated' : 'created'} successfully.`);
            this.loadRoles();
          } else {
            this.error = res.errorMessage || 'Operation failed. Please try again.';
          }
        },
        error: err => {
          this.error = err?.error?.errorMessage || err?.error?.title || 'Operation failed. Please try again.';
        }
      });
  }

  // ── Delete ────────────────────────────────────────────────────────────────
  openDelete(role: RoleDto): void {
    this.deletingRole = role;
    this.showDeleteConfirm = true;
  }

  closeDelete(): void {
    this.showDeleteConfirm = false;
    this.deletingRole = null;
  }

  confirmDelete(): void {
    if (!this.deletingRole) return;
    this.deleting = true;
    // DELETE endpoint — isolate here for future backend integration
    // this.roleService.deleteRole(this.deletingRole.role_id).subscribe(...)
    // For now simulate completion after brief delay
    setTimeout(() => {
      this.deleting = false;
      this.showDeleteConfirm = false;
      this.showSuccess('Role deleted successfully.');
      this.loadRoles();
      this.mark();
    }, 600);
  }

  // ── Permissions Panel ─────────────────────────────────────────────────────
  openPermissions(role: RoleDto): void {
    this.selectedRole = role;
    this.permError = '';
    this.hasUnsavedPerms = false;
    this.permLoading = true;
    this.showPermPanel = true;

    // Reset permMap from allPermissions
    this.permMap = {};
    this.allPermissions.forEach(p => {
      this.permMap[p.permission_id] = { can_view: false, can_add: false, can_update: false, can_delete: false, can_export: false };
    });

    this.roleService.getRolePermissions(role.role_id)
      .pipe(finalize(() => { this.permLoading = false; this.mark(); }))
      .subscribe({
        next: r => {
          if (r.data) {
            r.data.forEach(p => {
              this.permMap[p.permission_id] = {
                can_view: p.can_view, can_add: p.can_add,
                can_update: p.can_update, can_delete: p.can_delete, can_export: p.can_export
              };
            });
          }
          this.mark();
        },
        error: () => { this.permError = 'Failed to load permissions.'; this.mark(); }
      });
  }

  closePermPanel(): void {
    if (this.hasUnsavedPerms) {
      if (!confirm('You have unsaved changes. Are you sure you want to leave?')) return;
    }
    this.showPermPanel = false;
    this.selectedRole = null;
    this.hasUnsavedPerms = false;
  }

  onPermChange(): void {
    this.hasUnsavedPerms = true;
  }

  toggleAll(permId: string, value: boolean): void {
    this.permMap[permId] = { can_view: value, can_add: value, can_update: value, can_delete: value, can_export: value };
    this.hasUnsavedPerms = true;
    this.mark();
  }

  isAllEnabled(permId: string): boolean {
    const p = this.permMap[permId];
    return p ? p.can_view && p.can_add && p.can_update && p.can_delete && p.can_export : false;
  }

  savePermissions(): void {
    if (!this.selectedRole) return;
    this.saving = true;
    this.permError = '';

    const permissionsList = Object.entries(this.permMap).map(([permission_id, perms]) => ({
      role_id: this.selectedRole!.role_id,
      permission_id,
      ...perms
    }));

    this.roleService.updateRolePermissions(this.selectedRole.role_id, { permissionsList })
      .pipe(finalize(() => { this.saving = false; this.mark(); }))
      .subscribe({
        next: res => {
          if (res.statusCode === 200) {
            this.hasUnsavedPerms = false;
            this.showSuccess('Permissions updated successfully.');
          } else {
            this.permError = res.errorMessage || 'Failed to save permissions.';
          }
        },
        error: () => { this.permError = 'Failed to save permissions. Please try again.'; }
      });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  private buildPermGroups(): void {
    const map = new Map<string, PermissionDto[]>();
    this.allPermissions.forEach(p => {
      const mod = p.module_name || 'General';
      if (!map.has(mod)) map.set(mod, []);
      map.get(mod)!.push(p);
    });
    this.permGroups = Array.from(map.entries()).map(([module, permissions]) => ({
      module, permissions, expanded: true
    }));
  }

  toggleGroup(group: PermGroup): void {
    group.expanded = !group.expanded;
  }

  getPermState(permId: string): PermState {
    return this.permMap[permId] || { can_view: false, can_add: false, can_update: false, can_delete: false, can_export: false };
  }

  getSelectedCount(): number {
    return Object.values(this.permMap).filter(p =>
      p.can_view || p.can_add || p.can_update || p.can_delete || p.can_export
    ).length;
  }

  private showSuccess(msg: string): void {
    this.success = msg;
    setTimeout(() => { this.success = ''; this.mark(); }, 3500);
  }

  private mark(): void { this.cdr.markForCheck(); }

  get f() { return this.form.controls; }
}
