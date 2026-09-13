import Link from "next/link";
import { siteConfig, type SiteLocale } from "@/config/site";
import { institutionalPillars, networkAffiliations } from "@/content/institutional";
import { missions } from "@/content/organization";

const englishMissions = [
  "Deliver relevant, practical entrepreneurship education and training.",
  "Build direct mentorship with practitioners and entrepreneurs.",
  "Open collaboration networks across students, entrepreneurs, government, university stakeholders, investors, and communities.",
  "Help students improve the scale and quality of their businesses.",
  "Build a sustainable campus young-entrepreneur ecosystem.",
] as const;

export function InstitutionalStory({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const missionItems = isId ? missions : englishMissions;

  return (
    <>
      <section className="institutional-opening" aria-labelledby="institutional-title">
        <div className="shell institutional-opening__grid">
          <div className="section-kicker">
            <span>04</span>
            <p>Institutional Storytelling</p>
          </div>

          <div className="institutional-opening__statement">
            <p className="institutional-opening__eyebrow">
              {isId ? "Mengapa HIPMI PT hadir" : "Why HIPMI PT exists"}
            </p>
            <h2 id="institutional-title">
              {isId ? (
                <>
                  Bukan sekadar membuat <em>agenda.</em><br />
                  Kami membangun jalur <strong>pertumbuhan.</strong>
                </>
              ) : (
                <>
                  Not merely creating <em>events.</em><br />
                  We build a path for <strong>growth.</strong>
                </>
              )}
            </h2>
            <p>
              {isId
                ? "HIPMI PT UIN Al Azhaar dirancang sebagai rumah digital dan ruang gerak pengusaha muda kampus: tempat mahasiswa belajar, bertemu jejaring, menguji gagasan, memperbaiki usaha, dan membuka kolaborasi yang relevan."
                : "HIPMI PT UIN Al Azhaar is designed as the digital home and operating space for young campus entrepreneurs: a place to learn, meet networks, test ideas, improve ventures, and create relevant collaboration."}
            </p>
            <Link className="editorial-link" href={`/about?lang=${locale}`}>
              {isId ? "Baca profil institusi" : "Read the institutional profile"}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="shell institutional-pillars" aria-label={isId ? "Pilar institusi" : "Institutional pillars"}>
          {institutionalPillars.map((pillar, index) => (
            <article className="institutional-pillar" key={pillar.key}>
              <span className="institutional-pillar__index">{String(index + 1).padStart(2, "0")}</span>
              <p>{isId ? pillar.label.id : pillar.label.en}</p>
              <h3>{isId ? pillar.title.id : pillar.title.en}</h3>
              <span>{isId ? pillar.body.id : pillar.body.en}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-mission" aria-labelledby="vision-title">
        <div className="shell vision-mission__grid">
          <div className="vision-panel">
            <div className="section-kicker section-kicker--light">
              <span>01</span>
              <p>{isId ? "Arah organisasi" : "Organizational direction"}</p>
            </div>
            <p className="vision-panel__label">{isId ? "Visi 2026/2027" : "Vision 2026/2027"}</p>
            <h2 id="vision-title">“{isId ? siteConfig.vision : siteConfig.visionEn}”</h2>
            <p className="vision-panel__note">
              {isId
                ? "Visi ini menjadi filter utama untuk program, kolaborasi, dan keputusan organisasi."
                : "This vision is the primary filter for programs, collaboration, and organizational decisions."}
            </p>
          </div>

          <div className="mission-panel">
            <div className="mission-panel__topline">
              <p>{isId ? "Misi" : "Mission"}</p>
              <span>{missionItems.length.toString().padStart(2, "0")}</span>
            </div>
            <ol>
              {missionItems.map((mission, index) => (
                <li key={mission}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{mission}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="network-section" id="network" aria-labelledby="network-title">
        <div className="shell network-section__heading">
          <div className="section-kicker">
            <span>02</span>
            <p>{isId ? "Jejaring & afiliasi" : "Network & affiliation"}</p>
          </div>
          <div>
            <h2 id="network-title">
              {isId ? "Bergerak dari kampus, terhubung ke ekosistem yang lebih luas." : "Built on campus, connected to a wider ecosystem."}
            </h2>
            <p>
              {isId
                ? "Hubungan berikut ditampilkan sebagai jejaring dan afiliasi ekosistem. Kami tidak menyebutnya sebagai kemitraan formal kecuali ada kerja sama tertulis yang memang berlaku."
                : "The following relationships are presented as ecosystem networks and affiliations. They are not described as formal partnerships unless a written collaboration is actually in place."}
            </p>
          </div>
        </div>

        <div className="shell network-ledger">
          {networkAffiliations.map((item, index) => (
            <div className="network-ledger__row" key={item.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <p>{isId ? item.scope.id : item.scope.en}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
