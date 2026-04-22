import type { Timestamp } from "firebase/firestore";

export type SiteSettings = {
  siteName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  youtube: string;
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  location: string;
};

export type FirestoreBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  status: "published" | "draft";
  createdAt?: Timestamp;
};

export type FirestoreGalleryItem = {
  title: string;
  category: string;
  imageUrl: string;
  type: "image" | "video";
  videoUrl?: string | null;
  createdAt?: Timestamp;
};

export type FirestoreProduct = {
  name: string;
  category: string;
  price: string;
  stock: "in-stock" | "low" | "out";
  description: string;
  href?: string;
  /** Compressed JPEG data URL or legacy HTTPS URL */
  imageUrl?: string;
  createdAt?: Timestamp;
};

export type FirestoreInquiry = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  read?: boolean;
  createdAt: Timestamp;
};
