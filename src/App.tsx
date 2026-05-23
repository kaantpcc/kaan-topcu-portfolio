import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AppRouter from "./router/AppRouter";
import LoadingScreen from "./components/LoadingScreen";
import { LanguageContext, type Language } from "./hooks/useLanguage";

const storedLanguage = (): Language => {
  if (typeof localStorage === "undefined") return "en";
  return localStorage.getItem("language") === "tr" ? "tr" : "en";
};

export default function App() {
  const [language, setLanguageState] = useState<Language>(storedLanguage);
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem("seen-loader"));

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (!isLoading) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(
      () => {
        sessionStorage.setItem("seen-loader", "true");
        setIsLoading(false);
      },
      reduceMotion ? 250 : 1150
    );
    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === "en" ? "tr" : "en"))
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      <AnimatePresence>{isLoading && <LoadingScreen key="loader" />}</AnimatePresence>
      <AppRouter />
    </LanguageContext.Provider>
  );
}
