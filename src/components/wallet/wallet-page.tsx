"use client";

import { useScenario } from "@/hooks/use-scenario";
import { WalletHeader } from "@/components/wallet/wallet-header";
import { WalletHome } from "@/components/wallet/wallet-home";
import { WalletConsentDialog } from "@/components/wallet/wallet-consent-dialog";
import { WalletAttributeList } from "@/components/wallet/wallet-attribute-list";
import { WalletSharedConfirmation } from "@/components/wallet/wallet-shared-confirmation";

export function WalletPage() {
  const { step } = useScenario();

  return (
    <div className="animate-page-slide-up flex h-dvh flex-col bg-cercle-soft-blue">
      <WalletHeader />

      {/* Main content based on step */}
      {step === "wallet-attribute-detail" ? (
        <div className="flex-1 overflow-y-auto">
          <WalletAttributeList />
        </div>
      ) : step === "wallet-shared-confirmation" ? (
        <WalletSharedConfirmation />
      ) : (
        <div className="flex-1 overflow-y-auto">
          <WalletHome />
        </div>
      )}

      {/* Consent dialog overlays on wallet-consent step */}
      <WalletConsentDialog open={step === "wallet-consent"} />
    </div>
  );
}
