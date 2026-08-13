import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    number: "01",
    title: "My Portfolio",
    description:
      "A portfolio website built using React, TypeScript, Tailwind CSS, and React Router with light/dark mode and section-based architecture.",
  },
  {
    number: "02",
    title: "School Project",
    description:
      "A class project that helped me practice programming concepts and understand how different parts of an application work together.",
  },
  {
    number: "03",
    title: "Simple Web Project",
    description:
      "A simple website I made while learning web development. It helped me practice layouts, responsive design, and organizing content.",
  },
];

export function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <SectionHeader
        label="Work"
        title="Featured Projects"
        description="A selection of projects that showcase my development skills."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-border">
        {projects.map((project, index) => (
          <div
            key={project.number}
            className={cn(
              "group p-8 border-b border-border hover:bg-card/80 transition-all duration-300 animate-fade-in",
              index % 2 === 0 && "sm:border-r sm:border-border",
              index !== 2 && "lg:border-r lg:border-border",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-b from-fg/20 to-transparent">
                {project.number}
              </span>
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all duration-200">
                ↘
              </span>
            </div>

            <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-3">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
