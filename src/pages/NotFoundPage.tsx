import { ArrowLeft, CornerDownRight, Route, ServerCrash } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import LanguageToggle from "../components/LanguageToggle";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const t = content[language].notFound;

  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen px-4 py-5">
        <div className="mx-auto flex max-w-6xl justify-end">
          <LanguageToggle />
        </div>
        <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 py-10 md:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="font-mono text-[7rem] font-semibold leading-none tracking-tight text-ink md:text-[10rem]">{t.title}</p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">{t.headline}</h1>
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-slatecopy md:text-lg">{t.description}</p>
            <p className="mt-7 inline-flex max-w-full rounded-2xl border border-line bg-white/[0.78] px-4 py-3 font-mono text-xs text-quiet shadow-sm">
              {t.technical}
            </p>
            <div className="mt-8">
              <Link className="btn-primary" to="/">
                <ArrowLeft size={17} /> {t.button}
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_14px_34px_rgba(17,24,39,0.075)] md:p-7">
            <span className="absolute inset-x-0 top-0 h-1 bg-accent/70" />
            <span className="pointer-events-none absolute -bottom-7 right-5 select-none font-mono text-8xl font-semibold tracking-tight text-ink/[0.035] md:text-[9rem]">
              404
            </span>
            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
                    <ServerCrash size={19} />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">{t.traceTitle}</p>
                    <p className="mt-1 text-sm font-medium text-slatecopy">{t.traceDescription}</p>
                  </div>
                </div>
                <span className="rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1.5 font-mono text-xs font-semibold text-accent">
                  404
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {t.traceRows.map(([method, value], index) => (
                  <div key={method} className="flex items-center gap-3 rounded-2xl border border-line bg-ink/[0.03] px-4 py-3">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white text-accent shadow-sm">
                      {index === 0 ? <Route size={15} /> : <CornerDownRight size={15} />}
                    </span>
                    <span className="w-16 shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-quiet">{method}</span>
                    <span className="min-w-0 break-words font-mono text-xs text-slatecopy">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-accent/15 bg-accent/[0.035] p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  {t.flow.map((step, index) => (
                    <div key={step} className="flex flex-1 flex-col gap-2 md:flex-row md:items-center">
                      <span className="rounded-xl border border-accent/15 bg-white px-3 py-2 text-center font-mono text-[11px] font-semibold text-slatecopy shadow-sm">
                        {step}
                      </span>
                      {index < t.flow.length - 1 ? <span className="hidden h-px flex-1 bg-accent/35 md:block" /> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
