"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { MonCreditLogo } from "@/components/shared/moncredit-logo";
import { CHAT_DATA } from "@/lib/scenario-data";
import type { ScenarioStep } from "@/types/scenario";

const MONCREDIT_CARD_STEPS = new Set<ScenarioStep>([
  "chat-wallet-connected",
  "chat-decision",
  "chat-decision-sign",
]);

export function WalletConnected() {
  const { step, goTo } = useScenario();
  const hotel = CHAT_DATA.hotels[0];
  const credit = CHAT_DATA.creditDetail;

  const showMonCreditCard = MONCREDIT_CARD_STEPS.has(step);
  const isLoading = step === "chat-wallet-connected";
  const isAccepted = step === "chat-decision" || step === "chat-decision-sign";
  const showSignCta = step === "chat-decision-sign";

  return (
    <div className="flex flex-col gap-4">
      {/* Trip summary card */}
      <div className="flex overflow-hidden rounded-xl border border-[#DEE3E6] bg-white">
        <div className="relative h-[84px] w-[134px] shrink-0">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="134px"
          />
        </div>
        <div className="flex flex-col justify-center px-3 py-2">
          <p className="text-lg font-medium text-[#242A2F]">{hotel.name}</p>
          <p className="text-sm font-medium text-[#242A2F]">
            {hotel.location}
          </p>
          <p className="text-sm text-[#47535C]">{hotel.dates}</p>
        </div>
      </div>

      {/* MonCrédit evolving card */}
      {showMonCreditCard && (
        <div className="overflow-hidden rounded-xl border border-[#DEE3E6] bg-white">
          <div className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-[#242A2F]">
                Payer en {credit.installments}x avec
              </span>
              <MonCreditLogo />
            </div>

            {/* Loading state */}
            {isLoading && (
              <>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.5 8L6.5 11L12.5 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-[#242A2F]">
                    {CHAT_DATA.walletConnectedLabel}
                  </span>
                </div>
                <ProgressBar />
                <p className="text-base text-[#47535C]">
                  {CHAT_DATA.walletStudyMessage}
                </p>
              </>
            )}

            {/* Accepted state */}
            {isAccepted && (
              <>
                <div className="flex flex-col items-center gap-3 py-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F1FA]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                        stroke="#005A9E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#005A9E"
                        fillOpacity="0.15"
                      />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-[#242A2F]">
                    {CHAT_DATA.decisionAcceptedMessage}
                  </p>
                </div>

                {showSignCta && (
                  <>
                    <p className="text-base leading-relaxed text-[#47535C]">
                      {CHAT_DATA.decisionSignInvitation}
                    </p>
                    <button
                      onClick={() => goTo("chat-contract-view")}
                      className="h-[57px] w-full cursor-pointer rounded-[35px] bg-[#005A9E] text-lg font-medium text-white transition-colors hover:bg-[#004A84]"
                    >
                      Signer mon contrat
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/** Animated progress bar that fills over 4 seconds */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start animation after mount
    const raf = requestAnimationFrame(() => {
      setProgress(100);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#E9ECEE]">
      <div
        className="h-full rounded-full bg-cercle-blue"
        style={{
          width: `${progress}%`,
          transition: "width 3.8s ease-in-out",
        }}
      />
    </div>
  );
}
