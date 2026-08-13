import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center animate-fade-in">
          <ProfileAvatar size="md" />
        </div>

        <div className="animate-fade-in-delay">
          <SectionHeader
            label="Resume"
            title="Get to know me"
            className="mb-6"
          />

          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I&apos;m Cabansay, a BSIT student from the Philippines. I&apos;m
              currently learning web development and exploring React, Tailwind CSS,
              and other technologies through our school projects.
            </p>
            <p>
              I&apos;m still a beginner, but I&apos;m enjoying the process of
              building and improving my skills. This portfolio is one of my first
              projects, and I made it to practice what we learned in class.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: "Name", value: "Cabansay" },
              { label: "Experience", value: "1 Year" },
              { label: "Location", value: "Philippines" },
              { label: "Role", value: "Student Dev" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-border rounded-lg p-4 bg-card hover:border-accent/30 transition-colors duration-200"
              >
                <p className="text-xs text-muted uppercase tracking-wide mb-1 font-mono">
                  {item.label}
                </p>
                <p className="text-fg font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
