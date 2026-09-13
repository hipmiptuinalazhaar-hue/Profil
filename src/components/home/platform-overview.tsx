import Link from "next/link";
import { PhotoSlot } from "@/components/media/photo-slot";
import type { SiteLocale } from "@/config/site";
import { leadership } from "@/content/organization";
import { publicPlatformLinks } from "@/content/platform";
import { photoManifest, photoPath } from "@/data/photo-manifest";

const leadershipPhotoByKey = {
  chairman: photoManifest.leadership.ketuaUmum,
  secretary: photoManifest.leadership.sekretaris,
  treasurer: photoManifest.leadership.bendahara,
  "head-division-1": photoManifest.leadership.kabid1,
  "head-division-2": photoManifest.leadership.kabid2,
  "head-division-3": photoManifest.leadership.kabid3,
  "head-division-4": photoManifest.leadership.kabid4,
  "head-division-5": photoManifest.leadership.kabid5,
  "head-division-6": photoManifest.leadership.kabid6,
} as const;

function portraitFor(key?: string) {
  if (!key || !(key in leadershipPhotoByKey)) return null;
  return leadershipPhotoByKey[key as keyof typeof leadershipPhotoByKey];
}

export function PlatformOverview({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const previewLeaders = leadership.slice(0, 3);

  return (
    <>
      <section className="leadership-preview" aria-labelledby="leadership-preview-title">
        <div className="shell leadership-preview__heading">
          <div className="section-kicker">
            <span>06</span>
            <p>{isId ? "Kepengurusan" : "Leadership"}</p>
          </div>
          <div>
            <p>{isId ? "Struktur yang bekerja" : "A structure built to work"}</p>
            <h2 id="leadership-preview-title">
              {isId ? "Organisasi yang jelas dimulai dari siapa bertanggung jawab atas apa." : "A clear organization starts with knowing who is responsible for what."}
            </h2>
            <span>
              {isId
                ? "BPH memimpin arah organisasi bersama enam kepala bidang. Struktur lengkap, nama, peran, dan kompartemen ditampilkan secara terbuka."
                : "The executive board leads the organization alongside six division heads. The complete structure, names, roles, and compartments are published openly."}
            </span>
          </div>
        </div>

        <div className="shell leadership-preview__grid">
          {previewLeaders.map((leader, index) => {
            const filename = portraitFor(leader.portraitKey);
            return (
              <article key={leader.name} className="leadership-preview__card">
                <div className="leadership-preview__portrait">
                  {filename ? (
                    <PhotoSlot
                      src={photoPath(filename)}
                      filename={filename}
                      alt={`${leader.name} — ${leader.role} HIPMI PT UIN Al Azhaar Lubuklinggau`}
                      sizes="(max-width: 760px) 100vw, 33vw"
                      objectPosition="center top"
                    />
                  ) : null}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="leadership-preview__meta">
                  <p>{leader.role}</p>
                  <h3>{leader.name}</h3>
                </div>
              </article>
            );
          })}
        </div>

        <div className="shell leadership-preview__action">
          <Link className="editorial-link" href={`/leadership?lang=${locale}`}>
            {isId ? "Lihat struktur lengkap" : "View complete structure"}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="public-platform" aria-labelledby="public-platform-title">
        <div className="shell public-platform__heading">
          <div className="section-kicker section-kicker--light">
            <span>07</span>
            <p>{isId ? "Platform publik" : "Public platform"}</p>
          </div>
          <div>
            <h2 id="public-platform-title">
              {isId ? "Satu rumah digital untuk organisasi, usaha, capaian, agenda, wawasan, dan dokumentasi." : "One digital home for organization, ventures, evidence, events, insights, and documentation."}
            </h2>
            <p>
              {isId
                ? "Setiap area dibangun dengan satu aturan sederhana: tampilkan yang benar-benar diketahui, dan beri status jujur untuk data yang belum tersedia."
                : "Every area follows one simple rule: publish what is actually known, and use an honest status for information that is not yet available."}
            </p>
          </div>
        </div>

        <div className="shell public-platform__ledger">
          {publicPlatformLinks.map((item, index) => (
            <Link key={item.href} href={`${item.href}?lang=${locale}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{isId ? item.label.id : item.label.en}</strong>
                <p>{isId ? item.description.id : item.description.en}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="conversion-section" aria-labelledby="conversion-title">
        <div className="shell conversion-section__grid">
          <div className="conversion-section__copy">
            <div className="section-kicker">
              <span>08</span>
              <p>{isId ? "Masuk ke ekosistem" : "Enter the ecosystem"}</p>
            </div>
            <h2 id="conversion-title">
              {isId ? "Bergabung sebagai anggota, atau bangun kolaborasi yang punya konteks jelas." : "Join as a member, or build a collaboration with a clear purpose."}
            </h2>
          </div>

          <div className="conversion-section__actions">
            <Link href={`/join?lang=${locale}`}>
              <span>{isId ? "Untuk mahasiswa" : "For students"}</span>
              <strong>{isId ? "Gabung HIPMI PT" : "Join HIPMI PT"}</strong>
              <small>{isId ? "Kenali proses, kebutuhan data, dan jalur anggota." : "Understand the process, required information, and member journey."}</small>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href={`/partnerships?lang=${locale}`}>
              <span>{isId ? "Untuk kolaborator" : "For collaborators"}</span>
              <strong>{isId ? "Bangun kolaborasi" : "Build a collaboration"}</strong>
              <small>{isId ? "Edukasi, mentorship, pasar, inovasi, dan forum strategis." : "Education, mentorship, market access, innovation, and strategic forums."}</small>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
