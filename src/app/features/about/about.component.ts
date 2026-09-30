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
  teamMembers = [
    {
      number: '01',
      name: 'Anubhav Soni',
      role: 'Founder',
      description: 'Founder driving the vision, strategy, and growth of the company with a strong focus on innovation and digital transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
    },
    {
      number: '02',
      name: 'Aksh Puri',
      role: 'Co-Founder',
      description: 'Co-Founder focused on building meaningful digital experiences, business growth, and turning ideas into scalable solutions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80'
    },
    {
      number: '03',
      name: 'Rishi Agrawal',
      role: 'Chief Technology Officer',
      description: 'CTO leading technology, engineering, architecture, and the development of scalable and reliable digital products.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80'
    }
  ];

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
