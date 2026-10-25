import type { Metadata } from "next";
import { PhotoSlot } from "@/components/media/photo-slot";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { photoManifest, photoPath } from "@/data/photo-manifest";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Media & Dokumentasi",
  description: "Dokumentasi resmi HIPMI PT UIN Al Azhaar Lubuklinggau yang terhubung dengan folder foto kanonis di repository.",
  path: "/media",
});

type MediaProps = { searchParams: Promise<{ lang?: string | string[] }> };

type Collection = {
  key: string;
  titleId: string;
  titleEn: string;
  metaId: string;
  metaEn: string;
  files: readonly string[];
};

const collections: readonly Collection[] = [
  {
    key: "pelantikan",
    titleId: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    titleEn: "2026 Grand Inauguration of HIPMI PT Campuses across Linggau Raya",
    metaId: "Dokumentasi organisasi · 9 slot foto",
    metaEn: "Organization documentation · 9 photo slots",
    files: photoManifest.documentation.pelantikan2026,
  },
  {
    key: "bpc",
    titleId: "Jejaring BPC HIPMI Lubuklinggau",
    titleEn: "BPC HIPMI Lubuklinggau network",
    metaId: "Dokumentasi jejaring · 3 slot foto",
    metaEn: "Network documentation · 3 photo slots",
    files: photoManifest.documentation.bpcHipmiLubuklinggau,
  },
  {
    key: "pemkot",
    titleId: "Dokumentasi bersama Pemerintah Kota Lubuklinggau",
    titleEn: "Documentation with the Lubuklinggau City Government",
    metaId: "Dokumentasi institusional · 3 slot foto",
    metaEn: "Institutional documentation · 3 photo slots",
    files: photoManifest.documentation.pemkotLubuklinggau,
  },
] as const;

