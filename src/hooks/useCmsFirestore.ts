import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { defaultSiteSettings } from "@/lib/defaultSiteSettings";
import type {
  FirestoreBlogPost,
  FirestoreGalleryItem,
  FirestoreInquiry,
  FirestoreProduct,
  SiteSettings,
} from "@/types/cms";

const SETTINGS_COL = "settings";
const SITE_DOC_ID = "site";

export function useSiteSettings() {
  return useQuery({
    queryKey: ["cms", "settings", SITE_DOC_ID],
    queryFn: async (): Promise<SiteSettings> => {
      const snap = await getDoc(doc(db, SETTINGS_COL, SITE_DOC_ID));
      if (!snap.exists()) return defaultSiteSettings;
      return { ...defaultSiteSettings, ...(snap.data() as Partial<SiteSettings>) };
    },
    staleTime: 60_000,
  });
}

export function useSaveSiteSettings() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: SiteSettings) => {
      await setDoc(doc(db, SETTINGS_COL, SITE_DOC_ID), data, { merge: true });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "settings", SITE_DOC_ID] });
    },
  });
}

export function usePublishedFirestoreBlogPosts() {
  return useQuery({
    queryKey: ["cms", "blogPosts", "published"],
    queryFn: async () => {
      const q = query(collection(db, "blogPosts"), where("status", "==", "published"));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ id: d.id, ...(d.data() as FirestoreBlogPost) }));
    },
    staleTime: 30_000,
  });
}

export function useFirestoreBlogPost(slug: string | undefined) {
  return useQuery({
    queryKey: ["cms", "blogPosts", "one", slug],
    enabled: !!slug,
    queryFn: async () => {
      if (!slug) return null;
      try {
        const snap = await getDoc(doc(db, "blogPosts", slug));
        if (!snap.exists()) return null;
        const data = snap.data() as FirestoreBlogPost;
        if (data.status !== "published") return null;
        return { id: snap.id, ...data };
      } catch {
        return null;
      }
    },
    staleTime: 30_000,
  });
}

export type AdminBlogRow = FirestoreBlogPost & { id: string };

export function useAdminBlogPosts() {
  return useQuery({
    queryKey: ["cms", "blogPosts", "admin"],
    queryFn: async () => {
      const snap = await getDocs(collection(db, "blogPosts"));
      const rows: AdminBlogRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreBlogPost),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveBlogPost() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FirestoreBlogPost) => {
      const id = payload.slug.trim();
      const ref = doc(db, "blogPosts", id);
      const existing = await getDoc(ref);
      const data: Record<string, unknown> = {
        slug: id,
        title: payload.title,
        excerpt: payload.excerpt,
        content: payload.content,
        category: payload.category,
        date: payload.date,
        author: payload.author,
        readTime: payload.readTime,
        imageUrl: payload.imageUrl,
        status: payload.status,
      };
      if (!existing.exists()) {
        data.createdAt = serverTimestamp();
      }
      await setDoc(ref, data, { merge: true });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "blogPosts"] });
    },
  });
}

export function useDeleteBlogPost() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await deleteDoc(doc(db, "blogPosts", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "blogPosts"] });
    },
  });
}

export type GalleryRow = FirestoreGalleryItem & { id: string };

export function useGalleryItems() {
  return useQuery({
    queryKey: ["cms", "galleryItems"],
    queryFn: async () => {
      const snap = await getDocs(collection(db, "galleryItems"));
      const rows: GalleryRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreGalleryItem),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveGalleryItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreGalleryItem }) => {
      if (payload.id) {
        await updateDoc(doc(db, "galleryItems", payload.id), {
          title: payload.data.title,
          category: payload.data.category,
          imageUrl: payload.data.imageUrl,
          type: payload.data.type,
          ...(payload.data.videoUrl !== undefined ? { videoUrl: payload.data.videoUrl } : {}),
        });
        return;
      }
      await addDoc(collection(db, "galleryItems"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "galleryItems"] });
    },
  });
}

export function useDeleteGalleryItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await deleteDoc(doc(db, "galleryItems", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "galleryItems"] });
    },
  });
}

export type ProductRow = FirestoreProduct & { id: string };

export function useProducts() {
  return useQuery({
    queryKey: ["cms", "products"],
    queryFn: async () => {
      const snap = await getDocs(collection(db, "products"));
      const rows: ProductRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreProduct),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreProduct }) => {
      if (payload.id) {
        await updateDoc(doc(db, "products", payload.id), {
          name: payload.data.name,
          category: payload.data.category,
          price: payload.data.price,
          stock: payload.data.stock,
          description: payload.data.description,
          ...(payload.data.href !== undefined ? { href: payload.data.href } : {}),
          imageUrl: payload.data.imageUrl ?? "",
        });
        return;
      }
      await addDoc(collection(db, "products"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "products"] });
    },
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await deleteDoc(doc(db, "products", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "products"] });
    },
  });
}

export type InquiryRow = Omit<FirestoreInquiry, "createdAt"> & {
  id: string;
  createdAt: Timestamp;
};

export function useInquiries() {
  return useQuery({
    queryKey: ["cms", "inquiries"],
    queryFn: async () => {
      const snap = await getDocs(collection(db, "inquiries"));
      const rows: InquiryRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreInquiry),
      }));
      rows.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
      return rows;
    },
  });
}

export function useUpdateInquiry() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<FirestoreInquiry> }) => {
      await updateDoc(doc(db, "inquiries", id), patch);
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "inquiries"] });
    },
  });
}

export function useDeleteInquiry() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await deleteDoc(doc(db, "inquiries", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "inquiries"] });
    },
  });
}
