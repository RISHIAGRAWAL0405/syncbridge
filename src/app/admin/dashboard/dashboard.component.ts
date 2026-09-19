import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ClientService } from '../../core/services/client.service';
import { ProjectService } from '../../core/services/project.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  stats = { users: 0, clients: 0, projects: 0, activeProjects: 0 };
  loading = true;
  user: ReturnType<AuthService['getCurrentUser']>;

  constructor(
    private userService: UserService,
    private clientService: ClientService,
    private projectService: ProjectService,
    private auth: AuthService
  ) {
    this.user = this.auth.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.userService.getAllUsers().subscribe(r => {
      if (r.data) this.stats.users = r.data.length;
      this.notifyView();
    });
    this.clientService.getAllClients().subscribe(r => {
      if (r.data) this.stats.clients = r.data.length;
      this.notifyView();
    });
    this.projectService.getAllProjects().subscribe(r => {
      if (r.data) {
        this.stats.projects = r.data.length;
        this.stats.activeProjects = r.data.filter(p => p.is_active).length;
      }
      this.loading = false;
      this.notifyView();
    });
  }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
