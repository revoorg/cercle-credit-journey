"use client";

import Image from "next/image";
import { ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WalletCategory } from "@/types/scenario";

const TEXT_COLOR_MAP: Record<WalletCategory["color"], string> = {
  teal: "text-[#278781]",
  "green-teal": "text-[#21A2C2]",
  purple: "text-[#683991]",
  pink: "text-[#D1179C]",
};

const ICON_MAP: Record<string, string> = {
  identity: "/images/icons/wallet-identity.svg",
  housing: "/images/icons/wallet-housing.svg",
  financial: "/images/icons/wallet-financial.svg",
  health: "/images/icons/wallet-health.svg",
};

interface WalletCategoryCardProps {
  category: WalletCategory;
  className?: string;
  onAction?: () => void;
}

export function WalletCategoryCard({
  category,
  className,
  onAction,
}: WalletCategoryCardProps) {
  const textColor = TEXT_COLOR_MAP[category.color];
  const iconSrc = ICON_MAP[category.id];
  const isEmpty = category.attributeCount === 0;

  return (
    <div
      className={cn(
        "rounded-[10px] border-2 border-[#D1E0EF] bg-white p-2 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      {/* Colored banner — inset inside white card */}
      <div
        className="flex h-10 items-center justify-between rounded-lg px-3"
        style={{ background: "linear-gradient(135deg, #D6F0ED 0%, #EDF6F5 100%)" }}
      >
        <div className="flex items-center gap-2">
          {iconSrc && (
            <Image src={iconSrc} alt="" width={16} height={16} className="shrink-0" />
          )}
          <span className={cn("text-[17px] font-semibold leading-tight", textColor)}>
            {category.title}
          </span>
        </div>
        <ChevronRight className="h-4 w-4 text-[#4E7390]" />
      </div>

      {/* Card body */}
      <div className="px-2 py-3">
        {isEmpty ? (
          <>
            <div className="flex items-center gap-2 text-base text-cercle-grey-text">
              <List className="h-3.5 w-3.5" />
              <span>0 attribut disponible</span>
            </div>
            <button
              onClick={onAction}
              className="mt-3 mx-auto block h-10 rounded-full bg-cercle-teal px-6 text-base font-semibold text-white"
            >
              Certifier mes informations
            </button>
          </>
        ) : (
          <>
            <p className="text-base text-cercle-grey-text">
              Derni&egrave;re mise &agrave; jour : {category.lastUpdate}
            </p>
            <div className="mt-2 flex items-center gap-2 text-base text-cercle-grey-text">
              <List className="h-3.5 w-3.5" />
              <span>{category.attributeCount} attributs disponibles</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
