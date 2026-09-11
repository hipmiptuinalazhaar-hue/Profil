import Image from "next/image";
import { siteConfig } from "@/config/site";
import { homeCopy, stories, type HomeLocale } from "@/content/home";
import { leadership } from "@/content/organization";

type Props = { lang: HomeLocale };

export function HomeStories({ lang }: Props) {
  const t = homeCopy[lang];
  const isId = lang === "id";
  const chairman = leadership[0];
  const partnerSubject = isId ? "Pengajuan kolaborasi dengan HIPMI PT UIN Al Azhaar" : "Collaboration proposal for HIPMI PT UIN Al Azhaar";
  return <>
    <section className="section-space bg-paper-50">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="section-kicker">{t.storiesEyebrow}</p><h2 className="section-title mt-5 max-w-4xl">{t.storiesTitle}</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {stories.map(s=><article key={s.image} className="group"><div className="relative aspect-[4/3] overflow-hidden bg-ink-900"><Image src={s.image} alt={isId?s.titleId:s.titleEn} fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div><p className="mt-5 text-[.65rem] font-bold uppercase tracking-[.18em] text-gold-600">{isId?s.tagId:s.tagEn}</p><h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight">{isId?s.titleId:s.titleEn}</h3></article>)}
        </div>
      </div>
    </section>

    <section className="relative isolate min-h-[36rem] overflow-hidden bg-ink-950 text-white">
      <Image src="/media/sinergi-pemkot.webp" alt="Sinergi HIPMI PT bersama Pemerintah Kota Lubuklinggau" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/25"/>
      <div className="relative mx-auto flex min-h-[36rem] w-full max-w-[88rem] items-center px-5 py-16 sm:px-8 lg:px-12"><div className="max-w-2xl"><p className="section-kicker text-gold-500">{t.partnerEyebrow}</p><h2 className="section-title mt-5 text-white">{t.partnerTitle}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/65">{t.partnerBody}</p><a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(partnerSubject)}`} className="mt-8 inline-flex min-h-12 items-center justify-center border border-white/35 px-5 text-xs font-bold uppercase tracking-[.14em] hover:border-gold-500 hover:text-gold-500">{t.partnerCta}</a></div></div>
    </section>

    <section id="kepemimpinan" className="section-space bg-white">
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="relative min-h-[34rem] overflow-hidden bg-ink-950 lg:min-h-[44rem]"><Image src="/media/chairman.webp" alt={`${chairman.name}, ${chairman.role} HIPMI PT UIN Al Azhaar`} fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-6 pt-24 text-white"><p className="text-xs uppercase tracking-[.18em] text-gold-500">{chairman.role}</p><h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl">{chairman.name}</h3></div></div>
        <div className="self-center"><p className="section-kicker">{t.leadershipEyebrow}</p><h2 className="section-title mt-5">{t.leadershipTitle}</h2><p className="mt-7 max-w-2xl text-sm leading-7 text-ink-950/64">{t.leadershipBody}</p><div className="mt-9 grid gap-x-8 gap-y-5 border-t border-ink-950/12 pt-7 sm:grid-cols-2"><div><span className="text-xs text-ink-950/45">{isId?"Sekretaris":"Secretary"}</span><p className="mt-1 font-semibold">Robi Apri Yansah</p></div><div><span className="text-xs text-ink-950/45">{isId?"Bendahara":"Treasurer"}</span><p className="mt-1 font-semibold">Dhea Mahyang Sari</p></div>{leadership.slice(3).map(l=><div key={l.name}><span className="text-xs text-ink-950/45">{isId?"Kepala Bidang":"Division Head"}</span><p className="mt-1 font-semibold">{l.name}</p></div>)}</div></div>
      </div>
    </section>
  </>;
}
