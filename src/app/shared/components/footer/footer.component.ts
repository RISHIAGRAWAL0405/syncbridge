import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);
  year = new Date().getFullYear();

  get isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin') || this.router.url.startsWith('/auth');
  }

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/portfolio' },
    { label: 'Industries', path: '/industries' },
    { label: 'Insights', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  serviceLinks = [
    { label: 'Strategy', path: '/services' },
    { label: 'Branding', path: '/services' },
    { label: 'Design', path: '/services' },
    { label: 'Advertising', path: '/services' },
    { label: 'Social Media', path: '/services' },
    { label: 'SEO', path: '/services' },
    { label: 'Digital Marketing', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'Video Production', path: '/services' },
  ];

  offices = [
    { city: 'Ahmedabad', address: 'Head Office, Ahmedabad, Gujarat' },
    { city: 'Surat', address: 'Surat, Gujarat' },
    { city: 'Vadodara', address: 'Vadodara, Gujarat' },
    { city: 'Rajkot', address: 'Rajkot, Gujarat' },
  ];
}
