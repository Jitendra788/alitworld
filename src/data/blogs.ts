import { readFileSync } from "fs";
import path from "path";

export const blogsPageContent = {
  description:
    "Alitworld builds websites and mobile apps, and helps brands grow with digital marketing and SEO ranking — practical guides from our Jaipur team.",
} as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string[];
};

const blogsPath = path.join(process.cwd(), "src", "data", "cms", "blogs.json");

/** fs load — avoids Turbopack HMR bugs on static JSON imports. Newest first. */
export function getBlogPosts(): BlogPost[] {
  const posts = JSON.parse(readFileSync(blogsPath, "utf8")) as BlogPost[];
  return posts.sort((a, b) => {
    const byDate = Date.parse(b.date) - Date.parse(a.date);
    if (byDate !== 0) return byDate;
    return a.slug.localeCompare(b.slug);
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}
