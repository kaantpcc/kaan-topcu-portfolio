import { motion, useReducedMotion } from "framer-motion";
import { Activity, Check, Route, Server } from "lucide-react";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const bootSteps = ["API", "DB", "CACHE"];

export default function LoadingScreen() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-paper px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-ink/[0.12] bg-white/[0.96] p-6 text-center shadow-[0_24px_70px_rgba(17,24,39,0.12)]"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-accent/70" />
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-line bg-white p-3 shadow-card">
          <img src="/logo-small.png" alt="Kaan Topcu logo" className="h-full w-full object-contain" />
        </div>

        <div className="mt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">Kaan Topcu</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Backend Developer</h1>
          <p className="mt-3 text-sm text-slatecopy">{content[language].loading}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-ink/[0.025] p-3">
          <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2 text-left shadow-sm">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/[0.08] text-accent">
              <Route size={15} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-quiet">System route</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/[0.08]">
                <motion.span
                  className="block h-full rounded-full bg-accent"
                  initial={{ width: "12%" }}
                  animate={{ width: reduceMotion ? "100%" : ["12%", "48%", "76%", "100%"] }}
                  transition={{ duration: reduceMotion ? 0.2 : 1.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {bootSteps.map((step, index) => (
              <motion.div
                key={step}
                className="rounded-xl border border-line bg-white px-2 py-2"
                initial={{ opacity: 0.45, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.25 + index * 0.16 }}
              >
                <span className="mx-auto grid h-7 w-7 place-items-center rounded-lg bg-ink/[0.04] text-accent">
                  {index === 0 ? <Server size={14} /> : index === 1 ? <Activity size={14} /> : <Check size={14} />}
                </span>
                <p className="mt-1.5 font-mono text-[10px] font-semibold text-quiet">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
