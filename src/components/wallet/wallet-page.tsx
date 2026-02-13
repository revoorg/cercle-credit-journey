"use client";

import { useScenario } from "@/hooks/use-scenario";
import { isFlashbackStep } from "@/lib/scenario";
import { FLASHBACK_WALLET_DATA } from "@/lib/scenario-data";
import { WalletHeader } from "@/components/wallet/wallet-header";
import { WalletHome } from "@/components/wallet/wallet-home";
import { WalletConsentCard } from "@/components/wallet/wallet-consent-card";
import { WalletAttributeList } from "@/components/wallet/wallet-attribute-list";
import { WalletSharedConfirmation } from "@/components/wallet/wallet-shared-confirmation";
import { FlashbackFinancialDetail } from "@/components/wallet/flashback-financial-detail";
import { FlashbackBankConsent } from "@/components/wallet/flashback-bank-consent";
import { FlashbackBankRedirect } from "@/components/wallet/flashback-bank-redirect";
import { FlashbackBankLoading } from "@/components/wallet/flashback-bank-loading";
import { FlashbackBankAccounts } from "@/components/wallet/flashback-bank-accounts";
import { FlashbackBankProgress } from "@/components/wallet/flashback-bank-progress";
import { FlashbackBankWarning } from "@/components/wallet/flashback-bank-warning";

export function WalletPage() {
  const { step, goTo } = useScenario();

  // --- Flashback fullscreen views (no wallet-home behind) ---
  if (step === "flashback-bank-consent") {
    return (
      <div className="animate-page-slide-up h-dvh overflow-y-auto bg-white">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />
        <FlashbackBankConsent />
      </div>
    );
  }

  if (step === "flashback-bank-redirect") {
    return (
      <div className="animate-page-slide-up h-dvh overflow-y-auto bg-white">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />
        <FlashbackBankRedirect />
      </div>
    );
  }

  if (step === "flashback-bank-loading") {
    return <FlashbackBankLoading />;
  }

  if (step === "flashback-bank-accounts") {
    return <FlashbackBankAccounts />;
  }

  if (step === "flashback-bank-progress") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />
        <FlashbackBankProgress />
      </div>
    );
  }

  if (step === "flashback-bank-warning") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />
        <FlashbackBankWarning />
      </div>
    );
  }

  // --- Flashback wallet views ---
  if (isFlashbackStep(step)) {
    return (
      <div className="animate-page-slide-up h-dvh overflow-y-auto bg-cercle-soft-blue">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />

        {step === "flashback-financial-detail" && (
          <div className="relative z-10 -mt-4 px-4">
            <FlashbackFinancialDetail />
          </div>
        )}

        <WalletHome
          categories={
            step === "flashback-financial-detail"
              ? FLASHBACK_WALLET_DATA.categories.filter((c) => c.id !== "financial")
              : FLASHBACK_WALLET_DATA.categories
          }
          onCategoryAction={(categoryId) => {
            if (categoryId === "financial") {
              goTo("flashback-financial-detail");
            }
          }}
        />
      </div>
    );
  }

  // --- Standard wallet views ---
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
