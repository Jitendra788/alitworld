export const prebuiltShowcases = [
  {
    id: "multivendor-grocery",
    title: "Multivendor Grocery Solution",
    image: "/prebuilt/card-multivendor.png",
    reverse: false,
    points: [
      "Launch a marketplace where multiple vendors sell groceries, manage inventory, and fulfill orders from one platform.",
      "Customers browse, cart, pay online, and track deliveries — with dedicated apps for sellers and delivery staff.",
      "Scale faster with admin dashboards, vendor panels, payouts, and analytics built for multivendor operations.",
    ],
  href: "https://egrocer.wrteam.me/login",
    external: true,
  },
  {
    id: "single-vendor-grocery",
    title: "Single Vendor Grocery Solution",
    image: "/prebuilt/card-single-vendor.png",
    reverse: true,
    points: [
      "Run your own online grocery store with a branded customer app, website, and admin panel — no marketplace complexity.",
      "Manage products, pricing, offers, and orders from one dashboard with real-time stock and delivery updates.",
      "Grow repeat business with secure payments, digital receipts, and insights on sales and customer behaviour.",
    ],
    href: "https://grofresh-admin.6amtech.com/admin/auth/login",
    external: true,
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering System",
    image: "/prebuilt/card-restaurant.png",
    reverse: false,
    points: [
      "Digitize dine-in and takeaway with App + Website — customers browse your menu, order, and pay online seamlessly.",
      "Update menu, pricing, and availability while managing orders with live status and instant kitchen notifications.",
      "Grow with integrated payments, digital receipts, and order analytics to track performance and repeat customers.",
    ],
    href: "https://efood-admin.6amtech.com/admin",
    external: true,
  },
  {
    id: "food-delivery",
    title: "Food Delivery System",
    image: "/prebuilt/card-food-delivery.png",
    reverse: true,
    points: [
      "Build a Zomato-style platform connecting customers, restaurants, and delivery partners in one ecosystem.",
      "Restaurants manage menus and orders; riders get optimized routes; customers track deliveries in real time.",
      "Operate at scale with multivendor admin, commission settings, promotions, and business-wide reporting.",
    ],
    href: "https://stackfood-admin.6amtech.com/login/admin",
    external: true,
  },
] as const;

export const prebuiltProducts = [
  {
    id: "multivendor-grocery",
    title: "Multivendor Grocery Solution",
    tagline: "App + Web + Admin Panel",
    description:
      "Start your online multivendor grocery business with vendor dashboards, delivery tracking, and payments built in.",
    image: "/prebuilt/card-multivendor.png",
    includes: ["Customer app", "Vendor panel", "Admin dashboard"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    tagline: "Shopify-style storefront",
    description:
      "Product catalog, cart, checkout, coupons, and order management — ready to brand and launch.",
    image: "/hc-1.jpg",
    includes: ["Product CMS", "Payments", "Order tracking"],
  },
  {
    id: "food-delivery",
    title: "Food & Grocery Delivery",
    tagline: "Hyperlocal delivery app",
    description:
      "Restaurant and grocery ordering with live tracking, COD, UPI, and delivery partner flows.",
    image: "/prebuilt/card-food-delivery.png",
    includes: ["User app", "Rider app", "Merchant panel"],
  },
  {
    id: "crm-dashboard",
    title: "CRM & Admin Dashboard",
    tagline: "Business operations hub",
    description:
      "Leads, customers, analytics, and role-based access — ideal for agencies and B2B startups.",
    image: "/hc-2.jpg",
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
