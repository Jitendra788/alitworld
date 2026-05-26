export const siteConfig = {
  name: "Alitworld Technologies",
  shortName: "Alitworld",
  email: "contact@alitworld.com",
  phone: "+91-8949884267",
  whatsappNumber: "+918949884267",
  whatsappMessage:
    "Hi Alitworld Technologies! I'd like to discuss a project with your team.",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://in.linkedin.com/company/alitworld",
  address: {
    plot: "Plot 37, Arjun Nagar, Durgapura Road",
    city: "Jaipur, Rajasthan 302018",
    country: "IN",
  },
  founder: {
    name: "Yogesh Garg",
    role: "Founder",
    title: "Founder of Alitworld Technologies",
    linkedin: "https://www.linkedin.com/in/yogeshgargskypc/",
    photo: "/team/yogesh-garg.jpg",
  },
} as const;

export function getFullAddress() {
  const { plot, city, country } = siteConfig.address;
  return `${plot}, ${city}, ${country}`;
}

export function getMapsUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  const phone = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}

export function getTelUrl() {
  return `tel:${siteConfig.phone.replace(/\s/g, "")}`;
}
