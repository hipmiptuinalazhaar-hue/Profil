import { siteConfig } from "@/config/site";

type Props = { lang: "id" | "en" };

export function SiteFooter({ lang }: Props) {
  const isId = lang === "id";
  return (
    <footer lang={lang} id="kontak" className="border-t border-white/10 bg-ink-950 text-white">
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Digital Headquarters</p>
          <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.035em] sm:text-5xl">
            {isId ? "Rumah digital pengusaha muda UIN Al Azhaar Lubuklinggau." : "The digital home of young entrepreneurs at UIN Al Azhaar Lubuklinggau."}
          </h2>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">{isId ? "Jelajahi" : "Explore"}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/72">
            <a href="#tentang" className="hover:text-white">{isId ? "Tentang" : "About"}</a>
            <a href="#program" className="hover:text-white">{isId ? "Program unggulan" : "Flagship programs"}</a>
            <a href="#ekosistem" className="hover:text-white">{isId ? "Ekosistem" : "Ecosystem"}</a>
            <a href="#kepemimpinan" className="hover:text-white">{isId ? "Kepemimpinan" : "Leadership"}</a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">{isId ? "Kontak resmi" : "Official contact"}</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/72">
            <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-white">{siteConfig.contact.email}</a>
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-white">{siteConfig.contact.instagramHandle}</a>
            <address className="not-italic">{siteConfig.contact.address}</address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-3 px-5 py-6 text-xs text-white/42 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© 2026 HIPMI PT UIN Al Azhaar Lubuklinggau</span>
          <span>{isId ? "Periode kepengurusan 2026/2027" : "Leadership term 2026/2027"}</span>
        </div>
      </div>
    </footer>
  );
}
