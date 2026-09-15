export const photoFolder = "/photos" as const;

export const photoManifest = {
  hero: {
    filename: "dokumentasi-pelantikan-2026-01.jpg",
    path: `${photoFolder}/dokumentasi-pelantikan-2026-01.jpg`,
    alt: "Dokumentasi Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026",
  },
  leadershipOriginal: {
    ketuaUmum: "leadership-capryan-agusto.jpg",
    sekretaris: "leadership-robi-apri-yansah.jpg",
    bendahara: "leadership-dhea-mahyang-sari.jpg",
    kabid1: "leadership-suci-maharani.jpg",
    kabid2: "leadership-marisha-aresta.jpg",
    kabid3: "leadership-muhammad-jumadi.jpg",
    kabid4: "leadership-yosi-anita.jpg",
    kabid5: "leadership-khusnul-khoiri.jpg",
    kabid6: "leadership-ricky-reynaldo.jpg",
  },
  leadership: {
    ketuaUmum: "cutouts/leadership-capryan-agusto-cutout.png",
    sekretaris: "cutouts/leadership-robi-apri-yansah-cutout.png",
    bendahara: "cutouts/leadership-dhea-mahyang-sari-cutout.png",
    kabid1: "cutouts/leadership-suci-maharani-cutout.png",
    kabid2: "cutouts/leadership-marisha-aresta-cutout.png",
    kabid3: "cutouts/leadership-muhammad-jumadi-cutout.png",
    kabid4: "cutouts/leadership-yosi-anita-cutout.png",
    kabid5: "cutouts/leadership-khusnul-khoiri-cutout.png",
    kabid6: "cutouts/leadership-ricky-reynaldo-cutout.png",
  },
  documentation: {
    pelantikan2026: [
      "dokumentasi-pelantikan-2026-01.jpg",
      "dokumentasi-pelantikan-2026-02.jpg",
      "dokumentasi-pelantikan-2026-03.jpg",
      "dokumentasi-pelantikan-2026-04.jpg",
      "dokumentasi-pelantikan-2026-05.jpg",
      "dokumentasi-pelantikan-2026-06.jpg",
      "dokumentasi-pelantikan-2026-07.jpg",
      "dokumentasi-pelantikan-2026-08.jpg",
      "dokumentasi-pelantikan-2026-09.jpg",
    ],
    bpcHipmiLubuklinggau: [
      "dokumentasi-bpc-hipmi-01.jpg",
      "dokumentasi-bpc-hipmi-02.jpg",
      "dokumentasi-bpc-hipmi-03.jpg",
    ],
    pemkotLubuklinggau: [
      "dokumentasi-pemkot-lubuklinggau-01.jpg",
      "dokumentasi-pemkot-lubuklinggau-02.jpg",
      "dokumentasi-pemkot-lubuklinggau-03.jpg",
    ],
  },
} as const;

export function photoPath(filename: string) {
  return `${photoFolder}/${filename}`;
}
