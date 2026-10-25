"use client";

import { useMemo, useState } from "react";

type Props = { isId: boolean };

const articles = [
  {
    id: "pelantikan-2026", type: "internal", category: "Organisasi",
    title: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    excerpt: "Kabar organisasi tentang pelantikan dan penguatan jejaring pengusaha muda lintas kampus.",
    source: "HIPMI PT UIN Al Azhaar", href: "#galeri-pelantikan",
  },
  {
    id: "jejaring-bpc", type: "internal", category: "Kemitraan",
    title: "Membangun jejaring dengan BPC HIPMI Lubuklinggau",
    excerpt: "Kolaborasi dan jejaring organisasi membuka ruang belajar, kemitraan, serta pengembangan usaha anggota.",
    source: "HIPMI PT UIN Al Azhaar", href: "#galeri-bpc",
  },
  {
    id: "umkm-policy", type: "external", category: "UMKM",
    title: "Informasi kebijakan dan program pengembangan UMKM",
    excerpt: "Ikuti informasi kebijakan, program, dan dukungan bagi usaha mikro, kecil, dan menengah melalui kanal resmi pemerintah.",
    source: "Kementerian UMKM", href: "https://www.kemenkopukm.go.id/",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Pelaku usaha berdiskusi dalam pertemuan bisnis",
  },
  {
    id: "financial-regulation", type: "external", category: "Keuangan",
    title: "Siaran pers dan perkembangan sektor jasa keuangan",
    excerpt: "Rujukan resmi untuk membaca pengumuman, kebijakan, literasi, dan perkembangan industri jasa keuangan.",
    source: "Otoritas Jasa Keuangan", href: "https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Default.aspx",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Grafik dan analisis data keuangan di layar",
  },
  {
    id: "monetary-economy", type: "external", category: "Ekonomi",
    title: "Publikasi ekonomi, moneter, dan sistem pembayaran",
    excerpt: "Jelajahi publikasi resmi tentang kondisi ekonomi, kebijakan moneter, dan perkembangan sistem pembayaran Indonesia.",
    source: "Bank Indonesia", href: "https://www.bi.go.id/id/publikasi/ruang-media/default.aspx",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Grafik pasar dan pergerakan ekonomi",
  },
] as const;

const topics = ["Semua topik", "Organisasi", "Kemitraan", "UMKM", "Keuangan", "Ekonomi"];

