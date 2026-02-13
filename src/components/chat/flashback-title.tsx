"use client";

import { FLASHBACK_TITLE_TEXT } from "@/lib/scenario-data";

export function FlashbackTitle() {
  return (
    <div className="flex h-dvh items-center justify-center bg-white">
      <h1 className="animate-flashback-title-in text-4xl font-bold text-[#005A9E]">
        {FLASHBACK_TITLE_TEXT}
      </h1>
    </div>
  );
}
