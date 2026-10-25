"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { SiteLocale } from "@/config/site";

const programFocus = {
  id: [
    { title: "Investasi & Permodalan", detail: "Literasi investasi, analisis pasar modal, dan pengenalan akses pendanaan." },
    { title: "Pengembangan Bisnis", detail: "Ide usaha, pemasaran digital, pengelolaan UMKM, dan pengembangan produk." },
    { title: "Jejaring & Kolaborasi", detail: "Mentoring, koneksi pengusaha, kemitraan, dan peluang kolaborasi." },
  ],
  en: [
    { title: "Investment & Capital", detail: "Investment literacy, capital-market analysis, and funding access." },
    { title: "Business Development", detail: "Business ideas, digital marketing, MSME management, and product growth." },
    { title: "Networking & Collaboration", detail: "Mentoring, entrepreneur connections, partnerships, and collaboration." },
  ],
} as const;

const journey = {
  id: ["Gagasan", "Belajar", "Membangun", "Berjejaring", "Akses", "Bertumbuh"],
  en: ["Idea", "Learn", "Build", "Connect", "Access", "Scale"],
} as const;

const copy = {
  id: {
    eyebrow: "DIGITAL ENTREPRENEURSHIP UNIVERSE · LUBUKLINGGAU",
    lead: "Pengusaha Muda",
    accent: "untuk Masa Depan",
    end: "yang Lebih Baik",
    body: "HIPMI PT UIN Al-Azhaar Lubuklinggau adalah wadah bagi mahasiswa yang berjiwa wirausaha, berkolaborasi, dan berkomitmen menciptakan dampak nyata bagi kampus, masyarakat, dan bangsa.",
    explore: "Tentang Kami",
    join: "Lihat Program",
    journeyKicker: "Entrepreneur Journey",
    journeyTitle: "Bukan sekadar acara. Ini jalur pertumbuhan.",
    journeyBody: "Satu perjalanan yang menghubungkan pembelajaran, pembangunan usaha, jejaring, akses, dan pertumbuhan dalam satu ekosistem kampus.",
    programsKicker: "Program Unggulan",
    programsTitle: "Satu program unggulan. Tiga fokus pengembangan.",
    leadershipKicker: "Kepengurusan",
    leadershipTitle: "Tim yang menggerakkan organisasi.",
    impactKicker: "Profil Organisasi",
    impactTitle: "Informasi organisasi secara ringkas dan jelas.",
    mediaKicker: "Documentary Layer",
    mediaTitle: "Gerakan yang nyata pantas terlihat nyata.",
    finale: "Bangun bisnis. Perluas jejaring. Ciptakan dampak.",
    finaleBody: "Masuk ke ekosistem HIPMI PT UIN Al Azhaar dan temukan ruang untuk belajar, membangun, berkolaborasi, dan bertumbuh.",
  },
  en: {
    eyebrow: "DIGITAL ENTREPRENEURSHIP UNIVERSE · LUBUKLINGGAU",
    lead: "Young Entrepreneurs",
    accent: "for a Better",
    end: "Future",
    body: "HIPMI PT UIN Al-Azhaar Lubuklinggau brings entrepreneurial students together to collaborate, build ventures, and create meaningful impact for campus and society.",
    explore: "About Us",
    join: "View Programs",
    journeyKicker: "Entrepreneur Journey",
    journeyTitle: "Not merely events. A path for growth.",
    journeyBody: "One journey connecting learning, venture building, networking, access, and growth inside a campus entrepreneurship ecosystem.",
    programsKicker: "Featured Programs",
    programsTitle: "One flagship program. Three areas of development.",
    leadershipKicker: "Leadership",
    leadershipTitle: "The team moving the organization forward.",
    impactKicker: "Organization Profile",
    impactTitle: "Key organization information, clearly presented.",
    mediaKicker: "Documentary Layer",
    mediaTitle: "Real movement deserves to look real.",
    finale: "Build business. Grow network. Create impact.",
    finaleBody: "Enter the HIPMI PT UIN Al Azhaar ecosystem and find space to learn, build, collaborate, and grow.",
  },
} as const;

const documentary = [
  "/photos/dokumentasi-pelantikan-2026-02.jpg",
  "/photos/dokumentasi-bpc-hipmi-01.jpg",
  "/photos/dokumentasi-pemkot-lubuklinggau-01.jpg",
] as const;

