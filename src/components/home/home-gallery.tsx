import Image from "next/image";
import { siteConfig } from "@/config/site";
import { homeCopy, type HomeLocale } from "@/content/home";

const gallery = [
  ["/media/hero-pelantikan.webp", "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026"],
  ["/media/mentorship-bpc.webp", "Mentorship bersama pengusaha senior BPC HIPMI Lubuklinggau"],
  ["/media/sinergi-pemkot.webp", "Sinergi HIPMI PT bersama Pemerintah Kota Lubuklinggau"]
] as const;

type Props = { lang: HomeLocale };

export function HomeGallery({ lang }: Props) {
  const t = homeCopy[lang];
  const isId = lang === "id";
  const joinSubject = isId ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar";
  return <>
    <section className="section-space bg-ink-950 text-white">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="section-kicker text-gold-500">{t.galleryEyebrow}</p><h2 className="section-title mt-5 max-w-4xl text-white">{t.galleryTitle}</h2>
        <div className="gallery-grid mt-12">{gallery.map((g,i)=><figure key={g[0]} className={`gallery-item gallery-item-${i+1} relative overflow-hidden bg-ink-900`}><Image src={g[0]} alt={g[1]} fill sizes="(max-width:768px) 100vw,50vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" /></figure>)}</div>
      </div>
    </section>
    <section className="section-space bg-paper-50">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12"><div className="grid gap-10 border-y border-ink-950/14 py-12 lg:grid-cols-[.65fr_1.35fr] lg:items-center"><p className="section-kicker">{t.joinEyebrow}</p><div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between"><div><h2 className="section-title max-w-4xl">{t.joinTitle}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-ink-950/60">{t.joinBody}</p></div><a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(joinSubject)}`} className="inline-flex min-h-12 shrink-0 items-center justify-center bg-ink-950 px-5 text-xs font-bold uppercase tracking-[.14em] text-white hover:bg-gold-500 hover:text-ink-950">{t.joinCta}</a></div></div></div>
    </section>
  </>;
}
