import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { content, links } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="hero" className="section-shell flex min-h-[88vh] items-center justify-center pb-10 pt-28 text-center">
      <div className="mx-auto max-w-4xl">
        <motion.p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          {t.label}
        </motion.p>
        <motion.h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
          {t.name}
        </motion.h1>
        <motion.p className="mt-3 text-2xl font-semibold text-slatecopy md:text-3xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}>
          {t.title}
        </motion.p>
        <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slatecopy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.36 }}>
          {t.description}
        </motion.p>
        <motion.p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-quiet" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.46 }}>
          {t.secondary}
        </motion.p>
        <motion.div className="mt-7 flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.58 }}>
          <a className="btn-primary" href={links.cv}><Download size={17} /> {t.ctas.cv}</a>
          <a className="btn-secondary" href="#projects"><ArrowDown size={17} /> {t.ctas.projects}</a>
          <a className="btn-secondary" href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> {t.ctas.github}</a>
          <a className="btn-secondary" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> {t.ctas.linkedin}</a>
        </motion.div>
        <motion.a
          href="#about"
          className="scroll-cue mx-auto mt-10 inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.78 }}
          aria-label={t.scroll}
        >
          <span>{t.scroll}</span>
          <span className="scroll-cue-icon grid h-9 w-6 place-items-start rounded-full border border-accent/35 bg-white/80 p-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
