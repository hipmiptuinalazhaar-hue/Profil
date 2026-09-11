import type { Division, Leader } from "@/types/content";

export const missions = [
  "Memberikan edukasi dan pelatihan kewirausahaan yang relevan dan praktis.",
  "Membangun mentorship langsung bersama praktisi dan pengusaha.",
  "Membuka jaringan kolaborasi antara mahasiswa, pengusaha, pemerintah, kampus, investor, dan komunitas.",
  "Membantu mahasiswa meningkatkan skala dan kualitas bisnis.",
  "Menciptakan ekosistem pengusaha muda kampus yang berkelanjutan."
] as const;

export const leadership: Leader[] = [
  { name: "Capryan Agusto", role: "Ketua Umum", portraitKey: "chairman" },
  { name: "Robi Apri Yansah", role: "Sekretaris", portraitKey: "secretary" },
  { name: "Dhea Mahyang Sari", role: "Bendahara", portraitKey: "treasurer" },
  { name: "Suci Maharani", role: "Kepala Bidang", division: "Bidang I — Organisasi, Keanggotaan, dan Kaderisasi", portraitKey: "head-division-1" },
  { name: "Marisha Aresta", role: "Kepala Bidang", division: "Bidang II — Ekonomi, UMKM, Ekonomi Kreatif & Pengembangan Start Up", portraitKey: "head-division-2" },
  { name: "Muhammad Jumadi", role: "Kepala Bidang", division: "Bidang III — Perindustrian, Perdagangan & ESDM", portraitKey: "head-division-3" },
  { name: "Yosi Anita", role: "Kepala Bidang", division: "Bidang IV — Kajian Strategis", portraitKey: "head-division-4" },
  { name: "Khusnul Khoiri", role: "Kepala Bidang", division: "Bidang V — Humas", portraitKey: "head-division-5" },
  { name: "Ricky Reynaldo", role: "Kepala Bidang", division: "Bidang VI — Pemuda & Olahraga", portraitKey: "head-division-6" }
];

export const divisions: Division[] = [
  { id: "bidang-1", name: "Organisasi, Keanggotaan, dan Kaderisasi", head: "Suci Maharani", members: [
    { compartment: "Pengembangan", name: "Earlyna" }, { compartment: "Keorganisasian", name: "Sari Cahayati" }, { compartment: "Keanggotaan", name: "Bunga Lestari" }
  ] },
  { id: "bidang-2", name: "Ekonomi, UMKM, Ekonomi Kreatif & Pengembangan Start Up", head: "Marisha Aresta", members: [
    { compartment: "Ekonomi", name: "Ridho" }, { compartment: "Ekonomi Kreatif", name: "Riza Pahlawan" }, { compartment: "UMKM", name: "Afif Reynold. S" }
  ] },
  { id: "bidang-3", name: "Perindustrian, Perdagangan & ESDM", head: "Muhammad Jumadi", members: [
    { compartment: "Perindustrian", name: "Anisa Widiana Sari" }, { compartment: "Perdagangan", name: "Elma Adewilita" }, { compartment: "ESDM", name: "Lusi Sepriyanti" }
  ] },
  { id: "bidang-4", name: "Kajian Strategis", head: "Yosi Anita", members: [
    { compartment: "Riset & Inovasi", name: "Inka Haeyu. P" }, { compartment: "Kajian Ekonomi", name: "Rodia Wati" }, { compartment: "Advokasi & Publik", name: "Muhammad Fadly" }
  ] },
  { id: "bidang-5", name: "Humas", head: "Khusnul Khoiri", members: [
    { compartment: "Eksternal", name: "Alpin Supriyadi" }, { compartment: "Kreatif", name: "Zaki Abdurahman" }, { compartment: "Desain", name: "Sahibul Arois" }
  ] },
  { id: "bidang-6", name: "Pemuda & Olahraga", head: "Ricky Reynaldo", members: [
    { compartment: "Olahraga", name: "Muhammad Alfatih" }, { compartment: "Pemuda", name: "Aldi Muhaimin" }, { compartment: "Kemasyarakatan", name: "Imam Maulana" }
  ] }
];
