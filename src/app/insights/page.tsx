import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { insightPlaybooks } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Wawasan",
  description: "Wawasan dan playbook praktis HIPMI PT UIN Al Azhaar tentang validasi usaha, pitching, networking, dan pengembangan bisnis.",
  path: "/insights",
});

type InsightsProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function InsightsPage({ searchParams }: InsightsProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero insights-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>07</span><p>{isId ? "Wawasan" : "Insights"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Practical knowledge" : "Practical knowledge"}</p>
              <h1>{isId ? "Materi yang membantu anggota berpikir lebih tajam, bukan sekadar membaca lebih banyak." : "Knowledge designed to sharpen decisions, not merely increase reading."}</h1>
              <span>{isId ? "Wawasan publik difokuskan pada kerangka berpikir praktis yang dapat dipakai saat membangun usaha, menyusun pitch, dan membangun jaringan." : "Public insights focus on practical thinking frameworks that can be used when building ventures, preparing pitches, and developing networks."}</span>
            </div>
          </div>
        </section>

        <section className="insight-playbooks">
          <div className="shell insight-playbooks__heading"><p>{isId ? "Playbook terbuka" : "Open playbooks"}</p><h2>{isId ? "Tiga prinsip yang bisa langsung dipakai." : "Three principles you can apply immediately."}</h2></div>
          <div className="shell insight-playbooks__list">
            {insightPlaybooks.map((playbook, index) => {
              const points = isId ? playbook.points.id : playbook.points.en;
              return (
                <article key={playbook.id} id={playbook.id}>
                  <div className="insight-playbooks__index"><span>{String(index + 1).padStart(2, "0")}</span><p>HIPMI PT PLAYBOOK</p></div>
                  <div className="insight-playbooks__copy"><h2>{isId ? playbook.title.id : playbook.title.en}</h2><p>{isId ? playbook.summary.id : playbook.summary.en}</p></div>
                  <ol>{points.map((point, pointIndex) => <li key={point}><span>{String(pointIndex + 1).padStart(2, "0")}</span><strong>{point}</strong></li>)}</ol>
                </article>
              );
            })}
          </div>
        </section>

        <section className="insight-standard">
          <div className="shell insight-standard__grid">
            <div><p>{isId ? "Standar editorial" : "Editorial standard"}</p><h2>{isId ? "Konten tidak dibuat untuk mengejar volume." : "Content is not produced to chase volume."}</h2></div>
            <div>
              <p>{isId ? "Materi HIPMI PT harus relevan dengan kebutuhan pengusaha muda kampus, membedakan opini dan fakta, tidak mengarang statistik, dan tidak menjanjikan hasil yang tidak bisa dijamin." : "HIPMI PT material must be relevant to young campus entrepreneurs, distinguish opinion from fact, avoid invented statistics, and never promise outcomes that cannot be guaranteed."}</p>
              <span>{isId ? "Khusus materi investasi, konten bersifat edukasi umum dan bukan rekomendasi investasi personal." : "Investment-related material is general education and not personal investment advice."}</span>
            </div>
          </div>
        </section>

        <section className="inner-cta">
          <div className="shell inner-cta__grid"><p>{isId ? "Belajar lewat program" : "Learn through programs"}</p><h2>{isId ? "Wawasan menjadi lebih bernilai ketika diuji dalam praktik." : "Knowledge becomes more valuable when it is tested in practice."}</h2><Link className="cta-primary" href={`/programs/business-academy?lang=${locale}`}><span>Business Academy</span><span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
