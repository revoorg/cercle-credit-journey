"use client";

import { cn } from "@/lib/utils";
import { WALLET_DATA } from "@/lib/scenario-data";
import { WalletCategoryCard } from "@/components/wallet/wallet-category-card";
import type { WalletCategory } from "@/types/scenario";

interface WalletHomeProps {
  className?: string;
  categories?: WalletCategory[];
  onCategoryAction?: (categoryId: string) => void;
}

export function WalletHome({
  className,
  categories,
  onCategoryAction,
}: WalletHomeProps) {
  const items = categories ?? WALLET_DATA.categories;

  return (
    <div className={cn("flex flex-col gap-4 px-4 py-4", className)}>
      {items.map((category) => (
        <WalletCategoryCard
          key={category.id}
          category={category}
          onAction={
            category.attributeCount === 0 && onCategoryAction
              ? () => onCategoryAction(category.id)
              : undefined
          }
        />
      ))}
    </div>
  );
}
