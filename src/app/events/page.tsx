import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import type { SiteLocale } from "@/config/site";
import { eventFormats } from "@/content/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Agenda",
  description: "Agenda dan format kegiatan HIPMI PT UIN Al Azhaar Lubuklinggau. Jadwal hanya dipublikasikan setelah resmi dikunci.",
  path: "/events",
});

type EventsProps = { searchParams: Promise<{ lang?: string | string[] }> };

export default async function EventsPage({ searchParams }: EventsProps) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "en" ? "en" : "id";
  const isId = locale === "id";

  return (
    <div className="phase-three inner-page phase-nine" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="inner-hero events-hero">
          <div className="shell inner-hero__grid">
            <div className="section-kicker section-kicker--light"><span>07</span><p>{isId ? "Agenda" : "Events"}</p></div>
            <div className="inner-hero__copy">
              <p>{isId ? "Kalender publik" : "Public calendar"}</p>
              <h1>{isId ? "Tanggal hanya ditampilkan ketika benar-benar sudah resmi." : "Dates appear only when they are actually official."}</h1>
              <span>{isId ? "Kami tidak membuat agenda fiktif demi membuat halaman terlihat penuh. Ketika jadwal, tempat, narasumber, atau pendaftaran sudah dikunci, informasi itu akan masuk ke kalender ini." : "We do not invent events just to make the page look populated. Once dates, venues, speakers, or registration are confirmed, the information will appear here."}</span>
            </div>
          </div>
        </section>

        <section className="events-status">
          <div className="shell events-status__grid">
            <div className="events-status__signal"><span aria-hidden="true" /><p>{isId ? "STATUS KALENDER" : "CALENDAR STATUS"}</p><strong>{isId ? "Belum ada agenda publik yang dikunci." : "No public event has been locked yet."}</strong></div>
            <div className="events-status__copy"><h2>{isId ? "Halaman ini siap menerima agenda tanpa perlu mengubah arsitektur web." : "This page is ready for events without changing the site architecture."}</h2><p>{isId ? "Setiap entri nantinya dapat memuat tanggal, waktu, lokasi, format, program terkait, status pendaftaran, dan tautan resmi." : "Each future entry can include date, time, venue, format, related program, registration status, and an official link."}</p></div>
          </div>
        </section>

        <section className="event-formats">
          <div className="shell event-formats__heading"><p>{isId ? "Format utama" : "Core formats"}</p><h2>{isId ? "Jenis kegiatan yang menjadi bagian dari arsitektur program." : "Event formats that belong to the program architecture."}</h2></div>
          <div className="shell event-formats__grid">
            {eventFormats.map((event, index) => (
              <article key={event.name}><span>{String(index + 1).padStart(2, "0")}</span><p>{isId ? event.type.id : event.type.en}</p><h3>{event.name}</h3><strong>{isId ? event.note.id : event.note.en}</strong></article>
            ))}
          </div>
        </section>

        <section className="events-publish-rule">
          <div className="shell events-publish-rule__grid">
            <div><p>{isId ? "Standar publikasi" : "Publishing standard"}</p><h2>{isId ? "Satu agenda dianggap siap tayang jika lima hal ini jelas." : "An event is ready to publish when five things are clear."}</h2></div>
            <ol>
              {[isId ? "Nama kegiatan dan tujuan" : "Event name and purpose", isId ? "Tanggal dan waktu" : "Date and time", isId ? "Lokasi atau format daring" : "Venue or online format", isId ? "Penanggung jawab atau kanal resmi" : "Responsible team or official channel", isId ? "Status pendaftaran dan ketentuan" : "Registration status and requirements"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}
            </ol>
          </div>
        </section>

        <section className="inner-cta">
          <div className="shell inner-cta__grid"><p>{isId ? "Arsitektur program" : "Program architecture"}</p><h2>{isId ? "Lihat program yang menjadi sumber agenda organisasi." : "Explore the programs that generate the organization’s events."}</h2><Link className="cta-primary" href={`/programs?lang=${locale}`}><span>{isId ? "Lihat program" : "View programs"}</span><span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
