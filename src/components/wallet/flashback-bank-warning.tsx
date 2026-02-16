"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_WARNING_DATA } from "@/lib/scenario-data";

export function FlashbackBankWarning() {
  const { advance } = useScenario();

  return (
    <div className="flex flex-col items-center px-6">
      {/* Title */}
      <h2 className="mt-6 whitespace-pre-line text-center text-2xl font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_BANK_WARNING_DATA.title}
      </h2>

      {/* Warning card */}
      <div className="mt-6 w-full rounded-[10px] bg-[#F6F8F9] px-4 pb-6 pt-5">
        {/* Orange warning icon (above card) */}
        <div className="flex justify-center -mt-9 mb-3">
          <Image
            src={FLASHBACK_BANK_WARNING_DATA.warningIcon}
            alt=""
            width={32}
            height={32}
          />
        </div>

        {/* Bank row */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#DEE3E6] bg-white">
            <Image
              src={FLASHBACK_BANK_WARNING_DATA.bankLogo}
              alt={FLASHBACK_BANK_WARNING_DATA.bankName}
              width={20}
              height={20}
            />
          </div>
          <span className="text-lg font-medium leading-[27px] text-[#242A2F]">
            {FLASHBACK_BANK_WARNING_DATA.bankName}
          </span>
        </div>

        {/* No income text */}
        <p className="mt-4 whitespace-pre-line text-center text-lg italic leading-[27px] text-[#47535C]">
          {FLASHBACK_BANK_WARNING_DATA.noIncomeText}
        </p>

        {/* Add account explanation */}
        <p className="mt-4 text-center text-lg leading-[27px] text-[#47535C]">
          {FLASHBACK_BANK_WARNING_DATA.addAccountText}
        </p>

        {/* Add account button */}
        <button
          onClick={() => advance()}
          className="mt-6 flex h-[52px] w-full items-center justify-center gap-4 rounded-full bg-cercle-teal"
        >
          {/* Plus icon in white circle */}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0.5V11.5M0.5 6H11.5" stroke="#0B7ACE" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            {FLASHBACK_BANK_WARNING_DATA.addButtonText}
          </span>
        </button>
      </div>

      {/* Continue without link */}
      <button
        onClick={() => advance()}
        className="mt-auto pt-16 pb-6"
      >
        <span className="text-lg font-medium text-[#47535C] underline">
          {FLASHBACK_BANK_WARNING_DATA.continueText}
        </span>
      </button>
    </div>
  );
}
