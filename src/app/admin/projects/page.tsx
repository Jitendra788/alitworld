"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { PortfolioItem } from "@/data/site";
import { ImageUploadField } from "@/components/admin/ImageUploadField";

function emptyProject(): PortfolioItem {
  return {
    id: `project-${Date.now()}`,
    title: "",
    description: "",
    url: "https://",
    image: "/hero-a.jpg",
  };
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/projects", { credentials: "include" });
      if (!res.ok) throw new Error("Failed");
      setProjects(await res.json());
    } catch {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function persist(next: PortfolioItem[], successMsg = "Saved") {
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/admin/projects", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (!res.ok) throw new Error("Failed");
      setProjects(next);
      setMessage(successMsg);
    } catch {
      setError("Failed to save projects");
    } finally {
      setSaving(false);
    }
  }

  function updateProject(index: number, patch: Partial<PortfolioItem>) {
    setProjects((prev) =>
      prev.map((project, i) => (i === index ? { ...project, ...patch } : project)),
    );
  }

  function addProject() {
    setProjects((prev) => [...prev, emptyProject()]);
  }

  async function removeProject(index: number) {
    if (!confirm("Delete this project?")) return;
    const next = projects.filter((_, i) => i !== index);
    await persist(next, "Project deleted");
  }

  function moveProject(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= projects.length) return;
    const next = [...projects];
    const [item] = next.splice(index, 1);
    next.splice(target, 0, item);
    setProjects(next);
  }

  async function onSaveAll(e: FormEvent) {
    e.preventDefault();
    const cleaned = projects
      .map((p) => ({
        id:
          p.id.trim() ||
          p.title
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") ||
          `project-${Date.now()}`,
        title: p.title.trim(),
        description: p.description.trim(),
        url: p.url.trim(),
        image: p.image.trim() || "/hero-a.jpg",
      }))
      .filter((p) => p.title && p.description && p.url);
    await persist(cleaned, "Projects saved — refresh home to see Our Projects");
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Our Projects</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Manage portfolio cards shown on the homepage.
          </p>
        </div>
        <button
          type="button"
          onClick={addProject}
          className="rounded-lg bg-[#0f3d2e] px-4 py-2 text-sm font-medium text-[#c8f031]"
        >
          Add project
        </button>
      </div>

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      {message ? <p className="mt-4 text-sm text-emerald-700">{message}</p> : null}

      {loading ? (
        <p className="mt-8 text-sm text-zinc-500">Loading…</p>
      ) : (
        <form onSubmit={onSaveAll} className="mt-8 space-y-4">
          {projects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-sm font-semibold text-zinc-700">
                  Project {index + 1}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => moveProject(index, -1)}
                    className="rounded-md border border-zinc-300 px-2 py-1 text-xs text-zinc-600"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveProject(index, 1)}
                    className="rounded-md border border-zinc-300 px-2 py-1 text-xs text-zinc-600"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-4">
                <ImageUploadField
                  label="Project image"
                  value={project.image}
                  onChange={(image) => updateProject(index, { image })}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm sm:col-span-2">
                    <span className="font-medium text-zinc-700">Title</span>
                    <input
                      value={project.title}
                      onChange={(e) =>
                        updateProject(index, { title: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                      required
                    />
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    <span className="font-medium text-zinc-700">Description</span>
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        updateProject(index, { description: e.target.value })
                      }
                      rows={2}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                      required
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-zinc-700">Website URL</span>
                    <input
                      value={project.url}
                      onChange={(e) =>
                        updateProject(index, { url: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                      required
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-zinc-700">ID (slug)</span>
                    <input
                      value={project.id}
                      onChange={(e) =>
                        updateProject(index, { id: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 ? (
            <p className="text-sm text-zinc-500">No projects yet. Add one.</p>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-[#0f3d2e] px-5 py-2.5 text-sm font-medium text-[#c8f031] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save all projects"}
          </button>
        </form>
      )}
    </div>
  );
}
