import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/content";
import nautivue1 from "../assets/nautivue-1.png";
import nautivue2 from "../assets/nautivue-2.png";
import alexShoes from "../assets/alex-shoes.png";
import floodMonitoring from "../assets/flood-monitoring.jpg";

const thumbMap = {
  "nautivue-1":       nautivue1,
  "nautivue-2":       nautivue2,
  "alex-shoes":       alexShoes,
  "flood-monitoring": floodMonitoring,
};

const content = {
  id: {
    eyebrow:     "// 04 — PROYEK",
    wip:         "SEDANG DIKERJAKAN",
    detail:      "LIHAT DETAIL",
    tools:       "TOOLS & TEKNOLOGI",
    role:        "Peran:",
    close:       "✕ TUTUP",
    empty:       "PROYEK BERIKUTNYA\nSEGERA HADIR",
  },
  en: {
    eyebrow:     "// 04 — PROJECTS",
    wip:         "IN PROGRESS",
    detail:      "VIEW DETAIL",
    tools:       "TOOLS & TECHNOLOGY",
    role:        "Role:",
    close:       "✕ CLOSE",
    empty:       "NEXT PROJECT\nCOMING SOON",
  },
};

function ProjectModal({ project, onClose, lang }) {
  if (!project) return null;
  const t     = content[lang];
  const thumb  = project.thumb  ? thumbMap[project.thumb]  : null;
  const thumb2 = project.thumb2 ? thumbMap[project.thumb2] : null;
  const desc   = project.desc[lang];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative bg-background border border-outline-variant w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 font-mono text-xs text-on-surface-variant hover:text-tertiary transition-colors border border-outline-variant px-3 py-1">
          {t.close}
        </button>
        {thumb && (
          <div className="w-full border-b border-outline-variant" style={{ aspectRatio: "16/9" }}>
            <img src={thumb} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="font-mono text-xs text-tertiary border border-tertiary/30 px-2 py-1 uppercase">{project.category}</span>
            <span className="font-mono text-xs text-on-surface-variant">{project.year}</span>
            {project.wip && (
              <span className="flex items-center gap-2 font-mono text-xs text-tertiary">
                <span className="wip-dot" />{t.wip}
              </span>
            )}
          </div>
          <h2 className="font-sans font-extrabold text-3xl uppercase mb-2">{project.title}</h2>
          <p className="font-mono text-xs text-tertiary mb-6 tracking-wide">{t.role} {project.role}</p>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">{desc}</p>
          <div className="mb-8">
            <p className="font-mono text-xs text-on-surface-variant tracking-widest uppercase mb-3">{t.tools}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border border-outline-variant font-mono text-xs text-on-surface-variant">{tag}</span>
              ))}
            </div>
          </div>
          {thumb2 && (
            <div className="border border-outline-variant overflow-hidden">
              <img src={thumb2} alt={`${project.title} detail`} style={{ width: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick, lang }) {
  const t     = content[lang];
  const thumb = project.thumb ? thumbMap[project.thumb] : null;
  const desc  = project.desc[lang];

  return (
    <div className="card-hover group relative bg-background transition-all duration-300 flex flex-col cursor-pointer" onClick={onClick}>
      <div className="border-b border-outline-variant bg-surface flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {thumb ? (
          <img src={thumb} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        ) : (
          <span className="font-sans font-extrabold text-on-surface" style={{ opacity: 0.04, fontSize: "4rem", letterSpacing: "-0.06em" }}>FF</span>
        )}
        <span className="absolute top-3 left-3 font-mono text-xs px-2 py-1 border border-outline-variant text-tertiary uppercase bg-background/80">{project.category}</span>
        {project.wip && (
          <span className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-xs text-tertiary bg-background/80 px-2 py-1">
            <span className="wip-dot" />{t.wip}
          </span>
        )}
        {project.role && !project.wip && (
          <span className="absolute bottom-3 right-3 font-mono text-xs text-on-surface-variant bg-background/80 px-2 py-1">{project.role}</span>
        )}
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 border border-outline-variant font-mono text-xs">{tag}</span>
            ))}
          </div>
          <h3 className="font-sans font-bold text-lg uppercase hover-red">{project.title}</h3>
          <p className="font-sans text-sm text-on-surface-variant mt-2 leading-relaxed">{desc}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-xs text-on-surface-variant">{project.year}</span>
          <span className="flex items-center gap-1 font-mono text-xs text-tertiary">
            {t.detail} <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ lang }) {
  const ref = useReveal();
  const [selected, setSelected] = useState(null);
  const t = content[lang];

  return (
    <>
      <section id="proyek" className="py-20 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-2">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">{t.eyebrow}</p>
              <h2 className="font-sans font-extrabold uppercase" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>SELECTED_WORKS</h2>
            </div>
            <span className="font-mono text-xs text-on-surface-variant hidden md:block">01 — 0{projects.length}</span>
          </div>
          <div ref={ref} className="reveal grid grid-cols-2 lg:grid-cols-4 gap-2 bg-outline-variant">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} onClick={() => setSelected(p)} lang={lang} />
            ))}
          </div>
        </div>
      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
    </>
  );
}