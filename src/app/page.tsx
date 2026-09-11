import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeGallery } from "@/components/home/home-gallery";
import { HomeHero } from "@/components/home/home-hero";
import { HomePrograms } from "@/components/home/home-programs";
import { HomeStories } from "@/components/home/home-stories";
import { siteConfig } from "@/config/site";
import type { HomeLocale } from "@/content/home";
import { getBaseUrl } from "@/lib/seo";

type Props = { searchParams: Promise<{ lang?: string }> };

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const lang: HomeLocale = params.lang === "en" ? "en" : "id";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: getBaseUrl().toString(),
    email: siteConfig.contact.email,
    sameAs: [siteConfig.contact.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Pelita No.364, RT.07, Kelurahan Pelita Jaya, Kecamatan Lubuklinggau Barat I",
      addressLocality: "Lubuklinggau",
      addressRegion: "Sumatera Selatan",
      postalCode: "31614",
      addressCountry: "ID"
    }
  };

  return <>
    <SiteHeader lang={lang} />
    <main id="main-content" lang={lang} className="overflow-hidden bg-paper-50 text-ink-950">
      <HomeHero lang={lang} />
      <HomePrograms lang={lang} />
      <HomeStories lang={lang} />
      <HomeGallery lang={lang} />
    </main>
    <SiteFooter lang={lang} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
