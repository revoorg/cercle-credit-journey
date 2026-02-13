"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_CE_CONSENT_DATA } from "@/lib/scenario-data";

export function FlashbackCEConsent() {
  const { advance } = useScenario();

  return (
    <div className="flex h-dvh flex-col bg-white">
      {/* CE Logo */}
      <div className="mt-16 flex justify-center">
        <div className="h-20 w-20 overflow-hidden">
          <Image
            src={FLASHBACK_CE_CONSENT_DATA.bankLogo}
            alt="Caisse d'Épargne"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-center text-[21px] font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_CE_CONSENT_DATA.title}
      </h2>

      {/* Fraud info card */}
      <div className="mx-8 mt-6 rounded-[3px] border border-[#242A2F] px-4 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/banks/ce-info-icon.png"
            alt=""
            width={24}
            height={25}
          />
          <span className="text-lg font-semibold text-[#242A2F]">
            {FLASHBACK_CE_CONSENT_DATA.fraudTitle}
          </span>
        </div>
        <p className="mt-3 text-base leading-5 text-[#242A2F]">
          {FLASHBACK_CE_CONSENT_DATA.fraudText}
        </p>
      </div>

      {/* Request text */}
      <p className="mx-8 mt-12 whitespace-pre-line text-center text-base font-bold leading-7 text-[#242A2F]">
        {FLASHBACK_CE_CONSENT_DATA.requestText}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom buttons */}
      <div className="px-4 pb-8 shadow-[0px_-5px_15px_0px_rgba(0,0,0,0.25)]">
        <button
          onClick={() => advance()}
          className="mt-6 h-10 w-full rounded bg-[#D8000F] text-base text-white"
        >
          {FLASHBACK_CE_CONSENT_DATA.authorizeText}
        </button>
        <p className="mt-4 text-center text-[15px] font-semibold text-[#D8000F]">
          {FLASHBACK_CE_CONSENT_DATA.refuseText}
        </p>
      </div>
    </div>
  );
}
