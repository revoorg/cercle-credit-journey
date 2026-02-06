"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { WALLET_DATA } from "@/lib/scenario-data";

interface WalletHeaderProps {
  className?: string;
}

export function WalletHeader({ className }: WalletHeaderProps) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-b-2xl px-6 pt-12 pb-6",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #2D8C7F 0%, #1E6B6B 100%)",
      }}
    >
      {/* Top row: + icon, title, user initials */}
      <div className="flex items-center justify-between">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
          aria-label="Ajouter"
        >
          <Plus className="h-5 w-5 text-white" />
        </button>

        <h1 className="text-lg font-bold text-white">Wallet</h1>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
          SB
        </div>
      </div>

      {/* Greeting */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-white">
          Bonjour {WALLET_DATA.userName}
        </h2>
      </div>

      {/* Last update */}
      <p className="mt-2 text-sm text-white/70">
        Derni&egrave;re mise &agrave; jour : {WALLET_DATA.lastUpdate}
      </p>
    </div>
  );
}
