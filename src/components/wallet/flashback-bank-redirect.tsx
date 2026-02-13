"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_REDIRECT_DATA } from "@/lib/scenario-data";

export function FlashbackBankRedirect() {
  const { advance } = useScenario();

  return (
    <div className="flex flex-col px-6 py-6">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_BANK_REDIRECT_DATA.title}
      </h2>

      {/* Bank row */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#DEE3E6] bg-white overflow-hidden">
          <Image
            src={FLASHBACK_BANK_REDIRECT_DATA.bankLogo}
            alt={FLASHBACK_BANK_REDIRECT_DATA.bankName}
            width={28}
            height={28}
          />
        </div>
        <span className="text-lg font-medium leading-[27px] text-[#242A2F]">
          {FLASHBACK_BANK_REDIRECT_DATA.bankName}
        </span>
      </div>

      {/* Vertical timeline */}
      <div className="relative mt-8 ml-[18px] pl-[26px]">
        {/* Vertical line segment 1: dot 1 → dot 2 */}
        <div className="absolute left-0 top-[5px] h-[91px] w-px bg-[#7C8D9A]" />
        {/* Vertical line segment 2: dot 2 → dot 3 */}
        <div className="absolute left-0 top-[112px] h-[84px] w-px bg-[#7C8D9A]" />

        {/* Step 1 — Redirection sécurisée */}
        <div className="relative pb-8">
          {/* Dot */}
          <div className="absolute -left-[29px] top-[3px] h-[5px] w-[5px] rounded-full border border-[#7C8D9A] bg-[#7C8D9A]" />
          <p className="text-lg font-medium leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[0].title}
          </p>
          <p className="mt-1 text-base leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[0].description}
          </p>
        </div>

        {/* Step 2 — Authentification (with lock icon) */}
        <div className="relative pb-8">
          {/* Lock + check icon (replaces dot) */}
          <div className="absolute -left-[40px] -top-[2px]">
            <Image
              src="/images/icons/icon-lock-check.svg"
              alt=""
              width={22}
              height={26}
            />
          </div>
          <p className="text-lg font-medium leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[1].title}
          </p>
          <p className="mt-1 text-base leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[1].description}
          </p>
        </div>

        {/* Step 3 — Retour */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute -left-[29px] top-[3px] h-[5px] w-[5px] rounded-full border border-[#7C8D9A] bg-[#7C8D9A]" />
          <p className="text-lg font-medium leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[2].title}
          </p>
          <p className="mt-1 text-base leading-6 text-[#47535C]">
            {FLASHBACK_BANK_REDIRECT_DATA.steps[2].description}
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-auto pt-10 text-center text-[15px] italic leading-[21px] text-[#47535C]">
        {FLASHBACK_BANK_REDIRECT_DATA.disclaimer}
      </p>

      {/* CTA button */}
      <button
        onClick={() => advance()}
        className="mt-6 h-[52px] w-full rounded-full bg-cercle-teal text-lg font-medium text-white"
      >
        {FLASHBACK_BANK_REDIRECT_DATA.buttonText}
      </button>
    </div>
  );
}
