import Image from "next/image";
import { homepageNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Navigasi utama">
      <div className="site-shell site-header__inner">
        <a className="brand-lockup" href="#top" aria-label="HIPMI PT UIN Al Azhaar — kembali ke atas">
          <Image
            src="/assets/phase-1/logo-hipmi-pt.webp"
            alt="Logo HIPMI PT UIN Al Azhaar Lubuklinggau"
            width={56}
            height={56}
            className="brand-lockup__mark"
            priority
          />
          <span className="brand-lockup__text">
            <strong>HIPMI PT</strong>
            <span>UIN Al Azhaar Lubuklinggau</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi homepage">
          {homepageNavigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#join">Join HIPMI PT</a>

        <details className="mobile-nav">
          <summary aria-label="Buka menu navigasi">
            <span />
            <span />
          </summary>
          <div className="mobile-nav__panel">
            <p className="eyebrow">Digital Headquarters</p>
            <nav aria-label="Navigasi mobile">
              {homepageNavigation.map((item, index) => (
                <a key={item.href} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="button button--gold mobile-nav__cta" href="#join">Join HIPMI PT</a>
            <div className="mobile-nav__meta">
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">{siteConfig.contact.instagramHandle}</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
