export const institutionalPillars = [
  {
    key: "learn",
    label: { id: "Belajar", en: "Learn" },
    title: { id: "Pengetahuan yang bisa dipakai.", en: "Knowledge that can be applied." },
    body: {
      id: "Pembelajaran diarahkan pada keputusan bisnis, praktik, dan kemampuan yang relevan dengan usaha mahasiswa.",
      en: "Learning is oriented toward business decisions, practice, and capabilities relevant to student ventures.",
    },
  },
  {
    key: "connect",
    label: { id: "Terhubung", en: "Connect" },
    title: { id: "Jaringan yang membuka kemungkinan.", en: "Networks that create possibilities." },
    body: {
      id: "Kami membangun ruang temu antara mahasiswa, praktisi, pengusaha, kampus, pemerintah, komunitas, dan mitra ekosistem.",
      en: "We create meeting points between students, practitioners, entrepreneurs, university stakeholders, government, communities, and ecosystem partners.",
    },
  },
  {
    key: "build",
    label: { id: "Membangun", en: "Build" },
    title: { id: "Usaha nyata, bukan sekadar wacana.", en: "Real ventures, not just conversation." },
    body: {
      id: "Program dirancang untuk membantu anggota menguji ide, memperbaiki model bisnis, dan menjalankan usaha dengan lebih disiplin.",
      en: "Programs are designed to help members test ideas, improve business models, and operate ventures with greater discipline.",
    },
  },
  {
    key: "grow",
    label: { id: "Bertumbuh", en: "Grow" },
    title: { id: "Dari kapasitas menuju dampak.", en: "From capability to impact." },
    body: {
      id: "Ekosistem diarahkan pada pertumbuhan kapasitas, kualitas usaha, kolaborasi, dan kontribusi terhadap ekonomi daerah.",
      en: "The ecosystem is oriented toward stronger capability, better ventures, collaboration, and contribution to the regional economy.",
    },
  },
] as const;

export const networkAffiliations = [
  {
    name: "HIPMI Indonesia",
    scope: { id: "Ekosistem nasional", en: "National ecosystem" },
  },
  {
    name: "HIPMI PT Sumatera Selatan",
    scope: { id: "Jejaring perguruan tinggi provinsi", en: "Provincial university network" },
  },
  {
    name: "BPC HIPMI Lubuklinggau",
    scope: { id: "Jejaring pengusaha muda kota", en: "City young-entrepreneur network" },
  },
  {
    name: "HIPMI PT se-Linggau Raya",
    scope: { id: "Jejaring antar-kampus", en: "Inter-campus network" },
  },
] as const;

export const institutionalValues = [
  {
    id: "Praktis",
    en: "Practical",
    idBody: "Mengutamakan hal yang dapat dipakai anggota untuk bergerak dan mengambil keputusan.",
    enBody: "Prioritising what members can use to act and make decisions.",
  },
  {
    id: "Kolaboratif",
    en: "Collaborative",
    idBody: "Membuka ruang kerja bersama lintas organisasi, sektor, dan pengalaman.",
    enBody: "Creating room to work across organisations, sectors, and levels of experience.",
  },
  {
    id: "Bertumbuh",
    en: "Growth-minded",
    idBody: "Mendorong perbaikan kapasitas, kualitas usaha, dan keberanian mengeksekusi.",
    enBody: "Encouraging stronger capability, better ventures, and the courage to execute.",
  },
  {
    id: "Berdampak",
    en: "Impact-oriented",
    idBody: "Menghubungkan pertumbuhan anggota dengan manfaat yang lebih luas bagi kampus dan daerah.",
    enBody: "Connecting member growth with broader value for the university and the region.",
  },
] as const;
