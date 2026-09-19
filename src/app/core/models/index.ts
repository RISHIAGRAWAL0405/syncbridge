export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  count: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}
