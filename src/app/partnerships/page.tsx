import type { Metadata } from "next";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import { siteConfig, type SiteLocale } from "@/config/site";
import { collaborationTracks } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Kolaborasi Strategis",
  description: "Ruang kolaborasi HIPMI PT UIN Al Azhaar untuk edukasi, mentorship, pasar, inovasi, dan forum kewirausahaan muda.",
  path: "/partnerships",
});

type PartnershipProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function PartnershipsPage({ searchParams }: PartnershipProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";
  const message = isId
    ? "Halo HIPMI PT UIN Al Azhaar, saya ingin mengajukan kolaborasi strategis.\n\nNama organisasi/perusahaan:\nNama PIC:\nJenis kolaborasi:\nTujuan kolaborasi:\nNilai yang ditawarkan untuk anggota/ekosistem:\nPeriode atau waktu yang diusulkan:\nKontak balasan:\n\nTerima kasih."
    : "Hello HIPMI PT UIN Al Azhaar, I would like to propose a strategic collaboration.\n\nOrganization/company:\nContact person:\nCollaboration type:\nCollaboration objective:\nValue offered to members/ecosystem:\nProposed period or timing:\nReply contact:\n\nThank you.";
  const whatsappUrl = createWhatsAppUrl(message);

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero partnerships-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>08</span><p>{isId ? "Kolaborasi" : "Collaboration"}</p></div>
            <div className="inner-hero__copy"><p>Strategic collaboration</p><h1>{isId ? "Kolaborasi harus menciptakan nilai yang jelas untuk kedua sisi." : "Collaboration should create clear value for both sides."}</h1><span>{isId ? "HIPMI PT membuka ruang kerja sama yang relevan dengan pengembangan pengusaha muda kampus, selama tujuan, peran, manfaat, dan bentuk dukungannya dapat dijelaskan dengan terbuka." : "HIPMI PT welcomes collaboration relevant to developing young campus entrepreneurs when the objective, roles, value, and form of support can be explained clearly."}</span></div>
          </div>
        </section>

        <section className="collaboration-tracks">
          <div className="shell collaboration-tracks__heading"><p>{isId ? "Ruang kolaborasi" : "Collaboration tracks"}</p><h2>{isId ? "Empat jalur yang paling dekat dengan kebutuhan ekosistem." : "Four tracks closest to the ecosystem's needs."}</h2></div>
          <div className="shell collaboration-tracks__grid">{collaborationTracks.map((track, index) => <article key={track.title.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{isId ? track.title.id : track.title.en}</h3><p>{isId ? track.body.id : track.body.en}</p></article>)}</div>
        </section>

        <section className="collaboration-principles">
          <div className="shell collaboration-principles__grid">
            <div><p>{isId ? "Sebelum menyebutnya kemitraan" : "Before calling it a partnership"}</p><h2>{isId ? "Status hubungan tidak akan dibesar-besarkan di website." : "Relationship status will not be inflated on this website."}</h2><span>{isId ? "Jejaring, audiensi, pertemuan, dukungan acara, sponsorship, dan kemitraan formal adalah hal yang berbeda. Kami menuliskan status sesuai bukti yang benar-benar ada." : "Networks, meetings, event support, sponsorship, and formal partnerships are different relationships. We describe each relationship according to the evidence that actually exists."}</span></div>
            <ol>{[isId ? "Tujuan dan ruang lingkup jelas" : "Clear objective and scope", isId ? "Peran masing-masing pihak jelas" : "Clear roles for each side", isId ? "Manfaat bagi anggota atau ekosistem jelas" : "Clear value for members or ecosystem", isId ? "Kanal komunikasi dan PIC jelas" : "Clear communication channel and contact person", isId ? "Status publikasi disepakati" : "Agreed public communication status"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
          </div>
        </section>

        <section className="collaboration-contact">
          <div className="shell collaboration-contact__grid">
            <div><p>{isId ? "Mulai percakapan" : "Start a conversation"}</p><h2>{isId ? "Kirim konteks lengkap sejak pesan pertama." : "Send useful context from the first message."}</h2><span>{isId ? "Tidak ada formulir publik yang menyimpan proposal ke database. Tombol ini membuka WhatsApp resmi dengan kerangka informasi yang diperlukan." : "There is no public form storing proposals in a database. This button opens the official WhatsApp with the information framework we need."}</span></div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><span>{isId ? "Ajukan kolaborasi via WhatsApp" : "Propose collaboration via WhatsApp"}</span><strong>{siteConfig.contact.whatsappDisplay}</strong><i aria-hidden="true">↗</i></a>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
