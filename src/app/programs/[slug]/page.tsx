import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import { siteConfig, type SiteLocale } from "@/config/site";
import { flagshipPrograms, getProgramBySlug } from "@/content/programs";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return flagshipPrograms.map((program) => ({ slug: program.slug }));
}

type ProgramDetailProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ params }: Pick<ProgramDetailProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return createPageMetadata({ title: "Program", path: `/programs/${slug}` });
  return createPageMetadata({
    title: program.title,
    description: program.summary.id,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params, searchParams }: ProgramDetailProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const locale: SiteLocale = query.lang === "en" ? "en" : "id";
  const isId = locale === "id";
  const focus = isId ? program.focus.id : program.focus.en;
  const contactSubject = encodeURIComponent(`${program.title} — HIPMI PT UIN Al Azhaar`);

  return (
    <div className="phase-three inner-page program-detail" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="program-detail__hero">
          <div className="shell program-detail__hero-grid">
            <div className="section-kicker section-kicker--light"><span>05</span><p>{isId ? "Program unggulan" : "Flagship program"}</p></div>
            <div className="program-detail__heading">
              <p>{isId ? program.cluster.id : program.cluster.en}</p>
              <h1>{program.title}</h1>
              <span>{isId ? program.summary.id : program.summary.en}</span>
            </div>
          </div>
        </section>

        <section className="program-detail__body">
          <div className="shell program-detail__body-grid">
            <aside>
              <Link href={`/programs?lang=${locale}`}>← {isId ? "Kembali ke program" : "Back to programs"}</Link>
              <div><span>{isId ? "Periode" : "Term"}</span><strong>{siteConfig.period}</strong></div>
              <div><span>{isId ? "Sasaran" : "Audience"}</span><strong>{isId ? program.audience.id : program.audience.en}</strong></div>
            </aside>

            <div className="program-detail__content">
              <article>
                <p>{isId ? "Tujuan program" : "Program purpose"}</p>
                <h2>{isId ? program.purpose.id : program.purpose.en}</h2>
              </article>

              <article className="program-detail__focus">
                <p>{isId ? "Fokus" : "Focus"}</p>
                <div>
                  {focus.map((item, index) => (
                    <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
                  ))}
                </div>
              </article>

              <article className="program-detail__note">
                <p>{isId ? "Catatan publik" : "Public note"}</p>
                <h3>{isId ? "Halaman ini menjelaskan arsitektur program, bukan mengumumkan jadwal atau pendaftaran yang belum dipublikasikan." : "This page explains the program architecture. It does not announce schedules or registration that have not been formally published."}</h3>
                <span>{isId ? "Jadwal, narasumber, kuota, mitra, dan capaian hanya akan ditampilkan setelah datanya resmi tersedia." : "Schedules, speakers, capacity, partners, and results will only be displayed after official information is available."}</span>
              </article>

              <a className="program-detail__contact" href={`mailto:${siteConfig.contact.email}?subject=${contactSubject}`}>
                <span>{isId ? "Tanya tentang program" : "Ask about this program"}</span><span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
