import { useState } from "react";
import logo from "../assets/favicon.png";

const navLinks = {
  id: [
    { href: "#tentang",    label: "TENTANG"    },
    { href: "#keahlian",   label: "KEAHLIAN"   },
    { href: "#techstack",  label: "TECH STACK" },
    { href: "#proyek",     label: "PROYEK"     },
    { href: "#pengalaman", label: "PENGALAMAN" },
    { href: "#kontak",     label: "KONTAK"     },
  ],
  en: [
    { href: "#tentang",    label: "ABOUT"      },
    { href: "#keahlian",   label: "SKILLS"     },
    { href: "#techstack",  label: "TECH STACK" },
    { href: "#proyek",     label: "PROJECTS"   },
    { href: "#pengalaman", label: "EXPERIENCE" },
    { href: "#kontak",     label: "CONTACT"    },
  ],
};

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const links = navLinks[lang];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-outline-variant py-3">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo kiri */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="FF Logo" style={{ height: 34, width: 34, objectFit: "contain" }} />
        </a>

        {/* Menu tengah — satu baris, font lebih kecil */}
        <ul className="hidden md:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono tracking-widest text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                style={{ fontSize: "0.68rem" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Kanan — tombol bahasa + HIRE ME */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0 z-10">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="font-mono tracking-widest border border-outline-variant text-on-surface-variant px-3 py-1.5 hover:border-tertiary hover:text-tertiary transition-all duration-300"
            style={{ fontSize: "0.68rem" }}
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
          <a
            href="#kontak"
            className="font-mono tracking-widest border border-tertiary text-tertiary px-5 py-1.5 hover:bg-tertiary hover:text-white transition-all duration-300 whitespace-nowrap"
            style={{ fontSize: "0.68rem" }}
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1 p-1 z-10" onClick={() => setOpen(!open)}>
          <span className="block w-5 h-px bg-on-surface-variant" />
          <span className="block w-5 h-px bg-on-surface-variant" />
          <span className="block w-5 h-px bg-on-surface-variant" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-5 px-6 py-6 border-t border-outline-variant bg-background">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-widest text-on-surface-variant hover:text-on-surface"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { setLang(lang === "id" ? "en" : "id"); setOpen(false); }}
              className="w-full font-mono text-xs tracking-widest border border-outline-variant text-on-surface-variant px-3 py-2 hover:border-tertiary hover:text-tertiary transition-all"
            >
              {lang === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            </button>
          </li>
          <li>
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="block text-center font-mono text-xs tracking-widest border border-tertiary text-tertiary px-6 py-2 hover:bg-tertiary hover:text-white transition-all"
            >
              HIRE ME
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
