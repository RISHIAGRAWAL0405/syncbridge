import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { num: '10+', label: 'Years Experience' },
    { num: '500+', label: 'Happy Clients' },
    { num: '1200+', label: 'Projects Done' },
    { num: '40+', label: 'Countries' },
  ];

  awards = [
    { year: '2024', title: 'Best Wedding Photographer', org: 'International Photography Awards' },
    { year: '2023', title: 'Excellence in Fashion Photography', org: 'Vogue Photography Summit' },
    { year: '2022', title: 'Top Commercial Studio', org: 'Advertising Photography Guild' },
    { year: '2021', title: 'Portrait Photographer of the Year', org: 'World Photography Organisation' },
  ];

  timeline = [
    { year: '2015', event: 'Founded Lumière Studio in New York with a vision to redefine luxury photography.' },
    { year: '2017', event: 'Expanded to international markets, shooting campaigns across Europe and Asia.' },
    { year: '2019', event: 'Launched our signature cinematic wedding collection, booked 18 months in advance.' },
    { year: '2021', event: 'Opened our flagship studio in Manhattan\'s Art District.' },
    { year: '2023', event: 'Recognized as one of the world\'s top 10 photography studios by Vogue.' },
    { year: '2025', event: 'Celebrating a decade of capturing extraordinary stories worldwide.' },
  ];
}
