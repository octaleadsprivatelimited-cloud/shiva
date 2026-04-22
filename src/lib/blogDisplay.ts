import type { BlogPost } from "@/data/blogPosts";
import type { FirestoreBlogPost } from "@/types/cms";

/** Shape used by `BlogPost.tsx` (same fields as static `BlogPost`; `id` can be slug string for keys). */
export type BlogPostDisplay = Omit<BlogPost, "id"> & { id: string | number };

export function firestoreBlogToDisplay(fs: FirestoreBlogPost & { id: string }): BlogPostDisplay {
  return {
    id: fs.slug,
    slug: fs.slug,
    title: fs.title,
    excerpt: fs.excerpt,
    content: fs.content,
    category: fs.category,
    date: fs.date,
    author: fs.author,
    image: fs.imageUrl,
    readTime: fs.readTime,
  };
}
