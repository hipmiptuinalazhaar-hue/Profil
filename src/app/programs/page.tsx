import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { ecosystemJourney, flagshipPrograms } from "@/content/programs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Program Unggulan",
  description: "Sembilan program unggulan HIPMI PT UIN Al Azhaar Lubuklinggau untuk pembelajaran, jejaring, pengembangan usaha, dan akses ekosistem.",
  path: "/programs",
});

type ProgramsProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function ProgramsPage({ searchParams }: ProgramsProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page programs-page" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero inner-hero--programs">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>01</span><p>{isId ? "Program unggulan" : "Flagship programs"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Program architecture · 2026/2027" : "Program architecture · 2026/2027"}</p>
              <h1>{isId ? "Sembilan jalur untuk belajar, terhubung, membangun, dan tumbuh." : "Nine pathways to learn, connect, build, and grow."}</h1>
              <span>{isId ? "Program disusun sebagai portofolio fungsi, bukan tumpukan acara. Setiap inisiatif punya peran dalam perjalanan anggota dan usaha." : "Programs are structured as a portfolio of functions, not a pile of events. Each initiative has a role in the member and venture journey."}</span>
            </div>
          </div>
        </section>

        <section className="programs-catalog">
          <div className="shell programs-catalog__intro">
            <p>{isId ? "Portofolio program" : "Program portfolio"}</p>
            <h2>{isId ? "Setiap program menjawab kebutuhan yang berbeda dalam satu ekosistem." : "Each program answers a different need within one ecosystem."}</h2>
          </div>
          <div className="shell programs-catalog__list">
            {flagshipPrograms.map((program, index) => (
              <Link className="program-card" href={`/programs/${program.slug}?lang=${locale}`} key={program.slug}>
                <div className="program-card__topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{isId ? program.cluster.id : program.cluster.en}</p>
                </div>
                <h3>{program.title}</h3>
                <p>{isId ? program.summary.id : program.summary.en}</p>
                <div className="program-card__footer">
                  <span>{isId ? "Lihat arsitektur program" : "View program architecture"}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="programs-journey">
          <div className="shell programs-journey__heading">
            <div className="section-kicker"><span>02</span><p>{isId ? "Ecosystem journey" : "Ecosystem journey"}</p></div>
            <div>
              <h2>{isId ? "Program bekerja sebagai rangkaian, bukan pulau-pulau terpisah." : "Programs work as a sequence, not isolated islands."}</h2>
              <p>{isId ? "Anggota dapat masuk dari titik yang berbeda. Namun arsitektur besarnya tetap mengarahkan mereka dari komunitas menuju usaha yang semakin matang." : "Members can enter at different points, while the overall architecture still moves them from community toward increasingly mature ventures."}</p>
            </div>
          </div>
          <div className="shell programs-journey__track">
            {ecosystemJourney.map((step, index) => (
              <div key={step.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{isId ? step.id : step.en}</strong></div>
            ))}
          </div>
        </section>

        <section className="programs-principles">
          <div className="shell programs-principles__grid">
            <article><span>01</span><h3>{isId ? "Praktis" : "Practical"}</h3><p>{isId ? "Materi dan aktivitas harus bisa diterjemahkan menjadi tindakan, keputusan, atau perbaikan usaha." : "Learning and activities should translate into action, decisions, or venture improvement."}</p></article>
            <article><span>02</span><h3>{isId ? "Terhubung" : "Connected"}</h3><p>{isId ? "Program harus memperluas akses pada pengalaman, jejaring, peluang pasar, atau sumber daya." : "Programs should expand access to experience, networks, markets, or resources."}</p></article>
            <article><span>03</span><h3>{isId ? "Terukur" : "Accountable"}</h3><p>{isId ? "Klaim keberhasilan baru digunakan ketika tersedia data atau bukti yang dapat dipertanggungjawabkan." : "Success claims are used only when supporting data or evidence is available."}</p></article>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
