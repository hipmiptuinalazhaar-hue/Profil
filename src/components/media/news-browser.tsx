"use client";

import { useMemo, useState } from "react";

type Props = { isId: boolean };

const articles = [
  {
    id: "pelantikan-2026",
    type: "internal",
    category: "Organisasi",
    date: "2026-08-01",
    title: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    excerpt: "Dokumentasi dan kabar organisasi seputar pelantikan serta penguatan jejaring pengusaha muda lintas kampus.",
    href: "#media-pelantikan",
  },
  {
    id: "jejaring-bpc",
    type: "internal",
    category: "Kemitraan",
    date: "2026-10-01",
    title: "Membangun jejaring dengan BPC HIPMI Lubuklinggau",
    excerpt: "Jejaring organisasi menjadi salah satu jalur untuk membuka ruang belajar, kolaborasi, dan pengembangan usaha anggota.",
    href: "#media-bpc",
  },
  {
    id: "umkm-policy",
    type: "external",
    category: "UMKM",
    date: "2026-10-01",
    title: "Pantau kebijakan dan program pengembangan UMKM",
    excerpt: "Ikuti informasi resmi, kebijakan, dan program yang berkaitan dengan penguatan usaha mikro, kecil, dan menengah.",
    source: "Kementerian UMKM",
    href: "https://www.kemenkopukm.go.id/",
  },
  {
    id: "financial-regulation",
    type: "external",
    category: "Keuangan",
    date: "2026-10-01",
    title: "Informasi regulasi dan perkembangan jasa keuangan",
    excerpt: "Rujukan resmi untuk mengikuti kebijakan, literasi, dan perkembangan sektor jasa keuangan dari penerbit aslinya.",
    source: "Otoritas Jasa Keuangan",
    href: "https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Default.aspx",
  },
  {
    id: "monetary-economy",
    type: "external",
    category: "Ekonomi",
    date: "2026-10-01",
    title: "Perkembangan ekonomi dan sistem pembayaran",
    excerpt: "Pantau publikasi Bank Indonesia mengenai ekonomi, kebijakan moneter, dan sistem pembayaran.",
    source: "Bank Indonesia",
    href: "https://www.bi.go.id/id/publikasi/ruang-media/default.aspx",
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
    const searchMatch = !query || [item.title, item.excerpt, item.category, "source" in item ? item.source : ""].some((value) => value.toLocaleLowerCase().includes(query));
    return kindMatch && topicMatch && searchMatch;
  }), [kind, topic, search]);

  const dateLabel = (date: string) => new Intl.DateTimeFormat(isId ? "id-ID" : "en-US", { day: "numeric", month: "short", year: "numeric" }).format(new Date(date + "T12:00:00"));

  return (
    <section className="news-hub" aria-labelledby="news-hub-title">
      <div className="shell">
        <div className="news-hub__intro">
          <p>{isId ? "Pusat media HIPMI PT" : "HIPMI PT media center"}</p>
          <h2 id="news-hub-title">{isId ? "Berita, perkembangan bisnis, dan cerita organisasi." : "News, business developments, and organization stories."}</h2>
          <span>{isId ? "Jelajahi kabar internal, pantauan eksternal dari sumber asli, dan dokumentasi kegiatan dalam satu ruang editorial." : "Explore internal updates, external coverage from original sources, and event documentation in one editorial space."}</span>
        </div>
        <div className="news-hub__tools">
          <div className="news-hub__filters" role="group" aria-label={isId ? "Filter jenis berita" : "Filter news type"}>
            {[["semua", isId ? "Semua berita" : "All news"], ["internal", isId ? "Internal" : "Internal"], ["external", isId ? "Eksternal" : "External"]].map(([value, label]) => (
              <button key={value} type="button" className={kind === value ? "is-active" : ""} onClick={() => setKind(value)}>{label}</button>
            ))}
          </div>
          <div className="news-hub__search-tools">
            <label className="news-hub__topic"><span>{isId ? "Topik" : "Topic"}</span><select value={topic} onChange={(event) => setTopic(event.target.value)}>{topics.map((value) => <option key={value} value={value}>{isId ? value : ({ "Semua topik": "All topics", Organisasi: "Organization", Kemitraan: "Partnership", UMKM: "MSMEs", Keuangan: "Finance", Ekonomi: "Economy" } as Record<string, string>)[value]}</option>)}</select></label>
            <label className="news-hub__search"><span className="sr-only">{isId ? "Cari berita" : "Search news"}</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={isId ? "Cari berita…" : "Search news…"} /><span className="news-hub__count">{visible.length}</span></label>
          </div>
        </div>
        <div className="news-hub__result-line"><span>{isId ? "HASIL PUBLIKASI" : "PUBLICATION RESULTS"}</span><span>{String(visible.length).padStart(2, "0")} {isId ? "artikel" : "articles"}</span></div>
        {visible.length ? <div className="news-hub__cards">{visible.map((item, index) => (
          <article className="news-hub__card" key={item.id}>
            <a className={"news-hub__cover news-hub__cover--" + item.type} href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined} aria-label={item.title}>
              <span className="news-hub__cover-index">{String(index + 1).padStart(2, "0")}</span><span className="news-hub__cover-type">{item.type === "internal" ? (isId ? "BERITA INTERNAL" : "INTERNAL NEWS") : (isId ? "SUMBER EKSTERNAL" : "EXTERNAL SOURCE")}</span><span className="news-hub__cover-arrow">↗</span>
            </a>
            <div className="news-hub__card-copy">
              <div className="news-hub__meta"><span>{item.category}</span><span>{dateLabel(item.date)}</span></div>
              <h3><a href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined}>{item.title}</a></h3>
              <p>{item.excerpt}</p>
              <div className="news-hub__card-foot"><span>{item.type === "internal" ? (isId ? "HIPMI PT UIN Al Azhaar" : "HIPMI PT UIN Al Azhaar") : ("source" in item ? item.source : "")}</span><a href={item.href} target={item.type === "external" ? "_blank" : undefined} rel={item.type === "external" ? "noreferrer" : undefined}>{item.type === "internal" ? (isId ? "Lihat dokumentasi" : "View documentation") : (isId ? "Buka sumber asli" : "Open original source")} ↗</a></div>
            </div>
          </article>
        ))}</div> : <div className="news-hub__empty"><h3>{isId ? "Tidak ada berita yang cocok." : "No matching news."}</h3><p>{isId ? "Coba kata kunci atau filter topik lain." : "Try another search term or topic filter."}</p><button type="button" onClick={() => { setKind("semua"); setTopic("Semua topik"); setSearch(""); }}>{isId ? "Hapus filter" : "Clear filters"}</button></div>}
        <p className="news-hub__disclaimer">{isId ? "Catatan editorial: tautan eksternal membuka situs penerbit asli. Tanggal pada tautan rujukan merupakan tanggal pencatatan sumber di halaman ini, bukan tanggal publikasi artikel tertentu." : "Editorial note: external links open the original publisher websites. Dates on source links indicate when the source was recorded here, not the publication date of a specific article."}</p>
      </div>
    </section>
  );
}
