"use client";

import { useScenario } from "@/hooks/use-scenario";
import { WalletHeader } from "@/components/wallet/wallet-header";
import { WalletHome } from "@/components/wallet/wallet-home";
import { WalletConsentCard } from "@/components/wallet/wallet-consent-card";
import { WalletAttributeList } from "@/components/wallet/wallet-attribute-list";
import { WalletSharedConfirmation } from "@/components/wallet/wallet-shared-confirmation";

export function WalletPage() {
  const { step } = useScenario();

  if (step === "wallet-shared-confirmation") {
    return (
      <div className="animate-page-slide-up flex h-dvh flex-col bg-cercle-soft-blue">
        <WalletHeader />
        <WalletSharedConfirmation />
      </div>
    );
  }

  return (
    <div className="animate-page-slide-up h-dvh overflow-y-auto bg-cercle-soft-blue">
      <WalletHeader />

      {/* Overlapping card pulls up into the header */}
      {step === "wallet-consent" && (
        <div className="relative z-10 -mt-4 px-4">
          <WalletConsentCard />
        </div>
      )}
      {step === "wallet-attribute-detail" && (
        <div className="relative z-10 -mt-4 px-4">
          <WalletAttributeList />
        </div>
      )}

      <WalletHome />
    </div>
  );
}
