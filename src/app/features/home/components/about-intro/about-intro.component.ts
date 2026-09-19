import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-intro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.scss'
})
export class AboutIntroComponent {
  capabilities = [
    'Strategy & Planning',
    'Brand Identity',
    'Creative Design',
    'Advertising Campaigns',
    'Digital Marketing',
    'Social Media Management',
    'Search Engine Optimisation',
    'Web Development',
    'Video Production',
  ];
}
