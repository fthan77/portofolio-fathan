import useReveal from "../hooks/useReveal";
import { experiences } from "../data/content";

const pendidikan = experiences.filter(e => e.type === "edu");
const organisasi = experiences.filter(e => e.type === "org");

function ExperienceList({ items }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      {items.map((e, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-8 py-8 border-t border-outline-variant last:border-b">
          <div className="md:w-48 flex-shrink-0">
            <span className="font-mono text-xs text-on-surface-variant">{e.period}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-bold text-xl uppercase">
              {e.title}
              <span className={e.type === "org" ? "exp-type-org ml-2" : "exp-type-edu ml-2"}>
                {e.type === "org" ? "ORGANISASI" : "PENDIDIKAN"}
              </span>
            </h3>
            <p className="font-mono text-xs text-tertiary mt-1 mb-3 tracking-wide">{e.org}</p>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">// 05 — PENGALAMAN & PENDIDIKAN</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          PERJALANAN <span className="text-outline">SAYA</span>
        </h2>
        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mb-4">PENGALAMAN ORGANISASI</p>
        <ExperienceList items={organisasi} />
        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mt-12 mb-4">PENDIDIKAN</p>
        <ExperienceList items={pendidikan} />
      </div>
    </section>
  );
}
