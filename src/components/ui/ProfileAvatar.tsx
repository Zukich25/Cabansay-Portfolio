import { useState } from "react";
import { cn } from "@/lib/cn";

type ProfileAvatarProps = {
  size?: "md" | "lg";
  className?: string;
};

export function ProfileAvatar({ size = "lg", className }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const sizes = {
    md: "w-40 h-40 sm:w-48 sm:h-48",
    lg: "w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72",
  };

  const ringSizes = {
    md: "w-44 h-44 sm:w-52 sm:h-52",
    lg: "w-60 h-60 sm:w-[17rem] sm:h-[17rem] lg:w-[19rem] lg:h-[19rem]",
  };

  return (
    <div className={cn("relative flex items-center justify-center group", className)}>
      <svg
        className={cn("absolute animate-spin-slow text-accent", ringSizes[size])}
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="40 20 10 20 40 20 10 20"
          strokeLinecap="round"
        />
      </svg>

      <div
        className={cn(
          "relative rounded-full overflow-hidden bg-card flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
          sizes[size],
        )}
      >
        {!hasError ? (
          <img
            src="/profile.jpg"
            alt="Cabansay profile"
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-4xl font-bold text-accent">C</span>
        )}
      </div>
    </div>
  );
}
