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

export type FirestoreCareer = {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  createdAt?: Timestamp;
};

export type FirestoreTeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    youtube?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt?: Timestamp;
};

export type FirestoreVideo = {
  id: string;
  title: string;
  category: string;
  views?: string;
  duration?: string;
  createdAt?: Timestamp;
};

export type FirestoreCaseStudy = {
  title: string;
  category: string;
  location: string;
  farmer: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl?: string;
  createdAt?: Timestamp;
};

export type FirestoreKnowledgeBaseArticle = {
  title: string;
  category: string;
  readTime: string;
  createdAt?: Timestamp;
}

export type FirestoreStat = {
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  iconName: string;
  order: number;
  createdAt?: Timestamp;
};

export type StatRow = { id: string } & FirestoreStat;

