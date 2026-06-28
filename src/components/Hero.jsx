import { useEffect, useState } from "react";
import { badges, roles } from "../data/content";

const t = {
  id: {
    label: "UI/UX DESIGNER — TERSEDIA UNTUK KOLABORASI",
    prefix: "// saya seorang",
    bio: "UI/UX Designer yang fokus menciptakan produk digital yang intuitif dan memukau secara visual — di mana estetika bertemu fungsionalitas.",
    cta1: "LIHAT PROYEK",
    cta2: "HUBUNGI SAYA",
    ctaHover1: "LIHAT KARYA →",
    ctaHover2: "KONTAK",
    downloadCV: "DOWNLOAD CV ↓",
  },
  en: {
    label: "UI/UX DESIGNER — AVAILABLE FOR COLLABORATION",
    prefix: "// I am a",
    bio: "UI/UX Designer focused on creating intuitive and visually stunning digital products — where aesthetics meets functionality.",
    cta1: "VIEW PROJECTS",
    cta2: "CONTACT ME",
    ctaHover1: "SEE WORKS →",
    ctaHover2: "CONTACT",
    downloadCV: "DOWNLOAD CV ↓",
  },
};

function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let ri = 0, ci = 0, del = false, timer;
    function tick() {
      const w = words[ri];
      if (!del) { setText(w.slice(0, ++ci)); if (ci === w.length) { del = true; timer = setTimeout(tick, 1800); return; } }
      else { setText(w.slice(0, --ci)); if (ci === 0) { del = false; ri = (ri + 1) % words.length; timer = setTimeout(tick, 300); return; } }
      timer = setTimeout(tick, del ? 50 : 85);
    }
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

export default function Hero({ lang }) {
  const typed = useTyping(roles);
  const tx = t[lang];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-[5%] w-px h-full pointer-events-none" style={{ background: "linear-gradient(to bottom,transparent,rgba(232,41,42,0.4),transparent)" }} />

      <div className="relative z-10 max-w-4xl">
        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mb-3">{tx.label}</p>

        <h1 className="font-sans font-extrabold uppercase mb-8" style={{ fontSize: "clamp(2.2rem,8vw,6.5rem)", lineHeight: 1.0, wordBreak: "break-word" }}>
          <span className="text-outline">FATHAN</span><br />
          <span style={{ WebkitTextStroke: "1.5px #e8292a", color: "transparent" }}>FATHUR</span>
          <span className="text-outline">OHMAN</span>
        </h1>

        <div className="flex items-center gap-2 mb-8 flex-wrap font-mono text-xs tracking-widest text-on-surface-variant">
          <span>{tx.prefix}</span>
          <span style={{ color: "#e8292a" }}>{typed}</span>
          <span className="type-cursor" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map((b, i) => (
            <span key={b.label} className="tech-badge" style={{ animationDelay: `${i * 0.07 + 0.2}s` }}>
              <span className="inline-block w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: b.color }} />
              {b.label}
            </span>
          ))}
        </div>

        <p className="font-sans text-on-surface-variant text-base max-w-xl mb-10 leading-relaxed" style={{ borderLeft: "2px solid #e8292a", paddingLeft: "1.25rem" }}>
          {tx.bio}
        </p>

        <div className="flex gap-4 flex-wrap mb-10">
          <a href="#proyek" className="group relative px-10 py-4 bg-tertiary overflow-hidden transition-all duration-300">
            <span className="relative z-10 font-mono text-xs tracking-widest text-white">{tx.cta1}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 z-20 flex items-center justify-center font-mono text-xs tracking-widest text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tx.ctaHover1}</span>
          </a>
          <a href="#kontak" className="font-mono text-xs tracking-widest border border-on-surface-variant text-on-surface-variant px-10 py-4 hover:border-tertiary hover:text-tertiary transition-all duration-300">
            {tx.cta2}
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1Dzs08e0P9awZ0EiWW5-Hferna2Btf2og" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center font-mono text-xs tracking-widest border border-on-surface-variant text-on-surface-variant px-10 py-4 hover:border-tertiary hover:text-tertiary transition-all duration-300">
            {tx.downloadCV}
          </a>
        </div>

        {/* Code window */}
        <div className="border border-outline-variant bg-surface max-w-lg hidden md:block" style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "0.78rem" }}>
          <div className="flex items-center gap-2 px-4 py-2 border-b border-outline-variant bg-surface-high">
            <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57] inline-block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#28ca41] inline-block" />
            <span className="font-mono text-xs text-on-surface-variant ml-2">fathan.jsx</span>
          </div>
          <div className="p-5" style={{ lineHeight: 1.95 }}>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">1</span><span className="text-[#ff79c6]">const</span> <span className="text-[#8be9fd]">Designer</span> <span className="text-[#aaa]">= () =&gt;</span> {"{"}</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">2</span>{"  "}<span className="text-[#ff79c6]">const</span> stack = [<span className="text-[#f1fa8c]">'Figma'</span>, <span className="text-[#f1fa8c]">'React'</span>, <span className="text-[#f1fa8c]">'Tailwind'</span>];</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">3</span>{"  "}<span className="text-[#ff79c6]">return</span> (</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">4</span>{"    "}&lt;<span className="text-[#ff5555]">Portfolio</span></div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">5</span>{"      "}<span className="text-[#ffb86c]">name</span>=<span className="text-[#f1fa8c]">"Fathan Fathurohman"</span></div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">6</span>{"      "}<span className="text-[#ffb86c]">role</span>=<span className="text-[#f1fa8c]">"UI/UX Designer"</span></div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">7</span>{"      "}<span className="text-[#ffb86c]">available</span>={"{"}  <span className="text-[#ff79c6]">true</span> {"}"}</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">8</span>{"    "}/&gt;</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">9</span>{"  "});</div>
            <div><span className="text-[#888] mr-5 text-[0.7rem]">10</span>{"}"}; <span className="text-[#555] italic">// open to work 🔴</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
