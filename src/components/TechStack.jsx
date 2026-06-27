import { useEffect, useRef } from "react";
import { stack } from "../data/content";
import useReveal from "../hooks/useReveal";

function StackCard({ item }) {
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
  return (
    <div ref={ref} className="stack-card bg-background p-4 flex flex-col items-center gap-2 text-center hover:bg-surface transition-colors">
      <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={item.logo} alt={item.name} loading="eager" style={{ width: 36, height: 36, objectFit: "contain" }} />
      </div>
      <div className="font-mono text-xs text-on-surface tracking-wider">{item.name}</div>
      <div className="font-mono text-xs text-on-surface-variant">{item.level}</div>
      <div style={{ width: "100%", height: 2, background: "#1a1a1a" }}>
        <div className="stack-bar-fill" style={{ width: `${item.pct * 100}%`, background: item.color }} />
      </div>
    </div>
  );
}

export default function TechStack() {
  const ref = useReveal();
  return (
    <section id="techstack" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">// 03 — TECH STACK</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          BAHASA & <span className="text-outline">TEKNOLOGI</span>
        </h2>
        <div ref={ref} className="reveal grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant">
          {stack.map((s) => <StackCard key={s.name} item={s} />)}
        </div>
      </div>
    </section>
  );
}
