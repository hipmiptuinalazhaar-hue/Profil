import type { LocalizedText } from "@/content/programs";

export const verifiedBaseline = [
  { value: "2026/2027", label: { id: "Periode kepengurusan", en: "Leadership term" } },
  { value: "6", label: { id: "Bidang organisasi", en: "Organization divisions" } },
  { value: "9", label: { id: "Program unggulan", en: "Flagship programs" } },
  { value: "5", label: { id: "Misi organisasi", en: "Organization missions" } },
] as const satisfies readonly { value: string; label: LocalizedText }[];

export const evidencePrinciples = [
  {
    title: { id: "Terukur", en: "Measurable" },
    body: {
      id: "Angka publik hanya ditampilkan jika definisi, periode, dan sumbernya jelas.",
      en: "Public figures are shown only when their definition, period, and source are clear.",
    },
  },
  {
    title: { id: "Dapat diverifikasi", en: "Verifiable" },
    body: {
      id: "Dokumentasi, daftar peserta, keluaran program, atau bukti resmi menjadi dasar klaim capaian.",
      en: "Documentation, participant records, program outputs, or official evidence form the basis of impact claims.",
    },
  },
  {
    title: { id: "Tidak dibesar-besarkan", en: "No inflation" },
    body: {
      id: "Target, rencana, dan hasil dipisahkan. Sesuatu yang direncanakan tidak ditulis seolah sudah tercapai.",
      en: "Targets, plans, and results stay separate. Planned work is never written as if it has already been achieved.",
    },
  },
] as const;

export const businessEcosystemLayers = [
  {
    label: { id: "Temukan", en: "Discover" },
    title: { id: "Pemetaan usaha anggota", en: "Member business mapping" },
    body: {
      id: "Membangun direktori yang rapi tentang siapa yang berusaha, apa yang dijual, dan kebutuhan pengembangannya.",
      en: "Build a clean directory of who is building, what they sell, and what support they need next.",
    },
  },
  {
    label: { id: "Perkuat", en: "Strengthen" },
    title: { id: "Kapabilitas dan mentoring", en: "Capability and mentoring" },
    body: {
      id: "Menghubungkan usaha dengan pembelajaran, mentor, dan evaluasi yang relevan dengan tahap bisnisnya.",
      en: "Connect ventures with learning, mentors, and review suited to their stage of development.",
    },
  },
  {
    label: { id: "Buka pasar", en: "Open markets" },
    title: { id: "Eksposur, jaringan, dan kolaborasi", en: "Exposure, networks, and collaboration" },
    body: {
      id: "Mendorong visibilitas melalui expo, business matching, jejaring, dan kolaborasi lintas ekosistem.",
      en: "Increase visibility through expos, business matching, networks, and cross-ecosystem collaboration.",
    },
  },
  {
    label: { id: "Tumbuhkan", en: "Grow" },
    title: { id: "Kesiapan modal dan eskalasi", en: "Capital readiness and scaling" },
    body: {
      id: "Membantu founder memahami kebutuhan modal, milestone, risiko, dan pilihan pertumbuhan secara disiplin.",
      en: "Help founders understand capital needs, milestones, risk, and growth options with discipline.",
    },
  },
] as const;

export const eventFormats = [
  {
    name: "Business Academy",
    type: { id: "Kelas & workshop", en: "Class & workshop" },
    note: { id: "Pembelajaran praktis berbasis kebutuhan usaha.", en: "Practical learning built around venture needs." },
  },
  {
    name: "Entrepreneur Talk",
    type: { id: "Forum & mentorship", en: "Forum & mentorship" },
    note: { id: "Percakapan langsung dengan praktisi dan pengusaha.", en: "Direct conversations with practitioners and entrepreneurs." },
  },
  {
    name: "Business Visit",
    type: { id: "Pembelajaran lapangan", en: "Field learning" },
    note: { id: "Melihat proses bisnis dan pengambilan keputusan secara nyata.", en: "Observe real business processes and decision-making." },
  },
  {
    name: "LinggauPreneur Summit",
    type: { id: "Forum strategis", en: "Strategic forum" },
    note: { id: "Ruang temu lintas kampus, bisnis, komunitas, dan institusi.", en: "A meeting ground across campus, business, community, and institutions." },
  },
] as const;

