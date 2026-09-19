import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-U2WXL5OW.js";

// src/app/core/services/data.service.ts
var DataService = class _DataService {
  categories = [
    { id: "wedding", label: "Wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", count: 48 },
    { id: "portrait", label: "Portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", count: 62 },
    { id: "fashion", label: "Fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", count: 35 },
    { id: "travel", label: "Travel", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", count: 54 },
    { id: "commercial", label: "Commercial", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", count: 29 },
    { id: "nature", label: "Nature", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", count: 41 }
  ];
  portfolioItems = [
    { id: 1, title: "Golden Hour Vows", category: "wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80", width: 2, height: 3, featured: true },
    { id: 2, title: "Urban Elegance", category: "portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80", width: 1, height: 1 },
    { id: 3, title: "Haute Couture", category: "fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80", width: 2, height: 3 },
    { id: 4, title: "Santorini Dreams", category: "travel", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80", width: 3, height: 2, featured: true },
    { id: 5, title: "Corporate Vision", category: "commercial", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80", width: 1, height: 1 },
    { id: 6, title: "Forest Whispers", category: "nature", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80", width: 2, height: 3 },
    { id: 7, title: "Bridal Bliss", category: "wedding", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80", width: 1, height: 1 },
    { id: 8, title: "Moody Portraits", category: "portrait", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80", width: 2, height: 3 },
    { id: 9, title: "Runway Ready", category: "fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80", width: 3, height: 2 },
    { id: 10, title: "Kyoto Serenity", category: "travel", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80", width: 1, height: 1 },
    { id: 11, title: "Product Mastery", category: "commercial", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80", width: 2, height: 3 },
    { id: 12, title: "Mountain Majesty", category: "nature", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80", width: 3, height: 2, featured: true },
    { id: 13, title: "Intimate Ceremony", category: "wedding", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80", width: 2, height: 3 },
    { id: 14, title: "Street Style", category: "fashion", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80", width: 1, height: 1 },
    { id: 15, title: "Amalfi Coast", category: "travel", image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80", width: 2, height: 3 },
    { id: 16, title: "Studio Glow", category: "portrait", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=80", width: 3, height: 2 }
  ];
  testimonials = [
    { id: 1, name: "Sophia & James", role: "Wedding Clients", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80", quote: "Lumi\xE8re Studio captured our wedding day beyond our wildest dreams. Every frame tells a story of love, elegance, and pure emotion. We will treasure these images forever.", rating: 5 },
    { id: 2, name: "Isabella Chen", role: "Fashion Director, Vogue", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", quote: "Working with Lumi\xE8re is an experience in itself. Their eye for light, composition, and storytelling is unmatched. Every campaign we shoot together exceeds expectations.", rating: 5 },
    { id: 3, name: "Marcus Williams", role: "CEO, Prestige Brands", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", quote: "Our brand identity transformed completely after working with Lumi\xE8re. The commercial photography they delivered elevated our entire visual presence globally.", rating: 5 },
    { id: 4, name: "Elena Rossi", role: "Portrait Client", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", quote: "I have never felt so comfortable in front of a camera. The team at Lumi\xE8re has a gift for bringing out your authentic self. My portraits are absolutely stunning.", rating: 5 }
  ];
  blogPosts = [
    { id: 1, title: "The Art of Golden Hour Photography", excerpt: "Discover how to harness the magic of golden hour light to create breathtaking, cinematic images that tell timeless stories.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", date: "2025-01-15", category: "Technique", readTime: 6 },
    { id: 2, title: "Composing the Perfect Wedding Shot", excerpt: "From candid moments to grand compositions, learn the secrets behind capturing wedding photography that moves people to tears.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", date: "2025-01-08", category: "Wedding", readTime: 8 },
    { id: 3, title: "Mastering Natural Light Portraits", excerpt: "Natural light is the most powerful tool in a photographer's arsenal. Here's how to read, shape, and use it to create stunning portraits.", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", date: "2024-12-22", category: "Portrait", readTime: 5 }
  ];
  services = [
    { id: 1, title: "Wedding Photography", description: "Timeless documentation of your most precious day, from intimate ceremonies to grand celebrations.", icon: "\u{1F48D}", features: ["Full day coverage", "Second photographer", "500+ edited images", "Online gallery", "Print release"] },
    { id: 2, title: "Portrait Sessions", description: "Revealing the authentic beauty and personality of every individual through masterful portraiture.", icon: "\u{1F3AD}", features: ["2-hour session", "Multiple looks", "50+ edited images", "Styling guidance", "Digital delivery"] },
    { id: 3, title: "Fashion & Editorial", description: "High-impact fashion photography for brands, magazines, and creative campaigns that demand excellence.", icon: "\u2728", features: ["Concept development", "Art direction", "Studio or location", "Retouching", "Commercial license"] },
    { id: 4, title: "Commercial Photography", description: "Elevating brands through powerful visual storytelling that drives engagement and conversion.", icon: "\u{1F3E2}", features: ["Brand consultation", "Product photography", "Lifestyle imagery", "Multiple formats", "Usage rights"] },
    { id: 5, title: "Travel Photography", description: "Capturing the soul of destinations and the stories of people across the globe.", icon: "\u{1F30D}", features: ["Destination shoots", "Travel coverage", "Cultural documentation", "Landscape mastery", "Story series"] },
    { id: 6, title: "Drone Aerial", description: "Breathtaking aerial perspectives that add cinematic scale and drama to any project.", icon: "\u{1F681}", features: ["FAA certified", "4K video", "RAW images", "Multiple angles", "Same-day preview"] }
  ];
  pricingPlans = [
    { id: 1, name: "Essentials", price: 1200, currency: "$", period: "session", description: "Perfect for intimate sessions and personal projects.", features: ["4-hour coverage", "1 photographer", "200+ edited images", "Online gallery", "Print release", "Email support"], highlighted: false, cta: "Book Now" },
    { id: 2, name: "Signature", price: 3500, currency: "$", period: "session", description: "Our most popular package for weddings and major events.", features: ["Full day coverage", "2 photographers", "600+ edited images", "Premium album", "Engagement session", "Priority support", "Video highlights"], highlighted: true, cta: "Most Popular" },
    { id: 3, name: "Prestige", price: 7500, currency: "$", period: "project", description: "The ultimate experience for discerning clients who demand perfection.", features: ["Multi-day coverage", "Full creative team", "Unlimited images", "Luxury album", "Fine art prints", "Dedicated director", "Global travel", "Rush delivery"], highlighted: false, cta: "Inquire" }
  ];
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-X42UMOT4.js.map
