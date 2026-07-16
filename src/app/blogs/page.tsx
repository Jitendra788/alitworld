import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageCta } from "@/components/PageCta";
import { BlogCover } from "@/components/BlogCover";
import { blogPosts, blogsPageContent } from "@/data/blogs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Website, App, Marketing & SEO Tips — Alitworld",
  description: blogsPageContent.description,
  path: "/blogs",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogsPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title={
          <>
            Websites, Apps, Marketing &amp;{" "}
            <span className="hero-gradient-text">SEO</span>
          </>
        }
        description={blogsPageContent.description}
      />

      <section className="section section-mesh -mt-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <Link href={`/blogs/${post.slug}`} className="block">
                    <BlogCover
                      src={post.image}
                      alt={post.title}
                      category={post.category}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-ink">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="hover:text-brand"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        badge="Need a website, app, or more leads?"
        title="Grow with Alitworld"
        description="We design websites, build apps, and help with marketing & SEO ranking — tell us your goal."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
