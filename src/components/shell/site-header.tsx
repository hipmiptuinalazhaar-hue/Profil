import Image from "next/image";
import Link from "next/link";
import type { SiteLocale } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const navigation = [
  { id: "home", href: "/", idLabel: "Beranda", enLabel: "Home", idDescription: "Kembali ke halaman utama", enDescription: "Return to the homepage" },
  { id: "about", href: "/about", idLabel: "HIPMI PT", enLabel: "HIPMI PT", idDescription: "Profil, visi, misi, nilai, dan arah organisasi", enDescription: "Profile, vision, mission, values, and direction" },
  { id: "programs", href: "/programs", idLabel: "Program", enLabel: "Programs", idDescription: "Program unggulan dan fokus pengembangan", enDescription: "Flagship program and development focus" },
  { id: "leadership", href: "/leadership", idLabel: "Pengurus", enLabel: "Leadership", idDescription: "BPH, enam bidang, kepala bidang, dan kompartemen", enDescription: "Executive board, six divisions, heads, and compartments" },
  { id: "business", href: "/business", idLabel: "Ekosistem", enLabel: "Ecosystem", idDescription: "Direktori usaha mahasiswa dan anggota", enDescription: "Student and member business directory" },
  { id: "events", href: "/events", idLabel: "Agenda", enLabel: "Events", idDescription: "Kalender kegiatan dan agenda organisasi", enDescription: "Organization calendar and events" },
  { id: "media", href: "/media", idLabel: "Media", enLabel: "Media", idDescription: "Berita internal, berita eksternal, dan dokumentasi", enDescription: "Internal news, external news, and documentation" },
  { id: "partnerships", href: "/partnerships", idLabel: "Kolaborasi", enLabel: "Collaboration", idDescription: "Ruang kerja sama strategis", enDescription: "Strategic collaboration" },
] as const;

const secondaryNavigation = [
  { id: "impact", href: "/impact", idLabel: "Dampak", enLabel: "Impact", idDescription: "Capaian dan bukti dampak organisasi", enDescription: "Organization outcomes and evidence" },
  { id: "insights", href: "/insights", idLabel: "Wawasan", enLabel: "Insights", idDescription: "Playbook praktis untuk pengusaha muda", enDescription: "Practical playbooks for young entrepreneurs" },
] as const;

export function SiteHeader({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const localizedHref = (href: string) => `${href}?lang=${locale}`;
  const mobileNavigation = [...navigation, ...secondaryNavigation];
  const joinWhatsApp = createWhatsAppUrl(
    isId
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin bergabung dan mendapatkan informasi keanggotaan."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to join and get membership information.",
  );

  return (
    <header className="global-header" aria-label={isId ? "Navigasi utama" : "Main navigation"} lang={locale}>
      <div className="global-header__inner">
        <Link className="brand" href={`/?lang=${locale}`} aria-label="HIPMI PT UIN Al Azhaar Lubuklinggau">
          <span className="brand__mark" aria-hidden="true"><Image src="/assets/brand/hipmi-pt-uin-alazhaar.avif" alt="" width={64} height={64} priority unoptimized style={{ mixBlendMode: "normal" }} /></span>
          <span className="brand__wordmark"><strong>HIPMI PT UIN AL AZHAAR</strong><span>LUBUK LINGGAU</span></span>
        </Link>

        <nav className="desktop-navigation" aria-label={isId ? "Navigasi halaman" : "Site navigation"}>
          {navigation.map((item) => <Link key={item.id} href={localizedHref(item.href)}>{isId ? item.idLabel : item.enLabel}</Link>)}
        </nav>

        <div className="header-actions">
          <div className="locale-switch" aria-label={isId ? "Pilihan bahasa" : "Language selector"}>
            <Link href="/?lang=id" aria-current={isId ? "page" : undefined}>ID</Link><span aria-hidden="true">·</span><Link href="/?lang=en" aria-current={!isId ? "page" : undefined}>EN</Link>
          </div>
          <a className="header-join" href={joinWhatsApp} target="_blank" rel="noreferrer">{isId ? "Gabung" : "Join"}<span aria-hidden="true">↗</span></a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={isId ? "Buka atau tutup menu" : "Open or close menu"}><span className="mobile-menu__label">Menu</span><span className="mobile-menu__icon" aria-hidden="true"><i /><i /></span></summary>
          <div className="mobile-menu__panel">
            <div className="mobile-menu__halo" aria-hidden="true" />
            <div className="mobile-menu__shell">
              <div className="mobile-menu__topline">
                <Link className="mobile-menu__brand" href={`/?lang=${locale}`} aria-label="HIPMI PT UIN Al Azhaar Lubuklinggau">
                  <span className="mobile-menu__brand-mark" aria-hidden="true"><Image src="/assets/brand/hipmi-pt-uin-alazhaar.avif" alt="" width={72} height={72} unoptimized style={{ mixBlendMode: "normal" }} /></span>
                  <span><strong>HIPMI PT UIN AL AZHAAR</strong><small>LUBUK LINGGAU</small></span>
                </Link>
                <span className="mobile-menu__edition">2026 / 2027</span>
              </div>

              <div className="mobile-menu__layout">
                <div className="mobile-menu__statement"><span>Digital Headquarters</span><strong>{isId ? "Muda." : "Young."}<br />{isId ? "Berjejaring." : "Connected."}<br /><em>{isId ? "Berdampak." : "Impactful."}</em></strong><p>{isId ? "Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau." : "The digital home of young entrepreneurs at UIN Al Azhaar Lubuklinggau."}</p></div>
                <nav className="mobile-menu__navigation" aria-label={isId ? "Navigasi mobile" : "Mobile navigation"}>
                  {mobileNavigation.map((item, index) => (
                    <Link key={item.id} href={localizedHref(item.href)}><span className="mobile-menu__number">{String(index + 1).padStart(2, "0")}</span><span className="mobile-menu__copy"><strong>{isId ? item.idLabel : item.enLabel}</strong><small>{isId ? item.idDescription : item.enDescription}</small></span><span className="mobile-menu__arrow" aria-hidden="true">↗</span></Link>
                  ))}
                </nav>
              </div>

              <div className="mobile-menu__footer">
                <div className="locale-switch locale-switch--mobile" aria-label={isId ? "Pilihan bahasa" : "Language selector"}><Link href="/?lang=id" aria-current={isId ? "page" : undefined}>Indonesia</Link><Link href="/?lang=en" aria-current={!isId ? "page" : undefined}>English</Link></div>
                <a className="mobile-menu__join" href={joinWhatsApp} target="_blank" rel="noreferrer"><span>{isId ? "Gabung via WhatsApp" : "Join via WhatsApp"}</span><span aria-hidden="true">↗</span></a>
                <a className="mobile-menu__social" href="https://instagram.com/hipmipt.alazhaar" target="_blank" rel="noreferrer">Instagram · @hipmipt.alazhaar</a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
