import { useLanguage } from "../hooks/useLanguage";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center rounded-full border border-line bg-white/80 p-1 text-xs font-semibold text-quiet shadow-sm transition hover:border-accent/30 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent/25"
      aria-label={language === "en" ? "Switch language to Turkish" : "Dili İngilizce yap"}
    >
      <span className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-ink text-white" : ""}`}>EN</span>
      <span className={`rounded-full px-3 py-1.5 transition ${language === "tr" ? "bg-ink text-white" : ""}`}>TR</span>
    </button>
  );
}
