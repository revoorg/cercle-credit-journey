"use client";

import { useScenario } from "@/hooks/use-scenario";
import { MonCreditLogo } from "@/components/shared/moncredit-logo";
import { CtaButton } from "@/components/shared/cta-button";
import { CHAT_DATA } from "@/lib/scenario-data";

export function WalletPrompt() {
  const { step, goTo } = useScenario();
  const credit = CHAT_DATA.creditDetail;
  const isConnected = step !== "chat-wallet-prompt";

  return (
    <div className="flex flex-col gap-4">
      {/* Intro text */}
      <p className="text-base text-[#242A2F]">{CHAT_DATA.walletIntro}</p>

      {/* MonCrédit header */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium text-[#242A2F]">
          Payer en {credit.installments}x avec
        </span>
        <MonCreditLogo />
      </div>

      {/* Wallet card */}
      <div className="overflow-hidden rounded-xl border border-[#DEE3E6] bg-white">
        <div className="flex flex-col gap-3 p-5">
          <h3 className="text-base font-medium text-[#242A2F]">
            {CHAT_DATA.walletPromptTitle}
          </h3>

          <p className="text-sm leading-relaxed text-[#47535C]">
            {CHAT_DATA.walletPromptDescription}
          </p>

          {/* Checkmark items */}
          <ul className="flex flex-col gap-2">
            {CHAT_DATA.walletPromptItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-[#242A2F]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <circle cx="8" cy="8" r="8" fill="#E8F4F2" />
                  <path
                    d="M4.5 8L7 10.5L11.5 5.5"
                    stroke="#2D8C7F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* eIDAS badge */}
          <div className="flex items-center gap-2 text-xs text-[#60707C]">
            <span>connexion certifiée</span>
            <span className="rounded bg-[#E8F4F2] px-1.5 py-0.5 text-xs font-medium text-[#2D8C7F]">
              eIDAS
            </span>
          </div>
        </div>
      </div>

      {isConnected ? (
        <div className="flex h-[57px] w-full items-center justify-center gap-2 rounded-[35px] border border-[#DEE3E6] bg-[#F6F8F9]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="#22C55E" />
            <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-medium text-[#60707C]">
            Wallet connecté
          </span>
        </div>
      ) : (
        <CtaButton onClick={() => goTo("wallet-home")}>
          Connecter mon wallet
        </CtaButton>
      )}
    </div>
  );
}
