import AnimatedBackground from "../components/AnimatedBackground";
import About from "../components/About";
import AdditionalWork from "../components/AdditionalWork";
import Contact from "../components/Contact";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import SectionDivider from "../components/SectionDivider";
import SectionHeader from "../components/SectionHeader";
import TechStack from "../components/TechStack";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <section id="experience" className="section-shell scroll-mt-28">
          <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.intro} />
          <ExperienceTimeline />
        </section>
        <SectionDivider />
        <section id="projects" className="section-shell scroll-mt-28">
          <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
          <div className="grid gap-5">
            {t.projects.items.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <AdditionalWork />
        </section>
        <SectionDivider />
        <section id="stack" className="section-shell scroll-mt-28">
          <SectionHeader eyebrow={t.stack.eyebrow} title={t.stack.title} intro={t.stack.intro} />
          <TechStack />
        </section>
        <SectionDivider />
      </main>
      <div className="relative z-10">
        <Contact />
      </div>
    </>
  );
}
