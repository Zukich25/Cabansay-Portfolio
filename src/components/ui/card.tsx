import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  description: string;
  className?: string;
};

export function Card({ title, description, className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg p-6 bg-card hover:border-accent/50 hover:scale-[1.02] transition-all duration-200",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
