import { siteConfig } from "@/config/site";
import { ecosystem, homeCopy, programs, type HomeLocale } from "@/content/home";

type Props = { lang: HomeLocale };

export function HomePrograms({ lang }: Props) {
  const t = homeCopy[lang];
  const isId = lang === "id";
  return <>
    <section id="program" className="section-space bg-ink-950 text-white">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="section-kicker text-gold-500">{t.programsEyebrow}</p>
        <h2 className="section-title mt-5 max-w-5xl">{t.programsTitle}</h2>
        <div className="mt-14 border-t border-white/15">
          {programs.map((p,i)=><article key={p.name} className="grid gap-4 border-b border-white/15 py-6 md:grid-cols-[3rem_1fr_1fr] md:items-start md:gap-8"><span className="text-xs text-gold-500">0{i+1}</span><h3 className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-[-.03em]">{p.name}</h3><p className="max-w-xl text-sm leading-7 text-white/58">{isId?p.id:p.en}</p></article>)}
        </div>
      </div>
    </section>

    <section id="ekosistem" className="section-space bg-paper-50">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr]"><p className="section-kicker">{t.ecosystemEyebrow}</p><div><h2 className="section-title">{t.ecosystemTitle}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-ink-950/62">{t.ecosystemBody}</p></div></div>
        <div className="mt-12 grid border border-ink-950/12 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((node,i)=><details key={node.title} className="ecosystem-node border-b border-r border-ink-950/12 p-5 open:bg-paper-100"><summary className="cursor-pointer list-none"><span className="text-[.62rem] font-bold text-gold-600">0{i+1}</span><h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">{node.title}</h3><span className="mt-4 block text-xs uppercase tracking-[.15em] text-ink-950/40">{isId?"Buka detail +":"Open detail +"}</span></summary><p className="mt-5 border-t border-ink-950/10 pt-5 text-sm leading-7 text-ink-950/62">{isId?node.id:node.en}</p></details>)}
        </div>
        <div className="mt-16 grid gap-8 border-y border-ink-950/15 py-10 lg:grid-cols-2">
          <div><p className="section-kicker">Business infrastructure</p><h3 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[.96] tracking-[-.035em] sm:text-5xl">{t.businessTitle}</h3></div>
          <div><p className="text-sm leading-7 text-ink-950/65">{t.businessBody}</p><div className="mt-7 grid gap-3 text-sm"><span className="border-b border-ink-950/12 pb-3">Official Website · Institutional hub</span><span className="border-b border-ink-950/12 pb-3">Business Directory · {isId?"Data usaha terverifikasi":"Verified member ventures"}</span><span>Pasar UMKM · Commerce ecosystem</span></div></div>
        </div>
      </div>
    </section>

    <section className="bg-gold-500 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-[88rem] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[.2em]">{t.impactEyebrow}</p><h2 className="section-title mt-5 max-w-2xl">{t.impactTitle}</h2></div><div className="self-end"><p className="max-w-2xl text-sm leading-7">{t.impactBody}</p><div className="mt-8 grid grid-cols-3 border-t border-ink-950/25 pt-6"><div><strong className="font-[family-name:var(--font-display)] text-5xl">6</strong><span className="mt-2 block text-xs">{isId?"Bidang":"Divisions"}</span></div><div><strong className="font-[family-name:var(--font-display)] text-5xl">9</strong><span className="mt-2 block text-xs">{isId?"Program":"Programs"}</span></div><div><strong className="font-[family-name:var(--font-display)] text-5xl">1</strong><span className="mt-2 block text-xs">{isId?"Ekosistem":"Ecosystem"}</span></div></div></div></div>
    </section>

    <section className="bg-white py-14">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12"><div><p className="section-kicker">{t.agendaEyebrow}</p><h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[.96] sm:text-5xl">{t.agendaTitle}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-ink-950/62">{t.agendaBody}</p></div><a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center border border-ink-950 px-5 text-xs font-bold uppercase tracking-[.14em] hover:bg-ink-950 hover:text-white">{t.agendaCta}</a></div>
    </section>
  </>;
}
