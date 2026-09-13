import { siteConfig } from "@/config/site";
import { getBaseUrl } from "@/lib/seo";

export function OrganizationSchema() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: getBaseUrl().toString(),
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneE164,
      contactType: "official contact",
      availableLanguage: ["id", "en"],
      url: whatsappUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Pelita No.364, RT.07, Kelurahan Pelita Jaya",
      addressLocality: "Lubuklinggau",
      addressRegion: "Sumatera Selatan",
      postalCode: "31614",
      addressCountry: "ID",
    },
    sameAs: [siteConfig.contact.instagram, whatsappUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
