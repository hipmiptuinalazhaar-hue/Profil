import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Program Unggulan",
  description: "DigiFin Academy, program unggulan HIPMI PT UIN Al Azhaar Lubuklinggau untuk literasi keuangan, investasi, pengembangan bisnis, dan jejaring.",
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
              <h1>{isId ? "Satu program unggulan untuk belajar, membangun, dan bertumbuh." : "One flagship program to learn, build, and grow."}</h1>
              <span>{isId ? "DigiFin Academy menghubungkan literasi keuangan, investasi, kewirausahaan digital, dan jejaring dalam satu jalur pengembangan anggota." : "DigiFin Academy connects financial literacy, investing, digital entrepreneurship, and networking in one member-development pathway."}</span>
            </div>
          </div>
        </section>

        <section className="programs-catalog">
          <div className="shell programs-catalog__intro">
            <p>{isId ? "Portofolio program" : "Program portfolio"}</p>
            <h2>{isId ? "DigiFin Academy" : "DigiFin Academy"}</h2>
          </div>
          <div className="shell programs-catalog__list">
            <article className="program-card program-card--featured">
              <div className="program-card__topline">
                <span>01</span>
                <p>{isId ? "PROGRAM UNGGULAN" : "FLAGSHIP PROGRAM"}</p>
              </div>
              <h3>DigiFin Academy</h3>
              <p>{isId
                ? "Wadah pembelajaran dan pengembangan kompetensi anggota dalam keuangan, investasi, dan kewirausahaan digital. Kelas, klinik bisnis, pitching, serta networking menjadi bentuk kegiatan di dalam program ini, bukan program unggulan yang terpisah."
                : "A learning and capability-building hub for finance, investment, and digital entrepreneurship. Classes, business clinics, pitching, and networking are activities within this program, not separate flagship programs."}</p>
              <div className="program-focus-grid">
                <div className="program-focus">
                  <span>01</span>
                  <h4>{isId ? "Investasi & Permodalan" : "Investment & Capital"}</h4>
                  <p>{isId ? "Literasi keuangan, dasar investasi, pemahaman risiko, dan pengenalan akses pendanaan usaha." : "Financial literacy, investment fundamentals, risk awareness, and business funding pathways."}</p>
                </div>
                <div className="program-focus">
                  <span>02</span>
                  <h4>{isId ? "Pengembangan Bisnis" : "Business Development"}</h4>
                  <p>{isId ? "Pengembangan ide usaha, model bisnis, pemasaran digital, dan pengelolaan UMKM." : "Business ideas, business models, digital marketing, and MSME management."}</p>
                </div>
                <div className="program-focus">
                  <span>03</span>
                  <h4>{isId ? "Jejaring & Kolaborasi" : "Networking & Collaboration"}</h4>
                  <p>{isId ? "Mentoring, koneksi dengan pengusaha, kemitraan, dan peluang kolaborasi." : "Mentoring, entrepreneur connections, partnerships, and collaboration opportunities."}</p>
                </div>
              </div>
              <div className="program-card__footer">
                <span>{isId ? "Lihat detail DigiFin Academy" : "Explore DigiFin Academy"}</span>
                <Link href={"/programs/digifin-academy?lang=" + locale} aria-label={isId ? "Lihat detail DigiFin Academy" : "Explore DigiFin Academy"}>↗</Link>
              </div>
            </article>
          </div>
        </section>

        <section className="programs-journey">
          <div className="shell programs-journey__heading">
            <div className="section-kicker"><span>02</span><p>{isId ? "Ecosystem journey" : "Ecosystem journey"}</p></div>
            <div>
              <h2>{isId ? "Satu program, beragam bentuk kegiatan." : "One program, multiple ways to learn."}</h2>
              <p>{isId ? "Kelas, studi kasus, klinik bisnis, pitching, kunjungan usaha, dan networking menjadi aktivitas yang dipilih sesuai kebutuhan anggota serta kesiapan pelaksanaan." : "Classes, case studies, business clinics, pitching, business visits, and networking are activities selected according to member needs and delivery readiness."}</p>
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
