import { useEffect, useRef } from "react";
import { stack } from "../data/content";
import useReveal from "../hooks/useReveal";

const t = {
  id: { section: "// 03 — TECH STACK", title: "BAHASA &", titleOutline: "TEKNOLOGI", intermediate: "Menengah", advanced: "Mahir", basic: "Dasar" },
  en: { section: "// 03 — TECH STACK", title: "LANGUAGES &", titleOutline: "TECHNOLOGIES", intermediate: "Intermediate", advanced: "Advanced", basic: "Basic" },
};

const levelMap = {
  Menengah: { id: "Menengah", en: "Intermediate" },
  Mahir:    { id: "Mahir",    en: "Advanced"     },
  Dasar:    { id: "Dasar",    en: "Basic"         },
};

function StackCard({ item, lang }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const levelLabel = levelMap[item.level]?.[lang] ?? item.level;

  return (
    <div ref={ref} className="stack-card bg-background p-4 flex flex-col items-center gap-2 text-center hover:bg-surface transition-colors">
      <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={item.logo} alt={item.name} loading="lazy" style={{ width: 36, height: 36, objectFit: "contain" }} />
      </div>
      <div className="font-mono text-xs text-on-surface tracking-wider">{item.name}</div>
      <div className="font-mono text-xs text-on-surface-variant">{levelLabel}</div>
      <div style={{ width: "100%", height: 2, background: "#1a1a1a" }}>
        <div className="stack-bar-fill" style={{ width: `${item.pct * 100}%`, background: item.color }} />
      </div>
    </div>
  );
}

export default function TechStack({ lang }) {
  const ref = useReveal();
  const tx = t[lang];

  return (
    <section id="techstack" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{tx.section}</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          {tx.title} <span className="text-outline">{tx.titleOutline}</span>
        </h2>
        <div ref={ref} className="reveal grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant">
          {stack.map((s) => <StackCard key={s.name} item={s} lang={lang} />)}
        </div>
      </div>
    </section>
  );
}
