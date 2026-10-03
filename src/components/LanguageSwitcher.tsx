"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/en/";
  const router = useRouter();
  const current = pathname.split("/")[1] === "zh" ? "zh" : "en";

  const go = (lang: "en" | "zh") => {
    const parts = pathname.split("/");
    if (parts[1] === "en" || parts[1] === "zh") parts[1] = lang;
    else parts.splice(1, 0, lang);
    router.push(parts.join("/") || `/${lang}/`);
  };

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <button
        className={current === "en" ? "text-ink" : "text-muted"}
        onClick={() => go("en")}
      >
        EN
      </button>
      <span className="text-line">/</span>
      <button
        className={current === "zh" ? "text-ink" : "text-muted"}
        onClick={() => go("zh")}
      >
        中文
      </button>
    </div>
  );
}
