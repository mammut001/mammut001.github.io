import type { Metadata } from "next";
import type { Locale } from "@/lib/site";

// The home page moved to the cv site; each language goes to its own page there.
function targetFor(lang: Locale) {
  return `https://cv.paytonpei.top/dogether/${lang}`;
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: targetFor(params.lang) },
  };
}

export default function HomeRedirectPage({ params }: { params: { lang: Locale } }) {
  const target = targetFor(params.lang);
  const script = `window.location.replace(${JSON.stringify(target)}+window.location.hash);`;
  return (
    <article className="pt-28 pb-20 px-6">
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <div className="max-w-2xl mx-auto">
        {params.lang === "zh" ? (
          <p className="text-muted leading-relaxed">
            Dogether 网站已移至{" "}
            <a href={target} className="text-brand-deep underline underline-offset-4">{target}</a>
          </p>
        ) : (
          <p className="text-muted leading-relaxed">
            The Dogether website has moved to{" "}
            <a href={target} className="text-brand-deep underline underline-offset-4">{target}</a>
          </p>
        )}
      </div>
    </article>
  );
}
