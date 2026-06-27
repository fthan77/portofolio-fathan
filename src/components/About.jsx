import useReveal from "../hooks/useReveal";
import fotoFathan from "../assets/foto-fathan.png";

const stats = [
  { num: "7+", label: "TOOLS & BAHASA"   },
  { num: "1+", label: "PROYEK SELESAI"   },
  { num: "1",  label: "ORGANISASI AKTIF" },
  { num: "∞",  label: "SEMANGAT BELAJAR" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="tentang" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">// 01 — TENTANG SAYA</p>
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
              <p className="font-sans text-lg text-on-surface leading-relaxed">Saya adalah seorang UI/UX Designer yang sedang menempuh studi Diploma III Teknologi Informasi di Universitas Brawijaya.</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">Dengan keahlian dalam Figma, Canva, serta pemahaman HTML, CSS, JavaScript, React, dan Tailwind CSS — saya menghasilkan desain yang tidak hanya indah secara visual, tetapi juga realistis untuk diimplementasikan.</p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">Saya adalah kolaborator yang adaptif, terbiasa bekerja dalam tim, terbuka terhadap umpan balik, dan selalu mencari cara untuk menghasilkan karya yang lebih baik.</p>
            </div>
            <div className="grid grid-cols-2 mt-8" style={{ border: "1px solid #1a1a1a" }}>
              {stats.map((s, i) => (
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
