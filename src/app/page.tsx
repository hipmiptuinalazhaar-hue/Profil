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
    body: "HIPMI PT UIN Al Azhaar adalah ruang tempat mahasiswa membangun usaha, belajar bersama praktisi, memperluas jejaring, dan bertumbuh melalui kolaborasi yang nyata.",
    primary: "Jelajahi HIPMI PT",
    secondary: "Gabung jaringan",
    photoLabel: "Dokumentasi resmi",
    photoTitle: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    photoMeta: "Lubuklinggau · 2026",
    facts: [
      ["2026/2027", "Periode"],
      ["6", "Bidang"],
      ["9", "Program unggulan"],
      ["Linggau Raya", "Jejaring"],
    ],
  },
  en: {
    label: "Official Digital Headquarters · Lubuklinggau",
    headlineLead: "Building a Generation of",
    headlineAccent: "Young Entrepreneurs",
    headlineEnd: "on Campus.",
    body: "HIPMI PT UIN Al Azhaar is where students build ventures, learn alongside practitioners, expand their networks, and grow through meaningful collaboration.",
    primary: "Explore HIPMI PT",
    secondary: "Join the network",
    photoLabel: "Official documentation",
    photoTitle: "2026 Grand Inauguration of HIPMI PT Campuses across Linggau Raya",
    photoMeta: "Lubuklinggau · 2026",
    facts: [
      ["2026/2027", "Term"],
      ["6", "Divisions"],
      ["9", "Flagship programs"],
      ["Linggau Raya", "Network"],
    ],
  },
} as const;

type HomeProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const text = copy[locale];
  const joinSubject = encodeURIComponent(
    locale === "id"
      ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar"
      : "Interest in joining HIPMI PT UIN Al Azhaar",
  );

  return (
    <div className="phase-three" lang={locale}>
      <SiteHeader locale={locale} />

      <main id="main-content">
        <section className="flagship-hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="hero-label"><span aria-hidden="true" />{text.label}</p>

              <h1 id="hero-title">
                <span>{text.headlineLead}</span>
                <em>{text.headlineAccent}</em>
                <span>{text.headlineEnd}</span>
              </h1>

              <p className="hero-body">{text.body}</p>

              <div className="hero-actions">
                <Link className="cta-primary" href="/about">
                  <span>{text.primary}</span>
                  <span className="cta-arrow" aria-hidden="true">↗</span>
                </Link>
                <a className="cta-secondary" href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>
                  <span>{text.secondary}</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>

              <div className="hero-facts" aria-label={locale === "id" ? "Ringkasan organisasi" : "Organization snapshot"}>
                {text.facts.map(([value, label], index) => (
                  <div className="hero-fact" key={label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{value}</strong>
                    <small>{label}</small>
                  </div>
                ))}
              </div>
            </div>

            <figure className="hero-documentary">
              <div className="hero-photo-frame">
                <Image
                  className="hero-photo"
                  src="/assets/documentation/pelantikan-2026/hero-pelantikan-2026.avif"
                  alt="Delegasi HIPMI PT UIN Al Azhaar pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026"
                  width={1536}
                  height={1024}
                  priority
                  unoptimized
                  sizes="(max-width: 979px) 100vw, 52vw"
                />
                <div className="hero-photo-shade" aria-hidden="true" />
                <div className="hero-photo-stamp" aria-hidden="true">
                  <span>HIPMI PT</span>
                  <strong>2026</strong>
                </div>
              </div>

              <figcaption>
                <span className="hero-photo-index">01 / 03</span>
                <div>
                  <span>{text.photoLabel}</span>
                  <strong>{text.photoTitle}</strong>
                </div>
                <span className="hero-photo-meta">{text.photoMeta}</span>
              </figcaption>
            </figure>
          </div>

          <div className="shell hero-bottomline" aria-hidden="true">
            <span>Build business.</span>
            <span>Grow network.</span>
            <span>Create impact.</span>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
