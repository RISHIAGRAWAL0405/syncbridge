import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ClientService } from '../../core/services/client.service';
import { UserService } from '../../core/services/user.service';
import { ClientDto, UserDto } from '../../core/models/api.models';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  clients: ClientDto[] = [];
  users: UserDto[] = [];
  loading = true;
  saving = false;
  error = '';
  success = '';
  showModal = false;
  editingClient: ClientDto | null = null;
  form: FormGroup;
  searchTerm = '';

  constructor(private clientService: ClientService, private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      client_id: ['', Validators.required],
      client_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      company_name: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.loadClients();
    this.userService.getUsersByType('USER').subscribe(r => {
      if (r.data) this.users = r.data;
      this.notifyView();
    });
  }

  loadClients(): void {
    this.loading = true;
    this.clientService.getAllClients()
      .pipe(finalize(() => this.finishLoading()))
      .subscribe({
        next: r => {
          if (r.data) this.clients = r.data;
          this.notifyView();
        }
      });
  }

  openCreate(): void {
    this.editingClient = null;
    this.form.reset();
    this.form.get('client_id')?.enable();
    this.showModal = true;
    this.error = '';
  }

  openEdit(client: ClientDto): void {
    this.editingClient = client;
    this.form.patchValue(client);
    this.form.get('client_id')?.disable();
    this.showModal = true;
    this.error = '';
  }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.error = '';
    const obs = this.editingClient
      ? this.clientService.updateClient(this.editingClient.client_id, this.form.value)
      : this.clientService.createClient(this.form.value);

    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Client ${this.editingClient ? 'updated' : 'created'} successfully`;
          this.showModal = false;
          this.loadClients();
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

  toggleStatus(client: ClientDto): void {
    this.clientService.setStatus(client.client_id, !client.is_active).subscribe({
      next: () => this.loadClients()
    });
  }

  get filteredClients(): ClientDto[] {
    if (!this.searchTerm) return this.clients;
    const t = this.searchTerm.toLowerCase();
    return this.clients.filter(c =>
      c.client_name?.toLowerCase().includes(t) ||
      c.email?.toLowerCase().includes(t) ||
      c.company_name?.toLowerCase().includes(t)
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
