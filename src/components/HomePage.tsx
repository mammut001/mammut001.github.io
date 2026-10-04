import Image from "next/image";
import { asset } from "@/lib/site";
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
          <div className="mx-auto w-full max-w-[280px] rounded-[36px] bg-ink p-2 shadow-xl">
            <Image src={asset("/screenshots/01-together-home.png")} alt={dict.gallery.captions[0]} width={1320} height={2868} priority className="h-auto w-full rounded-[28px]" />
          </div>
        </div>
      </section>

      <section id="templates" className="px-6 py-16">
        <div className="max-w-content mx-auto">
          <p className="text-sm text-brand">{dict.templates.kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{dict.templates.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">{dict.templates.intro}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dict.templates.items.map((item) => (
              <article key={item.name} className="rounded-2xl border border-line bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{item.name}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
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
            {["01-together-home", "02-plan-detail", "03-activity", "04-privacy"].map((name, index) => (
              <figure key={name} className="overflow-hidden rounded-[28px] border border-line bg-white p-2">
                <Image src={asset(`/screenshots/${name}.png`)} alt={dict.gallery.captions[index]} width={1320} height={2868} className="h-auto w-full rounded-[20px]" />
                <figcaption className="p-3 text-sm text-muted">{dict.gallery.captions[index]}</figcaption>
              </figure>
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
