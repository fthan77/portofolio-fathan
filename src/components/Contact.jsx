import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { contacts } from "../data/content";

const logoMap = {
  EMAIL: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  LINKEDIN: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GITHUB: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  WHATSAPP: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  ),
};

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqgqovy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full bg-transparent border border-outline-variant font-sans text-sm text-on-surface px-4 py-3 outline-none focus:border-tertiary transition-colors duration-200 placeholder:text-on-surface-variant";

  return (
    <section id="kontak" className="py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-tertiary mb-2">// 06 — KONTAK</p>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="font-sans font-extrabold uppercase mb-8" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: 0.95 }}>
              SAY<br /><span className="text-outline-red">HELLO</span>
            </h2>
            <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
              Saya sedang mencari kesempatan magang sebagai UI/UX Designer. Jika tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut, jangan ragu untuk menghubungi saya.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Nama Anda" className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Anda" className={inputClass} />
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Pesan Anda.." rows={5} className={inputClass + " resize-none"} />
              <button type="submit" disabled={status === "sending"} className="group relative inline-flex items-center justify-center px-10 py-4 bg-tertiary overflow-hidden transition-all duration-300 disabled:opacity-50">
                <span className="relative z-10 font-mono text-xs tracking-widest text-white">
                  {status === "sending" ? "MENGIRIM..." : "KIRIM PESAN"}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 z-20 flex items-center justify-center font-mono text-xs tracking-widest text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">KIRIM →</span>
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1qHxhJuD9Ya_HQsMVNTBzDsj3TxBl7vaF"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-outline-variant text-on-surface-variant font-mono text-xs tracking-widest hover:border-tertiary hover:text-tertiary transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                UNDUH CV
              </a>
              {status === "success" && <p className="font-mono text-xs text-green-400 tracking-widest">✓ PESAN TERKIRIM! TERIMA KASIH.</p>}
              {status === "error" && <p className="font-mono text-xs text-red-400 tracking-widest">✗ GAGAL KIRIM. COBA LAGI.</p>}
            </form>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-link">
                <div className="link-icon">{logoMap[c.label]}</div>
                <div className="flex flex-col justify-end">
                  <span className="link-label">{c.label}</span>
                  <span className="text-sm">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}