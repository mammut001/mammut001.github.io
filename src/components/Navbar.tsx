"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/dictionaries/en";
import { asset } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ dict }: { dict: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = (params.lang as string) || "en";
  const home = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    if (home) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${lang}/#${id}`;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}/`} className="flex items-center gap-2.5">
          <img src={asset("/icon.png")} alt="" width={32} height={32} className="w-8 h-8 rounded-lg" />
          <span className="font-semibold tracking-tight">Dogether</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm text-muted">
          <button className="px-3 py-2 hover:text-ink" onClick={() => go("features")}>
            {dict.features}
          </button>
          <button className="px-3 py-2 hover:text-ink" onClick={() => go("how")}>
            {dict.how}
          </button>
          <Link className="px-3 py-2 hover:text-ink" href={`/${lang}/privacy/`}>
            {dict.privacy}
          </Link>
          <Link className="px-3 py-2 hover:text-ink" href={`/${lang}/support/`}>
            {dict.support}
          </Link>
          <LanguageSwitcher />
          <button className="btn-primary ml-2 px-4 py-2 text-sm" onClick={() => go("download")}>
            {dict.download}
          </button>
        </nav>
        <button
          className="md:hidden text-sm text-muted"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-3 flex flex-col gap-1 text-sm">
          <button className="text-left py-2" onClick={() => go("features")}>
            {dict.features}
          </button>
          <button className="text-left py-2" onClick={() => go("how")}>
            {dict.how}
          </button>
          <Link className="py-2" href={`/${lang}/privacy/`} onClick={() => setOpen(false)}>
            {dict.privacy}
          </Link>
          <Link className="py-2" href={`/${lang}/support/`} onClick={() => setOpen(false)}>
            {dict.support}
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
