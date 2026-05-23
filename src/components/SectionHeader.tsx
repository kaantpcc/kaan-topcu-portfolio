import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      {intro ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slatecopy">{intro}</p> : null}
    </motion.div>
  );
}
