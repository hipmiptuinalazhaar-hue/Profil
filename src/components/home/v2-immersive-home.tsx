"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { SiteLocale } from "@/config/site";

const programs = {
  id: [
    "Business Academy",
    "Pitching & Access to Capital",
    "Networking & Business Expo",
    "100 Pengusaha Muda",
    "LinggauPreneur Summit",
    "Business Visit",
    "Entrepreneur Talk",
    "Business Incubator",
    "Investment Club",
  ],
  en: [
    "Business Academy",
    "Pitching & Access to Capital",
    "Networking & Business Expo",
    "100 Young Entrepreneurs",
    "LinggauPreneur Summit",
    "Business Visit",
    "Entrepreneur Talk",
    "Business Incubator",
    "Investment Club",
  ],
} as const;

const journey = {
  id: ["Gagasan", "Belajar", "Membangun", "Berjejaring", "Akses", "Bertumbuh"],
  en: ["Idea", "Learn", "Build", "Connect", "Access", "Scale"],
} as const;

const copy = {
  id: {
    eyebrow: "DIGITAL ENTREPRENEURSHIP UNIVERSE · LUBUKLINGGAU",
    lead: "Membangun generasi",
    accent: "pengusaha muda",
    end: "yang bergerak lebih jauh.",
    body: "HIPMI PT UIN Al Azhaar adalah ruang tumbuh bagi mahasiswa yang ingin membangun usaha, memperluas jejaring, bertemu praktisi, dan mengubah gagasan menjadi gerakan nyata.",
    explore: "Jelajahi ekosistem",
    join: "Gabung HIPMI PT",
    journeyKicker: "Entrepreneur Journey",
    journeyTitle: "Bukan sekadar acara. Ini jalur pertumbuhan.",
    journeyBody: "Satu perjalanan yang menghubungkan pembelajaran, pembangunan usaha, jejaring, akses, dan pertumbuhan dalam satu ekosistem kampus.",
    programsKicker: "Program Universe",
    programsTitle: "Sembilan program. Satu arah: pengusaha muda yang lebih siap.",
    leadershipKicker: "Leadership Constellation",
    leadershipTitle: "Struktur yang bekerja sebagai jaringan, bukan daftar nama.",
    impactKicker: "Verified Signal",
    impactTitle: "Identitas publik harus dibangun dari fakta yang bisa dipertanggungjawabkan.",
    mediaKicker: "Documentary Layer",
    mediaTitle: "Gerakan yang nyata pantas terlihat nyata.",
    finale: "Bangun bisnis. Perluas jejaring. Ciptakan dampak.",
    finaleBody: "Masuk ke ekosistem HIPMI PT UIN Al Azhaar dan temukan ruang untuk belajar, membangun, berkolaborasi, dan bertumbuh.",
  },
  en: {
    eyebrow: "DIGITAL ENTREPRENEURSHIP UNIVERSE · LUBUKLINGGAU",
    lead: "Building a generation of",
    accent: "young entrepreneurs",
    end: "ready to move further.",
    body: "HIPMI PT UIN Al Azhaar is a growth space for students who want to build ventures, expand networks, meet practitioners, and turn ideas into real movement.",
    explore: "Explore the ecosystem",
    join: "Join HIPMI PT",
    journeyKicker: "Entrepreneur Journey",
    journeyTitle: "Not merely events. A path for growth.",
    journeyBody: "One journey connecting learning, venture building, networking, access, and growth inside a campus entrepreneurship ecosystem.",
    programsKicker: "Program Universe",
    programsTitle: "Nine programs. One direction: more capable young entrepreneurs.",
    leadershipKicker: "Leadership Constellation",
    leadershipTitle: "A structure that works as a network, not a list of names.",
    impactKicker: "Verified Signal",
    impactTitle: "Public identity should be built from facts that can be defended.",
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
          <div><span>03</span><strong>9</strong><small>{locale === "id" ? "Program unggulan" : "Flagship programs"}</small></div>
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
          <div className="v2-program-universe__core" aria-hidden="true"><span>09</span><small>PROGRAMS</small></div>
          {programs[locale].map((program, index) => (
            <Link href={`/programs?lang=${locale}`} className={`v2-program-node v2-program-node--${index + 1}`} key={program}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{program}</strong><b aria-hidden="true">↗</b>
            </Link>
          ))}
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
            <div><span>FLAGSHIP PROGRAMS</span><strong>09</strong></div>
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
