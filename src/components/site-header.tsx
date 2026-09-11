"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { id: "tentang", idLabel: "Tentang", enLabel: "About" },
  { id: "program", idLabel: "Program", enLabel: "Programs" },
  { id: "ekosistem", idLabel: "Ekosistem", enLabel: "Ecosystem" },
  { id: "kepemimpinan", idLabel: "Kepemimpinan", enLabel: "Leadership" },
  { id: "kontak", idLabel: "Kontak", enLabel: "Contact" }
] as const;

type Props = { lang: "id" | "en" };

export function SiteHeader({ lang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isId = lang === "id";
  const joinLabel = isId ? "Gabung" : "Join";
  const joinSubject = isId ? "Minat bergabung dengan HIPMI PT UIN Al Azhaar" : "Interest in joining HIPMI PT UIN Al Azhaar";

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header lang={lang} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/92 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label={isId ? "HIPMI PT UIN Al Azhaar - kembali ke atas" : "HIPMI PT UIN Al Azhaar - back to top"}>
          <span className="relative size-11 overflow-hidden rounded-full border border-white/15 bg-black/70">
            <Image src="/media/brand-logo.webp" alt="Logo HIPMI PT UIN Al Azhaar Lubuklinggau" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="hidden text-[0.72rem] font-semibold uppercase leading-4 tracking-[0.16em] text-white/88 sm:block">HIPMI PT<br />UIN Al Azhaar</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/72 lg:flex" aria-label={isId ? "Navigasi utama" : "Main navigation"}>
          {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-white">{isId ? item.idLabel : item.enLabel}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-white/15 p-1 text-[0.7rem] font-semibold tracking-[0.08em] text-white/65 sm:flex" aria-label={isId ? "Pilihan bahasa" : "Language selection"}>
            <a href="/?lang=id" className={`rounded-full px-2.5 py-1.5 ${isId ? "bg-white text-ink-950" : "hover:text-white"}`} aria-current={isId ? "page" : undefined}>ID</a>
            <a href="/?lang=en" className={`rounded-full px-2.5 py-1.5 ${!isId ? "bg-white text-ink-950" : "hover:text-white"}`} aria-current={!isId ? "page" : undefined}>EN</a>
          </div>
          <a href={`mailto:hipmitptuinalazhaar@gmail.com?subject=${encodeURIComponent(joinSubject)}`} className="hidden border border-gold-500 bg-gold-500 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-950 transition hover:bg-white sm:inline-flex">{joinLabel}</a>
          <button type="button" className="flex size-11 items-center justify-center border border-white/15 text-white lg:hidden" aria-label={menuOpen ? (isId ? "Tutup menu navigasi" : "Close navigation menu") : (isId ? "Buka menu navigasi" : "Open navigation menu")} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
            <span className="sr-only">Menu</span><span className="grid gap-1.5" aria-hidden="true"><i className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} /><i className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} /></span>
          </button>
          {menuOpen ? <div id="mobile-navigation" className="absolute inset-x-0 top-20 border-b border-white/10 bg-ink-950 px-5 pb-6 pt-3 shadow-2xl sm:px-8 lg:hidden">
            <nav className="mx-auto grid w-full max-w-[88rem]" aria-label={isId ? "Navigasi mobile" : "Mobile navigation"}>{navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} className="border-b border-white/8 px-1 py-4 text-base text-white/80 last:border-0">{isId ? item.idLabel : item.enLabel}</a>)}</nav>
            <div className="mx-auto mt-4 grid w-full max-w-[88rem] grid-cols-2 gap-2"><a href="/?lang=id" className={`border px-3 py-2.5 text-center text-xs ${isId ? "border-white bg-white text-ink-950" : "border-white/15 text-white"}`}>ID</a><a href="/?lang=en" className={`border px-3 py-2.5 text-center text-xs ${!isId ? "border-white bg-white text-ink-950" : "border-white/15 text-white"}`}>EN</a></div>
          </div> : null}
        </div>
      </div>
    </header>
  );
}
