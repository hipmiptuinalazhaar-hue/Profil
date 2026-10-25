import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Program Unggulan",
  description: "DIGIFIN ACADEMY, program unggulan HIPMI PT UIN Al Azhaar Lubuklinggau untuk literasi keuangan, investasi, pengembangan bisnis, dan jejaring.",
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
              <p>{isId ? "RANCANGAN PROGRAM · PERIODE 2026/2027" : "RANCANGAN PROGRAM · PERIODE 2026/2027"}</p>
              <h1>{isId ? "Satu program unggulan untuk belajar, membangun, dan bertumbuh." : "One flagship program to learn, build, and grow."}</h1>
              <span>{isId ? "DIGIFIN ACADEMY dirancang untuk memperkuat literasi keuangan, pemahaman investasi, keterampilan kewirausahaan digital, serta jejaring kolaborasi anggota." : "DIGIFIN ACADEMY connects financial literacy, investing, digital entrepreneurship, and networking in one member-development pathway."}</span>
            </div>
          </div>
        </section>

        <section className="programs-catalog">
          <div className="shell programs-catalog__intro">
            <p>{isId ? "Portofolio program" : "Program portfolio"}</p>
            <h2>{isId ? "DIGIFIN ACADEMY" : "DIGIFIN ACADEMY"}</h2>
          </div>
          <div className="shell programs-catalog__list">
            <article className="program-card program-card--featured">
              <div className="program-card__topline">
                <span>01</span>
                <p>{isId ? "PROGRAM UNGGULAN" : "FLAGSHIP PROGRAM"}</p>
              </div>
              <h3>DIGIFIN ACADEMY</h3>
              <p>{isId
                ? "Program pengembangan kompetensi anggota yang berfokus pada literasi keuangan, investasi, dan kewirausahaan digital. Kegiatannya dapat mencakup kelas pembelajaran, klinik bisnis, presentasi rencana usaha, dan penguatan jejaring sesuai kebutuhan serta kesiapan pelaksanaan."
                : "A learning and capability-building hub for finance, investment, and digital entrepreneurship. Classes, business clinics, pitching, and networking are activities within this program, not separate flagship programs."}</p>
              <div className="program-focus-grid">
                <div className="program-focus">
                  <span>01</span>
                  <h4>{isId ? "Investasi & Permodalan" : "Investment & Capital"}</h4>
                  <p>{isId ? "Memahami pengelolaan keuangan, prinsip dasar investasi, risiko, serta alternatif pendanaan usaha." : "Financial literacy, investment fundamentals, risk awareness, and business funding pathways."}</p>
                </div>
                <div className="program-focus">
                  <span>02</span>
                  <h4>{isId ? "Pengembangan Bisnis" : "Business Development"}</h4>
                  <p>{isId ? "Mengembangkan ide dan model bisnis, strategi pemasaran digital, serta praktik pengelolaan usaha." : "Business ideas, business models, digital marketing, and MSME management."}</p>
                </div>
                <div className="program-focus">
                  <span>03</span>
                  <h4>{isId ? "Jejaring & Kolaborasi" : "Networking & Collaboration"}</h4>
                  <p>{isId ? "Memperluas akses mentoring, membangun relasi dengan pelaku usaha, dan menjajaki kemitraan." : "Mentoring, entrepreneur connections, partnerships, and collaboration opportunities."}</p>
                </div>
              </div>
              <div className="program-card__footer">
                <span>{isId ? "Lihat detail DIGIFIN ACADEMY" : "Explore DIGIFIN ACADEMY"}</span>
                <Link href={"/programs/digifin-academy?lang=" + locale} aria-label={isId ? "Lihat detail DIGIFIN ACADEMY" : "Explore DIGIFIN ACADEMY"}>↗</Link>
              </div>
            </article>
          </div>
        </section>

        <section className="programs-journey">
          <div className="shell programs-journey__heading">
            <div className="section-kicker"><span>02</span><p>{isId ? "Alur pengembangan anggota" : "Alur pengembangan anggota"}</p></div>
            <div>
              <h2>{isId ? "Pembelajaran yang berlanjut menjadi praktik." : "One program, multiple ways to learn."}</h2>
              <p>{isId ? "Kegiatan dapat berupa kelas, pembahasan studi kasus, konsultasi bisnis, presentasi usaha, kunjungan lapangan, dan forum jejaring. Pelaksanaannya disesuaikan dengan kebutuhan anggota serta kesiapan program." : "Classes, case studies, business clinics, pitching, business visits, and networking are activities selected according to member needs and delivery readiness."}</p>
            </div>
          </div>
          <div className="shell programs-journey__track">
            {(isId
              ? ["Belajar", "Menerapkan", "Menguji ide", "Membangun usaha", "Berjejaring", "Bertumbuh"]
              : ["Learn", "Apply", "Test ideas", "Build ventures", "Connect", "Grow"]
            ).map((step, index) => (
              <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
            ))}
          </div>
        </section>

        <section className="programs-principles">
          <div className="shell programs-principles__grid">
            <article><span>01</span><h3>{isId ? "Praktis" : "Practical"}</h3><p>{isId ? "Setiap kegiatan diarahkan pada penerapan pengetahuan, pengambilan keputusan yang lebih baik, atau peningkatan pengelolaan usaha." : "Learning and activities should translate into action, decisions, or venture improvement."}</p></article>
            <article><span>02</span><h3>{isId ? "Terhubung" : "Connected"}</h3><p>{isId ? "Kegiatan membuka kesempatan untuk memperoleh pengalaman, memperluas jejaring, mengenali peluang pasar, dan mengakses sumber daya yang relevan." : "Programs should expand access to experience, networks, markets, or resources."}</p></article>
            <article><span>03</span><h3>{isId ? "Terukur" : "Accountable"}</h3><p>{isId ? "Perkembangan dan hasil program dievaluasi berdasarkan data serta bukti yang dapat dipertanggungjawabkan." : "Success claims are used only when supporting data or evidence is available."}</p></article>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
