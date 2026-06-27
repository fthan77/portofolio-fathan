import useReveal from "../hooks/useReveal";
import { skills } from "../data/content";

const t = {
  id: { section: "// 02 — KEAHLIAN", title: "YANG BISA SAYA", titleOutline: "TAWARKAN" },
  en: { section: "// 02 — SKILLS",   title: "WHAT I CAN",     titleOutline: "OFFER"    },
};

export default function Skills({ lang }) {
  const ref = useReveal();
  const tx = t[lang];
  const list = skills[lang];

  return (
    <section id="keahlian" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{tx.section}</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          {tx.title} <span className="text-outline">{tx.titleOutline}</span>
        </h2>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant">
          {list.map((s) => (
            <div key={s.num} className="skill-card bg-background">
              <div className="font-mono text-xs text-on-surface-variant mb-4">{s.num}</div>
              <h3 className="font-sans font-bold text-xl uppercase mb-2">{s.title}</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-4 px-3 py-1 border border-outline-variant font-mono text-xs text-on-surface-variant">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
