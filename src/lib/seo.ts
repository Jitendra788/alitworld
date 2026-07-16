import type { Metadata } from "next";
import { getFullAddress, siteConfig } from "@/lib/config";

export const siteUrl = siteConfig.url;

export const defaultKeywords = [
  "Alitworld",
  "Alitworld Technologies",
  "alitworld.com",
  "web development",
  "website development",
  "website designing",
  "digital marketing",
  "SEO",
  "SEO company",
  "SEO ranking",
  "mobile app development",
  "IT company Jaipur",
  "web development Jaipur",
  "digital marketing Jaipur",
  "SEO company Jaipur",
  "Flutter app development",
  "ecommerce website",
  "SaaS prebuilt",
  "custom software development",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = defaultKeywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.shortName)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 512,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/logo.png")],
    },
  };
}

/** JSON-LD so Google can understand Alitworld as a brand / local IT company */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        alternateName: ["Alitworld", "Alitworld Technologies Pvt Ltd"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/logo.png"),
        },
        image: absoluteUrl("/logo.png"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.plot,
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302018",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        sameAs: [siteConfig.linkedinUrl, siteConfig.founder.linkedin],
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.title,
          url: siteConfig.founder.linkedin,
        },
        description:
          "Alitworld Technologies (alitworld.com) offers web development, website designing, mobile app development, digital marketing, and SEO ranking services in Jaipur, India.",
        knowsAbout: [
          "Website Designing",
          "Mobile App Development",
          "Custom Software",
          "SaaS Prebuilt",
          "Digital Marketing",
          "SEO",
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        alternateName: "Alitworld",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function getAddressLine() {
  return getFullAddress();
}
