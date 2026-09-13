import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import "./phase45.css";
import "./phase69.css";
import "./launch.css";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { siteConfig } from "@/config/site";
import { createPageMetadata, getBaseUrl } from "@/lib/seo";

const display = Instrument_Serif({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  ...createPageMetadata(),
  metadataBase: getBaseUrl(),
  applicationName: siteConfig.shortName,
  category: "business",
  keywords: [
    "HIPMI PT UIN Al Azhaar",
    "HIPMI PT Lubuklinggau",
    "HIPMI UIN Al Azhaar",
    "pengusaha muda Lubuklinggau",
    "entrepreneur mahasiswa Lubuklinggau",
    "organisasi pengusaha mahasiswa Lubuklinggau",
    "UMKM mahasiswa Lubuklinggau",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
