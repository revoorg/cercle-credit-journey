"use client";

import { cn } from "@/lib/utils";
import { WALLET_DATA } from "@/lib/scenario-data";
import { WalletCategoryCard } from "@/components/wallet/wallet-category-card";

interface WalletHomeProps {
  className?: string;
}

export function WalletHome({ className }: WalletHomeProps) {
  return (
    <div className={cn("flex flex-col gap-4 px-4 py-4", className)}>
      {WALLET_DATA.categories.map((category) => (
        <WalletCategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
