import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 animate-fade-in",
        centered && "text-center",
        className,
      )}
    >
      <p className="text-accent font-mono text-sm mb-2">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-fg">{title}</h2>
      {description && (
        <p className={cn("text-muted mt-4 max-w-xl leading-relaxed", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
