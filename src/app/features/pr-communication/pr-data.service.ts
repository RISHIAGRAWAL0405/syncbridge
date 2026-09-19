import { Injectable } from '@angular/core';

export interface PrEvent {
  id: number;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  year: string;
  location: string;
  industry: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  featured: boolean;
  coverImage: string;
  accentImage?: string;
  gallery: string[];
}

export const PR_CATEGORIES = [
  { id: 'all',             label: 'All' },
  { id: 'Exhibitions',     label: 'Exhibitions' },
  { id: 'Conferences',     label: 'Conferences' },
  { id: 'Events',          label: 'Events' },
  { id: 'Industry Connect',label: 'Industry Connect' },
  { id: 'Corporate',       label: 'Corporate' },
  { id: 'Announcements',   label: 'Announcements' },
];

export const PR_STATS = [
  { num: '17', suffix: '+', label: 'Years of Excellence' },
  { num: '50', suffix: '+', label: 'Industry Events' },
  { num: '100', suffix: '+', label: 'Client Engagements' },
  { num: '20', suffix: '+', label: 'Industry Verticals' },
];

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80';

export const PR_EVENTS: PrEvent[] = [
  {
    id: 1,
    slug: 'evoke-expo',
    title: 'EVOKE Expo',
    category: 'Exhibitions',
    categoryLabel: 'Exhibition • Event',
    date: 'March 2026',
    year: '2026',
    location: 'Ahmedabad, India',
    industry: 'Multi-Industry',
    shortDescription: 'Connecting with industry leaders, innovators and partners at EVOKE Expo — showcasing ideas, technology and solutions that create meaningful business impact.',
    description: 'EVOKE Expo brought together the brightest minds across industries under one roof. Sync Bridge participated as a key exhibitor, showcasing our full-service capabilities in branding, digital marketing, advertising and web development. The event provided an unparalleled platform to connect with potential clients, industry peers and technology partners, reinforcing our commitment to innovation and growth.',
    highlights: [
      'Showcased integrated brand and digital marketing solutions',
      'Connected with 200+ industry professionals and decision-makers',
      'Demonstrated live campaign analytics and performance dashboards',
      'Participated in panel discussions on the future of digital advertising',
      'Established new partnerships with technology and media companies',
    ],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
    accentImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    ],
  },
  {
    id: 2,
    slug: 'industry-connect-summit',
    title: 'Industry Connect Summit',
    category: 'Conferences',
    categoryLabel: 'Conference • Networking',
    date: 'January 2026',
    year: '2026',
    location: 'Surat, India',
    industry: 'Marketing & Advertising',
    shortDescription: 'A premier gathering of marketing and advertising professionals exploring the intersection of creativity, technology and business strategy.',
    description: 'The Industry Connect Summit brought together marketing leaders, brand managers and agency professionals for a day of insightful conversations, workshops and networking. Sync Bridge led a keynote session on integrated marketing strategies and the evolving role of digital in brand building.',
    highlights: [
      'Keynote presentation on integrated marketing in 2026',
      'Workshop on performance marketing and ROI measurement',
      'Networking with 150+ marketing professionals',
      'Panel discussion on brand building in the digital age',
    ],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85',
    accentImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80',
    ],
  },
  {
    id: 3,
    slug: 'technology-showcase-2025',
    title: 'Technology Showcase 2025',
    category: 'Events',
    categoryLabel: 'Event • Technology',
    date: 'November 2025',
    year: '2025',
    location: 'Vadodara, India',
    industry: 'Technology',
    shortDescription: 'Exploring the latest in marketing technology, automation and AI-driven solutions that are reshaping how brands communicate with their audiences.',
    description: 'Technology Showcase 2025 was a landmark event for the marketing technology ecosystem. Sync Bridge demonstrated our proprietary campaign management tools and AI-assisted content strategies, drawing significant interest from enterprise clients and startups alike.',
    highlights: [
      'Demonstrated AI-assisted content creation workflows',
      'Showcased campaign automation and analytics tools',
      'Connected with 80+ technology and marketing professionals',
      'Explored partnerships with MarTech solution providers',
    ],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    ],
  },
  {
    id: 4,
    slug: 'partner-meet-2025',
    title: 'Partner Meet 2025',
    category: 'Corporate',
    categoryLabel: 'Corporate • Partnership',
    date: 'September 2025',
    year: '2025',
    location: 'Ahmedabad, India',
    industry: 'Multi-Industry',
    shortDescription: 'An exclusive gathering of Sync Bridge\'s strategic partners, celebrating shared successes and charting the course for future collaborations.',
    description: 'The annual Partner Meet brought together our most valued strategic partners for an evening of recognition, collaboration and forward planning. The event celebrated joint achievements and laid the groundwork for exciting new initiatives in the coming year.',
    highlights: [
      'Recognised top-performing partner agencies and vendors',
      'Announced new co-marketing initiatives for 2026',
      'Facilitated cross-industry networking and collaboration',
      'Presented the Sync Bridge Partner Excellence Awards',
    ],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80',
    ],
  },
  {
    id: 5,
    slug: 'innovation-summit-2025',
    title: 'Innovation Summit 2025',
    category: 'Conferences',
    categoryLabel: 'Conference • Innovation',
    date: 'July 2025',
    year: '2025',
    location: 'Rajkot, India',
    industry: 'Business & Innovation',
    shortDescription: 'A forward-looking conference exploring innovation in business, marketing and brand strategy for the next decade.',
    description: 'Innovation Summit 2025 gathered entrepreneurs, business leaders and creative professionals to explore the future of business and brand communication. Sync Bridge contributed thought leadership on creative strategy and the role of storytelling in modern brand building.',
    highlights: [
      'Thought leadership session on brand storytelling',
      'Workshop on creative strategy for emerging markets',
      'Networking with 120+ business leaders and entrepreneurs',
      'Explored innovation in advertising and media',
    ],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80',
    ],
  },
  {
    id: 6,
    slug: 'brand-india-expo',
    title: 'Brand India Expo',
    category: 'Exhibitions',
    categoryLabel: 'Exhibition • Branding',
    date: 'April 2025',
    year: '2025',
    location: 'Ahmedabad, India',
    industry: 'Branding & Design',
    shortDescription: 'Celebrating the best of Indian branding, design and creative communication at one of the country\'s premier brand exhibitions.',
    description: 'Brand India Expo showcased the finest examples of Indian brand identity, packaging design and creative communication. Sync Bridge exhibited a curated portfolio of our most impactful branding projects, demonstrating our expertise in creating brands that resonate across cultures and markets.',
    highlights: [
      'Exhibited 15+ award-worthy branding projects',
      'Participated in the Brand Excellence Awards jury',
      'Conducted a live brand identity workshop',
      'Connected with 200+ brand managers and designers',
    ],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class PrDataService {
  readonly events = PR_EVENTS;
  readonly categories = PR_CATEGORIES;
  readonly stats = PR_STATS;

  getAll(): PrEvent[] { return this.events; }

  getFeatured(): PrEvent[] { return this.events.filter(e => e.featured); }

  getByCategory(cat: string): PrEvent[] {
    if (cat === 'all') return this.events;
    return this.events.filter(e => e.category === cat);
  }

  getBySlug(slug: string): PrEvent | undefined {
    return this.events.find(e => e.slug === slug);
  }
}
