import { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Resume" },
  { to: "/skills", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[4.25rem] z-50 bg-page border-b border-border/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        <NavLink to="/" className="font-display text-lg sm:text-xl font-bold shrink-0">
          <span className="text-fg">Cabansay</span>
          <span className="text-accent">.</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-display text-sm capitalize transition-all duration-200 hover:text-accent relative pb-1",
                  isActive
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent"
                    : "text-fg/90",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link to="/contact">
            <Button variant="primary" className="py-2 px-5 text-xs font-semibold">
              Hire me
            </Button>
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-fg text-xs font-mono border border-border px-3 py-1.5 rounded-full hover:border-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-[4.25rem] left-0 right-0 bg-page border-b border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-display text-sm transition-colors duration-200 hover:text-accent",
                  isActive ? "text-accent" : "text-fg",
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" className="w-full py-2.5 text-xs">
              Hire me
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
