import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-accent text-accent-fg hover:bg-accent/90 hover:scale-105",
    secondary: "bg-transparent text-accent border border-accent hover:bg-accent/10 hover:scale-105",
    outline: "bg-transparent text-accent border border-accent hover:bg-accent/10 hover:scale-105",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 px-8 py-3 rounded-full text-sm uppercase tracking-wide",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
