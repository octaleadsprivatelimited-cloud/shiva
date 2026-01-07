import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";
import CookieConsent from "@/components/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
