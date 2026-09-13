import Image from "next/image";
import Link from "next/link";
import { siteConfig, type SiteLocale } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  const generalWhatsApp = createWhatsAppUrl(
    isId
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin mendapatkan informasi lebih lanjut."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to get more information.",
  );
  const joinWhatsApp = createWhatsAppUrl(
    isId
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin bergabung dan mendapatkan informasi keanggotaan."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to join and get membership information.",
  );
  const partnershipWhatsApp = createWhatsAppUrl(
    isId
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin membahas peluang kolaborasi strategis."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to discuss a strategic collaboration opportunity.",
  );

  return (
    <footer className="global-footer" lang={locale}>
      <div className="global-footer__glow" aria-hidden="true" />
      <div className="shell global-footer__top">
        <div className="footer-identity">
          <div className="footer-identity__brand">
            <Image src="/assets/brand/hipmi-pt-uin-alazhaar.avif" alt="" width={88} height={88} unoptimized style={{ mixBlendMode: "normal" }} />
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
            <a href={joinWhatsApp} target="_blank" rel="noreferrer">{isId ? "Gabung via WhatsApp ↗" : "Join via WhatsApp ↗"}</a>
            <Link href={`/partnerships?lang=${locale}`}>{isId ? "Info kolaborasi" : "Collaboration info"}</Link>
          </div>

          <div className="footer-directory__column footer-contact">
            <p className="footer-label">{isId ? "Kontak resmi" : "Official contact"}</p>
            <a href={generalWhatsApp} target="_blank" rel="noreferrer">WhatsApp · {siteConfig.contact.whatsappDisplay} ↗</a>
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">{siteConfig.contact.instagramHandle} ↗</a>
            <address>{siteConfig.contact.address}</address>
          </div>
        </div>
      </div>

      <div className="shell footer-partnership">
        <div><span>{isId ? "Kolaborasi strategis" : "Strategic collaboration"}</span><strong>{isId ? "Bangun sesuatu yang berdampak bersama kami." : "Build something meaningful with us."}</strong></div>
        <a href={partnershipWhatsApp} target="_blank" rel="noreferrer">{isId ? "Hubungi via WhatsApp" : "Contact via WhatsApp"}<span aria-hidden="true">↗</span></a>
      </div>

      <div className="shell global-footer__bottom">
        <span>© 2026 HIPMI PT UIN Al Azhaar Lubuklinggau</span><span>{isId ? "Periode" : "Term"} {siteConfig.period}</span><span>Lubuklinggau · Sumatera Selatan</span>
      </div>
    </footer>
  );
}
