import useReveal from "../hooks/useReveal";
import fotoFathan from "../assets/foto-fathan.png";

const t = {
  id: {
    section: "// 01 — TENTANG SAYA",
    title: "FATHAN FATHUROHMAN",
    p1: "Saya adalah seorang UI/UX Designer yang sedang menempuh studi Diploma III Teknologi Informasi di Universitas Brawijaya.",
    p2: "Dengan keahlian dalam Figma, Canva, serta pemahaman HTML, CSS, JavaScript, React, dan Tailwind CSS — saya menghasilkan desain yang tidak hanya indah secara visual, tetapi juga realistis untuk diimplementasikan.",
    p3: "Saya adalah kolaborator yang adaptif, terbiasa bekerja dalam tim, terbuka terhadap umpan balik, dan selalu mencari cara untuk menghasilkan karya yang lebih baik.",
    stats: ["TOOLS & BAHASA", "PROYEK SELESAI", "ORG. AKTIF", "SEMANGAT BELAJAR"],
  },
  en: {
    section: "// 01 — ABOUT ME",
    title: "FATHAN FATHUROHMAN",
    p1: "I am a UI/UX Designer currently pursuing a Diploma III in Information Technology at Universitas Brawijaya.",
    p2: "With expertise in Figma, Canva, and an understanding of HTML, CSS, JavaScript, React, and Tailwind CSS — I produce designs that are not only visually appealing but also realistic to implement.",
    p3: "I am an adaptive collaborator, accustomed to working in teams, open to feedback, and always looking for ways to produce better work.",
    stats: ["TOOLS & LANGUAGES", "PROJECTS DONE", "ACTIVE ORG.", "LEARNING SPIRIT"],
  },
};

const statNums = ["7+", "4+", "1", "∞"];

export default function About({ lang }) {
  const ref = useReveal();
  const tx = t[lang];

  return (
    <section id="tentang" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{tx.section}</p>
        <h2 className="text-outline font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>{tx.title}</h2>

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-outline-variant bg-surface relative overflow-hidden" style={{ aspectRatio: "3/4", minHeight: "280px" }}>
            <div className="absolute inset-0 border border-tertiary pointer-events-none z-10" style={{ transform: "translate(8px,8px)", opacity: 0.4 }} />
            <img src={fotoFathan} alt="Fathan Fathurohman" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <p className="font-sans text-lg text-on-surface leading-relaxed">{tx.p1}</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">{tx.p2}</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">{tx.p3}</p>
            </div>
            <div className="grid grid-cols-2 mt-8" style={{ border: "1px solid #1a1a1a" }}>
              {statNums.map((num, i) => (
                <div key={i} className="bg-surface p-6" style={{ borderTop: i >= 2 ? "1px solid #1a1a1a" : "none", borderRight: i % 2 === 0 ? "1px solid #1a1a1a" : "none" }}>
                  <div className="font-sans font-bold text-tertiary text-3xl">{num}</div>
                  <div className="font-mono text-xs text-on-surface-variant mt-1 tracking-widest">{tx.stats[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
