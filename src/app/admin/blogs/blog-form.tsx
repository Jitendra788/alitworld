"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/data/blogs";
import { ImageUploadField } from "@/components/admin/ImageUploadField";

export type BlogFormState = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
};

export const emptyForm: BlogFormState = {
  slug: "",
  title: "",
  excerpt: "",
  date: new Date().toISOString().slice(0, 10),
  category: "",
  readTime: "5 min",
  image: "/hero-a.jpg",
  content: "",
};

export function postToForm(post: BlogPost): BlogFormState {
  return {
    ...post,
    content: post.content.join("\n\n"),
  };
}

export function formToPost(form: BlogFormState): BlogPost {
  return {
    slug: form.slug.trim(),
    title: form.title.trim(),
    excerpt: form.excerpt.trim(),
    date: form.date.trim(),
    category: form.category.trim(),
    readTime: form.readTime.trim(),
    image: form.image.trim(),
    content: form.content
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
  };
}

export function BlogFormFields({
  form,
  setForm,
  slugLocked,
}: {
  form: BlogFormState;
  setForm: (next: BlogFormState) => void;
  slugLocked?: boolean;
}) {
  function field(
    key: keyof BlogFormState,
    label: string,
    opts?: { textarea?: boolean; rows?: number },
  ) {
    const id = `blog-${key}`;
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm text-zinc-600">
          {label}
        </label>
        {opts?.textarea ? (
          <textarea
            id={id}
            rows={opts.rows ?? 4}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0f3d2e]"
            required={key === "content"}
          />
        ) : (
          <input
            id={id}
            type={key === "date" ? "date" : "text"}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            disabled={key === "slug" && slugLocked}
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0f3d2e] disabled:bg-zinc-100"
            required={key !== "excerpt"}
          />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("slug", "Slug")}
        {field("title", "Title")}
        {field("date", "Date")}
        {field("category", "Category")}
        {field("readTime", "Read time")}
      </div>
      <ImageUploadField
        label="Cover image"
        value={form.image}
        onChange={(image) => setForm({ ...form, image })}
      />
      {field("excerpt", "Excerpt", { textarea: true, rows: 3 })}
      {field("content", "Content (paragraphs separated by blank lines)", {
        textarea: true,
        rows: 14,
      })}
    </div>
  );
}

export function useBlogSaver(mode: "new" | "edit", originalSlug?: string) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function save(form: BlogFormState) {
    setSaving(true);
    setError("");
    try {
      const post = formToPost(form);
      if (!post.slug || !post.title) {
        setError("Slug and title are required");
        return;
      }

      const listRes = await fetch("/api/admin/blogs", {
        credentials: "include",
      });
      if (!listRes.ok) throw new Error("Failed to load blogs");
      const blogs: BlogPost[] = await listRes.json();

      let next: BlogPost[];
      if (mode === "new") {
        if (blogs.some((b) => b.slug === post.slug)) {
          setError("A blog with this slug already exists");
          return;
        }
        next = [post, ...blogs];
      } else {
        const slug = originalSlug ?? post.slug;
        next = blogs.map((b) => (b.slug === slug ? post : b));
      }

      const res = await fetch("/api/admin/blogs", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (!res.ok) throw new Error("Save failed");
      router.push("/admin/blogs");
      router.refresh();
    } catch {
      setError("Failed to save blog");
    } finally {
      setSaving(false);
    }
  }

  return { save, saving, error };
}

export function BlogEditor({
  mode,
  initial,
  originalSlug,
  title,
}: {
  mode: "new" | "edit";
  initial: BlogFormState;
  originalSlug?: string;
  title: string;
}) {
  const [form, setForm] = useState(initial);
  const { save, saving, error } = useBlogSaver(mode, originalSlug);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await save(form);
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link href="/admin/blogs" className="text-sm text-zinc-500 hover:text-zinc-800">
          ← Back to blogs
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-900">{title}</h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="max-w-3xl space-y-6 rounded-xl border border-zinc-200 bg-white p-6"
      >
        <BlogFormFields
          form={form}
          setForm={setForm}
          slugLocked={mode === "edit"}
        />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-[#0f3d2e] px-4 py-2.5 text-sm font-medium text-[#c8f031] disabled:opacity-60"
        >
          {saving ? "Saving…" : mode === "new" ? "Create blog" : "Save changes"}
        </button>
      </form>
    </div>
  );
}
