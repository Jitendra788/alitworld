export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Prebuilt", href: "/prebuilt" },
  { label: "Customized", href: "/customized" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const features = [
  {
    title: "Custom Development",
    description:
      "Food delivery, e-commerce, and business apps built from scratch — tailored UX, payments, and integrations for your brand.",
    image: "/features/features1.png",
    href: "/customized",
  },
  {
    title: "SaaS Prebuilt @ 50,000 /-",
    description:
      "Multivendor grocery, storefront, and dashboard solutions with app + web + admin panel — launch in weeks, not months.",
    image: "/features/features2.png",
    href: "/prebuilt",
  },
] as const;

function portfolioImage(slug: string) {
  // Themed covers matched to each project (not random stock)
  const images: Record<string, string> = {
    "lal-sweets":
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&h=560&q=80",
    kirtilals:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&h=560&q=80",
    tradescribe:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&h=560&q=80",
    murzban:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&h=560&q=80",
    greenfeels:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&h=560&q=80",
    momentz:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&h=560&q=80",
  };
  return images[slug] ?? `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=560&q=80`;
}

export const portfolio = [
  {
    title: "Lal Sweets Ecom Website",
    description:
      "Modern sweets store with responsive design for smooth shopping.",
    url: "https://www.lalsweets.com/",
    image: portfolioImage("lal-sweets"),
  },
  {
    title: "Kirtilals : Luxury Website",
    description:
      "Premium diamond-jewellery store with elegant UX for luxury buyers.",
    url: "https://www.kirtilals.com/",
    image: portfolioImage("kirtilals"),
  },
  {
    title: "Tradescribe: Trading Platform",
    description:
      "Built a sleek journaling platform for tracking trades with AI-backed analytics.",
    url: "https://tradescribe.in/",
    image: portfolioImage("tradescribe"),
  },
  {
    title: "Murzban: Clothing Luxury",
    description:
      "Modern online store for curated men's & women's designer fashion.",
    url: "https://murzban.in/",
    image: portfolioImage("murzban"),
  },
  {
    title: "Greenfeels: Sustainable Ecom",
    description:
      "Curated eco-friendly essentials in a clean responsive design for conscious shoppers.",
    url: "https://greenfeels.in/",
    image: portfolioImage("greenfeels"),
  },
  {
    title: "Momentz",
    description:
      "Curated luxury gifts and premium home décor in a sleek online storefront.",
    url: "https://momentz.in/",
    image: portfolioImage("momentz"),
  },
] as const;

function teamPhoto(name: string) {
  return `https://i.pravatar.cc/400?u=${encodeURIComponent(name)}`;
}

export const team = [
  {
    name: "Yogesh Garg",
    role: "Founder",
    photo: "/team/yogesh-garg.jpg",
    linkedin: "https://www.linkedin.com/in/yogeshgargskypc/",
  },
  { name: "Aastha Negi", role: "Co-founder", photo: "/team/aastha.png" },
  {
    name: "Jitendra Jangir",
    role: "Full Stack Developer",
    photo: "/team/jitendra-jangir.jpg",
    linkedin: "https://www.linkedin.com/in/jitendrajangir/",
  },
  {
    name: "Utkarsh Rajoriya",
    role: "Full Stack Developer",
    photo: "/team/utkarsh.png",
  },
  {
    name: "Yatendra Sharma",
    role: "Flutter Developer",
    photo: "/team/yatendra.jpeg",
  },
  {
    name: "Mansingh",
    role: "Full Stack Developer",
    photo: "/team/mansingh.jpeg",
  },
  {
    name: "Deepak Kumar",
    role: "Flutter Developer",
    photo: "/team/deepak.jpeg",
  },
  {
    name: "Manish Das Sharma",
    role: "Chief Technical Officer",
    photo: "/team/manish.png",
  },
  { name: "Harsh Gupta", role: "Tech Lead", photo: "/team/harsh-gupta.png" },
  {
    name: "Twinkle Agarwal",
    role: "Sales Head",
    photo: "/team/twinkle.png",
  },
  {
    name: "Unnati Kumari",
    role: "Sales Executive",
    photo: "/team/unnati.jpeg",
  },
  {
    name: "Piyush Gayakwad",
    role: "Frontend Developer",
    photo: "/team/piyush.png",
  },
  {
    name: "Ghodasra Raj",
    role: "Figma Designer",
    photo: "/team/ghodasra.png",
  },
  {
    name: "Harsh Sharma",
    role: "Figma Designer",
    photo: "/team/harsh-sharma.png",
  },
] as const;

export const faqs = [
  {
    question: "What services does Alitworld Technologies provide?",
    answer:
      "Alitworld is a full-service IT company. We design and develop websites, build Android & iOS apps, deliver prebuilt and custom software, and help brands grow with digital marketing and SEO ranking. From idea to go-live — and after — we stay with you as a tech partner.",
  },
  {
    question: "Do you design and develop websites?",
    answer:
      "Yes. We design business websites, company sites, portfolios, and ecommerce storefronts that look premium and convert visitors into leads. Every site is mobile-first, fast, SEO-friendly, and includes clear contact options (form, call, WhatsApp).",
  },
  {
    question: "Do you also build mobile apps?",
    answer:
      "Yes. We build Android and iOS apps — often with Flutter so both platforms ship from one codebase. Typical projects include food delivery, ecommerce, booking, vendor apps, and admin panels. You can start with a prebuilt product or a fully custom app.",
  },
  {
    question: "What is the difference between prebuilt and custom development?",
    answer:
      "Prebuilt solutions use proven templates (app + web + admin) for faster, fixed-budget launches — ideal when your business model is standard. Custom development is built from scratch for unique workflows, branding, and integrations. We recommend the right path after a short discovery call.",
  },
  {
    question: "How long does a website or app project take?",
    answer:
      "Most prebuilt websites/apps ship in about 2–4 weeks depending on customization. Custom projects take longer based on scope. Digital marketing and SEO run as ongoing plans — we share clear timelines and milestones before work starts.",
  },
  {
    question: "Do you provide SEO and digital marketing?",
    answer:
      "Yes. Alongside websites and apps, we help with SEO ranking (so customers find you on Google), local SEO, content, and digital marketing campaigns. Product + marketing work best together — a fast site with weak visibility still loses leads.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term channel. Many businesses see meaningful organic improvement in about 3–6 months, depending on competition, content quality, and technical health of the site. Paid ads can bring leads faster while SEO builds lasting traffic.",
  },
  {
    question: "Do we get the complete source code after delivery?",
    answer:
      "Yes. After project completion and final payment, you receive full source code, documentation, and deployment credentials. The product stays yours — not locked to our team.",
  },
  {
    question: "Do you offer support and maintenance after launch?",
    answer:
      "Yes. We offer optional maintenance plans for updates, bug fixes, hosting support, small feature changes, and help keeping your website or app secure and up to date.",
  },
  {
    question: "How do we start a project with Alitworld?",
    answer:
      "Share your idea on the Contact page or call/WhatsApp us. We schedule a discovery call, understand website/app/marketing goals, recommend prebuilt or custom, and share a clear quote and timeline — no pressure, just a practical plan.",
  },
] as const;

export const testimonials = [
  {
    name: "Rahul Mehta",
    company: "Lal Sweets",
    quote:
      "Alitworld delivered our e-commerce platform on time with a polished UX. Sales conversion improved within the first month.",
  },
  {
    name: "Priya Shah",
    company: "Kirtilals",
    quote:
      "The team understood luxury retail requirements perfectly. Our new site reflects the brand elegance we wanted.",
  },
  {
    name: "Arjun Patel",
    company: "Tradescribe",
    quote:
      "From journaling flows to analytics dashboards — everything was built with attention to detail. Highly recommended.",
  },
] as const;

export const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "Prebuilt", href: "/prebuilt" },
    { label: "Customized", href: "/customized" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
  ],
} as const;
