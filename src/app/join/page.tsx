import type { Metadata } from "next";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import { siteConfig, type SiteLocale } from "@/config/site";
import { membershipSteps } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gabung HIPMI PT",
  description: "Alur bergabung dengan HIPMI PT UIN Al Azhaar Lubuklinggau dan informasi yang perlu disiapkan calon anggota.",
  path: "/join",
});

type JoinProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function JoinPage({ searchParams }: JoinProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";
  const subject = encodeURIComponent(isId ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar");
  const body = encodeURIComponent(
    isId
      ? "Nama:\nProgram Studi:\nSemester:\nApakah sedang memiliki usaha? (Ya/Tidak):\nNama/jenis usaha jika ada:\nMinat utama di HIPMI PT:\n"
      : "Name:\nStudy Program:\nSemester:\nDo you currently run a business? (Yes/No):\nBusiness name/type if any:\nMain interest in HIPMI PT:\n",
  );

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero join-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>08</span><p>{isId ? "Keanggotaan" : "Membership"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Join the ecosystem" : "Join the ecosystem"}</p>
              <h1>{isId ? "Masuk bukan hanya untuk tercatat. Masuk untuk bergerak." : "Join not merely to be listed. Join to move."}</h1>
              <span>{isId ? "HIPMI PT dibangun untuk mahasiswa yang ingin belajar kewirausahaan, memulai usaha, menjalankan usaha, atau membawa usaha ke tahap berikutnya." : "HIPMI PT is built for students who want to learn entrepreneurship, start a venture, operate a business, or move an existing venture to its next stage."}</span>
            </div>
          </div>
        </section>

        <section className="membership-journey">
          <div className="shell membership-journey__heading"><p>{isId ? "Alur anggota" : "Member journey"}</p><h2>{isId ? "Empat langkah agar kebutuhan anggota tidak hilang di tengah keramaian organisasi." : "Four steps so member needs do not disappear inside organizational noise."}</h2></div>
          <div className="shell membership-journey__grid">
            {membershipSteps.map((step, index) => (
              <article key={step.title.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{isId ? step.title.id : step.title.en}</h3><p>{isId ? step.body.id : step.body.en}</p></article>
            ))}
          </div>
        </section>

        <section className="membership-ready">
          <div className="shell membership-ready__grid">
            <div><p>{isId ? "Siapkan sebelum menghubungi" : "Prepare before contacting"}</p><h2>{isId ? "Enam informasi dasar membuat proses pemetaan jauh lebih cepat." : "Six basic details make the mapping process much faster."}</h2></div>
            <ol>
              {[isId ? "Nama lengkap" : "Full name", isId ? "Program studi" : "Study program", isId ? "Semester" : "Semester", isId ? "Status usaha saat ini" : "Current business status", isId ? "Nama atau jenis usaha jika ada" : "Business name or type if applicable", isId ? "Minat utama: belajar, bisnis, jaringan, atau organisasi" : "Main interest: learning, business, network, or organization"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}
            </ol>
          </div>
        </section>

        <section className="membership-contact">
          <div className="shell membership-contact__grid">
            <div><p>{isId ? "Kanal resmi" : "Official channel"}</p><h2>{isId ? "Mulai lewat email resmi. Tidak ada formulir yang diam-diam menyimpan data Anda di server." : "Start through the official email. There is no form quietly storing your data on a server."}</h2><span>{isId ? "Tombol di bawah hanya membuka aplikasi email Anda dengan template yang sudah disiapkan." : "The button below only opens your email app with a prepared template."}</span></div>
            <div className="membership-contact__action"><a href={`mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`}><span>{isId ? "Kirim minat bergabung" : "Send membership interest"}</span><strong>{siteConfig.contact.email}</strong><i aria-hidden="true">↗</i></a><p>{siteConfig.contact.instagramHandle}</p></div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
