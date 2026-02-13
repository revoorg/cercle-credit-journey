"use client";

import { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_FINANCIAL_DATA } from "@/lib/scenario-data";

export function FlashbackFinancialDetail() {
  const { advance } = useScenario();
  const [consented, setConsented] = useState(false);

  return (
    <div className="border-2 border-[#d1e0ef] rounded-xl shadow bg-white overflow-hidden">
      {/* Purple category banner */}
      <div className="flex h-10 items-center justify-between px-4 bg-cercle-purple">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-semibold text-white">
            Mes informations financières
          </span>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
          <ChevronRight className="h-3 w-3 text-white" />
        </div>
      </div>

      <div className="px-4 py-5 flex flex-col gap-4">
        {/* Description */}
        <p className="text-sm leading-relaxed text-[#242A2F]">
          {FLASHBACK_FINANCIAL_DATA.description}
        </p>

        {/* Connect paragraph */}
        <p className="text-sm leading-relaxed text-[#242A2F]">
          {FLASHBACK_FINANCIAL_DATA.connectParagraph}
        </p>

        {/* Attribute list */}
        <ul className="list-disc pl-5 space-y-1">
          {FLASHBACK_FINANCIAL_DATA.attributes.map((attr) => (
            <li key={attr} className="text-sm text-[#242A2F]">
              {attr}
            </li>
          ))}
        </ul>

        {/* Consent checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <button
            type="button"
            role="checkbox"
            aria-checked={consented}
            onClick={() => setConsented((v) => !v)}
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
              consented
                ? "border-cercle-teal bg-cercle-teal"
                : "border-cercle-grey-border bg-white"
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
          <span className="text-xs leading-relaxed text-cercle-grey-text">
            {FLASHBACK_FINANCIAL_DATA.consentText}
          </span>
        </label>

        {/* Connect button */}
        <button
          disabled={!consented}
          onClick={() => advance()}
          className={`h-[52px] w-full rounded-full bg-cercle-teal text-base font-medium text-white transition-opacity ${
            consented ? "opacity-100" : "opacity-40"
          }`}
        >
          {FLASHBACK_FINANCIAL_DATA.buttonText}
        </button>
      </div>
    </div>
  );
}
