import useReveal from "../hooks/useReveal";
import { experiences } from "../data/content";

const content = {
  id: {
    eyebrow:  "// 05 — PENGALAMAN & PENDIDIKAN",
    title:    "PERJALANAN",
    titleOutline: "SAYA",
    org:      "PENGALAMAN ORGANISASI",
    edu:      "PENDIDIKAN",
    badgeOrg: "ORGANISASI",
    badgeEdu: "PENDIDIKAN",
  },
  en: {
    eyebrow:  "// 05 — EXPERIENCE & EDUCATION",
    title:    "MY",
    titleOutline: "JOURNEY",
    org:      "ORGANIZATIONAL EXPERIENCE",
    edu:      "EDUCATION",
    badgeOrg: "ORGANIZATION",
    badgeEdu: "EDUCATION",
  },
};

function ExperienceList({ items, lang }) {
  const ref = useReveal();
  const t = content[lang];
  return (
    <div ref={ref} className="reveal">
      {items.map((e, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-8 py-8 border-t border-outline-variant last:border-b">
          <div className="md:w-48 flex-shrink-0">
            <span className="font-mono text-xs text-on-surface-variant">{e.period}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-bold text-xl uppercase">
              {e.title[lang] || e.title}
              <span className={e.type === "org" ? "exp-type-org ml-2" : "exp-type-edu ml-2"}>
                {e.type === "org" ? t.badgeOrg : t.badgeEdu}
              </span>
            </h3>
            <p className="font-mono text-xs text-tertiary mt-1 mb-3 tracking-wide">{e.org}</p>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{e.desc[lang] || e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience({ lang }) {
  const t = content[lang];
  const pendidikan = experiences.filter(e => e.type === "edu");
  const organisasi = experiences.filter(e => e.type === "org");

  return (
    <section id="pengalaman" className="py-20 border-b border-outline-variant">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{t.eyebrow}</p>
        <h2 className="font-sans font-extrabold uppercase mb-10" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          {t.title} <span className="text-outline">{t.titleOutline}</span>
        </h2>
        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mb-4">{t.org}</p>
        <ExperienceList items={organisasi} lang={lang} />
        <p className="font-mono text-xs tracking-widest uppercase text-on-surface-variant mt-12 mb-4">{t.edu}</p>
        <ExperienceList items={pendidikan} lang={lang} />
      </div>
    </section>
  );
}