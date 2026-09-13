import Image from "next/image";
import Link from "next/link";
import type { SiteLocale } from "@/config/site";

const navigation = [
  {
    id: "about",
    href: "/about",
    idLabel: "HIPMI PT",
    enLabel: "HIPMI PT",
    idDescription: "Profil, visi, misi, dan organisasi",
    enDescription: "Profile, vision, mission, and organization",
  },
  {
    id: "programs",
    href: "/programs",
    idLabel: "Program",
    enLabel: "Programs",
    idDescription: "Pelatihan, inkubasi, dan inisiatif strategis",
    enDescription: "Training, incubation, and strategic initiatives",
  },
  {
    id: "ecosystem",
    href: "/business",
    idLabel: "Ekosistem",
    enLabel: "Ecosystem",
    idDescription: "Bisnis anggota, UMKM, jaringan, dan pasar",
    enDescription: "Member businesses, SMEs, network, and market",
  },
  {
    id: "impact",
    href: "/impact",
    idLabel: "Dampak",
    enLabel: "Impact",
    idDescription: "Capaian, pertumbuhan, dan kontribusi nyata",
    enDescription: "Progress, growth, and measurable contribution",
  },
  {
    id: "events",
    href: "/events",
    idLabel: "Agenda",
    enLabel: "Events",
    idDescription: "Kegiatan, forum, dan kalender organisasi",
    enDescription: "Activities, forums, and organization calendar",
  },
  {
    id: "insights",
    href: "/insights",
    idLabel: "Wawasan",
    enLabel: "Insights",
    idDescription: "Artikel, perspektif, dan sumber belajar",
    enDescription: "Articles, perspectives, and learning resources",
  },
  {
    id: "media",
    href: "/media",
    idLabel: "Media",
    enLabel: "Media",
    idDescription: "Dokumentasi, berita, dan publikasi",
    enDescription: "Documentation, news, and publications",
  },
] as const;

export function SiteHeader({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const joinSubject = encodeURIComponent(
    isId
      ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar"
      : "Interest in joining HIPMI PT UIN Al Azhaar",
  );

  return (
    <header className="global-header" aria-label={isId ? "Navigasi utama" : "Main navigation"} lang={locale}>
      <div className="global-header__inner">
        <Link className="brand" href={`/?lang=${locale}`} aria-label="HIPMI PT UIN Al Azhaar Lubuklinggau">
          <span className="brand__mark" aria-hidden="true">
            <Image
              src="/assets/brand/hipmi-pt-uin-alazhaar.avif"
              alt=""
              width={64}
              height={64}
              priority
              unoptimized
              style={{ mixBlendMode: "normal" }}
            />
          </span>
          <span className="brand__wordmark">
            <strong>HIPMI PT</strong>
            <span>UIN Al Azhaar · Lubuklinggau</span>
          </span>
        </Link>

        <nav className="desktop-navigation" aria-label={isId ? "Navigasi halaman" : "Site navigation"}>
          {navigation.map((item) => (
            <Link key={item.id} href={item.href}>
              {isId ? item.idLabel : item.enLabel}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="locale-switch" aria-label={isId ? "Pilihan bahasa" : "Language selector"}>
            <Link href="/?lang=id" aria-current={isId ? "page" : undefined}>ID</Link>
            <span aria-hidden="true">·</span>
            <Link href="/?lang=en" aria-current={!isId ? "page" : undefined}>EN</Link>
          </div>
          <a className="header-join" href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>
            {isId ? "Gabung" : "Join"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={isId ? "Buka atau tutup menu" : "Open or close menu"}>
            <span className="mobile-menu__label">Menu</span>
            <span className="mobile-menu__icon" aria-hidden="true"><i /><i /></span>
          </summary>

          <div className="mobile-menu__panel">
            <div className="mobile-menu__halo" aria-hidden="true" />
            <div className="mobile-menu__shell">
              <div className="mobile-menu__topline">
                <Link className="mobile-menu__brand" href={`/?lang=${locale}`} aria-label="HIPMI PT UIN Al Azhaar Lubuklinggau">
                  <span className="mobile-menu__brand-mark" aria-hidden="true">
                    <Image
                      src="/assets/brand/hipmi-pt-uin-alazhaar.avif"
                      alt=""
                      width={72}
                      height={72}
                      unoptimized
                      style={{ mixBlendMode: "normal" }}
                    />
                  </span>
                  <span><strong>HIPMI PT</strong><small>UIN Al Azhaar Lubuklinggau</small></span>
                </Link>
                <span className="mobile-menu__edition">2026 / 2027</span>
              </div>

              <div className="mobile-menu__layout">
                <div className="mobile-menu__statement">
                  <span>Digital Headquarters</span>
                  <strong>
                    {isId ? "Muda." : "Young."}<br />
                    {isId ? "Berjejaring." : "Connected."}<br />
                    <em>{isId ? "Berdampak." : "Impactful."}</em>
                  </strong>
                  <p>{isId ? "Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau." : "The digital home of young entrepreneurs at UIN Al Azhaar Lubuklinggau."}</p>
                </div>

                <nav className="mobile-menu__navigation" aria-label={isId ? "Navigasi mobile" : "Mobile navigation"}>
                  {navigation.map((item, index) => (
                    <Link key={item.id} href={item.href}>
                      <span className="mobile-menu__number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="mobile-menu__copy">
                        <strong>{isId ? item.idLabel : item.enLabel}</strong>
                        <small>{isId ? item.idDescription : item.enDescription}</small>
                      </span>
                      <span className="mobile-menu__arrow" aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mobile-menu__footer">
                <div className="locale-switch locale-switch--mobile" aria-label={isId ? "Pilihan bahasa" : "Language selector"}>
                  <Link href="/?lang=id" aria-current={isId ? "page" : undefined}>Indonesia</Link>
                  <Link href="/?lang=en" aria-current={!isId ? "page" : undefined}>English</Link>
                </div>
                <a className="mobile-menu__join" href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>
                  <span>{isId ? "Gabung HIPMI PT" : "Join HIPMI PT"}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="mobile-menu__social" href="https://instagram.com/hipmipt.alazhaar" target="_blank" rel="noreferrer">
                  Instagram · @hipmipt.alazhaar
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
