import { cn } from "@/lib/cn";
import { useTheme } from "@/components/common/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "w-10 h-10 rounded-full border border-border flex items-center justify-center",
        "text-muted hover:text-accent hover:border-accent transition-all duration-200 hover:scale-110",
      )}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
