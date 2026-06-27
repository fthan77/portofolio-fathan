export const badges = [
  { label: 'HTML5',      color: '#e34f26' },
  { label: 'CSS3',       color: '#2965f1' },
  { label: 'JavaScript', color: '#f7df1e' },
  { label: 'React',      color: '#61dafb' },
  { label: 'Tailwind',   color: '#38bdf8' },
  { label: 'Bootstrap',  color: '#7952b3' },
  { label: 'PHP',        color: '#777bb4' },
  { label: 'Laravel',    color: '#ff2d20' },
  { label: 'Figma',      color: '#a259ff' },
  { label: 'Canva',      color: '#00c4cc' },
  { label: 'Git',        color: '#f05032' },
];

export const roles = [
  'UI/UX Designer',
  'Visual Thinker',
  'Figma Enthusiast',
  'Frontend Learner',
  'Problem Solver',
];

export const skills = [
  { num: '01', title: 'Figma',           desc: 'Merancang wireframe, prototipe interaktif, dan antarmuka yang bersih dan terstruktur.',                        tag: 'UI DESIGN'     },
  { num: '02', title: 'Canva',           desc: 'Membuat aset visual, materi presentasi, dan konten desain grafis yang komunikatif.',                           tag: 'VISUAL DESIGN' },
  { num: '03', title: 'Kerja Sama Tim',  desc: 'Berkolaborasi dalam tim yang dinamis, berkontribusi aktif dan mendengarkan perspektif.',                       tag: 'SOFT SKILL'    },
  { num: '04', title: 'Komunikasi',      desc: 'Menyampaikan ide desain dengan jelas kepada pemangku kepentingan teknis maupun non-teknis.',                   tag: 'SOFT SKILL'    },
  { num: '05', title: 'Adaptasi Cepat',  desc: 'Menyesuaikan diri dengan lingkungan, alat, dan tantangan baru secara cepat dan efisien.',                     tag: 'SOFT SKILL'    },
  { num: '06', title: 'UX Thinking',     desc: 'Berpikir dari sudut pandang pengguna — setiap keputusan desain berakar pada kebutuhan nyata.',                 tag: 'UX DESIGN'     },
];

