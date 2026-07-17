"use client";

import { BlogEditor, emptyForm } from "../blog-form";

export default function NewBlogPage() {
  return <BlogEditor mode="new" initial={emptyForm} title="New blog" />;
}
