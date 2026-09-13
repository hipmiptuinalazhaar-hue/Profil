import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";

const copy = {
  id: {
    label: "Official Digital Headquarters · Lubuklinggau",
    headlineLead: "Membangun Generasi",
    headlineAccent: "Pengusaha Muda",
    headlineEnd: "Kampus.",
    body: "HIPMI PT UIN Al Azhaar menghubungkan mahasiswa dengan pembelajaran bisnis, mentorship, jejaring pengusaha, dan ruang kolaborasi untuk menumbuhkan usaha yang nyata.",
    primary: "Jelajahi HIPMI PT",
    secondary: "Gabung jaringan",
    photoLabel: "Dokumentasi resmi",
    photoTitle: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    photoMeta: "Lubuklinggau · 2026",
    proof: "Real people. Real activities. Real network.",
  },
  en: {
    label: "Official Digital Headquarters · Lubuklinggau",
    headlineLead: "Building a Generation of",
    headlineAccent: "Young Entrepreneurs",
    headlineEnd: "on Campus.",
    body: "HIPMI PT UIN Al Azhaar connects students with business learning, mentorship, entrepreneur networks, and collaboration spaces designed to help real ventures grow.",
    primary: "Explore HIPMI PT",
    secondary: "Join the network",
    photoLabel: "Official documentation",
    photoTitle: "2026 Grand Inauguration of HIPMI PT Campuses across Linggau Raya",
    photoMeta: "Lubuklinggau · 2026",
    proof: "Real people. Real activities. Real network.",
  },
} as const;

type HomeProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const text = copy[locale];
  const joinSubject = encodeURIComponent(locale === "id" ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar");

  return (
    <div className="phase-three" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="flagship-hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="hero-label"><span aria-hidden="true" />{text.label}</p>
              <h1 id="hero-title"><span>{text.headlineLead}</span><em>{text.headlineAccent}</em><span>{text.headlineEnd}</span></h1>
              <p className="hero-body">{text.body}</p>
              <div className="hero-actions">
                <Link className="cta-primary" href="/about">{text.primary}<span aria-hidden="true">↗</span></Link>
                <a className="cta-secondary" href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>{text.secondary}<span aria-hidden="true">→</span></a>
              </div>
              <div className="hero-manifesto" aria-label="HIPMI PT values"><span>Build business.</span><span>Grow network.</span><span>Create impact.</span></div>
            </div>

            <figure className="hero-documentary">
              <div className="hero-photo-frame">
                <Image src="/assets/documentation/pelantikan-2026/hero-pelantikan-2026.webp" alt="Delegasi HIPMI PT UIN Al Azhaar bersama pemangku kepentingan pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026" fill priority unoptimized sizes="(max-width: 899px) 100vw, 52vw" />
              </div>
              <figcaption>
                <span className="hero-photo-index">01 / 03</span>
                <div><span>{text.photoLabel}</span><strong>{text.photoTitle}</strong></div>
                <span>{text.photoMeta}</span>
              </figcaption>
            </figure>
          </div>

          <div className="shell hero-bottomline"><span>HIPMI PT · UIN Al Azhaar</span><span>{text.proof}</span><span>2026/2027</span></div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