export const stack = [
  { name: 'HTML5',    level: 'Menengah', pct: 0.65, color: '#e34f26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',     level: 'Menengah', pct: 0.60, color: '#2965f1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', level: 'Dasar', pct: 0.40, color: '#f7df1e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',    level: 'Dasar',    pct: 0.30, color: '#61dafb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', level: 'Dasar',    pct: 0.35, color: '#38bdf8', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma',    level: 'Mahir',    pct: 0.85, color: '#a259ff', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva',    level: 'Mahir',    pct: 0.82, color: '#00c4cc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Git',      level: 'Dasar',    pct: 0.35, color: '#f05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Bootstrap',level: 'Dasar',    pct: 0.35, color: '#7952b3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'PHP',      level: 'Dasar',    pct: 0.30, color: '#777bb4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel',  level: 'Dasar',    pct: 0.25, color: '#ff2d20', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
];

export const projects = [
  {
    title: 'NAUTIVUE',
    category: 'UI/UX · WEB APP',
    year: '2026',
    desc: {
      id: 'Platform wisata bawah laut Indonesia dengan peta interaktif, rekomendasi destinasi, dan panduan lengkap tiap lokasi diving.',
      en: 'Indonesian underwater tourism platform with interactive maps, destination recommendations, and complete guides for each diving location.',
    },
    tags: ['FIGMA', 'UI DESIGN', 'UX RESEARCH', 'PROTOTYPING'],
    wip: false,
    link: 'https://github.com/fthan77/NautiVue',
    thumb: 'nautivue-1',
    role: 'UI/UX Designer',
  },
  {
    title: 'FLOOD MONITORING SYSTEM',
    category: 'UI/UX · WEB APP',
    year: '2026',
    desc: {
      id: 'Desain sistem monitoring banjir berbasis web untuk memantau kondisi dan status ketinggian air secara real-time.',
      en: 'Web-based flood monitoring system design to track water level conditions and status in real-time.',
    },
    tags: ['FIGMA', 'UI DESIGN', 'UX RESEARCH'],
    wip: false,
    link: 'https://github.com/fthan77/Flood-Monitoring-System',
    thumb: 'flood-monitoring',
    role: 'UI/UX Designer',
  },
  {
    title: 'ALEX SHOES',
    category: 'UI/UX · WEB',
    year: '2026',
    desc: {
      id: 'Desain landing page toko sepatu dengan tampilan modern dan clean untuk meningkatkan pengalaman belanja online.',
      en: 'Shoe store landing page design with a modern and clean look to enhance the online shopping experience.',
    },
    tags: ['FIGMA', 'UI DESIGN'],
    wip: false,
    link: 'https://github.com/fthan77/Alexshoes-W-Chatbot-main',
    thumb: 'alex-shoes',
    role: 'UI/UX Designer',
  },
];

export const experiences = [
  {
    period: '2021 — 2024',
    title: { id: 'Sekolah Menengah Atas', en: 'Senior High School' },
    type: 'edu',
    org: 'SMAN 1 Cibadak',
    desc: { id: 'Menyelesaikan pendidikan menengah atas dan mulai mengembangkan minat dalam teknologi serta desain digital.', en: 'Completed senior high school education and began developing interest in technology and digital design.' },
  },
  {
    period: '2024',
    title: { id: 'Staff Kreatif', en: 'Creative Staff' },
    type: 'org',
    org: 'RAJABUMI',
    desc: { id: 'Berkontribusi dalam tim kreatif untuk menghasilkan konten visual dan materi desain yang komunikatif.', en: 'Contributed to the creative team to produce visual content and communicative design materials.' },
  },
  {
    period: '2024 — 2025',
    title: { id: 'Staff PUSKOMINFO', en: 'PUSKOMINFO Staff' },
    type: 'org',
    org: 'HMPSTI — Himpunan Mahasiswa Prodi Teknologi Informasi',
    desc: { id: 'Berkontribusi dalam divisi komunikasi dan informasi, pengelolaan konten, koordinasi tim, dan komunikasi organisasi.', en: 'Contributed to the communication and information division, content management, team coordination, and organizational communication.' },
  },
  {
    period: '2024 — Sekarang',
    title: { id: 'Diploma III Teknologi Informasi', en: 'Diploma III Information Technology' },
    type: 'edu',
    org: 'Universitas Brawijaya',
    desc: { id: 'Menempuh studi di bidang teknologi informasi dengan fokus pada keahlian desain UI/UX dan pemahaman sistem teknologi digital.', en: 'Studying information technology with a focus on UI/UX design skills and understanding of digital technology systems.' },
  },
  {
    period: '2025',
    title: { id: 'Ketua Umum Basket', en: 'Basketball General Chairman' },
    type: 'org',
    org: 'Vokasi Universitas Brawijaya',
    desc: { id: 'Memimpin organisasi basket vokasi, mengkoordinasi kegiatan latihan, dan mengelola program pengembangan tim.', en: 'Led the vocational basketball organization, coordinated training activities, and managed team development programs.' },
  },
  {
    period: '2025 — 2026',
    title: { id: 'Wakil Kepala Departemen Kreatif', en: 'Vice Head of Creative Department' },
    type: 'org',
    org: 'RAJABUMI',
    desc: { id: 'Memimpin dan mengkoordinasi tim kreatif dalam perencanaan, pengembangan konten, dan pelaksanaan program departemen.', en: 'Led and coordinated the creative team in planning, content development, and execution of department programs.' },
  },
];

export const contacts = [
  { icon: '@',  label: 'EMAIL',     value: 'fathanfath7@student.ub.ac.id',  href: 'mailto:fathanfath7@student.ub.ac.id' },
  { icon: 'in', label: 'LINKEDIN',  value: 'Fathan Fathurohman',            href: 'https://www.linkedin.com/in/fathan-fathurohman-338a13321/' },
  { icon: '{}', label: 'GITHUB',    value: 'fthan77',                       href: 'https://github.com/fthan77' },
  { icon: 'WA', label: 'WHATSAPP',  value: '081398987825',                  href: 'https://wa.me/6281398987825' },
];

export const skills = {
  id: [
    { num: "01", title: "Figma",             tag: "UI Design",    desc: "Merancang wireframe, prototipe interaktif, dan desain antarmuka yang bersih dan terstruktur." },
    { num: "02", title: "Canva",             tag: "Visual Design", desc: "Membuat aset visual, materi presentasi, dan konten desain grafis yang komunikatif." },
    { num: "03", title: "Kerja Sama Tim",    tag: "Soft Skill",   desc: "Berkolaborasi dalam lingkungan tim yang dinamis, berkontribusi aktif dan mendengarkan perspektif." },
    { num: "04", title: "Komunikasi Efektif",tag: "Soft Skill",   desc: "Menyampaikan ide desain dengan jelas kepada pemangku kepentingan teknis maupun non-teknis." },
    { num: "05", title: "Adaptasi Cepat",    tag: "Soft Skill",   desc: "Menyesuaikan diri dengan lingkungan, alat, dan tantangan baru secara cepat dan efisien." },
    { num: "06", title: "UX Thinking",       tag: "UX Design",    desc: "Berpikir dari sudut pandang pengguna — memastikan setiap keputusan desain berakar pada kebutuhan nyata." },
  ],
  en: [
    { num: "01", title: "Figma",             tag: "UI Design",    desc: "Designing wireframes, interactive prototypes, and clean, structured user interfaces." },
    { num: "02", title: "Canva",             tag: "Visual Design", desc: "Creating visual assets, presentation materials, and communicative graphic design content." },
    { num: "03", title: "Teamwork",          tag: "Soft Skill",   desc: "Collaborating in dynamic team environments, actively contributing and listening to perspectives." },
    { num: "04", title: "Communication",     tag: "Soft Skill",   desc: "Clearly conveying design ideas to both technical and non-technical stakeholders." },
    { num: "05", title: "Fast Adaptation",   tag: "Soft Skill",   desc: "Quickly adjusting to new environments, tools, and challenges efficiently." },
    { num: "06", title: "UX Thinking",       tag: "UX Design",    desc: "Thinking from the user's perspective — ensuring every design decision is rooted in real needs." },
  ],
};