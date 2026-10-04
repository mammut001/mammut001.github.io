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
    title: `${dict.support.title} — Dogether`,
    description: dict.support.intro,
    alternates: localeAlternates(params.lang, "/support"),
  };
}

export default async function SupportPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <LegalPage title={dict.support.title}>
      <p className="text-muted leading-relaxed">{dict.support.intro}</p>
      {dict.support.items.map((item) => (
        <section key={item.h}>
          <h2 className="text-xl font-semibold">{item.h}</h2>
          <p className="mt-2 text-muted leading-relaxed">{item.p}</p>
        </section>
      ))}
      <p className="text-muted leading-relaxed">{dict.support.contact}</p>
      <a href="https://github.com/mammut001/dogether/issues" className="inline-flex text-brand-deep underline underline-offset-4">{dict.support.contactLink}</a>
    </LegalPage>
  );
}
