import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/content";
import nautivue1 from "../assets/nautivue-1.png";
import nautivue2 from "../assets/nautivue-2.png";
import alexShoes from "../assets/alex-shoes.png";
import floodMonitoring from "../assets/flood-monitoring.jpg";

const thumbMap = {
  "nautivue-1":      nautivue1,
  "nautivue-2":      nautivue2,
  "alex-shoes":      alexShoes,
  "flood-monitoring": floodMonitoring,
};

// ── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const thumb  = project.thumb  ? thumbMap[project.thumb]  : null;
  const thumb2 = project.thumb2 ? thumbMap[project.thumb2] : null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-background border border-outline-variant w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 font-mono text-xs text-on-surface-variant hover:text-tertiary transition-colors border border-outline-variant px-3 py-1"
        >
          ✕ TUTUP
        </button>

        {/* Gambar utama */}
        {thumb && (
          <div className="w-full border-b border-outline-variant" style={{ aspectRatio: "16/9" }}>
            <img src={thumb} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
        )}

        <div className="p-8">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="font-mono text-xs text-tertiary border border-tertiary/30 px-2 py-1 uppercase">{project.category}</span>
            <span className="font-mono text-xs text-on-surface-variant">{project.year}</span>
            {project.wip && (
              <span className="flex items-center gap-2 font-mono text-xs text-tertiary">
                <span className="wip-dot" />SEDANG DIKERJAKAN
              </span>
            )}
          </div>

          <h2 className="font-sans font-extrabold text-3xl uppercase mb-2">{project.title}</h2>
          <p className="font-mono text-xs text-tertiary mb-6 tracking-wide">Peran: {project.role}</p>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">{project.desc}</p>

          {/* Tags */}
          <div className="mb-8">
            <p className="font-mono text-xs text-on-surface-variant tracking-widest uppercase mb-3">TOOLS & TEKNOLOGI</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 border border-outline-variant font-mono text-xs text-on-surface-variant">{t}</span>
              ))}
            </div>
          </div>

          {/* Gambar kedua jika ada */}
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

// ── Kartu proyek ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  const thumb = project.thumb ? thumbMap[project.thumb] : null;
  return (
    <div
      className="card-hover group relative bg-background transition-all duration-300 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div
        className="border-b border-outline-variant bg-surface flex items-center justify-center relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {thumb ? (
          <img
            src={thumb}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        ) : (
          <span className="font-sans font-extrabold text-on-surface" style={{ opacity: 0.04, fontSize: "4rem", letterSpacing: "-0.06em" }}>FF</span>
        )}
        <span className="absolute top-3 left-3 font-mono text-xs px-2 py-1 border border-outline-variant text-tertiary uppercase bg-background/80">
          {project.category}
        </span>
        {project.wip && (
          <span className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-xs text-tertiary bg-background/80 px-2 py-1">
            <span className="wip-dot" />SEDANG DIKERJAKAN
          </span>
        )}
        {project.role && !project.wip && (
          <span className="absolute bottom-3 right-3 font-mono text-xs text-on-surface-variant bg-background/80 px-2 py-1">
            {project.role}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-1 border border-outline-variant font-mono text-xs">{t}</span>
            ))}
          </div>
          <h3 className="font-sans font-bold text-lg uppercase hover-red">{project.title}</h3>
          <p className="font-sans text-sm text-on-surface-variant mt-2 leading-relaxed">{project.desc}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-xs text-on-surface-variant">{project.year}</span>
          <span className="flex items-center gap-1 font-mono text-xs text-tertiary">
            LIHAT DETAIL <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function EmptySlot() {
  return (
    <div className="bg-background flex items-center justify-center min-h-[260px] flex-col gap-3" style={{ opacity: 0.2 }}>
      <div className="font-sans text-on-surface-variant" style={{ fontSize: "2rem" }}>+</div>
      <p className="font-mono text-xs text-on-surface-variant text-center tracking-widest">PROYEK BERIKUTNYA<br />SEGERA HADIR</p>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useReveal();
  const [selected, setSelected] = useState(null);
  const totalSlots = projects.length % 2 === 0 ? projects.length : projects.length + 1;
  const emptySlots = Math.max(0, totalSlots - projects.length);

  return (
    <>
      <section id="proyek" className="py-20 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-2">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">// 04 — PROYEK</p>
              <h2 className="font-sans font-extrabold uppercase" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
                SELECTED_WORKS
              </h2>
            </div>
            <span className="font-mono text-xs text-on-surface-variant hidden md:block">
              01 — 0{projects.length}
            </span>
          </div>

          <div ref={ref} className="reveal grid grid-cols-1 gap-px bg-outline-variant">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} onClick={() => setSelected(p)} />
            ))}
            {[...Array(emptySlots)].map((_, i) => <EmptySlot key={i} />)}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
