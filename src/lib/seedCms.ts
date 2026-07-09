import { collection, doc, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { blogPosts } from "@/data/blogPosts";
import { defaultGalleryItems } from "@/data/galleryData";
import { defaultProductHighlights } from "@/data/productHighlights";
import { defaultSiteSettings } from "@/lib/defaultSiteSettings";
import { getDb } from "@/lib/firebase";

const SETTINGS_COL = "settings";
const SITE_DOC_ID = "site";

export async function seedSiteSettingsToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  await setDoc(doc(db, SETTINGS_COL, SITE_DOC_ID), defaultSiteSettings, { merge: true });
}

export async function seedBlogPostsToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
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
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
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
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
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

const defaultCareers = [
  {
    title: "Agricultural Field Officer",
    location: "Multiple Locations, India",
    type: "Full-time",
    experience: "2-5 years",
    description: "Visit farms, conduct soil testing, and provide on-ground advisory to farmers.",
  },
  {
    title: "Crop Advisory Specialist",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "3-7 years",
    description: "Develop crop management plans and provide expert guidance to farmers.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    description: "Manage social media, create content, and drive engagement for our YouTube and Instagram channels.",
  },
  {
    title: "Soil Scientist",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead soil analysis, research, and develop recommendations for soil health improvement.",
  },
];

const defaultTeamMembers = [
  {
    name: "Shiva Kumar",
    role: "Founder & Chief Agricultural Consultant",
    image: "👨‍🌾",
    bio: "With over 15 years of experience in agricultural science, Shiva Kumar founded Shiva Agri Clinic to bridge the gap between traditional farming and modern agricultural practices.",
    social: {
      youtube: "https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt",
      instagram: "https://www.instagram.com/shiva_agriclinic/",
    },
  },
  {
    name: "Dr. Priya Sharma",
    role: "Senior Soil Scientist",
    image: "👩‍🔬",
    bio: "PhD in Soil Science with expertise in soil health management and sustainable agriculture practices.",
  },
  {
    name: "Rajesh Patel",
    role: "Pest Management Expert",
    image: "👨‍🔬",
    bio: "Specialist in Integrated Pest Management (IPM) with 10+ years of field experience across diverse crops.",
  },
  {
    name: "Dr. Anita Reddy",
    role: "Organic Farming Specialist",
    image: "👩‍🌾",
    bio: "Expert in organic certification processes and sustainable farming methodologies.",
  },
  {
    name: "Vikram Singh",
    role: "Crop Advisory Lead",
    image: "👨‍💼",
    bio: "Agricultural engineer specializing in crop planning and yield optimization strategies.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Field Operations Manager",
    image: "👩‍💼",
    bio: "Coordinates on-ground operations and ensures seamless delivery of services to farmers.",
  },
];

const defaultVideos = [
  { id: "LXF8l0jNKII", title: "Farmer Safety Shoes | Agriculture & Paddy Shoes", category: "Farm Equipment", views: "", duration: "" },
  { id: "po9-ZxJuWok", title: "Elevated Shed Goat & Sheep Farming | Goat Farm", category: "Animal Farming", views: "", duration: "" },
  { id: "UYU4vo_lWbw", title: "Jasmine Cultivation In Telugu | Flowers Farming", category: "Flower Farming", views: "", duration: "" },
  { id: "rGkpq0tbQlM", title: "Biggest Vermicompost Unit | Vermicompost Uses", category: "Organic Farming", views: "", duration: "" },
  { id: "hg6IC4SpMTM", title: "Drip Irrigation Setup", category: "Irrigation", views: "", duration: "" },
  { id: "PuWsQ6NHrdg", title: "GAC Fruit Farming In Telugu", category: "Fruit Farming", views: "", duration: "" },
  { id: "qwlitviu-U8", title: "Largest Pig Farming Unit | Pig Farming In Telugu", category: "Animal Farming", views: "", duration: "" },
  { id: "m2eAMyayS_4", title: "Natural Fertilizers Guide", category: "Organic Farming", views: "", duration: "" },
  { id: "Ge14ghL1cd0", title: "Marut Drones In Agriculture | Spraying Drones", category: "Technology", views: "", duration: "" },
  { id: "fLe62_HXsmw", title: "Madhu Kamini Decoration Leaf Farming", category: "Decoration Crops", views: "", duration: "" },
];

const defaultCaseStudies = [
  {
    title: "200% Yield Increase in Cotton Farming",
    category: "Crop Advisory",
    location: "Maharashtra",
    farmer: "Rajendra Patil",
    challenge: "Low cotton yield due to improper farming practices and pest issues.",
    solution: "Implemented comprehensive crop advisory including soil testing, pest management, and optimized irrigation.",
    results: ["200% increase in yield", "50% reduction in pest damage", "₹2 Lakh additional income"],
    imageUrl: "",
  },
  {
    title: "Organic Certification Success Story",
    category: "Organic Farming",
    location: "Karnataka",
    farmer: "Lakshmi Devi",
    challenge: "Transitioning from conventional to organic farming with market access challenges.",
    solution: "Guided through organic certification process with soil enrichment and natural pest control methods.",
    results: ["Achieved organic certification", "30% premium on produce", "Improved soil health"],
    imageUrl: "",
  },
  {
    title: "IPM Implementation Saves Mango Orchard",
    category: "Pest Management",
    location: "Andhra Pradesh",
    farmer: "Venkata Rao",
    challenge: "Severe mango hopper and mealybug infestation threatening entire orchard.",
    solution: "Implemented Integrated Pest Management with biological controls and targeted interventions.",
    results: ["95% pest control", "Chemical usage reduced by 70%", "Saved 500 mango trees"],
    imageUrl: "",
  },
  {
    title: "Soil Restoration for Degraded Land",
    category: "Soil Testing",
    location: "Telangana",
    farmer: "Suresh Kumar",
    challenge: "Severely degraded soil with poor nutrient content and water retention.",
    solution: "Comprehensive soil testing followed by targeted amendments and cover cropping strategy.",
    results: ["Soil health improved by 150%", "Water retention doubled", "Back to profitable farming"],
    imageUrl: "",
  },
];

