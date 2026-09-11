import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { createPageMetadata, getBaseUrl } from "@/lib/seo";

const display = Instrument_Serif({ subsets: ["latin"], variable: "--font-display", weight: "400" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  ...createPageMetadata(),
  metadataBase: getBaseUrl(),
  applicationName: siteConfig.shortName,
  category: "business",
  keywords: ["HIPMI PT UIN Al Azhaar", "HIPMI PT Lubuklinggau", "pengusaha muda Lubuklinggau", "entrepreneur mahasiswa Lubuklinggau", "UMKM mahasiswa Lubuklinggau"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
        {children}
      </body>
    </html>
  );
}
