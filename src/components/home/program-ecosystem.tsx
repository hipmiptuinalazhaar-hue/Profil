import Link from "next/link";
import type { SiteLocale } from "@/config/site";
import { ecosystemJourney, flagshipPrograms } from "@/content/programs";

export function ProgramEcosystem({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";

  return (
    <>
      <section className="program-index" aria-labelledby="program-index-title">
        <div className="shell program-index__heading">
          <div className="section-kicker section-kicker--light">
            <span>05</span>
            <p>{isId ? "Programs & Entrepreneur Ecosystem" : "Programs & Entrepreneur Ecosystem"}</p>
          </div>
          <div>
            <p className="program-index__eyebrow">{isId ? "9 program unggulan" : "9 flagship programs"}</p>
            <h2 id="program-index-title">
              {isId ? "Program bukan daftar acara. Ia adalah mesin pertumbuhan ekosistem." : "Programs are not an event list. They are the engine of the ecosystem."}
            </h2>
            <p>
              {isId
                ? "Setiap program ditempatkan pada fungsi yang jelas: membangun kapasitas, memperluas pasar dan jaringan, membuka akses mentor dan modal, lalu membantu usaha tumbuh lebih disiplin."
                : "Each program has a clear function: build capability, expand markets and networks, open access to mentors and capital, then help ventures grow with greater discipline."}
            </p>
          </div>
        </div>

        <div className="shell program-ledger">
          {flagshipPrograms.map((program, index) => (
            <Link className="program-ledger__row" href={`/programs/${program.slug}?lang=${locale}`} key={program.slug}>
              <span className="program-ledger__index">{String(index + 1).padStart(2, "0")}</span>
              <div className="program-ledger__identity">
                <span>{isId ? program.cluster.id : program.cluster.en}</span>
                <h3>{program.title}</h3>
              </div>
              <p>{isId ? program.summary.id : program.summary.en}</p>
              <span className="program-ledger__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>

        <div className="shell program-index__footer">
          <p>{isId ? "Lihat arsitektur lengkap setiap program, fokus, dan sasaran penggunaannya." : "Explore the full architecture, focus, and intended audience of each program."}</p>
          <Link className="editorial-link editorial-link--light" href={`/programs?lang=${locale}`}>
            {isId ? "Jelajahi seluruh program" : "Explore all programs"}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="ecosystem-section" id="ecosystem" aria-labelledby="ecosystem-title">
        <div className="shell ecosystem-section__heading">
          <div className="section-kicker">
            <span>03</span>
            <p>{isId ? "Entrepreneur ecosystem" : "Entrepreneur ecosystem"}</p>
          </div>
          <div>
            <p className="ecosystem-section__eyebrow">{isId ? "Dari organisasi menuju pertumbuhan" : "From organization to growth"}</p>
            <h2 id="ecosystem-title">
              {isId ? "Satu alur. Banyak pintu masuk. Tujuannya sama: usaha yang lebih kuat." : "One journey. Multiple entry points. One goal: stronger ventures."}
            </h2>
          </div>
        </div>

        <div className="shell ecosystem-track" role="list" aria-label={isId ? "Alur ekosistem" : "Ecosystem journey"}>
          {ecosystemJourney.map((step, index) => (
            <div className="ecosystem-track__step" role="listitem" key={step.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{isId ? step.id : step.en}</strong>
              {index < ecosystemJourney.length - 1 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>

        <div className="shell ecosystem-operating-model">
          <article>
            <span>01</span>
            <p>{isId ? "Learn" : "Learn"}</p>
            <h3>{isId ? "Bangun kemampuan sebelum memperbesar ambisi." : "Build capability before scaling ambition."}</h3>
            <small>Business Academy · Entrepreneur Talk · Investment Club</small>
          </article>
          <article>
            <span>02</span>
            <p>{isId ? "Connect" : "Connect"}</p>
            <h3>{isId ? "Pertumbuhan lebih cepat saat akses dan jaringan terbuka." : "Growth moves faster when access and networks open up."}</h3>
            <small>Networking & Business Expo · Business Visit · LinggauPreneur Summit</small>
          </article>
          <article>
            <span>03</span>
            <p>{isId ? "Grow" : "Grow"}</p>
            <h3>{isId ? "Uji, evaluasi, perbaiki, lalu tumbuh dengan disiplin." : "Test, review, improve, then grow with discipline."}</h3>
            <small>Business Incubator · Pitching & Access to Capital · 100 Pengusaha Muda</small>
          </article>
        </div>
      </section>
    </>
  );
}
