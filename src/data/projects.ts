export type ProjectCategory = "website" | "application";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  url: string;
  highlights: string[];
  ctaLabel?: string;
};

/** Reliable placeholder images (unique per project) */
function projectImage(id: string) {
  return `https://picsum.photos/seed/alitworld-${id}/1200/800`;
}

export const websiteProjects: Project[] = [
  {
    id: "lal-sweets",
    title: "Lal Sweets Ecom Website",
    category: "website",
    url: "https://www.lalsweets.com/",
    image: projectImage("lal-sweets"),
    highlights: [
      "Modern sweets store with responsive design for smooth shopping.",
      "Category-wise sweets, snacks, and festive combo listings.",
      "Quick checkout with discounts and first-order offers.",
      "SEO-friendly structure with dynamic product showcase.",
    ],
  },
  {
    id: "kirtilals",
    title: "Kirtilals : Luxury Website",
    category: "website",
    url: "https://www.kirtilals.com/",
    image: projectImage("kirtilals"),
    highlights: [
      "Premium diamond-jewellery store with elegant UX for luxury buyers.",
      "1,500+ certified designs neatly organised for quick browsing.",
      "Integrated filters (metal type, gemstone, price) to refine search fast.",
      "Mobile-first responsive checkout designed to boost conversions on smaller devices.",
    ],
  },
  {
    id: "tradescribe",
    title: "Tradescribe: Trading Platform",
    category: "website",
    url: "https://tradescribe.in/",
    image: projectImage("tradescribe"),
    highlights: [
      "Built a sleek journaling platform for tracking trades with AI-backed analytics.",
      "Enabled seamless CSV/broker upload to sync trading activity in real time.",
      "Designed interactive dashboards showing win rate, profit/loss & strategy insights.",
      "Created mobile-friendly UI optimised for Indian traders and multi-broker support.",
    ],
  },
  {
    id: "murzban",
    title: "Murzban: Clothing Luxury",
    category: "website",
    url: "https://murzban.in/",
    image: projectImage("murzban"),
    highlights: [
      "Modern online store for curated men's & women's designer fashion.",
      "Clear category hierarchy: women's designers, men's labels, accessories.",
      "\"Just In\" and \"Bestsellers\" sections boost visibility of new arrivals.",
      "Premium lookbook-style product pages built for luxury fashion buyers.",
    ],
  },
  {
    id: "greenfeels",
    title: "Greenfeels: Sustainable Ecom",
    category: "website",
    url: "https://greenfeels.in/",
    image: projectImage("greenfeels"),
    highlights: [
      "Curated eco-friendly essentials in a clean responsive design for conscious shoppers.",
      "Highlighted plastic-free, vegan and zero-waste collections in clear category layout.",
      "Built to optimise mobile checkout and promote sustainable living with ease.",
      "Designed with SEO-friendly structure and fast load to target green-focused audiences.",
    ],
  },
  {
    id: "momentz",
    title: "Momentz",
    category: "website",
    url: "https://momentz.in/",
    image: projectImage("momentz"),
    highlights: [
      "Curated luxury gifts and premium home décor in a sleek online storefront.",
      "Silver-plated gifts, god idols and bar accessories neatly categorised for easy browsing.",
      "Eye-catching visuals and intuitive filters enhance the shopping experience.",
      "Mobile-optimised checkout with fast delivery builds trust and boosts conversions.",
    ],
  },
  {
    id: "street9",
    title: "Street9",
    category: "website",
    url: "https://street9.com/",
    image: projectImage("street9"),
    highlights: [
      "Trend-driven women's apparel & accessories platform with intuitive navigation.",
      "70% off sale banners and quick-buy options placed front-and-centre.",
      "Clean category filters for tops, dresses, ethnic wear, bags & more.",
      "Fast-loading catalog pages optimised for mobile shoppers.",
    ],
  },
  {
    id: "plutoze",
    title: "Plutoze",
    category: "website",
    url: "https://plutoze.com/",
    image: projectImage("plutoze"),
    highlights: [
      "Non-custodial multi-chain wallet giving users full control of their crypto.",
      "Crypto-to-fiat debit card accepted globally with up to 3.5% crypto back.",
      "Instant swap & send features across major chains with simplified UX.",
      "Developed with mobile-first design and optimized for global crypto usage.",
    ],
  },
  {
    id: "farm-fresh",
    title: "Farm Fresh Co.",
    category: "website",
    url: "https://farmfresh.co/",
    image: projectImage("farm-fresh"),
    highlights: [
      "Millet-based brand with fresh, sustainable foods for health-conscious buyers.",
      "Farm-to-table storytelling with clean product pages and subscription options.",
      "Category-wise grains, snacks and wellness packs for easy discovery.",
      "SEO-optimised content hub to rank for organic and millet-based searches.",
    ],
  },
];

export const applicationProjects: Project[] = [
  {
    id: "uoons",
    title: "Uoons Electronics Shopping App",
    category: "application",
    url: "https://play.google.com/store",
    image: "/projects/uoons.png",
    ctaLabel: "View App",
    highlights: [
      "Offers wholesaler-priced electronics starting from ₹49 for brand-heavy shopping.",
      "Supports Cash on Delivery, No-Cost EMI and multiple UPI/wallet payment options.",
      "Fast shipping on orders above ₹499 and a 7-day return/refund policy.",
      "Multi-store range: mobiles, gaming consoles, smart gadgets and more under one roof.",
    ],
  },
  {
    id: "women-plus",
    title: "Women Plus by Monika",
    category: "application",
    url: "https://play.google.com/store",
    image: "/projects/women-plus.png",
    ctaLabel: "View App",
    highlights: [
      "Size-inclusive fashion app with sizes from S to 10XL for every body type.",
      "360° product views + fabric and style info for confident online browsing.",
      "Filters by collection, colour, fabric, size & discount for streamlined shopping.",
      "Ships within 24 hrs, offers worldwide delivery, free shipping in India.",
    ],
  },
  {
    id: "twinleaves",
    title: "Twinleaves: Grocery App",
    category: "application",
    url: "https://play.google.com/store",
    image: "/projects/twinleaves.png",
    ctaLabel: "View App",
    highlights: [
      "Everyday grocery and essentials delivered fast in your city.",
      "Clean interface with categories for staples, produce, snacks & more.",
      "Discount offers and in-app wallet credits for repeat shoppers.",
      "Quick reorder, cart sync and scheduled delivery slots for busy households.",
    ],
  },
  {
    id: "reeta-fashion",
    title: "Reeta Fashion: Online Shopping",
    category: "application",
    url: "https://play.google.com/store",
    image: "/projects/reeta-fashion.png",
    ctaLabel: "View App",
    highlights: [
      "Browse & buy ethnic wear, kurtis & men's fashion in one sleek app.",
      "Free shipping on first order + exclusive app-only discounts and offers.",
      "Easy 7-day exchange and return process for hassle-free shopping.",
      "Secure payments: UPI, COD, EMI options supported for all users.",
    ],
  },
];

export const allProjects = [...websiteProjects, ...applicationProjects];
