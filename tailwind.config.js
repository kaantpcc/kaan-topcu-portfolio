/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        footer: "#172033",
        slatecopy: "#4B5563",
        quiet: "#6B7280",
        paper: "#F7F8FA",
        line: "rgba(17,24,39,0.08)",
        accent: "#2563EB"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 39, 0.08)",
        card: "0 12px 36px rgba(17, 24, 39, 0.06)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      }
    }
  },
  plugins: []
};
