import { getLanguageDir } from "@/lib/i18n-server";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = getLanguageDir(params.locale);

  return (
    <html lang={params.locale} dir={dir} className={inter.className}>
      <body
        className="flex flex-col min-h-screen bg-background text-text"
        suppressHydrationWarning={true}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
