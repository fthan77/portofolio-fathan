import useReveal from "../hooks/useReveal";
import { experiences } from "../data/content";

const t = {
  id: { section: "// 05 — PENGALAMAN & PENDIDIKAN", title: "PERJALANAN", titleOutline: "SAYA", org: "ORGANISASI", edu: "PENDIDIKAN", orgSection: "PENGALAMAN ORGANISASI", eduSection: "PENDIDIKAN" },
  en: { section: "// 05 — EXPERIENCE & EDUCATION",  title: "MY",          titleOutline: "JOURNEY",  org: "ORGANIZATION",  edu: "EDUCATION",   orgSection: "ORGANIZATIONAL EXPERIENCE", eduSection: "EDUCATION" },
};

function ExpItem({ item, lang }) {
  const title = typeof item.title === "object" ? item.title[lang] : item.title;
  const desc  = typeof item.desc  === "object" ? item.desc[lang]  : item.desc;
  const tx = t[lang];

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 border-t border-outline-variant last:border-b">
      <div className="md:w-48 flex-shrink-0">
        <span className="font-mono text-xs text-on-surface-variant">{item.period}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-sans font-bold text-xl uppercase">
          {title}
          <span className={item.type === "org" ? "exp-type-org ml-2" : "exp-type-edu ml-2"}>
            {item.type === "org" ? tx.org : tx.edu}
          </span>
        </h3>
        <p className="font-mono text-xs text-tertiary mt-1 mb-3 tracking-wide">{item.org}</p>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Experience({ lang }) {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const tx = t[lang];

  const orgItems = experiences.filter(e => e.type === "org");
  const eduItems = experiences.filter(e => e.type === "edu");

  return (
    <section id="pengalaman" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{tx.section}</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          {tx.title} <span className="text-outline">{tx.titleOutline}</span>
        </h2>

        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mb-2">{tx.orgSection}</p>
        <div ref={ref1} className="reveal mb-12">{orgItems.map((e, i) => <ExpItem key={i} item={e} lang={lang} />)}</div>

        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mb-2">{tx.eduSection}</p>
        <div ref={ref2} className="reveal">{eduItems.map((e, i) => <ExpItem key={i} item={e} lang={lang} />)}</div>
      </div>
    </section>
  );
}
