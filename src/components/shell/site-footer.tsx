import Image from "next/image";
import Link from "next/link";
import { siteConfig, type SiteLocale } from "@/config/site";

export function SiteFooter({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";

  return (
    <footer className="global-footer" lang={locale}>
      <div className="global-footer__glow" aria-hidden="true" />

      <div className="shell global-footer__top">
        <div className="footer-identity">
          <div className="footer-identity__brand">
            <Image
              src="/assets/brand/hipmi-pt-uin-alazhaar.avif"
              alt=""
              width={88}
              height={88}
              unoptimized
              style={{ mixBlendMode: "normal" }}
            />
            <div><span>HIPMI PT</span><small>UIN Al Azhaar Lubuklinggau</small></div>
          </div>
          <p>{isId ? "Rumah digital pengusaha muda" : "The digital home of young entrepreneurs"}</p>
          <strong>{isId ? "Membangun usaha. Memperluas jaringan. Menciptakan dampak." : "Build ventures. Expand networks. Create impact."}</strong>
          <span className="footer-network">{isId ? "Terhubung dalam ekosistem HIPMI dan jejaring pengusaha muda se-Linggau Raya." : "Connected to the HIPMI ecosystem and the young entrepreneur network across Linggau Raya."}</span>
        </div>

        <div className="footer-directory">
          <div className="footer-directory__column">
            <p className="footer-label">{isId ? "Organisasi" : "Organization"}</p>
            <Link href={`/about?lang=${locale}`}>{isId ? "Tentang HIPMI PT" : "About HIPMI PT"}</Link>
            <Link href={`/leadership?lang=${locale}`}>{isId ? "Kepengurusan" : "Leadership"}</Link>
            <Link href={`/programs?lang=${locale}`}>{isId ? "Program" : "Programs"}</Link>
            <Link href={`/business?lang=${locale}`}>{isId ? "Ekosistem bisnis" : "Business ecosystem"}</Link>
            <Link href={`/impact?lang=${locale}`}>{isId ? "Dampak" : "Impact"}</Link>
          </div>

          <div className="footer-directory__column">
            <p className="footer-label">{isId ? "Publik" : "Public"}</p>
            <Link href={`/events?lang=${locale}`}>{isId ? "Agenda" : "Events"}</Link>
            <Link href={`/insights?lang=${locale}`}>{isId ? "Wawasan" : "Insights"}</Link>
            <Link href={`/media?lang=${locale}`}>{isId ? "Media & dokumentasi" : "Media & documentation"}</Link>
            <Link href={`/join?lang=${locale}`}>{isId ? "Gabung" : "Join"}</Link>
            <Link href={`/partnerships?lang=${locale}`}>{isId ? "Kolaborasi" : "Collaboration"}</Link>
          </div>

          <div className="footer-directory__column footer-contact">
            <p className="footer-label">{isId ? "Kontak resmi" : "Official contact"}</p>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">{siteConfig.contact.instagramHandle} ↗</a>
            <address>{siteConfig.contact.address}</address>
          </div>
        </div>
      </div>

      <div className="shell footer-partnership">
        <div>
          <span>{isId ? "Kolaborasi strategis" : "Strategic collaboration"}</span>
          <strong>{isId ? "Bangun sesuatu yang berdampak bersama kami." : "Build something meaningful with us."}</strong>
        </div>
        <Link href={`/partnerships?lang=${locale}`}>
          {isId ? "Buka ruang kolaborasi" : "Explore collaboration"}<span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="shell global-footer__bottom">
        <span>© 2026 HIPMI PT UIN Al Azhaar Lubuklinggau</span>
        <span>{isId ? "Periode" : "Term"} {siteConfig.period}</span>
        <span>Lubuklinggau · Sumatera Selatan</span>
      </div>
    </footer>
  );
}
