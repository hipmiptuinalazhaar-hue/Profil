import Image from "next/image";
import { leadership, missions } from "@/content/organization";
import { flagshipPrograms } from "@/content/programs";
import { siteConfig } from "@/config/site";

const ecosystem = [
  ["01", "Members", "Mahasiswa dan pengusaha muda kampus"],
  ["02", "Businesses", "Usaha anggota yang tumbuh dari jaringan"],
  ["03", "Pasar UMKM", "Etalase commerce ecosystem HIPMI PT"],
  ["04", "Academy", "Edukasi dan penguatan kapasitas bisnis"],
  ["05", "Mentorship", "Belajar langsung dari praktisi dan pengusaha"],
  ["06", "Partnership", "Kolaborasi kampus, pemerintah, dan bisnis"],
  ["07", "Growth", "Skala usaha, jaringan, dan dampak"],
] as const;

const impactFacts = [
  ["6", "Bidang organisasi"],
  ["9", "Program unggulan"],
  ["2026/2027", "Periode kepengurusan"],
  ["Linggau Raya", "Jejaring kolaborasi"],
] as const;

const stories = [
  {
    label: "Organization",
    title: "Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
    description: "Momentum penguatan jejaring antar-HIPMI PT sekaligus ruang temu antara pengurus, kampus, pemerintah, dan ekosistem usaha.",
    image: "/assets/phase-1/documentation-mosaic.webp",
    crop: "pelantikan",
    alt: "Dokumentasi Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
  },
  {
    label: "Mentorship",
    title: "Belajar langsung bersama pengusaha senior BPC HIPMI Lubuklinggau",
    description: "Sesi sharing yang mempertemukan pengurus muda dengan pengalaman nyata membangun, mengelola, dan mengembangkan usaha.",
    image: "/assets/phase-1/documentation-mosaic.webp",
    crop: "mentorship",
    alt: "Dokumentasi sharing bersama pengusaha senior BPC HIPMI Lubuklinggau",
  },
  {
    label: "Collaboration",
    title: "Menjalin sinergi strategis bersama Pemerintah Kota Lubuklinggau",
    description: "Membangun hubungan kolaboratif untuk mendorong lahirnya lebih banyak pengusaha lokal muda yang terhubung dengan ekosistem daerah.",
    image: "/assets/phase-1/documentation-mosaic.webp",
    crop: "government",
    alt: "Dokumentasi HIPMI PT UIN Al Azhaar bersama Wali Kota Lubuklinggau",
  },
] as const;

const gallery = [
  {
    src: "/assets/phase-1/documentation-mosaic.webp",
    crop: "pelantikan",
    alt: "Foto bersama pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya",
    caption: "Pelantikan Akbar · Linggau Raya 2026",
  },
  {
    src: "/assets/phase-1/documentation-mosaic.webp",
    crop: "bazar",
    alt: "Dokumentasi Bazar UMKM pada kegiatan pelantikan HIPMI PT",
    caption: "Bazar UMKM · Entrepreneur ecosystem",
  },
  {
    src: "/assets/phase-1/documentation-mosaic.webp",
    crop: "mentorship",
    alt: "Dokumentasi sharing bersama pengusaha senior BPC HIPMI Lubuklinggau",
    caption: "Mentorship · BPC HIPMI Lubuklinggau",
  },
  {
    src: "/assets/phase-1/documentation-mosaic.webp",
    crop: "government",
    alt: "Dokumentasi sinergi bersama Pemerintah Kota Lubuklinggau",
    caption: "Strategic collaboration · Pemerintah Kota",
  },
] as const;

