export const prebuiltProducts = [
  {
    id: "multivendor-grocery",
    title: "Multivendor Grocery Solution",
    tagline: "App + Web + Admin Panel",
    description:
      "Start your online multivendor grocery business with vendor dashboards, delivery tracking, and payments built in.",
    image: "/features/saas-prebuilt.png",
    includes: ["Customer app", "Vendor panel", "Admin dashboard"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    tagline: "Shopify-style storefront",
    description:
      "Product catalog, cart, checkout, coupons, and order management — ready to brand and launch.",
    includes: ["Product CMS", "Payments", "Order tracking"],
  },
  {
    id: "food-delivery",
    title: "Food & Grocery Delivery",
    tagline: "Hyperlocal delivery app",
    description:
      "Restaurant and grocery ordering with live tracking, COD, UPI, and delivery partner flows.",
    includes: ["User app", "Rider app", "Merchant panel"],
  },
  {
    id: "crm-dashboard",
    title: "CRM & Admin Dashboard",
    tagline: "Business operations hub",
    description:
      "Leads, customers, analytics, and role-based access — ideal for agencies and B2B startups.",
    includes: ["Analytics", "User roles", "Reports"],
  },
] as const;

export const prebuiltBenefits = [
  {
    title: "Launch in weeks, not months",
    description: "Skip months of ground-up development with battle-tested architecture.",
  },
  {
    title: "Starting @ ₹50,000",
    description: "Transparent pricing with room to customize branding and features.",
  },
  {
    title: "Full source code",
    description: "You own the codebase after delivery — deploy on your infra.",
  },
  {
    title: "Ongoing support",
    description: "Optional maintenance for updates, hosting help, and enhancements.",
  },
] as const;

export const prebuiltPageContent = {
  tagline: "Skip the long wait and high costs. Go digital faster without compromising on quality.",
  priceLabel: "Starting @ ₹50,000 /-",
} as const;
