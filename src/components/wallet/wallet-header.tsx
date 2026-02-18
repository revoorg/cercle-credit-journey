"use client";

import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScenario } from "@/hooks/use-scenario";
import { WALLET_DATA } from "@/lib/scenario-data";

interface WalletHeaderProps {
  className?: string;
  hideBackButton?: boolean;
  compact?: boolean;
  lastUpdate?: string;
  userName?: string;
}

export function WalletHeader({
  className,
  hideBackButton,
  compact,
  lastUpdate,
  userName,
}: WalletHeaderProps) {
  const { back } = useScenario();

  const displayName = userName ?? WALLET_DATA.userName;
  const displayDate = lastUpdate ?? WALLET_DATA.lastUpdate;

  return (
    <div
      className={cn(
        "relative flex-shrink-0 px-6",
        compact ? "pt-[max(16px,env(safe-area-inset-top))] pb-4" : "pt-[max(16px,env(safe-area-inset-top))] pb-6",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #2D8C7F 0%, #1E6B6B 100%)",
      }}
    >
      {/* Back link or equivalent spacing */}
      {hideBackButton ? (
        <div className="mb-3 h-4" />
      ) : (
        <button
          onClick={back}
          className="mb-3 flex items-center gap-1 text-xs text-white/90"
        >
          <ChevronLeft className="h-3 w-3" />
          <span>Mon agent IA</span>
        </button>
      )}

      {/* Top row: + icon, title, user initials */}
      <div className="flex items-center justify-between">
        <button
          className="grid size-8 place-items-center rounded-full p-0"
          style={{ background: "linear-gradient(163deg, #91E7E1 8.18%, #004C48 91.82%)" }}
          aria-label="Ajouter"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <h1 className="text-xl font-bold text-white italic">Wallet</h1>

        <div
          className="grid size-8 place-items-center rounded-full text-xs font-medium leading-[27px] text-white"
          style={{
            background: "linear-gradient(163deg, #4B50D4 8.18%, #27296E 91.82%)",
            boxShadow: "inset 0 0 0 0.5px #C2C2C2",
          }}
        >
          GD
        </div>
      </div>

      {!compact && (
        <>
          {/* Greeting — centered */}
          <h2 className="mt-6 text-center text-[28px] font-bold text-white">
            Bonjour {displayName}
          </h2>

          {/* Last update — centered, two lines */}
          <p className="mt-2 text-center text-base text-white/70">
            Derni&egrave;re mise &agrave; jour
            <br />
            {displayDate}
          </p>
        </>
      )}
    </div>
  );
}