const chairman = leadership[0];
const executiveBoard = leadership.slice(1, 3);

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://profil.hipmiptuinalazhaar.workers.dev",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Pelita No.364, RT.07, Kelurahan Pelita Jaya",
      addressLocality: "Lubuklinggau",
      addressRegion: "Sumatera Selatan",
      postalCode: "31614",
      addressCountry: "ID",
    },
    sameAs: [siteConfig.contact.instagram],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="hero-kicker__line" />
              <span>Official Digital Headquarters</span>
              <span>Lubuklinggau · 2026/2027</span>
            </div>
            <h1 id="hero-title">Membangun generasi <em>pengusaha muda</em> kampus.</h1>
            <p className="hero-lede">
              HIPMI PT UIN Al Azhaar menjadi ruang kolaborasi, pembelajaran, networking, dan pengembangan bisnis bagi mahasiswa yang ingin membangun masa depan melalui entrepreneurship.
            </p>
            <div className="hero-actions">
              <a className="button button--gold" href="#programs">Explore HIPMI PT</a>
              <a className="button button--ghost" href="#join">Join Our Network</a>
            </div>
            <div className="hero-proof" aria-label="Fokus utama HIPMI PT">
              <span>Edukasi</span>
              <span>Mentorship</span>
              <span>Networking</span>
              <span>Business Growth</span>
            </div>
          </div>

          <figure className="hero-media">
            <Image
              src="/assets/phase-1/hero-pelantikan.webp"
              alt="Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="hero-media__shade" aria-hidden="true" />
            <figcaption>
              <span>Documentation 01</span>
              <strong>Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="impact-strip" aria-label="Snapshot organisasi">
        <div className="site-shell impact-strip__grid">
          {impactFacts.map(([value, label]) => (
            <div className="impact-strip__item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section section--paper editorial-about">
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <p className="eyebrow">About HIPMI PT</p>
            <h2>More than an organization. <em>An entrepreneurial ecosystem.</em></h2>
            <p>
              HIPMI PT UIN Al Azhaar dibangun untuk menghubungkan mahasiswa dengan pembelajaran bisnis, mentor, jaringan pengusaha, pemerintah, kampus, dan peluang kolaborasi yang lebih luas.
            </p>
          </div>

          <div className="about-editorial-grid">
            <div className="about-vision">
              <span className="display-index">01</span>
              <p className="quote-mark">“</p>
              <blockquote>{siteConfig.vision}</blockquote>
              <span className="caption">Visi organisasi</span>
            </div>

            <div className="mission-list" aria-label="Misi organisasi">
              {missions.map((mission, index) => (
                <div className="mission-row" key={mission}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section section--ink program-section">
        <div className="site-shell">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow">Featured Programs</p>
            <h2>Program yang dirancang untuk <em>membangun kapasitas, jaringan, dan bisnis.</em></h2>
            <p>Bukan daftar acara seremonial. Setiap program ditempatkan sebagai bagian dari perjalanan pengusaha muda kampus.</p>
          </div>

          <div className="program-index">
            {flagshipPrograms.map((program, index) => (
              <article className="program-row" key={program.name}>
                <span className="program-row__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <span className="program-row__arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section section--paper ecosystem-section">
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <p className="eyebrow">Business Ecosystem</p>
            <h2>Dari anggota, menjadi bisnis, lalu tumbuh melalui <em>ekosistem.</em></h2>
            <p>Website ini dirancang sebagai institutional hub yang nantinya terhubung dengan Pasar UMKM, Business Academy, mentorship, partnership, dan sistem digital HIPMI PT lainnya.</p>
          </div>

          <div className="ecosystem-chain" aria-label="Alur ekosistem bisnis HIPMI PT">
            {ecosystem.map(([number, title, description], index) => (
              <div className="ecosystem-node" tabIndex={0} key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{description}</p>
                {index < ecosystem.length - 1 ? <i aria-hidden="true">→</i> : null}
              </div>
            ))}
          </div>

          <div className="directory-preview">
            <div>
              <p className="eyebrow">HIPMI PT Business Directory</p>
              <h3>Direktori bisnis sedang disiapkan dengan data yang terverifikasi.</h3>
            </div>
            <p>Kami tidak menampilkan bisnis, angka, atau klaim yang belum dikonfirmasi. Infrastruktur directory akan dibuka setelah pendataan anggota selesai.</p>
            <a className="text-link" href={`mailto:${siteConfig.contact.email}?subject=Pendataan%20Business%20Directory%20HIPMI%20PT`}>Hubungi pengurus untuk pendataan <span>↗</span></a>
          </div>
        </div>
      </section>

      <section id="impact" className="section section--gold impact-section">
        <div className="site-shell impact-layout">
          <div>
            <p className="eyebrow eyebrow--ink">Impact, without invented numbers</p>
            <h2>Yang ditampilkan hanya data yang bisa kami pertanggungjawabkan.</h2>
          </div>
          <div className="impact-statement">
            <p>Dashboard dampak akan berkembang dari struktur organisasi dan aktivitas nyata menuju metrik anggota, bisnis aktif, peserta program, UMKM yang didukung, jam mentoring, dan akses kolaborasi.</p>
            <div className="impact-baseline">
              <div><strong>6</strong><span>Bidang aktif dalam struktur 2026/2027</span></div>
              <div><strong>9</strong><span>Program unggulan dalam roadmap organisasi</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink stories-section" aria-labelledby="stories-title">
        <div className="site-shell">
          <div className="section-heading section-heading--dark section-heading--compact">
            <p className="eyebrow">Latest Stories</p>
            <h2 id="stories-title">Jejak kegiatan yang membentuk <em>jejaring nyata.</em></h2>
          </div>
          <div className="story-list">
            {stories.map((story, index) => (
              <article className="story-row" key={story.title}>
                <div className="story-row__index">0{index + 1}</div>
                <div className="story-row__image">
                  <Image src={story.image} alt={story.alt} width={220} height={154} className={`mosaic-image mosaic-image--${story.crop}`} />
                </div>
                <div className="story-row__copy">
                  <p className="eyebrow">{story.label}</p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper partnership-section">
        <div className="site-shell partnership-layout">
          <div>
            <p className="eyebrow">Partnership</p>
            <h2>Membangun pengusaha muda membutuhkan <em>lebih dari satu meja.</em></h2>
          </div>
          <div>
            <p>HIPMI PT membuka ruang kolaborasi dengan pemerintah, perusahaan, startup, investor, perguruan tinggi, komunitas, media, dan organisasi yang memiliki tujuan sejalan.</p>
            <a className="button button--ink" href={`mailto:${siteConfig.contact.email}?subject=Partnership%20with%20HIPMI%20PT`}>Partner With HIPMI PT</a>
          </div>
        </div>
      </section>

      <section id="leadership" className="section section--paper leadership-section">
        <div className="site-shell leadership-layout">
          <div className="leadership-portrait">
            <Image
              src="/assets/phase-1/chairman-capryan.webp"
              alt={`Potret ${chairman.name}, ${chairman.role} HIPMI PT UIN Al Azhaar`}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <div className="leadership-portrait__label">
              <span>{chairman.role}</span>
              <strong>{chairman.name}</strong>
            </div>
          </div>

          <div className="leadership-copy">
            <p className="eyebrow">Leadership · {siteConfig.period}</p>
            <h2>Kepemimpinan yang menempatkan <em>ekosistem</em> di depan seremonial.</h2>
            <p className="leadership-copy__vision">{siteConfig.vision}</p>
            <div className="executive-list">
              {executiveBoard.map((leader) => (
                <div key={leader.name}>
                  <span>{leader.role}</span>
                  <strong>{leader.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <p className="eyebrow">Gallery</p>
            <h2>Dokumentasi asli. <em>Bukan stock photo.</em></h2>
            <p>Setiap visual berasal dari aktivitas HIPMI PT dan jaringan kolaborasinya sendiri.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-item gallery-item--${index + 1}`} key={item.caption}>
                <Image src={item.src} alt={item.alt} width={220} height={154} className={`mosaic-image mosaic-image--${item.crop}`} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="join-section">
        <div className="join-section__grid" aria-hidden="true" />
        <div className="site-shell join-layout">
          <p className="eyebrow">Join HIPMI PT</p>
          <h2>Punya ide, usaha, atau ambisi membangun sesuatu yang nyata?</h2>
          <p>Masuk ke jaringan yang mempertemukan pembelajaran, mentorship, bisnis, dan kolaborasi. Proses recruitment formal akan dibuka melalui sistem membership yang sedang disiapkan.</p>
          <div className="join-actions">
            <a className="button button--gold" href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">Follow & Connect</a>
            <a className="button button--ghost" href={`mailto:${siteConfig.contact.email}?subject=Minat%20Bergabung%20HIPMI%20PT`}>Hubungi Pengurus</a>
          </div>
        </div>
      </section>
    </main>
  );
}
