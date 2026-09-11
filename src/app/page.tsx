import { siteConfig } from "@/config/site";

const foundation = ["Information architecture", "Design tokens", "Content model", "SEO architecture", "Security baseline", "Performance budget"];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-ink-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-[80rem] flex-col justify-between px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5 text-xs uppercase tracking-[0.18em] text-white/65">
          <span>{siteConfig.shortName}</span>
          <span>Foundation · Phase 0</span>
        </header>
        <div className="max-w-5xl py-20 sm:py-28 lg:py-32">
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">Official Digital Headquarters</p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3.7rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.055em]">Fondasi untuk ekosistem pengusaha muda yang serius.</h1>
          <p className="mt-9 max-w-2xl text-base leading-8 text-white/67 sm:text-lg">Phase 0 mengunci arsitektur, identitas visual, struktur konten, keamanan, performa, dan SEO sebelum pengalaman publik dibangun. Tidak ada statistik palsu, halaman kosong, atau dekorasi yang berpura-pura menjadi strategi.</p>
        </div>
        <div className="grid gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {foundation.map((item, index) => (
            <div key={item} className="bg-ink-950 px-5 py-6">
              <span className="mb-8 block text-xs tabular-nums text-gold-500">0{index + 1}</span>
              <span className="text-sm text-white/85">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
