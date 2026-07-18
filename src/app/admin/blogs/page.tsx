"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { BlogPost } from "@/data/blogs";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/blogs", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load blogs");
      setBlogs(await res.json());
    } catch {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleDelete(slug: string) {
    if (!confirm(`Delete blog “${slug}”?`)) return;
    const next = blogs.filter((b) => b.slug !== slug);
    const res = await fetch("/api/admin/blogs", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (!res.ok) {
      alert("Delete failed");
      return;
    }
    setBlogs(next);
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Blogs</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Create and edit blog posts.
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="rounded-lg bg-[#0f3d2e] px-4 py-2 text-sm font-medium text-[#c8f031]"
        >
          New blog
        </Link>
      </div>

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      {loading ? (
        <p className="mt-8 text-sm text-zinc-500">Loading…</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.slug}
                  className="border-b border-zinc-100 last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-zinc-900">
                    {blog.title}
                  </td>
                  <td className="px-4 py-3 text-zinc-500">{blog.slug}</td>
                  <td className="px-4 py-3 text-zinc-600">{blog.category}</td>
                  <td className="px-4 py-3 text-zinc-600">{blog.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3">
                      <Link
                        href={`/admin/blogs/${blog.slug}`}
                        className="text-[#0f3d2e] hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(blog.slug)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-zinc-500"
                  >
                    No blogs yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
