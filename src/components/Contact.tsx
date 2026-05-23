import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { content, links } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <footer id="contact" className="section-shell pb-10">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#172033] p-6 text-white shadow-soft md:p-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <span className="pointer-events-none absolute -bottom-5 right-6 select-none text-5xl font-semibold tracking-tight text-white/[0.055] md:-bottom-8 md:right-8 md:text-8xl">
          Kaan Topcu
        </span>
        <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.72]">{t.description}</p>
          </div>
          <div className="grid gap-3">
            <a className="contact-link" href={links.email}><Mail className="shrink-0" size={17} /> <span className="min-w-0 break-all">{links.emailLabel}</span></a>
            <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="shrink-0" size={17} /> <span className="min-w-0 break-all">{links.linkedinLabel}</span></a>
            <a className="contact-link" href={links.github} target="_blank" rel="noreferrer"><Github className="shrink-0" size={17} /> <span className="min-w-0 break-all">{links.githubLabel}</span></a>
          </div>
        </div>
      </motion.div>
      <p className="mt-8 text-center text-sm text-quiet">{t.footer}</p>
    </footer>
  );
}
