import LegalPage from "@/components/LegalPage";
import { getDictionary } from "../../dictionaries";
import { localeAlternates, type Locale } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: `${dict.privacy.title} — Dogether`,
    description: dict.metadata.description,
    alternates: localeAlternates(params.lang, "/privacy"),
  };
}

export default async function PrivacyPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <LegalPage title={dict.privacy.title} updated={dict.privacy.updated}>
      {dict.privacy.sections.map((section) => (
        <section key={section.h}>
          <h2 className="text-xl font-semibold">{section.h}</h2>
          <p className="mt-2 text-muted leading-relaxed">{section.p}</p>
        </section>
      ))}
    </LegalPage>
  );
}
