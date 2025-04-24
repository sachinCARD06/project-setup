"use client";

import ThemeWrapper from "@/components/ThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      <Header />
      <div className="fixed z-50 flex items-center space-x-4 top-4 right-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </ThemeWrapper>
  );
}
