export type MediaAsset = {
  id: string;
  label: string;
  sourceFile: string;
  publicPath?: string;
  width: number;
  height: number;
  context: "brand" | "leadership" | "pelantikan" | "mentorship" | "government";
  alt: string;
  status: "mastered" | "production";
};

export const brandAssets: MediaAsset[] = [
  { id: "brand-hipmi-pt", label: "Logo HIPMI PT UIN Al Azhaar", sourceFile: "file_000000002e6c81f89988bcb9de62f4b1.png", publicPath: "/assets/brand/hipmi-pt-uin-alazhaar.webp", width: 1536, height: 1536, context: "brand", alt: "Logo HIPMI PT UIN Al Azhaar Lubuklinggau", status: "production" },
  { id: "brand-uin", label: "Logo UIN Al Azhaar", sourceFile: "Screenshot_20260912-022115_1.png", width: 1536, height: 1533, context: "brand", alt: "Logo Universitas Islam Nusantara Al-Azhaar Lubuklinggau", status: "mastered" },
  { id: "brand-hipmi-pt-sumsel", label: "Logo HIPMI PT Sumatera Selatan", sourceFile: "Screenshot_20260912-022032_1.png", width: 1068, height: 1536, context: "brand", alt: "Logo HIPMI Perguruan Tinggi Sumatera Selatan", status: "mastered" },
  { id: "brand-hipmi-indonesia", label: "Logo HIPMI Indonesia", sourceFile: "250px-Logo_HIPMI.png", width: 1417, height: 1536, context: "brand", alt: "Logo Himpunan Pengusaha Muda Indonesia", status: "mastered" },
];

