export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Prebuilt", href: "/prebuilt" },
  { label: "Customized", href: "/customized" },
  { label: "About Us", href: "/about" },
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
  return `https://picsum.photos/seed/alitworld-${slug}/800/500`;
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
    question:
      "How long does it take to deliver a pre-built application or website?",
    answer:
      "Most pre-built solutions ship within 2–4 weeks depending on customization scope. We share a clear timeline during the discovery call.",
  },
  {
    question: "Do you provide the complete source code after development?",
    answer:
      "Yes. Upon project completion and final payment, you receive full source code, documentation, and deployment credentials.",
  },
  {
    question:
      "What's the difference between a pre-built and a custom development project?",
    answer:
      "Pre-built projects use proven templates for faster, budget-friendly launches. Custom development is built from scratch for unique workflows and branding.",
  },
  {
    question: "Do you provide maintenance and support after delivery?",
    answer:
      "We offer optional maintenance plans covering updates, bug fixes, hosting support, and feature enhancements.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "Next.js, React, Node.js, Flutter, PostgreSQL, MongoDB, AWS, and modern design tools like Figma — chosen per project needs.",
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
