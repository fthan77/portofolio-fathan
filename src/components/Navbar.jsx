import { useState } from "react";
import logo from "../assets/favicon.png";

const links = [
  { href: "#tentang",    label: "TENTANG"     },
  { href: "#keahlian",   label: "KEAHLIAN"    },
  { href: "#techstack",  label: "TECH STACK"  },
  { href: "#proyek",     label: "PROYEK"      },
  { href: "#pengalaman", label: "PENGALAMAN"  },
  { href: "#kontak",     label: "KONTAK"      },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-outline-variant flex justify-between items-center px-6 md:px-20 py-4">
      <a href="#">
      <img src={logo} alt="FF Logo" style={{ height: 36, width: 36, objectFit: "contain" }} />
    </a>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="font-mono text-xs tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#kontak" className="font-mono text-xs tracking-widest border border-tertiary text-tertiary px-6 py-2 hover:bg-tertiary hover:text-white transition-all duration-300">
        HIRE ME
      </a>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1 p-1 ml-4" onClick={() => setOpen(!open)}>
        <span className="block w-5 h-px bg-on-surface-variant" />
        <span className="block w-5 h-px bg-on-surface-variant" />
        <span className="block w-5 h-px bg-on-surface-variant" />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-outline-variant flex flex-col gap-5 px-6 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="font-mono text-xs tracking-widest text-on-surface-variant hover:text-on-surface">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
