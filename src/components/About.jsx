import useReveal from "../hooks/useReveal";
import fotoFathan from "../assets/foto-fathan.png";

const content = {
  id: {
    eyebrow: "// 01 — TENTANG SAYA",
    p1: "Halo! Saya Fathan, mahasiswa aktif Diploma III Teknologi Informasi di Universitas Brawijaya yang sedang mencari kesempatan magang sebagai UI/UX Designer.",
    p2: "Saya memiliki keahlian dalam Figma dan Canva untuk merancang antarmuka yang intuitif, didukung pemahaman HTML, CSS, JavaScript, React, dan Tailwind CSS — sehingga desain yang saya buat tidak hanya indah, tetapi juga realistis untuk diimplementasikan.",
    p3: "Saya terbiasa bekerja dalam tim, terbuka terhadap masukan, dan selalu antusias untuk belajar hal baru. Siap memberikan kontribusi terbaik di lingkungan kerja nyata.",
    stats: [
      { num: "7+", label: "TOOLS & BAHASA"   },
      { num: "3+", label: "PROYEK SELESAI"   },
      { num: "1",  label: "ORGANISASI AKTIF" },
      { num: "∞",  label: "SEMANGAT BELAJAR" },
    ],
  },
  en: {
    eyebrow: "// 01 — ABOUT ME",
    p1: "Hi! I'm Fathan, an active Diploma III Information Technology student at Universitas Brawijaya, currently seeking an internship opportunity as a UI/UX Designer.",
    p2: "I have expertise in Figma and Canva for designing intuitive interfaces, supported by knowledge of HTML, CSS, JavaScript, React, and Tailwind CSS — ensuring my designs are not only visually appealing but also realistic to implement.",
    p3: "I'm used to working in teams, open to feedback, and always enthusiastic about learning new things. Ready to contribute my best in a real work environment.",
    stats: [
      { num: "7+", label: "TOOLS & LANGUAGES" },
      { num: "3+", label: "PROJECTS DONE"     },
      { num: "1",  label: "ACTIVE ORG"        },
      { num: "∞",  label: "EAGERNESS TO LEARN"},
    ],
  },
};

export default function About({ lang }) {
  const ref = useReveal();
  const t = content[lang];

  return (
    <section id="tentang" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{t.eyebrow}</p>
        <h2 className="text-outline font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          FATHAN FATHUROHMAN
        </h2>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-outline-variant bg-surface relative overflow-hidden" style={{ aspectRatio: "3/4", minHeight: "280px" }}>
            <div className="absolute inset-0 border border-tertiary pointer-events-none z-10" style={{ transform: "translate(8px,8px)", opacity: 0.4 }} />
            <img src={fotoFathan} alt="Fathan Fathurohman" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} onError={(e) => { e.target.style.display="none"; }} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <p className="font-sans text-lg text-on-surface leading-relaxed">{t.p1}</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">{t.p2}</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">{t.p3}</p>
            </div>
            <div className="grid grid-cols-2 mt-8" style={{ border: "1px solid #1a1a1a" }}>
              {t.stats.map((s, i) => (
                <div key={i} className="bg-surface p-6" style={{ borderTop: i >= 2 ? "1px solid #1a1a1a" : "none", borderRight: i % 2 === 0 ? "1px solid #1a1a1a" : "none" }}>
                  <div className="font-sans font-bold text-tertiary text-3xl">{s.num}</div>
                  <div className="font-mono text-xs text-on-surface-variant mt-1 tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}