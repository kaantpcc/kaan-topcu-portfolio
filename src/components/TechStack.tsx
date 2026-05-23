import { motion } from "framer-motion";
import { Boxes, Braces, Cloud, Code2, Container, Database, GitBranch, KeyRound, LockKeyhole, MessageSquare, Rabbit, Send, Server, Sparkles, Wind } from "lucide-react";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

const techMarks: Record<string, { label?: string; icon?: typeof Server; color: string }> = {
  "Node.js": { label: "N", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  Express: { icon: Server, color: "bg-zinc-50 text-zinc-700 border-zinc-200" },
  "ASP.NET Core": { label: ".NET", color: "bg-violet-50 text-violet-700 border-violet-100" },
  "Spring Boot": { label: "SB", color: "bg-green-50 text-green-700 border-green-100" },
  "REST APIs": { icon: Braces, color: "bg-blue-50 text-blue-700 border-blue-100" },
  React: { icon: Sparkles, color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  TypeScript: { label: "TS", color: "bg-blue-50 text-blue-700 border-blue-100" },
  Vite: { icon: Cloud, color: "bg-amber-50 text-amber-700 border-amber-100" },
  "Tailwind CSS": { icon: Wind, color: "bg-sky-50 text-sky-700 border-sky-100" },
  PostgreSQL: { label: "PG", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  MSSQL: { icon: Database, color: "bg-red-50 text-red-700 border-red-100" },
  Redis: { label: "R", color: "bg-rose-50 text-rose-700 border-rose-100" },
  Microservices: { icon: Boxes, color: "bg-slate-50 text-slate-700 border-slate-200" },
  RabbitMQ: { icon: Rabbit, color: "bg-orange-50 text-orange-700 border-orange-100" },
  "Kong API Gateway": { icon: Send, color: "bg-teal-50 text-teal-700 border-teal-100" },
  JWT: { icon: LockKeyhole, color: "bg-purple-50 text-purple-700 border-purple-100" },
  "OAuth 2.0": { icon: KeyRound, color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100" },
  Docker: { icon: Container, color: "bg-blue-50 text-blue-700 border-blue-100" },
  Git: { icon: GitBranch, color: "bg-orange-50 text-orange-700 border-orange-100" },
  Postman: { icon: MessageSquare, color: "bg-orange-50 text-orange-700 border-orange-100" }
};

export default function TechStack() {
  const { language } = useLanguage();
  const categories = content[language].stack.categories;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {categories.map((category, index) => (
        <motion.article
          key={category.name}
          className="relative overflow-hidden rounded-2xl border border-ink/[0.12] bg-white/[0.96] p-5 shadow-[0_12px_30px_rgba(17,24,39,0.07)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-accent/60" />
          <h3 className="text-lg font-semibold tracking-tight text-ink">{category.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slatecopy">{category.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 font-mono text-xs text-slatecopy shadow-sm">
                <TechMark name={item} />
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function TechMark({ name }: { name: string }) {
  const mark = techMarks[name] ?? { icon: Code2, color: "bg-slate-50 text-slate-700 border-slate-200" };
  const Icon = mark.icon;

  return (
    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[9px] font-bold leading-none ${mark.color}`}>
      {Icon ? <Icon size={12} strokeWidth={2.2} /> : mark.label}
    </span>
  );
}
