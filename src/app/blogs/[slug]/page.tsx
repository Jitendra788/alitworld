import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageCta } from "@/components/PageCta";
import { blogPosts, getBlogPost } from "@/data/blogs";
import { siteConfig } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return createPageMetadata({
      title: "Blog | Alitworld Technologies",
      description: "Insights from Alitworld on websites, apps, marketing, and SEO.",
      path: "/blogs",
    });
  }
  return createPageMetadata({
    title: `${post.title} | Alitworld Blog`,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="page-hero pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All posts
          </Link>
          <p className="section-label border-white/20 bg-white/10 text-cyan">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            {post.excerpt}
          </p>
          <p className="mt-5 text-sm text-white/55">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            {post.readTime} read
          </p>
        </div>
      </article>

      <section className="section section-mesh -mt-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-card-border bg-brand/10 shadow-lg sm:mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/75 via-brand/20 to-transparent" />

            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-black/10">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-contain"
                unoptimized
              />
              <span>
                <span className="block text-[11px] font-bold leading-none tracking-[0.14em] text-brand">
                  ALITWORLD
                </span>
                <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Technologies
                </span>
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 bg-brand/90 px-4 py-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] rounded-full bg-white object-contain p-0.5"
                unoptimized
                aria-hidden
              />
              <span className="text-sm font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PageCta
        badge="Next step"
        title="Need a website, app, SEO, or marketing?"
        description="Share your goal — Alitworld will recommend design, build, and growth steps that fit your budget."
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
