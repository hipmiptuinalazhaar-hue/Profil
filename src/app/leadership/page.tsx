import type { Metadata } from "next";
import Link from "next/link";
import { PhotoSlot } from "@/components/media/photo-slot";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { divisions, leadership } from "@/content/organization";
import { photoManifest, photoPath } from "@/data/photo-manifest";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kepengurusan",
  description: "Struktur kepengurusan HIPMI PT UIN Al Azhaar Lubuklinggau periode 2026/2027: BPH, enam kepala bidang, dan kompartemen organisasi.",
  path: "/leadership",
});

const portraitByKey = {
  chairman: photoManifest.leadership.ketuaUmum,
  secretary: photoManifest.leadership.sekretaris,
  treasurer: photoManifest.leadership.bendahara,
  "head-division-1": photoManifest.leadership.kabid1,
  "head-division-2": photoManifest.leadership.kabid2,
  "head-division-3": photoManifest.leadership.kabid3,
  "head-division-4": photoManifest.leadership.kabid4,
  "head-division-5": photoManifest.leadership.kabid5,
  "head-division-6": photoManifest.leadership.kabid6,
} as const;

function getPortrait(key?: string) {
  if (!key || !(key in portraitByKey)) return null;
  return portraitByKey[key as keyof typeof portraitByKey];
}

type LeadershipProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function LeadershipPage({ searchParams }: LeadershipProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";
  const bph = leadership.slice(0, 3);
  const heads = leadership.slice(3);

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero leadership-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>06</span><p>{isId ? "Kepengurusan" : "Leadership"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Periode 2026/2027" : "Term 2026/2027"}</p>
              <h1>{isId ? "Struktur yang jelas. Tanggung jawab yang terbuka." : "Clear structure. Visible responsibility."}</h1>
              <span>{isId ? "HIPMI PT UIN Al Azhaar dipimpin oleh Badan Pengurus Harian bersama enam kepala bidang dan kompartemen kerja di bawahnya." : "HIPMI PT UIN Al Azhaar is led by its executive board alongside six division heads and their operating compartments."}</span>
            </div>
          </div>
        </section>

        <section className="leadership-page__bph">
          <div className="shell section-heading-row">
            <div><p>{isId ? "Badan Pengurus Harian" : "Executive Board"}</p><h2>{isId ? "Tiga peran inti organisasi." : "Three core organizational roles."}</h2></div>
            <span>{isId ? "Foto mengikuti nama file resmi di public/photos." : "Photos follow the canonical filenames in public/photos."}</span>
          </div>
          <div className="shell leadership-page__bph-grid">
            {bph.map((leader, index) => {
              const filename = getPortrait(leader.portraitKey);
              return (
                <article key={leader.name} className="leader-profile-card leader-profile-card--bph">
                  <div className="leader-profile-card__photo">
                    {filename ? <PhotoSlot src={photoPath(filename)} filename={filename} alt={`${leader.name} — ${leader.role}`} sizes="(max-width: 820px) 100vw, 33vw" objectPosition="center top" /> : null}
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="leader-profile-card__body"><p>{leader.role}</p><h3>{leader.name}</h3></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="leadership-page__heads">
          <div className="shell section-heading-row section-heading-row--dark">
            <div><p>{isId ? "Enam bidang" : "Six divisions"}</p><h2>{isId ? "Kepala bidang menghubungkan arah organisasi dengan pekerjaan harian." : "Division heads connect organizational direction with day-to-day execution."}</h2></div>
            <span>{isId ? "Setiap bidang memiliki kepala bidang, tiga kompartemen, dan ruang kerja yang spesifik." : "Each division has a division head, three compartments, and a distinct operating scope."}</span>
          </div>

          <div className="shell leadership-page__heads-grid">
            {heads.map((leader, index) => {
              const filename = getPortrait(leader.portraitKey);
              const division = divisions[index];
              return (
                <article className="division-card" key={leader.name} id={division.id}>
                  <div className="division-card__head">
                    <div className="division-card__photo">
                      {filename ? <PhotoSlot src={photoPath(filename)} filename={filename} alt={`${leader.name} — Kepala Bidang ${division.name}`} sizes="(max-width: 820px) 100vw, 32vw" objectPosition="center top" /> : null}
                    </div>
                    <div className="division-card__identity">
                      <span>0{index + 1}</span>
                      <p>{isId ? "Kepala Bidang" : "Division Head"}</p>
                      <h3>{leader.name}</h3>
                      <strong>{division.name}</strong>
                    </div>
                  </div>
                  <div className="division-card__members">
                    <p>{isId ? "Kompartemen" : "Compartments"}</p>
                    {division.members.map((member, memberIndex) => (
                      <div key={`${division.id}-${member.compartment}`}>
                        <span>{String(memberIndex + 1).padStart(2, "0")}</span>
                        <strong>{member.compartment}</strong>
                        <p>{member.name}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="inner-cta">
          <div className="shell inner-cta__grid">
            <p>{isId ? "Kenali cara kerja" : "Understand the operating model"}</p>
            <h2>{isId ? "Lihat program yang dijalankan melalui struktur ini." : "Explore the programs carried through this structure."}</h2>
            <Link className="cta-primary" href={`/programs?lang=${locale}`}><span>{isId ? "Lihat program" : "View programs"}</span><span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
