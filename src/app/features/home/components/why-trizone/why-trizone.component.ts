import { Component } from '@angular/core';

@Component({
  selector: 'app-why-trizone',
  standalone: true,
  templateUrl: './why-trizone.component.html',
  styleUrl: './why-trizone.component.scss'
})
export class WhyTrizoneComponent {
  reasons = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20h20M6 20V10l6-6 6 6v10"/></svg>`,
      title: 'Strategy-Led Thinking',
      desc: 'Every campaign starts with a clear strategy. We align your business goals with market insights before a single creative is produced.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      title: 'Creative Excellence',
      desc: 'Our creative team brings ideas to life with precision and originality — from brand identity to full-scale advertising campaigns.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Data-Driven Results',
      desc: 'We combine creativity with analytics. Every digital campaign is tracked, optimised and reported to maximise your return on investment.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title: '17+ Years of Experience',
      desc: 'With over 17 years in the industry and 200+ clients served, Sync Bridge brings deep market knowledge and proven execution to every project.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Full-Service Capabilities',
      desc: 'From strategy to execution — branding, advertising, digital, social, SEO, web and video — all under one roof for seamless delivery.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      title: 'Regional Market Expertise',
      desc: 'With offices across Gujarat and deep roots in the Indian market, we understand regional audiences and how to connect with them effectively.'
    },
  ];
}
