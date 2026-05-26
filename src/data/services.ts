export type ServiceIcon =
  | "puzzle"
  | "devices"
  | "monitor"
  | "brain"
  | "sparkles"
  | "video"
  | "layout"
  | "workflow"
  | "megaphone"
  | "chart"
  | "database"
  | "pen";

export type GridService = {
  id: string;
  number: string;
  title: string;
  icon: ServiceIcon;
  description: string;
  highlights: string[];
};

export const gridServices: GridService[] = [
  {
    id: "enterprise",
    number: "01",
    title: "Enterprise Application",
    icon: "puzzle",
    description:
      "Scalable enterprise-grade systems with secure architecture, role-based access, and integrations that align with your business processes.",
    highlights: [
      "ERP, CRM & internal portals",
      "Spring Boot / Node.js backends",
      "JWT, OAuth & secure APIs",
    ],
  },
  {
    id: "web-mobile",
    number: "02",
    title: "Web & Mobile Apps",
    icon: "devices",
    description:
      "Intuitive, responsive web and mobile applications that enhance engagement and bring your brand closer to customers on every device.",
    highlights: [
      "React, Next.js & Angular",
      "React Native & Flutter",
      "Payments, push & real-time features",
    ],
  },
  {
    id: "desktop",
    number: "03",
    title: "Desktop Apps",
    icon: "monitor",
    description:
      "Powerful desktop software for Windows, macOS, and cross-platform workflows — optimized for speed, offline use, and productivity.",
    highlights: [
      "Electron & Java desktop apps",
      "Offline-first workflows",
      "Hardware & device integrations",
    ],
  },
  {
    id: "ml",
    number: "04",
    title: "Machine Learning",
    icon: "brain",
    description:
      "Custom ML models for prediction, classification, and automation — trained on your data and deployed to production pipelines.",
    highlights: [
      "Predictive analytics",
      "Recommendation engines",
      "Model training & deployment",
    ],
  },
  {
    id: "ai",
    number: "05",
    title: "Artificial Intelligence",
    icon: "sparkles",
    description:
      "AI-powered chatbots, assistants, and intelligent workflows that reduce manual work and improve decision-making.",
    highlights: [
      "Chatbots & virtual assistants",
      "NLP & document processing",
      "AI integration in existing apps",
    ],
  },
  {
    id: "media",
    number: "06",
    title: "Image & Video Processing",
    icon: "video",
    description:
      "Computer vision, media pipelines, and automated image/video processing for apps, security, and content platforms.",
    highlights: [
      "OpenCV & FFmpeg pipelines",
      "Object detection & tagging",
      "Streaming & compression",
    ],
  },
  {
    id: "ux-ui",
    number: "07",
    title: "UX & UI Design",
    icon: "layout",
    description:
      "User-centred interfaces with clean visuals, wireframes, and prototypes that convert visitors into loyal customers.",
    highlights: [
      "Figma wireframes & prototypes",
      "Design systems & UI kits",
      "Mobile-first responsive layouts",
    ],
  },
  {
    id: "automation",
    number: "08",
    title: "Automations",
    icon: "workflow",
    description:
      "Web scraping, RPA, and workflow automation that streamlines repetitive tasks and boosts operational efficiency.",
    highlights: [
      "Web scraping & bots",
      "API & third-party integrations",
      "Scheduled jobs & dashboards",
    ],
  },
  {
    id: "marketing",
    number: "09",
    title: "Digital Marketing",
    icon: "megaphone",
    description:
      "SEO-friendly landing pages, analytics setup, and digital campaigns that grow your online presence and leads.",
    highlights: [
      "Landing pages & funnels",
      "SEO-ready development",
      "Analytics & conversion tracking",
    ],
  },
  {
    id: "analytics",
    number: "10",
    title: "Business Analytics",
    icon: "chart",
    description:
      "Dashboards and reporting tools that turn raw data into actionable insights for smarter business decisions.",
    highlights: [
      "Custom admin dashboards",
      "KPI & revenue reports",
      "Real-time data visualization",
    ],
  },
  {
    id: "data-science",
    number: "11",
    title: "Data Science",
    icon: "database",
    description:
      "End-to-end data pipelines, cleaning, analysis, and visualization to unlock value from your business data.",
    highlights: [
      "Python data pipelines",
      "ETL & warehouse integration",
      "Statistical analysis & reports",
    ],
  },
  {
    id: "graphic",
    number: "12",
    title: "Graphic Design",
    icon: "pen",
    description:
      "Brand identity, social creatives, and marketing assets that communicate your message with a professional look.",
    highlights: [
      "Logos & brand guidelines",
      "Social & ad creatives",
      "Pitch decks & print design",
    ],
  },
];

export const servicesPageContent = {
  title: "Our Services",
  description:
    "End-to-end software, design, AI, and digital solutions — select a service to explore what we deliver.",
} as const;
