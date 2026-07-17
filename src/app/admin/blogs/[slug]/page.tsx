"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { BlogPost } from "@/data/blogs";
import { BlogEditor, postToForm, emptyForm } from "../blog-form";

export default function EditBlogPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/blogs", { credentials: "include" });
        if (!res.ok) throw new Error("Failed");
        const blogs: BlogPost[] = await res.json();
        const found = blogs.find((b) => b.slug === slug) ?? null;
        if (!found) {
          setError("Blog not found");
        } else {
          setPost(found);
        }
      } catch {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return <p className="p-8 text-sm text-zinc-500">Loading…</p>;
  }

  if (error || !post) {
    return (
      <div className="p-8">
        <p className="text-sm text-red-600">{error || "Blog not found"}</p>
        <Link href="/admin/blogs" className="mt-4 inline-block text-sm text-[#0f3d2e]">
          ← Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <BlogEditor
      mode="edit"
      initial={postToForm(post) ?? emptyForm}
      originalSlug={post.slug}
      title="Edit blog"
    />
  );
}
