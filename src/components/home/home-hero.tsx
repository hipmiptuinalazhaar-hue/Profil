import Image from "next/image";
import { siteConfig } from "@/config/site";
import { homeCopy, type HomeLocale } from "@/content/home";

const snapshot = [
  ["6", "Bidang", "Divisions"],
  ["9", "Program unggulan", "Flagship programs"],
  ["2026/27", "Periode", "Leadership term"],
  ["Lubuklinggau", "Basis ekosistem", "Ecosystem base"]
] as const;

type Props = { lang: HomeLocale };

export function HomeHero({ lang }: Props) {
  const t = homeCopy[lang];
  const isId = lang === "id";
  const joinSubject = isId ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar";
  return <>
    <section id="top" className="relative isolate min-h-[100svh] bg-ink-950 text-white">
      <Image src="/media/hero-pelantikan.webp" alt="Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026" fill priority sizes="100vw" className="object-cover" />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[88rem] flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="max-w-5xl">
          <p className="hero-reveal text-xs font-bold uppercase tracking-[0.22em] text-gold-500 sm:text-sm">{t.heroEyebrow}</p>
          <h1 className="hero-reveal hero-reveal-delay mt-6 max-w-5xl text-balance font-[family-name:var(--font-display)] text-[clamp(3.7rem,9vw,8.7rem)] leading-[0.84] tracking-[-0.055em]">{t.heroTitle}</h1>
          <div className="hero-reveal hero-reveal-delay-2 mt-8 grid max-w-4xl gap-7 border-l border-gold-500/70 pl-5 sm:grid-cols-[1fr_auto] sm:items-end sm:pl-7">
            <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">{t.heroBody}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#program" className="inline-flex min-h-12 items-center justify-center bg-white px-5 text-xs font-bold uppercase tracking-[.14em] text-ink-950 hover:bg-gold-500">{t.heroPrimary}</a>
              <a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(joinSubject)}`} className="inline-flex min-h-12 items-center justify-center border border-white/30 px-5 text-xs font-bold uppercase tracking-[.14em] hover:border-gold-500 hover:text-gold-500">{t.heroSecondary}</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-5 text-[.66rem] uppercase tracking-[.18em] text-white/45"><span>{siteConfig.period}</span><a href="#tentang" className="hover:text-white">{isId ? "Jelajahi" : "Explore"} ↓</a></div>
      </div>
    </section>

    <section aria-labelledby="snapshot-title" className="border-b border-ink-950/10 bg-white">
      <h2 id="snapshot-title" className="sr-only">{t.snapshotLabel}</h2>
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 border-x border-ink-950/10 lg:grid-cols-4">
        {snapshot.map(([value,id,en], i) => <div key={value} className="border-b border-r border-ink-950/10 p-6 sm:p-8 lg:border-b-0"><span className="text-[.62rem] font-bold text-gold-600">0{i+1}</span><p className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-none tracking-[-.035em] sm:text-4xl">{value}</p><p className="mt-2 text-xs uppercase tracking-[.13em] text-ink-950/48">{isId?id:en}</p></div>)}
      </div>
    </section>

    <section id="tentang" className="section-space bg-paper-50">
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.92fr] lg:gap-20 lg:px-12">
        <div className="self-center">
          <p className="section-kicker">{t.aboutEyebrow}</p><h2 className="section-title mt-5 max-w-3xl">{t.aboutTitle}</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-ink-950/68">{t.aboutBody}</p>
          <div className="mt-10 border-t border-ink-950/15 pt-7"><p className="text-xs font-bold uppercase tracking-[.18em] text-ink-950/42">{t.aboutAside}</p><blockquote className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-tight sm:text-3xl">“{siteConfig.vision}”</blockquote></div>
        </div>
        <figure className="relative min-h-[32rem] overflow-hidden bg-ink-900 lg:min-h-[42rem]">
          <Image src="/media/mentorship-bpc.webp" alt="Mentorship HIPMI PT bersama pengusaha senior BPC HIPMI Lubuklinggau" fill sizes="(max-width:1024px) 100vw,48vw" className="object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6 pt-24 text-sm leading-6 text-white/78">{isId ? "Sharing dan mentorship bersama pengusaha senior BPC HIPMI Lubuklinggau." : "Mentorship and sharing with senior BPC HIPMI Lubuklinggau entrepreneurs."}</figcaption>
        </figure>
      </div>
    </section>
  </>;
}
