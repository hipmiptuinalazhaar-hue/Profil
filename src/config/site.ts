export const siteConfig = {
  name: "HIPMI PT UIN Al Azhaar Lubuklinggau",
  legalName: "Himpunan Pengusaha Muda Indonesia Perguruan Tinggi Universitas Islam Nusantara Al Azhaar Lubuklinggau",
  shortName: "HIPMI PT UIN Al Azhaar",
  period: "2026/2027",
  positioning: "Rumah Digital Pengusaha Muda UIN Al Azhaar Lubuklinggau",
  description: "Ruang kolaborasi, pembelajaran, networking, dan pengembangan bisnis bagi pengusaha muda kampus UIN Al Azhaar Lubuklinggau.",
  vision: "Membangun ekosistem pengusaha muda kampus yang inovatif, kolaboratif, berdaya saing, dan berdampak bagi masyarakat serta perekonomian daerah.",
  contact: {
    email: "hipmitptuinalazhaar@gmail.com",
    instagram: "https://instagram.com/hipmipt.alazhaar",
    instagramHandle: "@hipmipt.alazhaar",
    address: "Jl. Pelita No.364, RT.07, Kelurahan Pelita Jaya, Kecamatan Lubuklinggau Barat I, Kota Lubuklinggau, Sumatera Selatan 31614"
  },
  locale: { default: "id", supported: ["id", "en"] as const }
} as const;

export type SiteLocale = (typeof siteConfig.locale.supported)[number];
