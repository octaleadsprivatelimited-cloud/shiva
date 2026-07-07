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
import { getDb } from "@/lib/firebase";
import { defaultSiteSettings } from "@/lib/defaultSiteSettings";
import type {
  FirestoreBlogPost,
  FirestoreGalleryItem,
  FirestoreInquiry,
  FirestoreProduct,
  SiteSettings,
  FirestoreCareer,
  FirestoreTeamMember,
  FirestoreVideo,
  FirestoreCaseStudy,
  FirestoreKnowledgeBaseArticle,
} from "@/types/cms";

const SETTINGS_COL = "settings";
const SITE_DOC_ID = "site";

function requireDb() {
  const db = getDb();
  if (!db) {
    throw new Error(
      "Firebase is not configured. In Vercel → Settings → Environment Variables, add every VITE_FIREBASE_* key from .env.example, then redeploy.",
    );
  }
  return db;
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["cms", "settings", SITE_DOC_ID],
    queryFn: async (): Promise<SiteSettings> => {
      const db = getDb();
      if (!db) return defaultSiteSettings;
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
      const db = requireDb();
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
      const db = getDb();
      if (!db) return [];
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
      const db = getDb();
      if (!db) return null;
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
      const db = getDb();
      if (!db) return [];
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
      const db = requireDb();
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
      const db = requireDb();
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
      const db = getDb();
      if (!db) return [];
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
      const db = requireDb();
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
      const db = requireDb();
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
      const db = getDb();
      if (!db) return [];
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
      const db = requireDb();
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
      const db = requireDb();
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
      const db = getDb();
      if (!db) return [];
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
      const db = requireDb();
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
      const db = requireDb();
      await deleteDoc(doc(db, "inquiries", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "inquiries"] });
    },
  });
}

export type CareerRow = FirestoreCareer & { id: string };

export function useCareers() {
  return useQuery({
    queryKey: ["cms", "careers"],
    queryFn: async () => {
      const db = getDb();
      if (!db) return [];
      const snap = await getDocs(collection(db, "careers"));
      const rows: CareerRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreCareer),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveCareer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreCareer }) => {
      const db = requireDb();
      if (payload.id) {
        await updateDoc(doc(db, "careers", payload.id), {
          title: payload.data.title,
          location: payload.data.location,
          type: payload.data.type,
          experience: payload.data.experience,
          description: payload.data.description,
        });
        return;
      }
      await addDoc(collection(db, "careers"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "careers"] });
    },
  });
}

export function useDeleteCareer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const db = requireDb();
      await deleteDoc(doc(db, "careers", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "careers"] });
    },
  });
}

export type TeamMemberRow = FirestoreTeamMember & { id: string };

export function useTeamMembers() {
  return useQuery({
    queryKey: ["cms", "teamMembers"],
    queryFn: async () => {
      const db = getDb();
      if (!db) return [];
      const snap = await getDocs(collection(db, "teamMembers"));
      const rows: TeamMemberRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreTeamMember),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveTeamMember() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreTeamMember }) => {
      const db = requireDb();
      const docData: Record<string, unknown> = {
        name: payload.data.name,
        role: payload.data.role,
        image: payload.data.image,
        bio: payload.data.bio,
      };
      if (payload.data.social) {
        docData.social = payload.data.social;
      }
      if (payload.id) {
        await updateDoc(doc(db, "teamMembers", payload.id), docData);
        return;
      }
      await addDoc(collection(db, "teamMembers"), {
        ...docData,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "teamMembers"] });
    },
  });
}

export function useDeleteTeamMember() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const db = requireDb();
      await deleteDoc(doc(db, "teamMembers", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "teamMembers"] });
    },
  });
}

export type VideoRow = FirestoreVideo & { id: string };

export function useVideos() {
  return useQuery({
    queryKey: ["cms", "videos"],
    queryFn: async () => {
      const db = getDb();
      if (!db) return [];
      const snap = await getDocs(collection(db, "videos"));
      const rows: VideoRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreVideo),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveVideo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreVideo }) => {
      const db = requireDb();
      if (payload.id) {
        await updateDoc(doc(db, "videos", payload.id), {
          id: payload.data.id,
          title: payload.data.title,
          category: payload.data.category,
          views: payload.data.views ?? "",
          duration: payload.data.duration ?? "",
        });
        return;
      }
      await addDoc(collection(db, "videos"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "videos"] });
    },
  });
}

export function useDeleteVideo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const db = requireDb();
      await deleteDoc(doc(db, "videos", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "videos"] });
    },
  });
}

export type CaseStudyRow = FirestoreCaseStudy & { id: string };

export function useCaseStudies() {
  return useQuery({
    queryKey: ["cms", "caseStudies"],
    queryFn: async () => {
      const db = getDb();
      if (!db) return [];
      const snap = await getDocs(collection(db, "caseStudies"));
      const rows: CaseStudyRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreCaseStudy),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveCaseStudy() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreCaseStudy }) => {
      const db = requireDb();
      if (payload.id) {
        await updateDoc(doc(db, "caseStudies", payload.id), {
          title: payload.data.title,
          category: payload.data.category,
          location: payload.data.location,
          farmer: payload.data.farmer,
          challenge: payload.data.challenge,
          solution: payload.data.solution,
          results: payload.data.results,
          imageUrl: payload.data.imageUrl ?? "",
        });
        return;
      }
      await addDoc(collection(db, "caseStudies"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "caseStudies"] });
    },
  });
}

export function useDeleteCaseStudy() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const db = requireDb();
      await deleteDoc(doc(db, "caseStudies", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "caseStudies"] });
    },
  });
}

export type KnowledgeBaseArticleRow = FirestoreKnowledgeBaseArticle & { id: string };

export function useKnowledgeBaseArticles() {
  return useQuery({
    queryKey: ["cms", "knowledgeBaseArticles"],
    queryFn: async () => {
      const db = getDb();
      if (!db) return [];
      const snap = await getDocs(collection(db, "knowledgeBaseArticles"));
      const rows: KnowledgeBaseArticleRow[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as FirestoreKnowledgeBaseArticle),
      }));
      rows.sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
      return rows;
    },
  });
}

export function useSaveKnowledgeBaseArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { id?: string; data: FirestoreKnowledgeBaseArticle }) => {
      const db = requireDb();
      if (payload.id) {
        await updateDoc(doc(db, "knowledgeBaseArticles", payload.id), {
          title: payload.data.title,
          category: payload.data.category,
          readTime: payload.data.readTime,
        });
        return;
      }
      await addDoc(collection(db, "knowledgeBaseArticles"), {
        ...payload.data,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "knowledgeBaseArticles"] });
    },
  });
}

export function useDeleteKnowledgeBaseArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const db = requireDb();
      await deleteDoc(doc(db, "knowledgeBaseArticles", id));
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["cms", "knowledgeBaseArticles"] });
    },
  });
}
