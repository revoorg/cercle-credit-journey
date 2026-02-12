"use client";

import { useScenario } from "@/hooks/use-scenario";
import { WalletHeader } from "@/components/wallet/wallet-header";
import { WalletHome } from "@/components/wallet/wallet-home";
import { WalletConsentCard } from "@/components/wallet/wallet-consent-card";
import { WalletAttributeList } from "@/components/wallet/wallet-attribute-list";
import { WalletSharedConfirmation } from "@/components/wallet/wallet-shared-confirmation";

export function WalletPage() {
  const { step } = useScenario();

  const showCard =
    step === "wallet-consent" ||
    step === "wallet-attribute-detail" ||
    step === "wallet-shared-confirmation";

  return (
    <div className="animate-page-slide-up h-dvh overflow-y-auto bg-cercle-soft-blue">
      <WalletHeader />

      {showCard && (
        <div className="relative z-10 -mt-4 px-4">
          {step === "wallet-consent" && <WalletConsentCard />}
          {step === "wallet-attribute-detail" && <WalletAttributeList />}
          {step === "wallet-shared-confirmation" && <WalletSharedConfirmation />}
        </div>
      )}

      <WalletHome />
    </div>
  );
}
