import Image from "next/image";
import { siteConfig, type SiteLocale } from "@/config/site";

export function SiteFooter({ locale }: { locale: SiteLocale }) {
  const isId = locale === "id";
  return (
    <footer className="global-footer" lang={locale}>
      <div className="shell global-footer__top">
        <div className="footer-identity">
          <Image src="/assets/brand/hipmi-pt-uin-alazhaar.webp" alt="" width={72} height={72} unoptimized />
          <p>{siteConfig.name}</p>
          <strong>{isId ? "Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau." : "The digital home of young entrepreneurs at UIN Al Azhaar Lubuklinggau."}</strong>
        </div>
        <div className="footer-contact">
          <p className="footer-label">{isId ? "Kontak resmi" : "Official contact"}</p>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">{siteConfig.contact.instagramHandle} ↗</a>
          <address>{siteConfig.contact.address}</address>
        </div>
      </div>
      <div className="shell global-footer__bottom"><span>© 2026 HIPMI PT UIN Al Azhaar Lubuklinggau</span><span>{isId ? "Periode" : "Term"} {siteConfig.period}</span></div>
    </footer>
  );
}
