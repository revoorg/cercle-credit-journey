"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ChatMessageListProps {
  children: ReactNode;
}

export function ChatMessageList({ children }: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
      {children}
      <div ref={bottomRef} />
    </div>
  );
}
