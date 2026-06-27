import logo from "../assets/favicon.png";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FF Logo" style={{ height: 36, width: 36, objectFit: "contain" }} />
            <div>
              <p className="font-mono text-xs text-on-surface-variant mt-1">FATHAN FATHUROHMAN — UI/UX DESIGNER</p>
            </div>
          </div>
          <div className="flex gap-8 flex-wrap">
            {[
              { label: "GITHUB",   href: "https://github.com/fthan77" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/fathan-fathurohman-338a13321/" },
              { label: "EMAIL",    href: "mailto:fathanfath7@student.ub.ac.id" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-tertiary transition-colors flex items-center group">
                {l.label}
                <span className="material-symbols-outlined text-xs ml-1 group-hover:translate-x-1 transition-transform">north_east</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t border-outline-variant pt-4">
          <span className="font-mono text-xs text-on-surface-variant">© 2026 FATHAN FATHUROHMAN. ALL RIGHTS RESERVED.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-tertiary hover:border-tertiary transition-colors">
            <span className="material-symbols-outlined text-sm">expand_less</span>
          </button>
        </div>
      </div>
    </footer>
  );
}