export type LocalizedText = { id: string; en: string };

export type FlagshipProgram = {
  slug: string;
  title: string;
  cluster: LocalizedText;
  summary: LocalizedText;
  purpose: LocalizedText;
  audience: LocalizedText;
  focus: { id: readonly string[]; en: readonly string[] };
};

export const flagshipPrograms: readonly FlagshipProgram[] = [
  {
    slug: "business-academy",
    title: "Business Academy",
    cluster: { id: "Kapabilitas", en: "Capability" },
    summary: {
      id: "Ruang belajar praktis untuk menguatkan fondasi bisnis, cara berpikir wirausaha, dan kemampuan menjalankan usaha.",
      en: "A practical learning platform for stronger business foundations, entrepreneurial thinking, and venture execution.",
    },
    purpose: {
      id: "Dirancang untuk membantu mahasiswa mengubah pengetahuan bisnis menjadi keputusan dan tindakan yang dapat dipakai dalam usaha nyata.",
      en: "Designed to help students turn business knowledge into decisions and actions that can be applied to real ventures.",
    },
    audience: { id: "Mahasiswa yang sedang memulai atau mengembangkan usaha.", en: "Students starting or developing a venture." },
    focus: {
      id: ["Model bisnis", "Keuangan dasar", "Pemasaran", "Eksekusi dan evaluasi"],
      en: ["Business model", "Finance fundamentals", "Marketing", "Execution and review"],
    },
  },
  {
    slug: "pitching-access-to-capital",
    title: "Pitching & Access to Capital",
    cluster: { id: "Pendanaan", en: "Capital" },
    summary: {
      id: "Penguatan kemampuan menyusun narasi bisnis, mempresentasikan usaha, dan memahami jalur menuju akses permodalan.",
      en: "Strengthening the ability to frame a business story, present a venture, and understand pathways to capital.",
    },
    purpose: {
      id: "Mempersiapkan founder muda agar mampu menjelaskan masalah, solusi, model bisnis, kebutuhan modal, dan rencana pertumbuhan secara lebih terstruktur.",
      en: "Prepares young founders to explain problems, solutions, business models, capital needs, and growth plans more clearly.",
    },
    audience: { id: "Pemilik usaha mahasiswa dan tim rintisan kampus.", en: "Student founders and campus startup teams." },
    focus: {
      id: ["Pitch deck", "Business narrative", "Kesiapan pendanaan", "Investor readiness"],
      en: ["Pitch deck", "Business narrative", "Funding readiness", "Investor readiness"],
    },
  },
  {
    slug: "networking-business-expo",
    title: "Networking & Business Expo",
    cluster: { id: "Pasar & Jaringan", en: "Market & Network" },
    summary: {
      id: "Ruang temu antara bisnis mahasiswa, pengusaha, komunitas, institusi, dan calon kolaborator.",
      en: "A meeting ground for student businesses, entrepreneurs, communities, institutions, and prospective collaborators.",
    },
    purpose: {
      id: "Membuka visibilitas usaha dan memperbesar kemungkinan terjadinya relasi bisnis, kolaborasi, serta pembelajaran lintas pelaku.",
      en: "Expands venture visibility and creates more opportunities for business relationships, collaboration, and cross-peer learning.",
    },
    audience: { id: "Pelaku usaha mahasiswa dan jejaring kewirausahaan.", en: "Student businesses and the broader entrepreneurship network." },
    focus: {
      id: ["Showcase usaha", "Business matching", "Networking", "Kolaborasi"],
      en: ["Venture showcase", "Business matching", "Networking", "Collaboration"],
    },
  },
  {
    slug: "100-pengusaha-muda",
    title: "100 Pengusaha Muda",
    cluster: { id: "Regenerasi", en: "Founder Pipeline" },
    summary: {
      id: "Inisiatif untuk memperluas basis mahasiswa yang berani memulai, menguji, dan mengembangkan kegiatan usaha.",
      en: "An initiative to expand the number of students willing to start, test, and develop business activity.",
    },
    purpose: {
      id: "Membangun pipeline pengusaha muda kampus melalui pendataan, pengembangan kapasitas, jejaring, dan dukungan ekosistem.",
      en: "Builds a campus founder pipeline through mapping, capability development, networking, and ecosystem support.",
    },
    audience: { id: "Mahasiswa yang sudah memiliki usaha maupun yang sedang menyiapkan usaha pertama.", en: "Students with existing ventures and those preparing their first business." },
    focus: {
      id: ["Founder mapping", "Onboarding", "Pengembangan usaha", "Community growth"],
      en: ["Founder mapping", "Onboarding", "Venture development", "Community growth"],
    },
  },
  {
    slug: "linggaupreneur-summit",
    title: "LinggauPreneur Summit",
    cluster: { id: "Forum Strategis", en: "Strategic Forum" },
    summary: {
      id: "Forum kewirausahaan yang dirancang untuk mempertemukan ide, pengalaman, jaringan, dan peluang lintas ekosistem.",
      en: "An entrepreneurship forum designed to connect ideas, experience, networks, and opportunities across the ecosystem.",
    },
    purpose: {
      id: "Menjadi ruang percakapan strategis tentang pertumbuhan usaha muda, ekonomi daerah, kolaborasi, dan masa depan kewirausahaan.",
      en: "Creates a strategic forum around young-business growth, the regional economy, collaboration, and the future of entrepreneurship.",
    },
    audience: { id: "Mahasiswa, pengusaha, kampus, pemerintah, komunitas, dan mitra ekosistem.", en: "Students, entrepreneurs, university stakeholders, government, communities, and ecosystem partners." },
    focus: {
      id: ["Keynote & forum", "Cross-sector networking", "Regional entrepreneurship", "Collaboration agenda"],
      en: ["Keynotes & forums", "Cross-sector networking", "Regional entrepreneurship", "Collaboration agenda"],
    },
  },
  {
    slug: "business-visit",
    title: "Business Visit",
    cluster: { id: "Exposure", en: "Exposure" },
    summary: {
      id: "Pembelajaran lapangan dengan melihat langsung bagaimana usaha dibangun, dikelola, dan dikembangkan.",
      en: "Field-based learning by observing how real businesses are built, operated, and developed.",
    },
    purpose: {
      id: "Mendekatkan mahasiswa pada praktik bisnis nyata dan memperkaya perspektif di luar ruang kelas.",
      en: "Brings students closer to real business practice and expands perspective beyond the classroom.",
    },
    audience: { id: "Anggota dan mahasiswa yang ingin memahami operasi bisnis secara langsung.", en: "Members and students seeking direct exposure to business operations." },
    focus: {
      id: ["Operational insight", "Founder story", "Business process", "Reflection"],
      en: ["Operational insight", "Founder story", "Business process", "Reflection"],
    },
  },
  {
    slug: "entrepreneur-talk",
    title: "Entrepreneur Talk",
    cluster: { id: "Mentorship", en: "Mentorship" },
    summary: {
      id: "Sesi percakapan bersama praktisi untuk membedah pengalaman, keputusan, kegagalan, dan pelajaran bisnis secara jujur.",
      en: "Practitioner conversations that unpack experience, decisions, failures, and business lessons with practical honesty.",
    },
    purpose: {
      id: "Memperpendek jarak antara teori dan pengalaman melalui akses langsung pada pelaku usaha dan praktisi.",
      en: "Shortens the distance between theory and experience through direct access to entrepreneurs and practitioners.",
    },
    audience: { id: "Mahasiswa dan anggota yang membutuhkan perspektif praktis.", en: "Students and members seeking practical perspective." },
    focus: {
      id: ["Founder lessons", "Decision making", "Q&A", "Mentorship exposure"],
      en: ["Founder lessons", "Decision making", "Q&A", "Mentorship exposure"],
    },
  },
  {
    slug: "business-incubator",
    title: "Business Incubator",
    cluster: { id: "Pertumbuhan", en: "Growth" },
    summary: {
      id: "Pendampingan bertahap untuk membantu usaha mahasiswa bergerak dari ide atau tahap awal menuju model yang lebih teruji.",
      en: "A staged support track that helps student ventures move from ideas or early operations toward more validated models.",
    },
    purpose: {
      id: "Menciptakan proses pengembangan usaha yang lebih disiplin melalui validasi, mentoring, evaluasi, dan akses jejaring.",
      en: "Creates a more disciplined venture-development process through validation, mentoring, review, and network access.",
    },
    audience: { id: "Founder mahasiswa yang siap mengikuti proses pengembangan lebih intensif.", en: "Student founders ready for a more intensive development process." },
    focus: {
      id: ["Validation", "Mentoring", "Milestone review", "Growth planning"],
      en: ["Validation", "Mentoring", "Milestone review", "Growth planning"],
    },
  },
  {
    slug: "investment-club",
    title: "Investment Club",
    cluster: { id: "Literasi Modal", en: "Capital Literacy" },
    summary: {
      id: "Ruang belajar untuk memahami investasi, analisis, pengelolaan risiko, dan hubungan antara modal dengan pertumbuhan usaha.",
      en: "A learning platform for investment, analysis, risk management, and the relationship between capital and business growth.",
    },
    purpose: {
      id: "Membangun cara berpikir yang lebih disiplin tentang modal dan investasi tanpa menjadikan organisasi sebagai penyedia rekomendasi investasi personal.",
      en: "Builds disciplined thinking about capital and investing without positioning the organization as a provider of personal investment advice.",
    },
    audience: { id: "Mahasiswa yang ingin memperkuat literasi investasi dan pembiayaan usaha.", en: "Students seeking stronger literacy in investing and business finance." },
    focus: {
      id: ["Investment literacy", "Risk", "Business finance", "Capital allocation"],
      en: ["Investment literacy", "Risk", "Business finance", "Capital allocation"],
    },
  },
] as const;

export const flagshipProgramNames = flagshipPrograms.map((program) => program.title);

export const ecosystemJourney = [
  { id: "HIPMI PT", en: "HIPMI PT" },
  { id: "Anggota", en: "Members" },
  { id: "Usaha", en: "Businesses" },
  { id: "Pasar UMKM", en: "SME Market" },
  { id: "Business Academy", en: "Business Academy" },
  { id: "Mentorship", en: "Mentorship" },
  { id: "Kolaborasi", en: "Partnership" },
  { id: "Akses Modal", en: "Capital Access" },
  { id: "Pertumbuhan", en: "Growth" },
] as const;

export function getProgramBySlug(slug: string) {
  return flagshipPrograms.find((program) => program.slug === slug);
}
