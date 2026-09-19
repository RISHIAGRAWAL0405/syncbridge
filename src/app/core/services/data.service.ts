import { Injectable } from '@angular/core';

export interface TzService {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  featured?: boolean;
}

export interface TzProject {
  id: number;
  title: string;
  client: string;
  industry: string;
  summary: string;
  services: string[];
  image: string;
  featured?: boolean;
}

export interface TzTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating: number;
}

export interface TzBlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: number;
}

export interface TzIndustry {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface TzStat {
  num: string;
  label: string;
  suffix?: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

  readonly stats: TzStat[] = [
    { num: '17', label: 'Years of Experience', suffix: '+' },
    { num: '200', label: 'Clients Served', suffix: '+' },
    { num: '2500', label: 'Campaigns Delivered', suffix: '+' },
    { num: '4', label: 'Offices Across India', suffix: '' },
  ];

  readonly services: TzService[] = [
    {
      id: 1, slug: 'strategy',
      title: 'Strategy',
      description: 'Data-driven brand and communication strategies that align your business goals with market opportunities for sustainable growth.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/></svg>`,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      features: ['Market Research', 'Brand Positioning', 'Competitive Analysis', 'Go-to-Market Planning'],
      featured: true
    },
    {
      id: 2, slug: 'branding',
      title: 'Branding',
      description: 'Crafting distinctive brand identities that resonate with your audience and stand the test of time across every touchpoint.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      features: ['Logo & Visual Identity', 'Brand Guidelines', 'Brand Architecture', 'Rebranding'],
      featured: false
    },
    {
      id: 3, slug: 'design',
      title: 'Design',
      description: 'Creative design solutions that communicate your brand story with clarity, impact and visual excellence across all media.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      features: ['Print & Digital Design', 'Packaging Design', 'UI/UX Design', 'Motion Graphics'],
      featured: false
    },
    {
      id: 4, slug: 'advertising',
      title: 'Advertising',
      description: 'Integrated advertising campaigns across print, outdoor, broadcast and digital that capture attention and drive results.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      features: ['Print Advertising', 'Outdoor / OOH', 'TV & Radio', 'Campaign Management'],
      featured: true
    },
    {
      id: 5, slug: 'social-media',
      title: 'Social Media',
      description: 'Strategic social media management that builds communities, drives engagement and converts followers into loyal customers.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      features: ['Content Strategy', 'Community Management', 'Paid Social', 'Influencer Marketing'],
      featured: false
    },
    {
      id: 6, slug: 'seo',
      title: 'SEO',
      description: 'Comprehensive search engine optimisation that improves your organic visibility, drives qualified traffic and grows revenue.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      features: ['Technical SEO', 'On-Page Optimisation', 'Link Building', 'Local SEO'],
      featured: false
    },
    {
      id: 7, slug: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Performance-driven digital marketing campaigns across Google, Meta and programmatic platforms that maximise your ROI.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      features: ['Google Ads / PPC', 'Meta Advertising', 'Programmatic Display', 'Analytics & Reporting'],
      featured: true
    },
    {
      id: 8, slug: 'web-development',
      title: 'Web Development',
      description: 'Modern, fast and conversion-optimised websites and web applications built to represent your brand at its best.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      features: ['Website Design & Dev', 'E-Commerce', 'CMS Integration', 'Performance Optimisation'],
      featured: false
    },
    {
      id: 9, slug: 'video-production',
      title: 'Video Production',
      description: 'Compelling video content from concept to delivery — brand films, TVCs, social reels and corporate videos that tell your story.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      features: ['Brand Films', 'TVC Production', 'Social Media Videos', 'Corporate Videos'],
      featured: false
    },
  ];

