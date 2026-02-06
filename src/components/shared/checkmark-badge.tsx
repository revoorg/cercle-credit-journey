"use client";

import { cn } from "@/lib/utils";

interface CheckmarkBadgeProps {
  size?: number;
  className?: string;
}

export function CheckmarkBadge({ size = 40, className }: CheckmarkBadgeProps) {
  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="animate-in zoom-in duration-300"
        width={size}
        height={size}
      >
        <circle cx="20" cy="20" r="20" fill="#22C55E" />
        <path
          d="M12 20L18 26L28 14"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-checkmark"
        />
      </svg>
    </div>
  );
}
