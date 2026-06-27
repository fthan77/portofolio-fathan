const items = {
  id: ["UI/UX Designer", "Figma Enthusiast", "Frontend Learner", "Problem Solver"],
  en: ["UI/UX Designer", "Figma Enthusiast", "Frontend Learner", "Problem Solver"],
};

export default function Marquee({ lang }) {
  const repeated = [...items[lang], ...items[lang], ...items[lang], ...items[lang]];
  return (
    <section className="overflow-hidden py-8 border-t border-b border-outline-variant">
      <div className="animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8">
            <span className={`font-sans font-bold text-3xl md:text-5xl uppercase tracking-tight ${i % 2 === 0 ? "text-outline" : "text-on-surface"}`}>
              {item}
            </span>
            <span className="material-symbols-outlined text-4xl text-tertiary">arrow_forward</span>
          </span>
        ))}
      </div>
    </section>
  );
}