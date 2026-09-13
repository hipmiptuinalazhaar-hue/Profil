import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { businessEcosystemLayers } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ekosistem Bisnis",
  description: "Arsitektur ekosistem bisnis HIPMI PT UIN Al Azhaar: pemetaan usaha, pengembangan kapabilitas, akses pasar, jejaring, dan pertumbuhan.",
  path: "/business",
});

type BusinessProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function BusinessPage({ searchParams }: BusinessProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero business-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>07</span><p>{isId ? "Ekosistem bisnis" : "Business ecosystem"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Dari pemetaan menuju pertumbuhan" : "From mapping to growth"}</p>
              <h1>{isId ? "Bukan hanya daftar usaha. Sebuah sistem untuk membantu usaha bergerak." : "Not merely a business list. A system designed to help ventures move."}</h1>
              <span>{isId ? "Direktori bisnis akan menjadi pintu masuk untuk pemetaan, pembelajaran, pasar, kolaborasi, dan pengembangan usaha anggota." : "The business directory will serve as an entry point for mapping, learning, market access, collaboration, and member venture development."}</span>
            </div>
          </div>
        </section>

        <section className="business-layers">
          <div className="shell business-layers__heading">
            <p>{isId ? "Empat lapisan" : "Four layers"}</p>
            <h2>{isId ? "Usaha anggota dipandang sebagai perjalanan, bukan kartu profil yang berhenti di nama dan logo." : "Member ventures are treated as a journey, not a profile card that stops at a name and logo."}</h2>
          </div>
          <div className="shell business-layers__grid">
            {businessEcosystemLayers.map((layer, index) => (
              <article key={layer.title.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{isId ? layer.label.id : layer.label.en}</p>
                <h3>{isId ? layer.title.id : layer.title.en}</h3>
                <strong>{isId ? layer.body.id : layer.body.en}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="business-directory-state" aria-labelledby="directory-title">
          <div className="shell business-directory-state__grid">
            <div>
              <p>{isId ? "Direktori bisnis anggota" : "Member business directory"}</p>
              <h2 id="directory-title">{isId ? "Belum dipublikasikan sebelum data usaha diverifikasi." : "Not published until member-business data is verified."}</h2>
              <span>{isId ? "Kami tidak mengisi direktori dengan usaha contoh, logo palsu, omzet rekaan, atau profil yang belum dikonfirmasi. Ketika data anggota tersedia, direktori ini siap menerima nama usaha, kategori, pemilik, kanal kontak publik, status verifikasi, dan kebutuhan pengembangan." : "We do not fill the directory with sample ventures, fake logos, invented revenue, or unconfirmed profiles. Once member data is available, the directory is ready for venture name, category, owner, public contact channel, verification status, and development needs."}</span>
            </div>
            <div className="business-directory-state__schema" aria-label={isId ? "Struktur data direktori" : "Directory data structure"}>
              {[isId ? "Nama usaha" : "Business name", isId ? "Kategori" : "Category", isId ? "Pemilik" : "Owner", isId ? "Kontak publik" : "Public contact", isId ? "Status verifikasi" : "Verification status", isId ? "Kebutuhan pengembangan" : "Development needs"].map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="business-pathways">
          <div className="shell business-pathways__grid">
            <div><p>{isId ? "Jalur pengembangan" : "Development pathways"}</p><h2>{isId ? "Setiap usaha dapat masuk ke program berbeda sesuai tahapnya." : "Each venture can enter a different program based on its stage."}</h2></div>
            <div className="business-pathways__links">
              <Link href={`/programs/business-academy?lang=${locale}`}><span>01</span><strong>Business Academy</strong><i aria-hidden="true">↗</i></Link>
              <Link href={`/programs/business-incubator?lang=${locale}`}><span>02</span><strong>Business Incubator</strong><i aria-hidden="true">↗</i></Link>
              <Link href={`/programs/networking-business-expo?lang=${locale}`}><span>03</span><strong>Networking & Business Expo</strong><i aria-hidden="true">↗</i></Link>
              <Link href={`/programs/pitching-access-to-capital?lang=${locale}`}><span>04</span><strong>Pitching & Access to Capital</strong><i aria-hidden="true">↗</i></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
