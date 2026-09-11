import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-gold-500">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-tight sm:text-7xl">Halaman belum berada di jaringan ini.</h1>
        <p className="mt-6 leading-7 text-white/65">Kembali ke digital headquarters dan lanjutkan dari jalur yang tersedia.</p>
        <Link href="/" className="mt-8 inline-flex border border-white/20 px-5 py-3 text-sm transition-colors hover:border-gold-500 hover:text-gold-500">Kembali ke beranda</Link>
      </div>
    </main>
  );
}
