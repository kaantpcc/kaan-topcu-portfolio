import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { content, links } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { language } = useLanguage();
  const t = content[language];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition md:px-5 ${
          scrolled ? "border-ink/[0.12] bg-white/[0.98] shadow-sm" : "border-ink/[0.1] bg-white/[0.94] shadow-sm"
        }`}
        aria-label="Main navigation"
      >
        <button onClick={() => scrollTo("hero")} className="min-w-0 flex items-center gap-3 rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/25">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-ink/[0.08] bg-white p-1.5 shadow-sm">
            <img src="/logo-small.png" alt="Kaan Topcu logo" className="h-full w-full object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-tight text-ink">Kaan Topcu</span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-quiet">Backend</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {t.nav.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)} className="rounded-full px-4 py-2 text-sm font-medium text-slatecopy transition hover:bg-ink/5 hover:text-ink">
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={links.github} aria-label="GitHub" className="icon-link" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href={links.linkedin} aria-label="LinkedIn" className="icon-link" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <LanguageToggle />
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="icon-link md:hidden" aria-label="Open menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-white/95 p-3 shadow-sm md:hidden">
          <div className="grid gap-1">
            {t.nav.map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slatecopy hover:bg-ink/5">
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
            <div className="flex gap-2">
              <a href={links.github} aria-label="GitHub" className="icon-link" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href={links.linkedin} aria-label="LinkedIn" className="icon-link" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
