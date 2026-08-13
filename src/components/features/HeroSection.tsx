import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SocialIcons } from "@/components/ui/SocialIcons";

const stats = [
  { value: 1, label: "Years of", sublabel: "experience" },
  { value: 1, label: "Projects", sublabel: "completed" },
  { value: 8, label: "Technologies", sublabel: "mastered" },
  { value: 67, label: "Code", sublabel: "commits" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Zukich25" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:Cabansay@felvingwapo.com" },
];

function StatItem({ value, label, sublabel }: (typeof stats)[0]) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-fg leading-none tabular-nums">
        {count}
      </span>
      <div className="font-mono text-[10px] sm:text-xs text-muted leading-snug uppercase tracking-wide">
        <p>{label}</p>
        <p>{sublabel}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="h-[calc(100vh-4.25rem)] max-w-6xl mx-auto px-4 sm:px-6 flex flex-col overflow-hidden">
      <div className="flex-1 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center min-h-0 py-4 lg:py-0">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-xs sm:text-sm text-fg mb-2 sm:mb-4 animate-fade-in">
            Software Developer
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-3 sm:mb-5 animate-fade-in-delay">
            <span className="text-fg">Hello I&apos;m</span>
            <br />
            <span className="text-accent">Cabansay</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-muted leading-relaxed mb-5 sm:mb-8 max-w-md animate-fade-in-delay">
            I am a beginner web developer currently learning React, TypeScript, and Tailwind CSS.
            I enjoy creating simple projects and learning new things as I improve my skills.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-in-delay-2">
            <Button variant="secondary" className="text-xs gap-2">
              <span>Download CV</span>
              <span aria-hidden>↓</span>
            </Button>
            <SocialIcons links={socials} />
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <ProfileAvatar size="lg" />
        </div>
      </div>

      <div className="shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 py-5 sm:py-6 border-t border-border">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