const defaultArticles = [
  { title: "Complete Guide to Rice Cultivation", category: "Crop Management", readTime: "12 min" },
  { title: "Identifying Common Cotton Pests", category: "Pest & Disease Control", readTime: "8 min" },
  { title: "NPK Testing Explained", category: "Soil Health", readTime: "6 min" },
  { title: "Starting Your Organic Farm", category: "Organic Farming", readTime: "15 min" },
  { title: "Monsoon Crop Planning", category: "Weather & Climate", readTime: "10 min" },
  { title: "Drip Irrigation Setup Guide", category: "Irrigation & Water", readTime: "9 min" },
  { title: "Tomato Farming Best Practices", category: "Crop Management", readTime: "11 min" },
  { title: "Natural Pest Repellents", category: "Pest & Disease Control", readTime: "7 min" },
];

export async function seedCareersToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  defaultCareers.forEach((c, idx) => {
    const ref = doc(db, "careers", `career-${idx + 1}`);
    batch.set(ref, {
      ...c,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export async function seedTeamToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  defaultTeamMembers.forEach((t, idx) => {
    const ref = doc(db, "teamMembers", `member-${idx + 1}`);
    batch.set(ref, {
      ...t,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export async function seedVideosToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  defaultVideos.forEach((v, idx) => {
    const ref = doc(db, "videos", `video-${idx + 1}`);
    batch.set(ref, {
      ...v,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export async function seedCaseStudiesToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  defaultCaseStudies.forEach((cs, idx) => {
    const ref = doc(db, "caseStudies", `casestudy-${idx + 1}`);
    batch.set(ref, {
      ...cs,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export async function seedKnowledgeBaseToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  defaultArticles.forEach((art, idx) => {
    const ref = doc(db, "knowledgeBaseArticles", `article-${idx + 1}`);
    batch.set(ref, {
      ...art,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}

export async function seedStatsToFirestore(): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase is not configured.");
  const batch = writeBatch(db);
  const defaultStats = [
    // Impact Stats (Bento Grid)
    { 
      type: "impact" as const,
      value: "50000", 
      suffix: "+", 
      label: "Farmers Empowered", 
      subtext: "Farmers across India trust our advisory services for sustainable crop yields and modern practices.",
      iconName: "Users",
      order: 1
    },
    { 
      type: "impact" as const,
      value: "85", 
      suffix: "%", 
      label: "Increase in Crop Yields", 
      subtext: "Proven yield increase through scientific crop protection and precise input recommendations.",
      iconName: "TrendingUp",
      order: 2
    },
    { 
      type: "impact" as const,
      value: "30", 
      suffix: "%", 
      label: "Rise in Farmer Incomes", 
      subtext: "Direct increase in crop quality and efficiency translates to higher household earnings.",
      iconName: "IndianRupee",
      order: 3
    },
    { 
      type: "impact" as const,
      value: "75", 
      suffix: "%", 
      label: "Reduction in Pest Losses", 
      subtext: "Early diagnostic tools prevent major infestations before they spread.",
      iconName: "Shield",
      order: 4
    },
    { 
      type: "impact" as const,
      value: "200", 
      suffix: "+", 
      label: "Crops Covered", 
      subtext: "Extensive consulting sheets for grains, organic vegetables, and cash crops.",
      iconName: "Leaf",
      order: 5
    },
    // Social Media Stats
    { 
      type: "social" as const,
      value: "6M+", 
      suffix: "",
      label: "YouTube Subscribers",
      subtext: "",
      iconName: "Youtube",
      color: "#FF0000",
      bgColor: "bg-red-500/10 text-red-500",
      order: 6
    },
    { 
      type: "social" as const,
      value: "2M+", 
      suffix: "",
      label: "Instagram Followers",
      subtext: "",
      iconName: "Instagram",
      color: "#E1306C",
      bgColor: "bg-pink-500/10 text-pink-500",
      order: 7
    },
    { 
      type: "social" as const,
      value: "2.6M+", 
      suffix: "",
      label: "Facebook Followers",
      subtext: "",
      iconName: "Facebook",
      color: "#1877F2",
      bgColor: "bg-blue-500/10 text-blue-500",
      order: 8
    },
    { 
      type: "social" as const,
      value: "5B+", 
      suffix: "",
      label: "Total Views",
      subtext: "",
      iconName: "Eye",
      color: "#ff6b35",
      bgColor: "bg-orange-500/10 text-orange-500",
      order: 9
    },
  ];

  defaultStats.forEach((stat, idx) => {
    const ref = doc(db, "stats", `stat-${idx + 1}`);
    batch.set(ref, {
      ...stat,
      createdAt: serverTimestamp(),
    });
  });
  await batch.commit();
}
