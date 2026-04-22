import { collection, doc, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { blogPosts } from "@/data/blogPosts";
import { defaultGalleryItems } from "@/data/galleryData";
import { defaultProductHighlights } from "@/data/productHighlights";
import { defaultSiteSettings } from "@/lib/defaultSiteSettings";
import { db } from "@/lib/firebase";

const SETTINGS_COL = "settings";
const SITE_DOC_ID = "site";

export async function seedSiteSettingsToFirestore(): Promise<void> {
  await setDoc(doc(db, SETTINGS_COL, SITE_DOC_ID), defaultSiteSettings, { merge: true });
}

export async function seedBlogPostsToFirestore(): Promise<void> {
  const batch = writeBatch(db);
  for (const p of blogPosts) {
    const ref = doc(db, "blogPosts", p.slug);
    batch.set(ref, {
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      category: p.category,
      date: p.date,
      author: p.author,
      readTime: p.readTime,
      imageUrl: typeof p.image === "string" ? p.image : String(p.image),
      status: "published" as const,
      createdAt: serverTimestamp(),
    });
  }
  await batch.commit();
}

export async function seedGalleryToFirestore(): Promise<void> {
  const batch = writeBatch(db);
  for (const item of defaultGalleryItems) {
    const ref = doc(db, "galleryItems", String(item.id));
    batch.set(ref, {
      title: item.title,
      category: item.category,
      imageUrl: item.image,
      type: "image" as const,
      createdAt: serverTimestamp(),
    });
  }
  await batch.commit();
}

export async function seedProductsToFirestore(): Promise<void> {
  const col = collection(db, "products");
  const batch = writeBatch(db);
  defaultProductHighlights.forEach((p, index) => {
    const ref = doc(col, `highlight-${index + 1}`);
    batch.set(ref, {
      name: p.title,
      category: "Highlight",
      price: "",
      stock: "in-stock" as const,
      description: p.desc,
      href: p.href,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}
