import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import { siteConfig, type SiteLocale } from "@/config/site";
import { institutionalValues, networkAffiliations } from "@/content/institutional";
import { missions } from "@/content/organization";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang HIPMI PT",
  description: "Profil, visi, misi, nilai, dan jejaring HIPMI PT UIN Al Azhaar Lubuklinggau.",
  path: "/about",
});

const englishMissions = [
  "Deliver relevant, practical entrepreneurship education and training.",
  "Build direct mentorship with practitioners and entrepreneurs.",
  "Open collaboration networks across students, entrepreneurs, government, university stakeholders, investors, and communities.",
  "Help students improve the scale and quality of their businesses.",
  "Build a sustainable campus young-entrepreneur ecosystem.",
] as const;

type AboutProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function AboutPage({ searchParams }: AboutProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";
  const missionItems = isId ? missions : englishMissions;

  return (
    <div className="phase-three inner-page" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light">
              <span>01</span>
              <p>{isId ? "Tentang HIPMI PT" : "About HIPMI PT"}</p>
            </div>
            <div className="inner-hero__copy">
              <p>Institutional profile · 2026/2027</p>
              <h1>{isId ? siteConfig.positioning : siteConfig.positioningEn}</h1>
              <span>{isId ? siteConfig.legalName : "The university chapter of Indonesia's young entrepreneur ecosystem at Universitas Islam Nusantara Al Azhaar Lubuklinggau."}</span>
            </div>
          </div>
        </section>

        <section className="about-manifesto">
          <div className="shell about-manifesto__grid">
            <div>
              <p>{isId ? "Posisi kami" : "Our position"}</p>
              <h2>{isId ? "Organisasi harus memberi anggota lebih dari sekadar agenda." : "An organization should give members more than an event calendar."}</h2>
            </div>
            <div className="about-manifesto__body">
              <p>{isId ? "HIPMI PT UIN Al Azhaar dibangun sebagai ruang belajar, jejaring, pengembangan usaha, dan kolaborasi. Fokusnya adalah membantu mahasiswa mengubah pengetahuan menjadi tindakan, relasi menjadi peluang, dan kegiatan menjadi proses pertumbuhan yang lebih berkelanjutan." : "HIPMI PT UIN Al Azhaar is built as a platform for learning, networks, venture development, and collaboration. Its focus is helping students turn knowledge into action, relationships into opportunity, and activities into a more sustainable growth process."}</p>
              <p>{isId ? "Karena itu, setiap program harus punya fungsi yang jelas bagi anggota atau ekosistem. Setiap kolaborasi harus memiliki konteks. Setiap klaim dampak harus dapat dibuktikan." : "That is why every program must have a clear function for members or the ecosystem. Every collaboration needs context. Every impact claim must be verifiable."}</p>
            </div>
          </div>
        </section>

        <section className="about-direction">
          <div className="shell about-direction__grid">
            <div className="about-vision">
              <p>{isId ? "Visi" : "Vision"}</p>
              <h2>“{isId ? siteConfig.vision : siteConfig.visionEn}”</h2>
            </div>
            <div className="about-missions">
              <p>{isId ? "Misi" : "Mission"}</p>
              <ol>
                {missionItems.map((mission, index) => (
                  <li key={mission}><span>{String(index + 1).padStart(2, "0")}</span><p>{mission}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="shell about-values__heading">
            <div className="section-kicker"><span>02</span><p>{isId ? "Nilai kerja" : "Operating values"}</p></div>
            <h2>{isId ? "Cara kami ingin bekerja, bukan sekadar kata di dinding." : "How we intend to work, not words for a wall."}</h2>
          </div>
          <div className="shell about-values__grid">
            {institutionalValues.map((value, index) => (
              <article key={value.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{isId ? value.id : value.en}</h3>
                <p>{isId ? value.idBody : value.enBody}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-network">
          <div className="shell about-network__grid">
            <div>
              <p>{isId ? "Jejaring" : "Network"}</p>
              <h2>{isId ? "Terhubung tanpa mengarang status kemitraan." : "Connected without inventing partnership status."}</h2>
              <span>{isId ? "Daftar berikut merepresentasikan jejaring dan afiliasi ekosistem yang relevan, bukan otomatis berarti hubungan kemitraan formal." : "The following represents relevant ecosystem networks and affiliations, not automatic claims of formal partnership."}</span>
            </div>
            <div>
              {networkAffiliations.map((item) => (
                <div className="about-network__row" key={item.name}><strong>{item.name}</strong><span>{isId ? item.scope.id : item.scope.en}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="inner-cta">
          <div className="shell inner-cta__grid">
            <p>{isId ? "Berikutnya" : "Next"}</p>
            <h2>{isId ? "Lihat bagaimana visi ini diterjemahkan menjadi program." : "See how this vision becomes a program architecture."}</h2>
            <Link className="cta-primary" href={`/programs?lang=${locale}`}><span>{isId ? "Jelajahi program" : "Explore programs"}</span><span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
