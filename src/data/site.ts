export type FaqItem = {
  question: string;
  answer: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
};

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
    role: "Managing Director",
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
