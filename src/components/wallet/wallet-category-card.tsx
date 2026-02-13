"use client";

import { ChevronRight, User, Home, Sparkles, Heart, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WalletCategory } from "@/types/scenario";

const COLOR_MAP: Record<WalletCategory["color"], string> = {
  teal: "bg-cercle-teal",
  "green-teal": "bg-cercle-green-teal",
  purple: "bg-cercle-purple",
  pink: "bg-cercle-pink",
};

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  identity: User,
  housing: Home,
  financial: Sparkles,
  health: Heart,
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
  const bannerColor = COLOR_MAP[category.color];
  const Icon = ICON_MAP[category.id];
  const isEmpty = category.attributeCount === 0 && onAction;

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
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-white" />}
          <span className="text-sm font-semibold text-white">
            {category.title}
          </span>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
          <ChevronRight className="h-3 w-3 text-white" />
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 py-3">
        {isEmpty ? (
          <>
            <div className="flex items-center gap-2 text-xs text-cercle-grey-text">
              <List className="h-3.5 w-3.5" />
              <span>0 attribut disponible</span>
            </div>
            <button
              onClick={onAction}
              className="mt-3 w-full rounded-full bg-cercle-teal py-2.5 text-sm font-medium text-white"
            >
              Certifier mes informations
            </button>
          </>
        ) : (
          <>
            <p className="text-xs text-cercle-grey-text">
              Derni&egrave;re mise &agrave; jour : {category.lastUpdate}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-cercle-grey-text">
              <List className="h-3.5 w-3.5" />
              <span>{category.attributeCount} attributs disponibles</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