export const insightPlaybooks = [
  {
    id: "validate-before-scale",
    title: { id: "Validasi sebelum mengejar skala", en: "Validate before chasing scale" },
    summary: {
      id: "Usaha yang tumbuh terlalu cepat tanpa memahami pelanggan sering hanya memperbesar masalah yang belum selesai.",
      en: "A venture that grows before understanding its customer often scales unresolved problems instead of value.",
    },
    points: {
      id: [
        "Mulai dari masalah pelanggan yang spesifik, bukan ide yang terdengar keren.",
        "Uji apakah orang benar-benar mau membayar atau melakukan tindakan nyata.",
        "Catat pola keberatan, alasan membeli, dan penyebab pelanggan kembali.",
      ],
      en: [
        "Start from a specific customer problem, not an idea that merely sounds exciting.",
        "Test whether people will actually pay or take a meaningful action.",
        "Record objections, buying reasons, and what makes customers return.",
      ],
    },
  },
  {
    id: "pitch-with-evidence",
    title: { id: "Pitching adalah latihan berpikir", en: "Pitching is a thinking discipline" },
    summary: {
      id: "Pitch yang baik tidak menutupi kelemahan dengan desain. Ia menunjukkan masalah, solusi, bukti, model bisnis, kebutuhan, dan rencana berikutnya secara runtut.",
      en: "A strong pitch does not hide weaknesses behind design. It explains the problem, solution, evidence, model, needs, and next steps coherently.",
    },
    points: {
      id: [
        "Jelaskan masalah dengan bahasa yang bisa dipahami orang di luar bisnis Anda.",
        "Bedakan asumsi, data awal, dan bukti yang sudah benar-benar diuji.",
        "Nyatakan penggunaan modal dan milestone yang ingin dicapai, bukan sekadar nominal yang diminta.",
      ],
      en: [
        "Explain the problem in language people outside your venture can understand.",
        "Separate assumptions, early data, and evidence that has actually been tested.",
        "State how capital will be used and what milestone it should unlock, not only the amount requested.",
      ],
    },
  },
  {
    id: "networking-with-value",
    title: { id: "Networking yang menghasilkan nilai", en: "Networking that creates value" },
    summary: {
      id: "Jaringan bukan koleksi kontak. Hubungan bisnis tumbuh ketika kedua pihak memahami konteks, kebutuhan, dan nilai yang dapat dipertukarkan.",
      en: "A network is not a contact collection. Business relationships grow when both sides understand context, needs, and exchangeable value.",
    },
    points: {
      id: [
        "Datang dengan tujuan yang jelas dan tahu siapa yang relevan untuk ditemui.",
        "Perkenalkan diri dengan konteks singkat: siapa Anda, apa yang dibangun, dan apa yang sedang dicari.",
        "Tindak lanjuti dengan sesuatu yang berguna, bukan pesan generik yang meminta bantuan.",
      ],
      en: [
        "Enter with a clear objective and know who is relevant to meet.",
        "Introduce yourself with concise context: who you are, what you are building, and what you are seeking.",
        "Follow up with something useful, not a generic message asking for help.",
      ],
    },
  },
] as const;

export const membershipSteps = [
  {
    title: { id: "Kenali ekosistem", en: "Understand the ecosystem" },
    body: { id: "Pelajari visi, misi, program, dan cara kerja HIPMI PT sebelum bergabung.", en: "Review HIPMI PT's vision, mission, programs, and operating model before joining." },
  },
  {
    title: { id: "Sampaikan minat", en: "Express interest" },
    body: { id: "Hubungi kanal resmi dengan identitas, program studi, semester, dan minat kewirausahaan Anda.", en: "Contact the official channel with your identity, study program, semester, and entrepreneurship interests." },
  },
  {
    title: { id: "Pemetaan kebutuhan", en: "Needs mapping" },
    body: { id: "Organisasi memetakan apakah Anda sedang belajar, memulai, menjalankan, atau mengembangkan usaha.", en: "The organization maps whether you are learning, starting, operating, or growing a venture." },
  },
  {
    title: { id: "Masuk jalur yang relevan", en: "Enter the relevant track" },
    body: { id: "Anggota diarahkan ke pembelajaran, jejaring, program, atau kolaborasi yang sesuai dengan tahapnya.", en: "Members are directed toward learning, networks, programs, or collaboration suited to their stage." },
  },
] as const;

export const collaborationTracks = [
  {
    title: { id: "Edukasi & mentorship", en: "Education & mentorship" },
    body: { id: "Kelas, workshop, mentoring, narasumber, studi kasus, dan transfer pengalaman.", en: "Classes, workshops, mentoring, speakers, case studies, and experience sharing." },
  },
  {
    title: { id: "Pasar & eksposur", en: "Market & exposure" },
    body: { id: "Expo, showcase, business matching, promosi usaha anggota, dan akses jaringan.", en: "Expos, showcases, business matching, member-business promotion, and network access." },
  },
  {
    title: { id: "Inovasi & pengembangan usaha", en: "Innovation & venture development" },
    body: { id: "Pendampingan produk, digitalisasi, validasi, riset, dan pengembangan kapasitas.", en: "Product support, digitalization, validation, research, and capability development." },
  },
  {
    title: { id: "Forum strategis", en: "Strategic forums" },
    body: { id: "Diskusi lintas sektor tentang kewirausahaan muda, ekonomi daerah, dan kolaborasi ekosistem.", en: "Cross-sector dialogue on young entrepreneurship, the regional economy, and ecosystem collaboration." },
  },
] as const;

export const publicPlatformLinks = [
  { href: "/leadership", label: { id: "Kepengurusan", en: "Leadership" }, description: { id: "BPH, enam bidang, dan struktur kerja organisasi.", en: "Executive board, six divisions, and operating structure." } },
  { href: "/business", label: { id: "Ekosistem bisnis", en: "Business ecosystem" }, description: { id: "Arsitektur direktori, pengembangan usaha, pasar, dan jejaring.", en: "Directory architecture, venture development, market, and network." } },
  { href: "/impact", label: { id: "Dampak", en: "Impact" }, description: { id: "Baseline terverifikasi dan standar pembuktian capaian.", en: "Verified baseline and evidence standards for outcomes." } },
  { href: "/events", label: { id: "Agenda", en: "Events" }, description: { id: "Format agenda dan kalender publik tanpa tanggal yang dibuat-buat.", en: "Event formats and a public calendar without invented dates." } },
  { href: "/insights", label: { id: "Wawasan", en: "Insights" }, description: { id: "Playbook praktis tentang bisnis, pitching, dan networking.", en: "Practical playbooks on business, pitching, and networking." } },
  { href: "/media", label: { id: "Media", en: "Media" }, description: { id: "Dokumentasi resmi yang terhubung ke folder foto repo.", en: "Official documentation connected to the repository photo folder." } },
] as const;