export default async function MediaPage({ searchParams }: MediaProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero media-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>07</span><p>{isId ? "Media & dokumentasi" : "Media & documentation"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Repository-backed gallery" : "Repository-backed gallery"}</p>
              <h1>{isId ? "Dokumentasi resmi, dengan nama file yang sudah ditetapkan." : "Official documentation, with canonical filenames already defined."}</h1>
              <span>{isId ? "Foto tidak dibenamkan ke kode. Anda cukup mengunggah file ke public/photos dengan nama yang sudah dicatat, lalu slot terkait akan menampilkannya otomatis." : "Photos are not embedded into source code. Upload each file into public/photos using its canonical name and the matching slot will display it automatically."}</span>
            </div>
          </div>
        </section>

        <section className="news-hub" aria-labelledby="news-hub-title">
          <div className="shell">
            <nav className="news-hub__tabs" aria-label={isId ? "Kategori media" : "Media categories"}>
              <a href="#internal-news-title">{isId ? "Berita Internal" : "Internal News"}</a>
              <a href="#external-news-title">{isId ? "Berita Eksternal" : "External News"}</a>
              <a href="#media-pelantikan">{isId ? "Galeri" : "Gallery"}</a>
            </nav>
            <div className="news-hub__intro">
              <p>{isId ? "Ruang redaksi HIPMI PT" : "HIPMI PT newsroom"}</p>
              <h2 id="news-hub-title">{isId ? "Berita internal dan pantauan eksternal, dalam satu ruang." : "Internal updates and external coverage, in one place."}</h2>
              <span>{isId ? "Informasi organisasi dipisahkan dari berita pihak luar agar sumber, konteks, dan tanggung jawab editorial tetap jelas." : "Organization updates are separated from third-party coverage so sources, context, and editorial responsibility stay clear."}</span>
            </div>
            <div className="news-hub__grid">
              <section className="news-hub__column" id="berita-internal" aria-labelledby="internal-news-title">
                <div className="news-hub__column-head"><span>01 / {isId ? "INTERNAL" : "INTERNAL"}</span><h3 id="internal-news-title">{isId ? "Berita internal" : "Internal news"}</h3></div>
                <article className="news-hub__story">
                  <p>{isId ? "Organisasi · Dokumentasi" : "Organization · Documentation"}</p>
                  <h4>{isId ? "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026" : "2026 Grand Inauguration of HIPMI PT Campuses across Linggau Raya"}</h4>
                  <span>{isId ? "Dokumentasi kegiatan organisasi dan jejaring lintas kampus tersedia pada galeri resmi." : "Official gallery documentation is available for the organization event and inter-campus network."}</span>
                  <a href="#media-pelantikan">{isId ? "Lihat dokumentasi" : "View documentation"} <span aria-hidden="true">↗</span></a>
                </article>
                <article className="news-hub__story">
                  <p>{isId ? "Jejaring · Kemitraan" : "Network · Partnership"}</p>
                  <h4>{isId ? "Membangun jejaring dengan BPC HIPMI Lubuklinggau" : "Building a network with BPC HIPMI Lubuklinggau"}</h4>
                  <span>{isId ? "Lihat dokumentasi jejaring yang tersedia. Informasi kegiatan baru akan diterbitkan setelah diverifikasi pengurus." : "Explore available network documentation. New activity updates will be published after leadership verification."}</span>
                  <a href="#media-bpc">{isId ? "Lihat dokumentasi" : "View documentation"} <span aria-hidden="true">↗</span></a>
                </article>
              </section>
              <section className="news-hub__column news-hub__column--external" id="berita-eksternal" aria-labelledby="external-news-title">
                <div className="news-hub__column-head"><span>02 / {isId ? "EKSTERNAL" : "EXTERNAL"}</span><h3 id="external-news-title">{isId ? "Pantauan berita eksternal" : "External news watch"}</h3></div>
                <p className="news-hub__editorial-note">{isId ? "Rujukan resmi untuk mengikuti perkembangan kebijakan dan ekosistem usaha. Tautan mengarah ke penerbit asli, bukan artikel yang disalin ulang." : "Official sources for tracking policy and business ecosystem developments. Links go to the original publishers, not republished copies."}</p>
                <a className="news-hub__source" href="https://www.bi.go.id/id/publikasi/ruang-media/default.aspx" target="_blank" rel="noreferrer"><span><strong>Bank Indonesia</strong><small>{isId ? "Kebijakan moneter, sistem pembayaran, ekonomi" : "Monetary policy, payments, economy"}</small></span><b aria-hidden="true">↗</b></a>
                <a className="news-hub__source" href="https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Default.aspx" target="_blank" rel="noreferrer"><span><strong>Otoritas Jasa Keuangan</strong><small>{isId ? "Jasa keuangan, literasi, dan regulasi" : "Financial services, literacy, and regulation"}</small></span><b aria-hidden="true">↗</b></a>
                <a className="news-hub__source" href="https://www.kemenkopukm.go.id/" target="_blank" rel="noreferrer"><span><strong>{isId ? "Kementerian UMKM" : "Ministry of MSMEs"}</strong><small>{isId ? "UMKM, kewirausahaan, dan program pemerintah" : "MSMEs, entrepreneurship, and government programs"}</small></span><b aria-hidden="true">↗</b></a>
                <p className="news-hub__disclaimer">{isId ? "Sumber eksternal di atas merupakan rujukan penerbit, bukan klaim bahwa seluruh beritanya telah ditinjau atau didukung HIPMI PT." : "These are publisher sources, not a claim that every item has been reviewed or endorsed by HIPMI PT."}</p>
              </section>
            </div>
          </div>
        </section>

        <section className="media-guide">
          <div className="shell media-guide__grid">
            <div><p>{isId ? "Aturan dokumentasi" : "Documentation rule"}</p><h2>{isId ? "Wajah, konteks kegiatan, dan kebenaran dokumenter tetap dijaga." : "Faces, event context, and documentary truth stay intact."}</h2></div>
            <div><p>{isId ? "Galeri menerima foto asli tanpa mengubah wajah, pakaian, proporsi tubuh, atau konteks kegiatan. Foto yang belum tersedia tetap tampil sebagai placeholder bernama, bukan gambar palsu." : "The gallery accepts original photos without altering faces, clothing, body proportions, or event context. Missing photos remain named placeholders rather than fabricated imagery."}</p></div>
          </div>
        </section>

        {collections.map((collection, collectionIndex) => (
          <section className="media-collection" id={collectionIndex === 0 ? "media-pelantikan" : undefined} key={collection.key} aria-labelledby={`media-${collection.key}`}>
            <div className="shell media-collection__heading">
              <div><span>{String(collectionIndex + 1).padStart(2, "0")}</span><p>{isId ? collection.metaId : collection.metaEn}</p></div>
              <h2 id={`media-${collection.key}`}>{isId ? collection.titleId : collection.titleEn}</h2>
            </div>
            <div className="shell media-collection__grid">
              {collection.files.map((filename, index) => (
                <figure key={filename} className="media-photo-card">
                  <div className="media-photo-card__frame">
                    <PhotoSlot
                      src={photoPath(filename)}
                      filename={filename}
                      alt={`${isId ? collection.titleId : collection.titleEn} — ${String(index + 1).padStart(2, "0")}`}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      objectPosition="center"
                    />
                  </div>
                  <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{filename}</strong></figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
