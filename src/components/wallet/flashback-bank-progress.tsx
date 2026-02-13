"use client";

import Image from "next/image";
import { FLASHBACK_BANK_PROGRESS_DATA } from "@/lib/scenario-data";

export function FlashbackBankProgress() {

  return (
    <div className="flex flex-col items-center px-6">
      {/* Title */}
      <h2 className="mt-6 text-center text-2xl font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_BANK_PROGRESS_DATA.title}
      </h2>

      {/* Revolut icon with green check */}
      <div className="relative mt-16">
        <div className="flex h-14 w-14 items-center justify-center rounded-[5px] border border-[#DEE3E6] bg-white">
          <Image
            src="/images/banks/revolut.png"
            alt="Revolut"
            width={32}
            height={32}
          />
        </div>
        {/* Green check badge */}
        <div className="absolute -bottom-2 -right-2">
          <Image
            src="/images/icons/icon-green-check.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Progress bar — fills from 0% to ~17% over 5s (simulating 5s of a 30s process) */}
      <div className="mt-16 h-2 w-64 overflow-hidden rounded-xl bg-cercle-teal/20">
        <div className="animate-progress-fill h-full rounded-xl bg-cercle-teal" />
      </div>

      {/* Wait text */}
      <p className="mt-6 text-center text-base leading-6 text-[#47535C]">
        {FLASHBACK_BANK_PROGRESS_DATA.waitText}
      </p>

      {/* Bottom warning */}
      <p className="mt-28 whitespace-pre-line text-center text-lg font-medium leading-[27px] text-[#47535C]">
        {FLASHBACK_BANK_PROGRESS_DATA.warningText}
      </p>
    </div>
  );
}
