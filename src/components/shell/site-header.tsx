import Image from "next/image";
import type { SiteLocale } from "@/config/site";

const navigation = [
  { id: "about", href: "/about", idLabel: "HIPMI PT", enLabel: "HIPMI PT" },
  { id: "programs", href: "/programs", idLabel: "Program", enLabel: "Programs" },
  { id: "ecosystem", href: "/business", idLabel: "Ekosistem", enLabel: "Ecosystem" },
  { id: "impact", href: "/impact", idLabel: "Dampak", enLabel: "Impact" },
  { id: "events", href: "/events", idLabel: "Agenda", enLabel: "Events" },
  { id: "insights", href: "/insights", idLabel: "Wawasan", enLabel: "Insights" },
  { id: "media", href: "/media", idLabel: "Media", enLabel: "Media" },
] as const;

export function SiteHeader({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const joinSubject = encodeURIComponent(isId ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar");

  return (
    <header className="global-header" aria-label={isId ? "Navigasi utama" : "Main navigation"} lang={locale}>
      <div className="global-header__inner">
        <a className="brand" href={`/?lang=${locale}`} aria-label="HIPMI PT UIN Al Azhaar Lubuklinggau">
          <span className="brand__mark">
            <Image src="/assets/brand/hipmi-pt-uin-alazhaar.webp" alt="" width={52} height={52} priority unoptimized />
          </span>
          <span className="brand__wordmark"><strong>HIPMI PT</strong><span>UIN Al Azhaar · Lubuklinggau</span></span>
        </a>

        <nav className="desktop-navigation" aria-label={isId ? "Navigasi halaman" : "Site navigation"}>
          {navigation.map((item) => <a key={item.id} href={item.href}>{isId ? item.idLabel : item.enLabel}</a>)}
        </nav>

        <div className="header-actions">
          <div className="locale-switch" aria-label={isId ? "Pilihan bahasa" : "Language selector"}>
            <a href="/?lang=id" aria-current={isId ? "page" : undefined}>ID</a>
            <span aria-hidden="true">/</span>
            <a href="/?lang=en" aria-current={!isId ? "page" : undefined}>EN</a>
          </div>
          <a className="header-join" href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>{isId ? "Gabung" : "Join"}<span aria-hidden="true">↗</span></a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={isId ? "Buka menu" : "Open menu"}><span /><span /></summary>
          <div className="mobile-menu__panel">
            <div className="mobile-menu__meta"><span>HIPMI PT</span><span>{isId ? "Menu" : "Navigation"}</span></div>
            <nav aria-label={isId ? "Navigasi mobile" : "Mobile navigation"}>
              {navigation.map((item, index) => (
                <a key={item.id} href={item.href}><span>{String(index + 1).padStart(2, "0")}</span><strong>{isId ? item.idLabel : item.enLabel}</strong></a>
              ))}
            </nav>
            <div className="mobile-menu__footer">
              <div className="locale-switch locale-switch--mobile"><a href="/?lang=id" aria-current={isId ? "page" : undefined}>Indonesia</a><a href="/?lang=en" aria-current={!isId ? "page" : undefined}>English</a></div>
              <a href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${joinSubject}`}>{isId ? "Gabung HIPMI PT" : "Join HIPMI PT"} ↗</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
