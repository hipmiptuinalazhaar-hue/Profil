import { V2ImmersiveHome } from "@/components/home/v2-immersive-home";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type HomeProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const joinWhatsApp = createWhatsAppUrl(
    locale === "id"
      ? "Halo HIPMI PT UIN Al Azhaar, saya ingin bergabung dan mendapatkan informasi keanggotaan."
      : "Hello HIPMI PT UIN Al Azhaar, I would like to join and get membership information.",
  );

  return (
    <div className="phase-three phase-five phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <V2ImmersiveHome locale={locale} joinWhatsApp={joinWhatsApp} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
