import { siteConfig } from "@/lib/config";

export const aboutStats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "130K+", label: "Community Reach" },
  { value: "50K", label: "Prebuilt Starting" },
] as const;

export const aboutPageContent = {
  tagline: "We deliver more than your expectation",
  companyName: siteConfig.name,
  intro: `At ${siteConfig.name}, we are a dynamic and innovative software company focused on cutting-edge technology solutions. Based in Jaipur, Rajasthan, we build high-quality web and mobile applications that help modern businesses grow with confidence.`,
  highlights: [
    "Custom web & mobile development",
    "Production-ready SaaS prebuilt solutions",
    "Client-first delivery from Jaipur, India",
  ],
  vision: {
    title: "Our Vision",
    body: "To revolutionize the digital landscape through advanced web, mobile, and automation solutions — becoming a trusted partner that empowers businesses to achieve their goals efficiently and at scale.",
  },
  mission: {
    title: "Our Mission",
    body: "To create intuitive, robust software that streamlines operations, enhances productivity, and drives measurable growth — exceeding expectations with every project we deliver.",
  },
  differentiators: {
    title: "What Sets Us Apart",
    subtitle: "The principles that guide how we build and partner with clients.",
    items: [
      {
        icon: "users",
        title: "Expert Team",
        description:
          "Skilled professionals across full-stack development, mobile apps, and UI/UX — aligned with industry standards and best practices.",
      },
      {
        icon: "sparkles",
        title: "Innovation",
        description:
          "We explore emerging trends and modern stacks so every solution is scalable, secure, and ready for tomorrow.",
      },
      {
        icon: "handshake",
        title: "Client-Centric",
        description:
          "Your goals come first. We tailor timelines, scope, and communication to deliver real business value.",
      },
    ],
  },
  services: {
    title: "Our Services",
    subtitle: "End-to-end digital products — from idea to launch and beyond.",
    items: [
      {
        icon: "globe",
        title: "Web Application Development",
        description:
          "Intuitive, responsive web apps that enhance engagement and deliver exceptional digital experiences.",
      },
      {
        icon: "smartphone",
        title: "Mobile Application Development",
        description:
          "Custom Android & iOS apps that connect your brand with users on the devices they use every day.",
      },
      {
        icon: "layers",
        title: "SaaS & Prebuilt Solutions",
        description:
          "Launch faster with production-ready templates — customizable architecture at a fraction of custom build cost.",
      },
      {
        icon: "cog",
        title: "Custom Software & Automation",
        description:
          "Tailored systems and workflows that streamline operations, cut manual work, and boost productivity.",
      },
    ],
  },
  closing: {
    title: "Partner With Us",
    body: `At ${siteConfig.name}, we empower businesses with technology that lasts. Let's build your next product together.`,
  },
} as const;
