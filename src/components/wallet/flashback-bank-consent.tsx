"use client";

import { useState } from "react";
import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_CONSENT_DATA } from "@/lib/scenario-data";

const BADGE_ICONS = [
  { src: "/images/icons/icon-security.svg", alt: "Sécurité", w: 22, h: 26 },
  { src: "/images/icons/icon-gdpr.svg", alt: "RGPD", w: 26, h: 26 },
  { src: "/images/icons/icon-confidentiality.svg", alt: "Confidentialité", w: 24, h: 26 },
] as const;

export function FlashbackBankConsent() {
  const { advance } = useScenario();
  const [consented, setConsented] = useState(false);

  return (
    <div className="flex flex-col items-center px-6 py-6 gap-6">
      {/* Title */}
      <h2 className="whitespace-pre-line text-center text-2xl font-semibold text-[#242A2F]">
        {FLASHBACK_BANK_CONSENT_DATA.title}
      </h2>

      {/* Subtitle */}
      <p className="text-center text-lg text-[#242A2F]">
        {FLASHBACK_BANK_CONSENT_DATA.subtitle}
      </p>

      {/* Security badges row */}
      <div className="w-full rounded-[10px] bg-[#F6F8F9] px-4 py-5">
        <div className="grid grid-cols-3 gap-4">
          {FLASHBACK_BANK_CONSENT_DATA.badges.map((label, i) => {
            const icon = BADGE_ICONS[i];
            return (
              <div key={label} className="flex flex-col items-center gap-3">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.w}
                  height={icon.h}
                />
                <span className="text-sm text-[#60707C]">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Consent card */}
      <div className="w-full rounded-[10px] border border-[#DEE3E6] px-4 py-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <button
            type="button"
            role="checkbox"
            aria-checked={consented}
            onClick={() => setConsented((v) => !v)}
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-colors ${
              consented
                ? "border-cercle-teal bg-cercle-teal"
                : "border-[#7C8D9A] bg-white"
            }`}
          >
            {consented && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <span className="text-base leading-relaxed text-[#47535C]">
            {FLASHBACK_BANK_CONSENT_DATA.consentText}
          </span>
        </label>
      </div>

      {/* CGU text */}
      <p className="text-[15px] italic text-[#47535C] leading-relaxed">
        En continuant, vous acceptez les{" "}
        <span className="font-medium underline">CGU</span> de l&apos;agrégateur.
      </p>

      {/* CTA button */}
      <button
        disabled={!consented}
        onClick={() => advance()}
        className={`h-[52px] w-full rounded-full bg-cercle-teal text-lg font-medium text-white transition-opacity ${
          consented ? "opacity-100" : "opacity-40"
        }`}
      >
        {FLASHBACK_BANK_CONSENT_DATA.buttonText}
      </button>
    </div>
  );
}
