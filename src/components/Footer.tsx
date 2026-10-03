import Link from "next/link";
import type { Dictionary } from "@/dictionaries/en";
import { asset, type Locale } from "@/lib/site";

export default function Footer({ dict, lang }: { dict: Dictionary["footer"]; lang: Locale }) {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-content mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <img src={asset("/icon.png")} alt="" width={28} height={28} className="w-7 h-7 rounded-md" />
            Dogether
          </div>
          <p className="mt-3 text-sm text-white/55 max-w-sm leading-relaxed">{dict.blurb}</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-white/40">{dict.product}</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href={`/${lang}/#features`} className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#how`} className="hover:text-white">
                How it works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-wider text-white/40">{dict.support}</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href={`/${lang}/privacy/`} className="hover:text-white">
                {dict.privacy}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/support/`} className="hover:text-white">
                {dict.supportLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 pb-8 text-xs text-white/35">{dict.copyright}</div>
    </footer>
  );
}
