"use client";

import { ChevronLeft, Plus } from "lucide-react";
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
          aria-label="Ajouter"
        >
          <Plus className="h-5 w-5 text-white" />
        </button>

        <h1 className="text-lg font-bold text-white italic">Wallet</h1>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A3B6B] text-sm font-semibold text-white">
          GD
        </div>
      </div>

      {!compact && (
        <>
          {/* Greeting — centered */}
          <h2 className="mt-6 text-center text-2xl font-bold text-white">
            Bonjour {displayName}
          </h2>

          {/* Last update — centered, two lines */}
          <p className="mt-2 text-center text-sm text-white/70">
            Derni&egrave;re mise &agrave; jour
            <br />
            {displayDate}
          </p>
        </>
      )}
    </div>
  );
}
