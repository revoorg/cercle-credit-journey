"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_BANK_SELECTION_DATA } from "@/lib/scenario-data";

interface FlashbackBankSelectionProps {
  targetBankId?: string;
}

export function FlashbackBankSelection({ targetBankId = "caisse-epargne" }: FlashbackBankSelectionProps) {
  const { advance } = useScenario();

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Scrollable bank list */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        {/* Title */}
        <h2 className="mt-6 text-center text-2xl font-semibold leading-[30px] text-[#242A2F]">
          {FLASHBACK_BANK_SELECTION_DATA.title}
        </h2>

        <p className="mt-6 text-sm leading-[21px] text-[#60707C]">
          {FLASHBACK_BANK_SELECTION_DATA.availableLabel}
        </p>

        {FLASHBACK_BANK_SELECTION_DATA.banks.map((group) => (
          <div key={group.letter}>
            {/* Letter header */}
            <p className="mt-4 text-[13px] leading-[19px] text-[#7C8D9A]">
              {group.letter}
            </p>
            <div className="mt-1 h-px bg-[#DEE3E6]" />

            {/* Bank items */}
            {group.items.map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  if (bank.id === `${targetBankId}-list` || bank.id === targetBankId) {
                    advance();
                  }
                }}
                className="flex w-full items-center gap-4 border-b border-[#DEE3E6] py-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[5px] border border-[#DEE3E6] bg-white">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-lg leading-[27px] text-[#47535C]">
                  {bank.name}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Sticky suggestions bar at bottom */}
      <div className="shrink-0 bg-white px-6 pb-6 pt-4 shadow-[0px_-1px_8px_0px_rgba(0,0,0,0.1)]">
        <p className="text-sm leading-[21px] text-[#60707C]">
          {FLASHBACK_BANK_SELECTION_DATA.suggestionsLabel}
        </p>

        {/* Suggestion icons row */}
        <div className="mt-3 flex justify-between">
          {FLASHBACK_BANK_SELECTION_DATA.suggestions.map((bank) => (
            <button
              key={bank.id}
              onClick={() => {
                if (bank.id === targetBankId) {
                  advance();
                }
              }}
              className="flex w-[68px] flex-col items-center gap-2"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[5px] border border-[#DEE3E6] bg-white">
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="whitespace-pre-line text-center text-xs leading-4 text-[#47535C]">
                {bank.name}
              </span>
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="mt-4 flex h-12 items-center gap-4 rounded-[5px] bg-[#F4F6F7] px-4">
          <Image
            src="/images/icons/icon-search.svg"
            alt=""
            width={16}
            height={16}
          />
          <span className="text-lg leading-[27px] text-[#60707C]">
            {FLASHBACK_BANK_SELECTION_DATA.searchPlaceholder}
          </span>
        </div>
      </div>
    </div>
  );
}