export function NewsBrowser({ isId }: Props) {
  const [kind, setKind] = useState("semua");
  const [topic, setTopic] = useState("Semua topik");
  const [search, setSearch] = useState("");

  const visible = useMemo(() => articles.filter((item) => {
    const kindMatch = kind === "semua" || item.type === kind;
    const topicMatch = topic === "Semua topik" || item.category === topic;
    const query = search.trim().toLocaleLowerCase();
    const searchMatch = !query || [item.title, item.excerpt, item.category, item.source].some((value) => value.toLocaleLowerCase().includes(query));
    return kindMatch && topicMatch && searchMatch;
  }), [kind, topic, search]);

  return (
    <section className="news-hub" aria-labelledby="news-hub-title">
      <div className="shell">
        <div className="news-hub__intro">
          <p>{isId ? "Pusat media HIPMI PT" : "HIPMI PT media center"}</p>
          <h2 id="news-hub-title">{isId ? "Berita internal dan kabar bisnis pilihan." : "Internal updates and selected business news."}</h2>
          <span>{isId ? "Berita dan galeri kini dipisahkan. Berita eksternal menampilkan foto ilustrasi, judul, ringkasan, serta tautan menuju penerbit aslinya." : "News and gallery are separated. External news cards show an image, headline, summary, and a link to the original publisher."}</span>
        </div>
        <nav className="news-hub__tabs" aria-label={isId ? "Navigasi media" : "Media navigation"}>
          <a href="#berita-internal" onClick={() => setKind("internal")}>{isId ? "Berita Internal" : "Internal News"}</a>
          <a href="#berita-eksternal" onClick={() => setKind("external")}>{isId ? "Berita Eksternal" : "External News"}</a>
          <a href="#galeri-dokumentasi">{isId ? "Galeri Dokumentasi" : "Photo Gallery"}</a>
        </nav>
        <div className="news-hub__tools">
          <div className="news-hub__filters" role="group" aria-label={isId ? "Filter jenis berita" : "Filter news type"}>
            {[[ "semua", isId ? "Semua berita" : "All news" ], [ "internal", "Internal" ], [ "external", isId ? "Eksternal" : "External" ]].map(([value, label]) => (
              <button key={value} type="button" className={kind === value ? "is-active" : ""} onClick={() => setKind(value)}>{label}</button>
            ))}
          </div>
          <div className="news-hub__search-tools">
            <label className="news-hub__topic"><span>{isId ? "Topik" : "Topic"}</span><select value={topic} onChange={(event) => setTopic(event.target.value)}>{topics.map((value) => <option key={value} value={value}>{isId ? value : ({ "Semua topik": "All topics", Organisasi: "Organization", Kemitraan: "Partnership", UMKM: "MSMEs", Keuangan: "Finance", Ekonomi: "Economy" } as Record<string, string>)[value]}</option>)}</select></label>
            <label className="news-hub__search"><span className="sr-only">{isId ? "Cari berita" : "Search news"}</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={isId ? "Cari berita…" : "Search news…"} /><span className="news-hub__count">{visible.length}</span></label>
          </div>
        </div>
        <div id="berita-internal" className="news-hub__result-line"><span>{isId ? "PUBLIKASI" : "PUBLICATIONS"}</span><span>{String(visible.length).padStart(2, "0")} {isId ? "artikel" : "articles"}</span></div>
        {visible.length ? <div className="news-hub__cards">{visible.map((item, index) => (
          <article className="news-hub__card" key={item.id} id={item.type === "external" ? "berita-eksternal" : undefined}>
            <a className={"news-hub__cover news-hub__cover--" + item.type} href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined} aria-label={item.title}>
              {"image" in item ? <img src={item.image} alt={item.imageAlt} loading="lazy" /> : <span className="news-hub__cover-index">{String(index + 1).padStart(2, "0")}</span>}
              <span className="news-hub__cover-type">{item.type === "internal" ? (isId ? "BERITA INTERNAL" : "INTERNAL NEWS") : (isId ? "BERITA EKSTERNAL" : "EXTERNAL NEWS")}</span><span className="news-hub__cover-arrow">↗</span>
            </a>
            <div className="news-hub__card-copy">
              <div className="news-hub__meta"><span>{item.category}</span><span>{item.source}</span></div>
              <h3><a href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined}>{item.title}</a></h3>
              <p>{item.excerpt}</p>
              <div className="news-hub__card-foot"><span>{item.source}</span><a href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined}>{item.type === "internal" ? (isId ? "Lihat galeri" : "View gallery") : (isId ? "Baca di sumber asli" : "Read at source")} ↗</a></div>
            </div>
          </article>
        ))}</div> : <div className="news-hub__empty"><h3>{isId ? "Tidak ada berita yang cocok." : "No matching news."}</h3><p>{isId ? "Coba kata kunci atau filter topik lain." : "Try another search term or topic filter."}</p><button type="button" onClick={() => { setKind("semua"); setTopic("Semua topik"); setSearch(""); }}>{isId ? "Hapus filter" : "Clear filters"}</button></div>}
        <p className="news-hub__disclaimer">{isId ? "Catatan: kartu eksternal mengarah ke kanal resmi penerbit. Foto eksternal adalah foto ilustrasi, bukan foto yang diklaim berasal dari artikel tertentu. Untuk menampilkan berita aktual per artikel, tambahkan tautan artikel spesifik dan foto resminya." : "Note: external cards link to official publisher channels. Images are illustrative and are not claimed to be photographs from a specific article. For individual current stories, add the specific article URL and its official image."}</p>
      </div>
    </section>
  );
}
