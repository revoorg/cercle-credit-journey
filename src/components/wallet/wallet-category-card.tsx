"use client";

import { ChevronRight, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WalletCategory } from "@/types/scenario";

const COLOR_MAP: Record<WalletCategory["color"], string> = {
  teal: "bg-cercle-teal",
  "green-teal": "bg-cercle-green-teal",
  purple: "bg-cercle-purple",
  pink: "bg-cercle-pink",
};

interface WalletCategoryCardProps {
  category: WalletCategory;
  className?: string;
}

export function WalletCategoryCard({
  category,
  className,
}: WalletCategoryCardProps) {
  const bannerColor = COLOR_MAP[category.color];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-sm",
        className
      )}
    >
      {/* Colored banner */}
      <div
        className={cn(
          "flex h-10 items-center justify-between px-4",
          bannerColor
        )}
      >
        <span className="text-sm font-semibold text-white">
          {category.title}
        </span>
        <ChevronRight className="h-4 w-4 text-white/80" />
      </div>

      {/* Card body */}
      <div className="px-4 py-3">
        <p className="text-xs text-cercle-grey-text">
          Derni&egrave;re mise &agrave; jour : {category.lastUpdate}
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-cercle-grey-text">
          <LayoutGrid className="h-3.5 w-3.5" />
          <span>{category.attributeCount} attributs disponibles</span>
        </div>
      </div>
    </div>
  );
}
