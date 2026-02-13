"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_REDIRECT_DATA } from "@/lib/scenario-data";

export function FlashbackBankRedirect() {
  const { advance } = useScenario();

  return (
    <div className="flex flex-col items-center px-6 py-6 gap-6">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold text-[#242A2F]">
        {FLASHBACK_BANK_REDIRECT_DATA.title}
      </h2>

      {/* Bank row */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#DEE3E6] overflow-hidden">
          <Image
            src={FLASHBACK_BANK_REDIRECT_DATA.bankLogo}
            alt={FLASHBACK_BANK_REDIRECT_DATA.bankName}
            width={28}
            height={28}
          />
        </div>
        <span className="text-base font-medium text-[#242A2F]">
          {FLASHBACK_BANK_REDIRECT_DATA.bankName}
        </span>
      </div>

      {/* Vertical timeline */}
      <div className="w-full px-2">
        <div className="relative flex flex-col gap-0">
          {FLASHBACK_BANK_REDIRECT_DATA.steps.map((s, i) => (
            <div key={s.title} className="relative flex gap-4 pb-6 last:pb-0">
              {/* Vertical line (except last item) */}
              {i < FLASHBACK_BANK_REDIRECT_DATA.steps.length - 1 && (
                <div className="absolute left-[7px] top-4 bottom-0 w-px bg-[#DEE3E6]" />
              )}
              {/* Dot */}
              <div className="relative z-10 mt-1.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                <div className="h-[11px] w-[11px] rounded-full border-2 border-cercle-teal bg-white" />
              </div>
              {/* Content */}
              <div className="flex-1">
                <p className="text-[15px] font-semibold text-[#242A2F]">
                  {s.title}
                </p>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[#47535C]">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-[15px] italic text-[#47535C] leading-relaxed">
        {FLASHBACK_BANK_REDIRECT_DATA.disclaimer}
      </p>

      {/* CTA button */}
      <button
        onClick={() => advance()}
        className="h-[52px] w-full rounded-full bg-cercle-teal text-base font-medium text-white"
      >
        {FLASHBACK_BANK_REDIRECT_DATA.buttonText}
      </button>
    </div>
  );
}
