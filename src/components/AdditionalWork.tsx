import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { content, links } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";
import SectionHeader from "./SectionHeader";

export default function AdditionalWork() {
  const { language } = useLanguage();
  const t = content[language].additionalWork;

  return (
    <div className="mt-12">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <div className="grid gap-4 md:grid-cols-2">
        {t.items.map((item, index) => (
          <motion.article
            key={item.title}
            className="relative overflow-hidden rounded-2xl border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_12px_30px_rgba(17,24,39,0.07)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-accent/50" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.label}</p>
                <h3 className="mt-2 break-words text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="icon-link h-9 w-9"
                aria-label={`${item.title} GitHub repository`}
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-slatecopy">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-ink/[0.03] px-3 py-1.5 font-mono text-[11px] text-slatecopy">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-7 flex justify-center">
        <a className="btn-primary" href={links.github} target="_blank" rel="noreferrer">
          <Github size={17} /> {t.viewMore}
        </a>
      </div>
    </div>
  );
}
