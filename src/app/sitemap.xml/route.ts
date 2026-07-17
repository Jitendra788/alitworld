import { blogPosts } from "@/data/blogs";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Explicit XML sitemap for Google Search Console (text/xml). */
export async function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    { loc: `${siteUrl}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: `${siteUrl}/services`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${siteUrl}/prebuilt`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${siteUrl}/customized`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${siteUrl}/about`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${siteUrl}/blogs`, lastmod: today, changefreq: "weekly", priority: "0.85" },
    { loc: `${siteUrl}/contact`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    ...blogPosts.map((post) => ({
      loc: `${siteUrl}/blogs/${post.slug}`,
      lastmod: post.date,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
