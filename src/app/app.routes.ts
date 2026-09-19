import { Routes } from '@angular/router';
import { authGuard, clientGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Auth routes (public - no website content)
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
        title: 'Login | Sync Bridge'
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
        title: 'Forgot Password | Sync Bridge'
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
        title: 'Reset Password | Sync Bridge'
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // Client routes (protected)
  {
    path: 'client',
    loadComponent: () => import('./client/layout/client-layout.component').then(m => m.ClientLayoutComponent),
    canActivate: [clientGuard],
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./client/calendar/calendar.component').then(m => m.ClientCalendarComponent),
        title: 'My Calendar | Sync Bridge'
      },
      { path: '', redirectTo: 'calendar', pathMatch: 'full' }
    ]
  },

  // Admin routes (protected) - ONLY admin panel, NO website content
  {
    path: 'admin',
    loadComponent: () => import('./admin/layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Dashboard | Sync Bridge'
      },
      {
        path: 'users',
        loadComponent: () => import('./admin/users/users.component').then(m => m.UsersComponent),
        title: 'Users | Sync Bridge'
      },
      {
        path: 'clients',
        loadComponent: () => import('./admin/clients/clients.component').then(m => m.ClientsComponent),
        title: 'Clients | Sync Bridge'
      },
      {
        path: 'projects',
        loadComponent: () => import('./admin/projects/projects.component').then(m => m.ProjectsComponent),
        title: 'Projects | Sync Bridge'
      },
      {
        path: 'projects/:projectId',
        loadComponent: () => import('./admin/projects/project-profile/project-profile.component').then(m => m.ProjectProfileComponent),
        title: 'Project Profile | Sync Bridge'
      },
      {
        path: 'tasks',
        loadComponent: () => import('./admin/tasks/tasks.component').then(m => m.TasksComponent),
        title: 'Tasks | Sync Bridge'
      },
      {
        path: 'roles',
        loadComponent: () => import('./admin/roles/roles.component').then(m => m.RolesComponent),
        title: 'Roles | Sync Bridge'
      },
      {
        path: 'workflow',
        loadComponent: () => import('./admin/workflow/workflow.component').then(m => m.WorkflowComponent),
        title: 'Workflow | Sync Bridge'
      },
      {
        path: 'workflow/steps',
        loadComponent: () => import('./admin/workflow/workflow.component').then(m => m.WorkflowComponent),
        title: 'Workflow Steps | Sync Bridge'
      },
      {
        path: 'workflow/templates',
        loadComponent: () => import('./admin/workflow/workflow.component').then(m => m.WorkflowComponent),
        title: 'Workflow Templates | Sync Bridge'
      },
      {
        path: 'profile',
        loadComponent: () => import('./admin/profile/profile.component').then(m => m.ProfileComponent),
        title: 'Profile | Sync Bridge'
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Public visitor routes
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Sync Bridge | Strategy · Branding · Digital Marketing'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Sync Bridge'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Our Services | Sync Bridge'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Our Work | Sync Bridge'
  },
  {
    path: 'industries',
    loadComponent: () => import('./features/industries/industries.component').then(m => m.IndustriesComponent),
    title: 'Industries We Serve | Sync Bridge'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent),
    title: 'Insights & Blog | Sync Bridge'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Sync Bridge'
  },
  {
    path: 'pr-communication',
    loadComponent: () => import('./features/pr-communication/pr-communication.component').then(m => m.PrCommunicationComponent),
    title: 'PR Communication | Sync Bridge'
  },

  { path: '**', redirectTo: '' }
];
