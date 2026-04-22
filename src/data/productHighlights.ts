import { Wheat, Beaker, Cog, type LucideIcon } from "lucide-react";

export type ProductHighlight = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

export const defaultProductHighlights: ProductHighlight[] = [
  { icon: Wheat, title: "Seeds", desc: "High-quality seeds for maximum yield.", href: "/products/seeds" },
  { icon: Beaker, title: "Fertilizers & Pesticides", desc: "Premium quality agricultural inputs.", href: "/products/fertilizers" },
  { icon: Cog, title: "Farm Equipment", desc: "Modern farming equipment solutions.", href: "/products/equipment" },
];