  readonly projects: TzProject[] = [
    {
      id: 1,
      title: 'Panasonic India Campaign',
      client: 'Panasonic',
      industry: 'Electronics',
      summary: 'Integrated brand campaign across digital and print channels to strengthen Panasonic\'s market presence in Gujarat and drive product awareness.',
      services: ['Advertising', 'Digital Marketing', 'Design'],
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Pizzawala\'s Brand Identity',
      client: 'Pizzawala\'s',
      industry: 'Food & Beverage',
      summary: 'Complete brand identity and digital marketing strategy for a fast-growing pizza chain, including logo, packaging, social media and performance campaigns.',
      services: ['Branding', 'Social Media', 'Design'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Apollo CBCC Cancer Care',
      client: 'Apollo CBCC',
      industry: 'Healthcare',
      summary: 'Sensitive and impactful communication strategy for Apollo\'s cancer care centre, building trust and awareness through digital and outdoor campaigns.',
      services: ['Strategy', 'Advertising', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'Rann Utsav Tourism',
      client: 'Rann Utsav',
      industry: 'Tourism',
      summary: 'Destination marketing campaign for the iconic Rann Utsav festival, driving national and international tourist footfall through digital storytelling.',
      services: ['Strategy', 'Digital Marketing', 'Social Media', 'Video Production'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Niraan – The Tent City',
      client: 'Niraan',
      industry: 'Hospitality',
      summary: 'Premium brand positioning and digital launch campaign for Niraan, a luxury tent city experience at the Rann of Kutch.',
      services: ['Branding', 'Web Development', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Developer Campaign',
      client: 'Leading Developer',
      industry: 'Real Estate',
      summary: 'Performance marketing and lead generation campaign for a premium residential project, delivering qualified leads at optimised cost per acquisition.',
      services: ['Digital Marketing', 'SEO', 'Design'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
      featured: false
    },
  ];

  readonly testimonials: TzTestimonial[] = [
    {
      id: 1,
      name: 'Rajesh Mehta',
      role: 'Marketing Director',
      company: 'Panasonic India',
      quote: 'Sync Bridge has been our trusted agency partner for years. Their strategic thinking combined with creative execution has consistently delivered campaigns that exceed our expectations and drive real business results.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Shah',
      role: 'Founder & CEO',
      company: 'Pizzawala\'s',
      quote: 'From our brand identity to our digital presence, Sync Bridge understood our vision from day one. They helped us build a brand that our customers love and that stands out in a competitive market.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      role: 'Head of Marketing',
      company: 'Apollo CBCC',
      quote: 'Healthcare communication requires sensitivity and expertise. Sync Bridge delivered both. Their campaigns have significantly improved our patient outreach and brand trust in the region.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5
    },
    {
      id: 4,
      name: 'Sanjay Trivedi',
      role: 'General Manager',
      company: 'Tourism Corporation of Gujarat',
      quote: 'The Rann Utsav digital campaign by Sync Bridge was exceptional. They captured the magic of the festival and translated it into compelling content that drove record tourist registrations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5
    },
  ];

  readonly blogPosts: TzBlogPost[] = [
    {
      id: 1,
      title: 'Why Brand Strategy Must Come Before Creative',
      excerpt: 'Many businesses rush into creative execution without a solid brand strategy. Here\'s why getting the strategy right first is the foundation of every successful campaign.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      date: '2025-01-20',
      category: 'Strategy',
      readTime: 6
    },
    {
      id: 2,
      title: 'The Power of Integrated Marketing in 2025',
      excerpt: 'In a fragmented media landscape, integrated marketing campaigns that connect digital, print and outdoor deliver significantly better results than siloed channel approaches.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      date: '2025-01-10',
      category: 'Digital Marketing',
      readTime: 7
    },
    {
      id: 3,
      title: 'Building a Brand Identity That Lasts',
      excerpt: 'A strong brand identity is more than a logo. It\'s a complete visual and verbal system that communicates your values, builds trust and creates lasting recognition.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      date: '2024-12-28',
      category: 'Branding',
      readTime: 5
    },
    {
      id: 4,
      title: 'SEO in 2025: What Actually Moves the Needle',
      excerpt: 'Search engine optimisation has evolved dramatically. Discover the strategies that are delivering real organic growth for businesses in competitive markets today.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      date: '2024-12-15',
      category: 'SEO',
      readTime: 8
    },
    {
      id: 5,
      title: 'Social Media Marketing: Quality Over Quantity',
      excerpt: 'Posting more doesn\'t mean growing more. Learn how a focused, high-quality social media strategy consistently outperforms high-volume, low-quality content approaches.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      date: '2024-12-05',
      category: 'Social Media',
      readTime: 5
    },
    {
      id: 6,
      title: 'Video Production: Telling Your Brand Story',
      excerpt: 'Video is the most powerful medium for brand storytelling. Here\'s how to plan, produce and distribute video content that genuinely connects with your audience.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      date: '2024-11-22',
      category: 'Video Production',
      readTime: 6
    },
  ];

  readonly industries: TzIndustry[] = [
    { id: 'tourism', label: 'Tourism', icon: '✈', description: 'Destination marketing and tourism campaigns' },
    { id: 'manufacturing', label: 'Manufacturing', icon: '⚙', description: 'B2B and B2C manufacturing brand communication' },
    { id: 'retail', label: 'Retail', icon: '🛍', description: 'Retail brand building and performance marketing' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥', description: 'Sensitive and effective healthcare communication' },
    { id: 'fmcg', label: 'FMCG', icon: '📦', description: 'Fast-moving consumer goods campaigns' },
    { id: 'hospitality', label: 'Hospitality', icon: '🏨', description: 'Hotel, resort and hospitality brand marketing' },
    { id: 'government', label: 'Government', icon: '🏛', description: 'Government and public sector communication' },
    { id: 'ngo', label: 'NGO / NPO', icon: '🤝', description: 'Non-profit and social impact communication' },
    { id: 'education', label: 'Education', icon: '🎓', description: 'Educational institution branding and marketing' },
    { id: 'real-estate', label: 'Real Estate', icon: '🏗', description: 'Real estate lead generation and brand campaigns' },
    { id: 'banking', label: 'Banking & Finance', icon: '🏦', description: 'Financial services brand and digital marketing' },
    { id: 'services', label: 'Services', icon: '💼', description: 'Professional services brand communication' },
  ];

  // Legacy compatibility — kept so any existing admin code referencing these doesn't break
  readonly portfolioItems = this.projects.map(p => ({
    id: p.id, title: p.title, category: p.industry.toLowerCase(),
    image: p.image, width: 2, height: 3, featured: p.featured ?? false
  }));

  readonly categories = this.industries.map(i => ({
    id: i.id, label: i.label, image: '', count: 0
  }));

  readonly pricingPlans: any[] = [];
}
