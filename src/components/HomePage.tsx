import type { Dictionary } from "@/dictionaries/en";

export default function HomePage({ dict }: { dict: Dictionary }) {
  return (
    <>
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-brand-deep bg-brand-soft border border-[#FFE4D1] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              {dict.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight leading-[0.95]">
              {dict.hero.title}
              <br />
              <span className="text-brand">{dict.hero.accent}</span>
            </h1>
            <p className="mt-5 text-lg text-muted max-w-md leading-relaxed">{dict.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="btn-primary">
                {dict.hero.download}
                <span className="text-white/80 font-medium text-xs">{dict.hero.downloadNote}</span>
              </a>
              <a href="#how" className="px-5 py-3 text-sm text-muted hover:text-ink">
                {dict.hero.how}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs text-muted">
              {dict.hero.chips.map((chip) => (
                <li key={chip} className="px-3 py-1.5 rounded-full bg-white border border-line">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <PhonePlaceholder label={dict.gallery.caption} />
        </div>
      </section>

      <section id="features" className="px-6 py-16 bg-white border-y border-line">
        <div className="max-w-content mx-auto">
          <p className="text-sm text-brand">{dict.features.kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{dict.features.title}</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {dict.features.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line p-5 bg-paper">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-16">
        <div className="max-w-content mx-auto">
          <p className="text-sm text-brand">{dict.how.kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{dict.how.title}</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-4">
            {dict.how.steps.map((step) => (
              <li key={step.n} className="rounded-2xl bg-white border border-line p-5">
                <div className="text-xs text-brand font-semibold">{step.n}</div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="screens" className="px-6 py-16 bg-[#FFF7F0]">
        <div className="max-w-content mx-auto">
          <p className="text-sm text-brand">{dict.gallery.kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{dict.gallery.title}</h2>
          <p className="mt-2 text-sm text-muted">{dict.gallery.note}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["01", "02", "03", "04"].map((n) => (
              <div
                key={n}
                className="aspect-[9/16] rounded-[28px] border border-dashed border-[#E0C8B4] bg-white/70 flex items-end p-4"
              >
                <span className="text-xs text-muted">
                  {dict.gallery.caption} {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="px-6 py-20">
        <div className="max-w-content mx-auto rounded-3xl bg-ink text-white px-8 py-12">
          <h2 className="text-3xl font-semibold tracking-tight">{dict.download.title}</h2>
          <p className="mt-3 text-white/60 max-w-lg">{dict.download.body}</p>
          <span className="mt-6 inline-flex btn-primary opacity-80 cursor-default">{dict.download.button}</span>
        </div>
      </section>
    </>
  );
}

function PhonePlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto w-[280px] rounded-[36px] bg-ink p-2 shadow-xl">
      <div className="rounded-[28px] bg-paper h-[520px] p-5 flex flex-col">
        <div className="text-xs text-muted">2:33</div>
        <div className="mt-4 text-2xl font-semibold">Together</div>
        <div className="mt-4 rounded-2xl bg-[#E8F3E8] border border-[#D4E8D4] p-4 flex-1">
          <div className="text-sm font-semibold">Weekend Grocery Run</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Oat milk</li>
            <li>Fresh berries</li>
            <li>Road-trip snacks</li>
          </ul>
        </div>
        <p className="mt-3 text-center text-[11px] text-muted">{label}</p>
      </div>
    </div>
  );
}
