"use client";

import { useScenario } from "@/hooks/use-scenario";
import { WalletHeader } from "@/components/wallet/wallet-header";
import { WalletHome } from "@/components/wallet/wallet-home";
import { WalletConsentCard } from "@/components/wallet/wallet-consent-card";
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
        <div className="relative flex-1">
          {/* Consent card overlapping the header */}
          {step === "wallet-consent" && (
            <div className="absolute top-0 right-0 left-0 z-10 -translate-y-4 px-4">
              <WalletConsentCard />
            </div>
          )}
          <div className="h-full overflow-y-auto" style={{ paddingTop: step === "wallet-consent" ? "10rem" : undefined }}>
            <WalletHome />
          </div>
        </div>
      )}
    </div>
  );
}
