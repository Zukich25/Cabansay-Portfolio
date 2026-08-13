import { SectionHeader } from "@/components/ui/SectionHeader";

const skills = [
  {
    name: "React",
    level: "Learning",
    description: "Building interactive UIs with components, hooks, and React Router.",
  },
  {
    name: "TypeScript",
    level: "Learning",
    description: "Writing type-safe code for better maintainability and fewer bugs.",
  },
  {
    name: "Tailwind CSS",
    level: "Learning",
    description: "Designing responsive, modern interfaces with utility-first styling.",
  },
  {
    name: "Git & GitHub",
    level: "Learning",
    description: "Version control, branching, and pushing projects to GitHub.",
  },
];

export function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        label="Skills"
        title="Technologies I Use"
        description="Tools and technologies I'm currently learning and practicing."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="border border-border rounded-lg p-6 bg-card hover:border-accent/50 hover:scale-[1.02] transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-fg">{skill.name}</h3>
              <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded font-mono">
                {skill.level}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