export function V2ImmersiveHome({ locale, joinWhatsApp }: { locale: SiteLocale; joinWhatsApp: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const text = copy[locale];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = root.querySelector<HTMLElement>(".v2-hero");

    const onPointerMove = (event: PointerEvent) => {
      if (!hero || reduceMotion || window.innerWidth < 900) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--pointer-x", x.toFixed(3));
      hero.style.setProperty("--pointer-y", y.toFixed(3));
    };

    hero?.addEventListener("pointermove", onPointerMove);

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>("[data-v2-reveal]"));
    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
        { threshold: 0.14, rootMargin: "0px 0px -8%" },
      );
      revealNodes.forEach((node) => observer.observe(node));
      return () => {
        hero?.removeEventListener("pointermove", onPointerMove);
        observer.disconnect();
      };
    }

    return () => hero?.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div ref={rootRef} className="v2-home">
      <section className="v2-hero" aria-labelledby="v2-hero-title">
        <div className="v2-hero__ambient" aria-hidden="true" />
        <div className="v2-hero__grid" aria-hidden="true" />

        <div className="shell v2-hero__layout">
          <div className="v2-hero__copy" data-v2-reveal>
            <p className="v2-kicker"><span />{text.eyebrow}</p>
            <h1 id="v2-hero-title">
              <span>{text.lead}</span>
              <em>{text.accent}</em>
              <span>{text.end}</span>
            </h1>
            <p className="v2-hero__body">{text.body}</p>
            <div className="v2-actions">
              <Link className="v2-button v2-button--gold" href={`/programs?lang=${locale}`}><span>{text.explore}</span><b aria-hidden="true">↗</b></Link>
              <a className="v2-button v2-button--ghost" href={joinWhatsApp} target="_blank" rel="noreferrer"><span>{text.join}</span><b aria-hidden="true">→</b></a>
            </div>
          </div>

          <div className="v2-scene" aria-label={locale === "id" ? "Representasi visual ekosistem HIPMI PT" : "Visual representation of the HIPMI PT ecosystem"}>
            <div className="v2-scene__ring v2-scene__ring--one" aria-hidden="true" />
            <div className="v2-scene__ring v2-scene__ring--two" aria-hidden="true" />
            <div className="v2-scene__brand" aria-hidden="true">
              <div className="v2-scene__brand-glow" />
              <div className="v2-scene__brand-orbit" />
              <div className="v2-scene__brand-face">
                <Image src="/assets/brand/hipmi-pt-uin-alazhaar.avif" alt="" width={420} height={420} priority unoptimized />
              </div>
              <div className="v2-scene__brand-caption">Official Identity · 2026</div>
            </div>
            {journey[locale].slice(1, 6).map((item, index) => (
              <div className={`v2-scene__node v2-scene__node--${index + 1}`} key={item} aria-hidden="true"><i /><span>{item}</span></div>
            ))}
            <figure className="v2-scene__photo">
              <Image src="/photos/dokumentasi-pelantikan-2026-01.jpg" alt="Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026" fill priority sizes="(max-width: 899px) 82vw, 34vw" />
              <figcaption><span>DOCUMENT / 2026</span><strong>HIPMI PT · LINGGAU RAYA</strong></figcaption>
            </figure>
          </div>
        </div>

        <div className="shell v2-signal-bar" aria-label={locale === "id" ? "Ringkasan organisasi" : "Organization summary"}>
          <div><span>01</span><strong>2026/2027</strong><small>{locale === "id" ? "Periode" : "Term"}</small></div>
          <div><span>02</span><strong>6</strong><small>{locale === "id" ? "Bidang" : "Divisions"}</small></div>
          <div><span>03</span><strong>01</strong><small>{locale === "id" ? "Program unggulan" : "Flagship program"}</small></div>
          <div><span>04</span><strong>Linggau Raya</strong><small>{locale === "id" ? "Jejaring" : "Network"}</small></div>
        </div>
      </section>

      <section className="v2-journey">
        <div className="shell v2-section-head" data-v2-reveal>
          <p className="v2-kicker v2-kicker--dark"><span />{text.journeyKicker}</p>
          <h2>{text.journeyTitle}</h2>
          <p>{text.journeyBody}</p>
        </div>
        <div className="shell v2-journey__track" data-v2-reveal>
          {journey[locale].map((item, index) => (
            <div key={item} className="v2-journey__step"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="v2-programs">
        <div className="shell v2-section-head v2-section-head--dark" data-v2-reveal>
          <p className="v2-kicker"><span />{text.programsKicker}</p>
          <h2>{text.programsTitle}</h2>
        </div>
        <div className="shell v2-program-universe" data-v2-reveal>
          <article className="v2-program-feature">
            <div className="v2-program-feature__top">
              <span className="v2-program-feature__number">01 / PROGRAM UNGGULAN</span>
              <span className="v2-program-feature__status">{locale === "id" ? "Program utama" : "Flagship program"}</span>
            </div>
            <h3>DigiFin Academy</h3>
            <p>{locale === "id"
              ? "Wadah pembelajaran dan pengembangan kompetensi anggota dalam keuangan, investasi, dan kewirausahaan digital. Kegiatan seperti kelas, klinik bisnis, pitching, dan networking menjadi bagian dari perjalanan program, bukan program unggulan yang berdiri sendiri."
              : "A learning and capability-building hub for finance, investment, and digital entrepreneurship. Classes, business clinics, pitching, and networking are delivered as activities within this program, not as separate flagship programs."}</p>
            <div className="v2-program-focus-grid">
              {programFocus[locale].map((focus, index) => (
                <div className="v2-program-focus" key={focus.title}>
                  <span>0{index + 1}</span>
                  <h4>{focus.title}</h4>
                  <p>{focus.detail}</p>
                </div>
              ))}
            </div>
            <Link className="v2-program-feature__link" href={`/programs?lang=${locale}`}>
              {locale === "id" ? "Jelajahi program" : "Explore the program"} <b aria-hidden="true">↗</b>
            </Link>
          </article>
        </div>
      </section>

      <section className="v2-leadership">
        <div className="shell v2-leadership__layout">
          <div className="v2-section-head" data-v2-reveal>
            <p className="v2-kicker v2-kicker--dark"><span />{text.leadershipKicker}</p>
            <h2>{text.leadershipTitle}</h2>
            <Link className="v2-text-link" href={`/leadership?lang=${locale}`}>{locale === "id" ? "Lihat struktur lengkap" : "View full structure"}<span>↗</span></Link>
          </div>
          <div className="v2-constellation" data-v2-reveal>
            <div className="v2-constellation__line" aria-hidden="true" />
            <Link href={`/leadership?lang=${locale}`} className="v2-person-node v2-person-node--lead"><span>01</span><strong>{locale === "id" ? "Ketua Umum" : "Chairman"}</strong></Link>
            <Link href={`/leadership?lang=${locale}`} className="v2-person-node v2-person-node--secretary"><span>02</span><strong>{locale === "id" ? "Sekretaris" : "Secretary"}</strong></Link>
            <Link href={`/leadership?lang=${locale}`} className="v2-person-node v2-person-node--treasurer"><span>03</span><strong>{locale === "id" ? "Bendahara" : "Treasurer"}</strong></Link>
            {Array.from({ length: 6 }).map((_, index) => <Link href={`/leadership?lang=${locale}`} className={`v2-field-node v2-field-node--${index + 1}`} key={index}><span>0{index + 1}</span><strong>{locale === "id" ? `Bidang ${index + 1}` : `Division ${index + 1}`}</strong></Link>)}
          </div>
        </div>
      </section>

      <section className="v2-impact">
        <div className="shell v2-impact__grid">
          <div className="v2-section-head v2-section-head--dark" data-v2-reveal>
            <p className="v2-kicker"><span />{text.impactKicker}</p>
            <h2>{text.impactTitle}</h2>
          </div>
          <div className="v2-impact__signals" data-v2-reveal>
            <div><span>TERM</span><strong>2026/2027</strong></div>
            <div><span>DIVISIONS</span><strong>06</strong></div>
            <div><span>FLAGSHIP PROGRAM</span><strong>01</strong></div>
            <Link href={`/impact?lang=${locale}`}><span>{locale === "id" ? "Buka halaman dampak" : "Open impact page"}</span><b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="v2-media">
        <div className="shell v2-section-head" data-v2-reveal>
          <p className="v2-kicker v2-kicker--dark"><span />{text.mediaKicker}</p>
          <h2>{text.mediaTitle}</h2>
        </div>
        <div className="shell v2-media-wall" data-v2-reveal>
          {documentary.map((src, index) => (
            <figure key={src} className={`v2-media-card v2-media-card--${index + 1}`}>
              <Image src={src} alt={locale === "id" ? "Dokumentasi resmi HIPMI PT UIN Al Azhaar" : "Official HIPMI PT UIN Al Azhaar documentation"} fill sizes="(max-width: 760px) 92vw, 40vw" />
              <figcaption><span>0{index + 1}</span><strong>HIPMI PT / 2026</strong></figcaption>
            </figure>
          ))}
        </div>
        <div className="shell v2-media__footer"><Link className="v2-text-link" href={`/media?lang=${locale}`}>{locale === "id" ? "Lihat dokumentasi resmi" : "View official documentation"}<span>↗</span></Link></div>
      </section>

      <section className="v2-finale">
        <div className="v2-finale__halo" aria-hidden="true" />
        <div className="shell v2-finale__inner" data-v2-reveal>
          <p>HIPMI PT · UIN AL AZHAAR · LUBUKLINGGAU</p>
          <h2>{text.finale}</h2>
          <span>{text.finaleBody}</span>
          <div className="v2-actions v2-actions--center">
            <a className="v2-button v2-button--gold" href={joinWhatsApp} target="_blank" rel="noreferrer"><span>{text.join}</span><b>↗</b></a>
            <Link className="v2-button v2-button--ghost" href={`/partnerships?lang=${locale}`}><span>{locale === "id" ? "Kolaborasi" : "Collaborate"}</span><b>→</b></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
