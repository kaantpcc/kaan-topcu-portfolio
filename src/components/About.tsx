import { motion } from "framer-motion";
import { Braces, Gauge, GraduationCap, Layers3 } from "lucide-react";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";
import SectionHeader from "./SectionHeader";

const markers = [
  { icon: Braces },
  { icon: Gauge },
  { icon: Layers3 }
];

export default function About() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="section-shell scroll-mt-28">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_14px_34px_rgba(17,24,39,0.075)] md:p-7"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-accent/70" />
        <div className="grid gap-7 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <div className="space-y-4 text-base leading-8 text-slatecopy">
            <p>{t.description}</p>
            <p>{t.secondary}</p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-accent/15 bg-accent/[0.035] p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-accent shadow-sm">
                  <GraduationCap size={17} />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{t.education.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{t.education.school}</p>
                  <p className="text-sm text-slatecopy">{t.education.department}</p>
                </div>
              </div>
            </div>
            {markers.map(({ icon: Icon }, index) => (
              <div key={t.markers[index]} className="flex items-center gap-3 rounded-2xl border border-line bg-ink/[0.03] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-accent shadow-sm">
                  <Icon size={17} />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slatecopy">{t.markers[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
