import Image from "next/image";
import { homepageNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-shell site-footer__grid">
        <div className="site-footer__identity">
          <Image
            src="/assets/phase-1/logo-hipmi-pt.webp"
            alt="Logo HIPMI PT UIN Al Azhaar Lubuklinggau"
            width={72}
            height={72}
          />
          <p className="eyebrow">Official Digital Headquarters</p>
          <h2>Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau.</h2>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <nav className="footer-links" aria-label="Navigasi footer">
            {homepageNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>

        <div>
          <p className="footer-label">Contact</p>
          <div className="footer-links footer-links--contact">
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer">{siteConfig.contact.instagramHandle}</a>
            <address>{siteConfig.contact.address}</address>
          </div>
        </div>
      </div>

      <div className="site-shell site-footer__bottom">
        <span>© 2026 HIPMI PT UIN Al Azhaar Lubuklinggau</span>
        <span>Periode {siteConfig.period}</span>
      </div>
    </footer>
  );
}
