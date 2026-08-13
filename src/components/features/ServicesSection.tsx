import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive websites using React, TypeScript, and Tailwind CSS with clean and organized code.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Creating simple, user-friendly layouts with a focus on readability, spacing, and mobile-friendly design.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Turning designs into working pages with components, routing, animations, and reusable UI patterns.",
  },
  {
    number: "04",
    title: "School Projects",
    description:
      "Completing class requirements and portfolio projects while practicing proper folder structure and best practices.",
  },
];

export function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader label="Services" title="What I Do" />

      <div className="grid sm:grid-cols-2 gap-0 border-t border-border">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={cn(
              "group p-8 border-b border-border hover:bg-card/80 transition-all duration-300 animate-fade-in",
              index % 2 === 0 ? "sm:border-r sm:border-border" : "",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-8">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-fg/20 to-transparent">
                {service.number}
              </span>
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all duration-200"
                aria-label={`View ${service.title}`}
              >
                ↘
              </button>
            </div>

            <h3 className="text-xl font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-4">
              {service.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
