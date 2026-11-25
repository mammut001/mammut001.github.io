import type { Metadata } from "next";
import type { Locale } from "@/lib/site";

const EN_URL = "https://cv.paytonpei.top/dogether/support";
const ZH_URL = "https://cv.paytonpei.top/dogether/support#zh";

function targetFor(lang: Locale) {
  return lang === "zh" ? ZH_URL : EN_URL;
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const target = targetFor(params.lang);
  return {
    title: "Support — Dogether",
    robots: { index: false, follow: false },
    alternates: { canonical: target },
  };
}

export default function SupportRedirectPage({ params }: { params: { lang: Locale } }) {
  const target = targetFor(params.lang);
  const script = `window.location.replace(${JSON.stringify(target)});`;
  return (
    <article className="pt-28 pb-20 px-6">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <div className="max-w-2xl mx-auto">
        {params.lang === "zh" ? (
          <p className="text-muted leading-relaxed">
            Dogether 支持页面已移至{" "}
            <a href={target} className="text-brand-deep underline underline-offset-4">{target}</a>
          </p>
        ) : (
          <p className="text-muted leading-relaxed">
            The Dogether support page has moved to{" "}
            <a href={target} className="text-brand-deep underline underline-offset-4">{target}</a>
          </p>
        )}
      </div>
    </article>
  );
}
