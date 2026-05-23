import { CheckCircle2, Github } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  role: string;
  status?: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  links?: readonly { label: string; url: string }[];
  architecture?: readonly string[];
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_14px_34px_rgba(17,24,39,0.075)] md:p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-accent/70" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="relative min-w-0">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.role}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink break-words">{project.title}</h3>
        </div>
        {project.status ? <span className="rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1.5 font-mono text-xs font-semibold text-accent">{project.status}</span> : null}
      </div>
      <p className="relative mt-5 text-base leading-7 text-slatecopy">{project.description}</p>
      <ul className="relative mt-5 grid gap-2.5">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slatecopy">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-line bg-ink/[0.03] px-3 py-1.5 font-mono text-xs text-slatecopy">
            {item}
          </span>
        ))}
      </div>
      {project.architecture?.length ? (
        <div className="relative mt-5 rounded-2xl border border-accent/15 bg-accent/[0.035] p-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            {project.architecture.map((step, stepIndex) => (
              <div key={step} className="flex flex-1 flex-col gap-2 md:flex-row md:items-center">
                <span className="min-w-0 break-words rounded-xl border border-accent/15 bg-white px-3 py-2 text-center font-mono text-[11px] font-semibold text-slatecopy shadow-sm">
                  {step}
                </span>
                {stepIndex < project.architecture!.length - 1 ? (
                  <span className="hidden h-px flex-1 bg-accent/35 md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {project.links?.length ? (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn-secondary min-h-10 px-4 py-2">
              <Github size={16} /> {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
