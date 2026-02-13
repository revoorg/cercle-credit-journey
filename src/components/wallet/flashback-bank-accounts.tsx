"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_ACCOUNTS_DATA } from "@/lib/scenario-data";

export function FlashbackBankAccounts() {
  const { advance } = useScenario();
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex h-dvh flex-col bg-[#FBFAFC] px-4">
      {/* Title */}
      <h1 className="mt-24 whitespace-pre-line text-[32px] font-bold leading-[36px] tracking-[0.32px] text-black">
        {FLASHBACK_BANK_ACCOUNTS_DATA.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-4 whitespace-pre-line text-[13px] leading-[18px] text-[#97999E]">
        {FLASHBACK_BANK_ACCOUNTS_DATA.subtitle}
      </p>

      {/* Accounts section */}
      <p className="mt-10 text-lg font-bold leading-9 tracking-[0.18px] text-black">
        {FLASHBACK_BANK_ACCOUNTS_DATA.sectionTitle}
      </p>

      {/* Account card */}
      <div className="mt-3 flex h-[70px] items-center rounded-[15px] bg-white px-4">
        {/* EU flag */}
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={FLASHBACK_BANK_ACCOUNTS_DATA.accountFlag}
            alt="EU"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Account info */}
        <div className="ml-3 flex-1">
          <p className="text-[15px] leading-9 tracking-[0.15px] text-black">
            {FLASHBACK_BANK_ACCOUNTS_DATA.accountName}
          </p>
          <p className="-mt-1 text-[13px] leading-[18px] text-[#97999E]">
            {FLASHBACK_BANK_ACCOUNTS_DATA.accountBalance}
          </p>
        </div>

        {/* Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={() => setEnabled((v) => !v)}
          className={`relative h-[30px] w-[51px] shrink-0 rounded-full transition-colors ${
            enabled ? "bg-[#5D60EC]" : "bg-[#EFEDF0]"
          }`}
        >
          <div
            className={`absolute top-[1px] h-7 w-7 rounded-full bg-white shadow-sm transition-[left] ${
              enabled ? "left-[22px]" : "left-[1px]"
            }`}
          />
        </button>
      </div>

      {/* Info row */}
      <div className="mt-4 flex h-[55px] items-center justify-between rounded-[15px] bg-white px-4">
        <p className="text-[15px] leading-9 tracking-[0.15px] text-black">
          {FLASHBACK_BANK_ACCOUNTS_DATA.infoLabel}
        </p>
        <ChevronRight className="h-4 w-4 text-[#97999E]" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom buttons */}
      <div className="flex gap-2 pb-8">
        <button className="h-[51px] flex-1 rounded-full bg-[#F2F1FC] text-[15px] tracking-[0.15px] text-[#6E6BD0]">
          {FLASHBACK_BANK_ACCOUNTS_DATA.cancelText}
        </button>
        <button
          disabled={!enabled}
          onClick={() => advance()}
          className={`h-[51px] flex-1 rounded-full text-[15px] tracking-[0.15px] text-white transition-all ${
            enabled
              ? "bg-[#5D60EC] shadow-[0px_1px_15px_0px_rgba(93,96,236,0.3)]"
              : "bg-[#DBDBFC] text-white/65"
          }`}
        >
          {FLASHBACK_BANK_ACCOUNTS_DATA.authoriseText}
        </button>
      </div>
    </div>
  );
}
