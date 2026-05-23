import { motion } from "framer-motion";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

export default function ExperienceTimeline() {
  const { language } = useLanguage();
  const items = content[language].experience.items;

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-[4.4rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-accent/45 to-transparent md:block" />
      <div className="grid gap-5">
        {items.map((item, index) => (
          <div key={`${item.company}-${item.title}`} className="relative md:ml-36">
            <div className="absolute -left-[4.65rem] top-7 hidden w-[4.65rem] items-center md:flex">
              <span className="h-px flex-1 bg-gradient-to-r from-accent/45 to-accent/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(37,99,235,0.28)]" />
            </div>
            <motion.article
              className="relative overflow-hidden rounded-2xl border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_12px_30px_rgba(17,24,39,0.07)] md:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-accent/60" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-slatecopy">{item.title}</p>
                </div>
                <time className="rounded-full border border-line bg-ink/[0.03] px-3 py-1.5 font-mono text-xs text-quiet">{item.date}</time>
              </div>
              <p className="mt-4 text-sm leading-7 text-slatecopy md:text-base">{item.description}</p>
            </motion.article>
          </div>
        ))}
      </div>
    </div>
  );
}
