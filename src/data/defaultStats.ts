import type { FirestoreStat, StatRow } from "@/types/cms";

const row = (id: string, data: FirestoreStat): StatRow => ({ id, ...data });

export const defaultCmsStats: StatRow[] = [
  row("stat-1", { type: "impact", value: "50000", suffix: "+", label: "Farmers Empowered", subtext: "Farmers across India trust our advisory services for sustainable crop yields and modern practices.", iconName: "Users", order: 1 }),
  row("stat-2", { type: "impact", value: "85", suffix: "%", label: "Increase in Crop Yields", subtext: "Proven yield increase through scientific crop protection and precise input recommendations.", iconName: "TrendingUp", order: 2 }),
  row("stat-3", { type: "impact", value: "30", suffix: "%", label: "Rise in Farmer Incomes", subtext: "Direct increase in crop quality and efficiency translates to higher household earnings.", iconName: "IndianRupee", order: 3 }),
  row("stat-4", { type: "impact", value: "75", suffix: "%", label: "Reduction in Pest Losses", subtext: "Early diagnostic tools prevent major infestations before they spread.", iconName: "Shield", order: 4 }),
  row("stat-5", { type: "impact", value: "200", suffix: "+", label: "Crops Covered", subtext: "Extensive consulting sheets for grains, organic vegetables, and cash crops.", iconName: "Leaf", order: 5 }),
  row("stat-6", { type: "social", value: "6M+", label: "YouTube Subscribers", iconName: "Youtube", color: "#FF0000", bgColor: "bg-red-500/10 text-red-500", order: 6 }),
  row("stat-7", { type: "social", value: "2M+", label: "Instagram Followers", iconName: "Instagram", color: "#E1306C", bgColor: "bg-pink-500/10 text-pink-500", order: 7 }),
  row("stat-8", { type: "social", value: "2.6M+", label: "Facebook Followers", iconName: "Facebook", color: "#1877F2", bgColor: "bg-blue-500/10 text-blue-500", order: 8 }),
  row("stat-9", { type: "social", value: "5B+", label: "Total Social Views", iconName: "Eye", color: "#ff6b35", bgColor: "bg-orange-500/10 text-orange-500", order: 9 }),
  row("stat-10", { type: "video", value: "50K+", label: "Video Subscribers", iconName: "Youtube", color: "#FF0000", bgColor: "bg-red-500/10 text-red-500", order: 10 }),
  row("stat-11", { type: "video", value: "200+", label: "Published Videos", iconName: "Video", color: "#0d9488", bgColor: "bg-teal-500/10 text-teal-500", order: 11 }),
  row("stat-12", { type: "video", value: "5M+", label: "Video Views", iconName: "Eye", color: "#ff6b35", bgColor: "bg-orange-500/10 text-orange-500", order: 12 }),
  row("stat-13", { type: "video", value: "Hindi & Telugu", label: "Video Languages", iconName: "Languages", color: "#2563eb", bgColor: "bg-blue-500/10 text-blue-500", order: 13 }),
];
