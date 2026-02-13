"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_TRANSMISSION_COMPLETE_DATA } from "@/lib/scenario-data";

/** Green circle with white checkmark */
function GreenCheck() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#12B17A" />
      <path d="M9 16L14 21L23 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Teal circle with white "+" */
function TealPlus() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#278781" />
      <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlashbackTransmissionComplete() {
  const { advance } = useScenario();

  return (
    <div className="flex flex-col px-6 pb-8">
      {/* Title */}
      <h2 className="mt-6 text-center text-2xl font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_TRANSMISSION_COMPLETE_DATA.title}
      </h2>

      {/* Green check badge (overlapping the card) */}
      <div className="relative mt-8">
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <GreenCheck />
        </div>

        {/* Bank list card */}
        <div className="rounded-[10px] bg-[#F6F8F9] px-5 pb-5 pt-8">
          {FLASHBACK_TRANSMISSION_COMPLETE_DATA.banks.map((bank) => (
            <div key={bank.name} className="flex items-center gap-4 py-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[5px] border border-[#DEE3E6] bg-white">
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-medium leading-[27px] text-[#242A2F]">
                {bank.name}
              </span>
            </div>
          ))}

          {/* Success text */}
          <p className="mt-2 text-lg italic leading-6 text-[#47535C]">
            {FLASHBACK_TRANSMISSION_COMPLETE_DATA.successText}
          </p>
        </div>
      </div>

      {/* Add another account button */}
      <div className="mt-6 flex h-32 w-full items-center justify-center gap-3 rounded-[10px] border border-dashed border-cercle-teal bg-white">
        <TealPlus />
        <span className="text-lg font-medium text-[#47535C]">
          {FLASHBACK_TRANSMISSION_COMPLETE_DATA.addButtonText}
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Certify button */}
      <button
        onClick={() => advance()}
        className="mt-16 h-[52px] w-full rounded-full bg-cercle-teal text-lg font-medium text-white"
      >
        {FLASHBACK_TRANSMISSION_COMPLETE_DATA.certifyButtonText}
      </button>
    </div>
  );
}
