import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "../dictionaries";
import { LOCALES, SITE_URL, asset, localeAlternates, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: localeAlternates(params.lang),
    icons: { icon: asset("/icon.png"), apple: asset("/icon.png") },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: params.lang === "zh" ? "zh_CN" : "en_US",
      images: [asset("/icon.png")],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang === "zh" ? "zh-CN" : "en"}>
      <body>
        <Navbar dict={dict.nav} />
        <main>{children}</main>
        <Footer dict={dict.footer} lang={params.lang} />
      </body>
    </html>
  );
}
