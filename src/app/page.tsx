import Link from "next/link";
import { InstitutionalStory } from "@/components/home/institutional-story";
import { PlatformOverview } from "@/components/home/platform-overview";
import { ProgramEcosystem } from "@/components/home/program-ecosystem";
import { PhotoSlot } from "@/components/media/photo-slot";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { photoManifest } from "@/data/photo-manifest";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const copy = {
  id: {
    label: "Official Digital Headquarters · Lubuklinggau",
    headlineLead: "Membangun Generasi",
    headlineAccent: "Pengusaha Muda",
    headlineEnd: "Kampus.",
    body: "HIPMI PT UIN Al Azhaar adalah ruang tempat mahasiswa membangun usaha, belajar bersama praktisi, memperluas jejaring, dan bertumbuh melalui kolaborasi yang nyata.",
    primary: "Jelajahi HIPMI PT",
    secondary: "Gabung via WhatsApp",
    photoLabel: "Dokumentasi resmi",
    photoTitle: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    photoMeta: "Lubuklinggau · 2026",
    facts: [["2026/2027", "Periode"], ["6", "Bidang"], ["9", "Program unggulan"], ["Linggau Raya", "Jejaring"]],
  },
  en: {
    label: "Official Digital Headquarters · Lubuklinggau",
    headlineLead: "Building a Generation of",
    headlineAccent: "Young Entrepreneurs",
    headlineEnd: "on Campus.",
    body: "HIPMI PT UIN Al Azhaar is where students build ventures, learn alongside practitioners, expand their networks, and grow through meaningful collaboration.",
    primary: "Explore HIPMI PT",
    secondary: "Join via WhatsApp",
    photoLabel: "Official documentation",
    photoTitle: "2026 Grand Inauguration of HIPMI PT Campuses across Linggau Raya",
    photoMeta: "Lubuklinggau · 2026",
    facts: [["2026/2027", "Term"], ["6", "Divisions"], ["9", "Flagship programs"], ["Linggau Raya", "Network"]],
  },
} as const;

type HomeProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const text = copy[locale];
  const joinWhatsApp = createWhatsAppUrl(
    locale === "id"
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin bergabung dan mendapatkan informasi keanggotaan."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to join and get membership information.",
  );

  return (
    <div className="phase-three phase-five phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="flagship-hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="hero-label"><span aria-hidden="true" />{text.label}</p>
              <h1 id="hero-title"><span>{text.headlineLead}</span><em>{text.headlineAccent}</em><span>{text.headlineEnd}</span></h1>
              <p className="hero-body">{text.body}</p>
              <div className="hero-actions">
                <Link className="cta-primary" href={`/about?lang=${locale}`}><span>{text.primary}</span><span className="cta-arrow" aria-hidden="true">↗</span></Link>
                <a className="cta-secondary" href={joinWhatsApp} target="_blank" rel="noreferrer"><span>{text.secondary}</span><span className="cta-arrow" aria-hidden="true">→</span></a>
              </div>
              <div className="hero-facts" aria-label={locale === "id" ? "Ringkasan organisasi" : "Organization snapshot"}>
                {text.facts.map(([value, label], index) => <div className="hero-fact" key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{value}</strong><small>{label}</small></div>)}
              </div>
            </div>

            <figure className="hero-documentary">
              <div className="hero-photo-frame">
                <PhotoSlot className="hero-photo" src={photoManifest.hero.path} filename={photoManifest.hero.filename} alt={photoManifest.hero.alt} priority sizes="(max-width: 979px) 100vw, 52vw" objectPosition="center 46%" />
                <div className="hero-photo-shade" aria-hidden="true" />
                <div className="hero-photo-stamp" aria-hidden="true"><span>HIPMI PT</span><strong>2026</strong></div>
              </div>
              <figcaption><span className="hero-photo-index">01 / 03</span><div><span>{text.photoLabel}</span><strong>{text.photoTitle}</strong></div><span className="hero-photo-meta">{text.photoMeta}</span></figcaption>
            </figure>
          </div>
          <div className="shell hero-bottomline" aria-hidden="true"><span>Build business.</span><span>Grow network.</span><span>Create impact.</span></div>
        </section>
        <InstitutionalStory locale={locale} />
        <ProgramEcosystem locale={locale} />
        <PlatformOverview locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