export const leadershipAssets: MediaAsset[] = [
  { id: "capryan-agusto", label: "Capryan Agusto — Ketua Umum", sourceFile: "file_00000000e32471fda9c8b7367c2aa801_2.png", width: 1186, height: 1536, context: "leadership", alt: "Potret Capryan Agusto, Ketua Umum HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "robi-apri-yansah", label: "Robi Apri Yansah — Sekretaris", sourceFile: "IMG-20260715-WA0037.jpg", width: 1536, height: 1273, context: "leadership", alt: "Potret Robi Apri Yansah, Sekretaris HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "dhea-mahyang-sari", label: "Dhea Mahyang Sari — Bendahara", sourceFile: "IMG-20260815-WA0045(1).jpg", width: 1229, height: 1536, context: "leadership", alt: "Potret Dhea Mahyang Sari, Bendahara HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "suci-maharani", label: "Suci Maharani — Kepala Bidang I", sourceFile: "Screenshot_20260912-023751_1.png", width: 1536, height: 1531, context: "leadership", alt: "Potret Suci Maharani, Kepala Bidang I HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "marisha-aresta", label: "Marisha Aresta — Kepala Bidang II", sourceFile: "IMG-20260815-WA0031(1).jpg", width: 1536, height: 1536, context: "leadership", alt: "Potret Marisha Aresta, Kepala Bidang II HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "muhammad-jumadi", label: "Muhammad Jumadi — Kepala Bidang III", sourceFile: "Screenshot_20260912-025623_1.png", width: 1536, height: 1478, context: "leadership", alt: "Potret Muhammad Jumadi, Kepala Bidang III HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "yosi-anita", label: "Yosi Anita — Kepala Bidang IV", sourceFile: "Screenshot_20260912-025631_1.png", width: 1493, height: 1536, context: "leadership", alt: "Potret Yosi Anita, Kepala Bidang IV HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "khusnul-khoiri", label: "Khusnul Khoiri — Kepala Bidang V", sourceFile: "Screenshot_20260912-025639_1.png", width: 1400, height: 1536, context: "leadership", alt: "Potret Khusnul Khoiri, Kepala Bidang V HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
  { id: "ricky-reynaldo", label: "Ricky Reynaldo — Kepala Bidang VI", sourceFile: "Screenshot_20260912-025650_1.png", width: 1536, height: 1406, context: "leadership", alt: "Potret Ricky Reynaldo, Kepala Bidang VI HIPMI PT UIN Al Azhaar Lubuklinggau", status: "mastered" },
];

export const documentaryAssets: MediaAsset[] = [
  { id: "pelantikan-6057", label: "Pelantikan Akbar — delegasi UIN Al Azhaar", sourceFile: "IMG_6057.JPG", publicPath: "/assets/documentation/pelantikan-2026/hero-pelantikan-2026.webp", width: 1536, height: 1024, context: "pelantikan", alt: "Delegasi HIPMI PT UIN Al Azhaar pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "production" },
  { id: "pelantikan-6007", label: "Pelantikan Akbar — jejaring kampus dan pemangku kepentingan", sourceFile: "IMG_6007.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Foto bersama Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "pelantikan-6003", label: "Pelantikan Akbar — serah terima dokumen", sourceFile: "IMG_6003.JPG", publicPath: "/assets/documentation/pelantikan-2026/serah-terima.webp", width: 1536, height: 1024, context: "pelantikan", alt: "Serah terima dokumen pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "production" },
  { id: "pelantikan-6006", label: "Pelantikan Akbar — foto bersama", sourceFile: "IMG_6006.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Dokumentasi foto bersama Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "pelantikan-5959", label: "Pelantikan Akbar — barisan organisasi kampus", sourceFile: "IMG_5959.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Barisan organisasi mahasiswa pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "pelantikan-nmsa9597", label: "Pelantikan Akbar — prosesi", sourceFile: "NMSA9597.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Prosesi Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "pelantikan-nmsa9620", label: "Pelantikan Akbar — sambutan", sourceFile: "NMSA9620.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Sambutan pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "pelantikan-nmsa9653", label: "Bazar UMKM — interaksi booth", sourceFile: "NMSA9653.JPG", publicPath: "/assets/documentation/pelantikan-2026/bazar-umkm.webp", width: 1536, height: 1024, context: "pelantikan", alt: "Interaksi pada booth Bazar UMKM dalam rangkaian Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "production" },
  { id: "pelantikan-nmsa9553", label: "Pelantikan Akbar — tamu dan peserta", sourceFile: "NMSA9553.JPG", width: 1536, height: 1024, context: "pelantikan", alt: "Tamu dan peserta Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026", status: "mastered" },
  { id: "mentorship-rbph", label: "Jejaring BPC HIPMI Lubuklinggau", sourceFile: "IMG-20260702-WA0017.jpg", width: 1536, height: 1152, context: "mentorship", alt: "Dokumentasi jejaring bersama BPC HIPMI Lubuklinggau", status: "mastered" },
  { id: "mentorship-cafe", label: "Sharing dan networking pengusaha senior", sourceFile: "IMG-20260709-WA0011.jpg", width: 1152, height: 1536, context: "mentorship", alt: "Dokumentasi sharing dan networking bersama pengusaha senior di Lubuklinggau", status: "mastered" },
  { id: "mentorship-meeting", label: "Pertemuan jejaring usaha", sourceFile: "IMG-20260714-WA0053.jpg", width: 1152, height: 1536, context: "mentorship", alt: "Dokumentasi pertemuan jejaring usaha HIPMI PT UIN Al Azhaar", status: "mastered" },
  { id: "government-0014", label: "Sinergi strategis Pemerintah Kota Lubuklinggau", sourceFile: "IMG-20260906-WA0014.jpg", width: 864, height: 1536, context: "government", alt: "Dokumentasi HIPMI PT UIN Al Azhaar dalam pertemuan sinergi dengan Pemerintah Kota Lubuklinggau", status: "mastered" },
  { id: "government-0015", label: "Sinergi strategis Pemerintah Kota Lubuklinggau", sourceFile: "IMG-20260906-WA0015.jpg", width: 864, height: 1536, context: "government", alt: "Dokumentasi sinergi HIPMI PT UIN Al Azhaar bersama Pemerintah Kota Lubuklinggau", status: "mastered" },
  { id: "government-0019", label: "Sinergi strategis Pemerintah Kota Lubuklinggau", sourceFile: "IMG-20260906-WA0019.jpg", width: 1536, height: 864, context: "government", alt: "Foto bersama dalam agenda sinergi HIPMI PT UIN Al Azhaar dan Pemerintah Kota Lubuklinggau", status: "mastered" },
];

export const mediaRegistry = [...brandAssets, ...leadershipAssets, ...documentaryAssets] as const;
