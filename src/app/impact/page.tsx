import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { evidencePrinciples, verifiedBaseline } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dampak",
  description: "Baseline terverifikasi, prinsip pengukuran, dan kerangka bukti dampak HIPMI PT UIN Al Azhaar Lubuklinggau.",
  path: "/impact",
});

type ImpactProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function ImpactPage({ searchParams }: ImpactProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero impact-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>07</span><p>{isId ? "Dampak" : "Impact"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Evidence before applause" : "Evidence before applause"}</p>
              <h1>{isId ? "Dampak harus bisa dijelaskan, ditelusuri, dan dibuktikan." : "Impact should be explainable, traceable, and provable."}</h1>
              <span>{isId ? "Halaman ini memisahkan baseline organisasi, target, aktivitas, keluaran, dan hasil. Kami tidak menampilkan angka pencapaian yang belum memiliki dasar verifikasi." : "This page separates organizational baseline, targets, activities, outputs, and outcomes. We do not publish achievement figures that lack a verifiable basis."}</span>
            </div>
          </div>
        </section>

        <section className="impact-baseline">
          <div className="shell impact-baseline__heading"><p>{isId ? "Baseline terverifikasi" : "Verified baseline"}</p><h2>{isId ? "Fakta organisasi yang sudah bisa dipublikasikan hari ini." : "Organizational facts that can already be published today."}</h2></div>
          <div className="shell impact-baseline__grid">
            {verifiedBaseline.map((item, index) => (
              <article key={item.label.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.value}</strong><p>{isId ? item.label.id : item.label.en}</p></article>
            ))}
          </div>
          <div className="shell impact-baseline__note">{isId ? "Catatan: angka di atas adalah baseline struktur, bukan klaim keberhasilan program." : "Note: the figures above are structural baseline facts, not claims of program success."}</div>
        </section>

        <section className="impact-evidence">
          <div className="shell impact-evidence__grid">
            <div><p>{isId ? "Standar bukti" : "Evidence standard"}</p><h2>{isId ? "Tiga aturan sebelum sebuah capaian masuk ke halaman publik." : "Three rules before an achievement enters the public record."}</h2></div>
            <div className="impact-evidence__items">
              {evidencePrinciples.map((principle, index) => (
                <article key={principle.title.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{isId ? principle.title.id : principle.title.en}</h3><p>{isId ? principle.body.id : principle.body.en}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-framework">
          <div className="shell impact-framework__heading"><p>{isId ? "Kerangka pengukuran" : "Measurement framework"}</p><h2>{isId ? "Dari kegiatan menuju hasil, tanpa melompati tahap bukti." : "From activity to outcome, without skipping the evidence chain."}</h2></div>
          <div className="shell impact-framework__flow">
            {[
              [isId ? "Aktivitas" : "Activity", isId ? "Kelas, forum, mentoring, expo, visit, atau inkubasi." : "Classes, forums, mentoring, expos, visits, or incubation."],
              [isId ? "Keluaran" : "Output", isId ? "Peserta, sesi, materi, usaha terpetakan, atau kolaborasi yang terdokumentasi." : "Participants, sessions, materials, mapped ventures, or documented collaboration."],
              [isId ? "Perubahan" : "Change", isId ? "Kemampuan, keputusan, jaringan, validasi, atau akses yang benar-benar berubah." : "Capabilities, decisions, networks, validation, or access that demonstrably changes."],
              [isId ? "Dampak" : "Impact", isId ? "Perubahan yang bertahan dan relevan bagi anggota, usaha, atau ekosistem." : "Sustained change that matters for members, ventures, or the ecosystem."],
            ].map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="inner-cta">
          <div className="shell inner-cta__grid">
            <p>{isId ? "Lihat sumber publik" : "See public evidence"}</p>
            <h2>{isId ? "Dokumentasi resmi menjadi salah satu lapisan bukti kegiatan organisasi." : "Official documentation forms one layer of evidence for organizational activity."}</h2>
            <Link className="cta-primary" href={`/media?lang=${locale}`}><span>{isId ? "Buka media" : "Open media"}</span><span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
