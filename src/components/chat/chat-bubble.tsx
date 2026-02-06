"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ChatBubbleProps {
  variant: "bot" | "user";
  children: ReactNode;
  className?: string;
}

export function ChatBubble({ variant, children, className }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[85%] px-4 py-3 text-[15px] leading-relaxed",
        variant === "bot" && [
          "self-start rounded-2xl rounded-tl-sm bg-cercle-grey-bg text-cercle-blue",
        ],
        variant === "user" && [
          "self-end rounded-2xl rounded-tr-sm bg-white text-cercle-blue shadow-sm",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
