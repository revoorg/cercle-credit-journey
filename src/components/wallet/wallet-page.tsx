"use client";

import { useScenario } from "@/hooks/use-scenario";
import { isFlashbackStep } from "@/lib/scenario";
import { FLASHBACK_WALLET_DATA, FLASHBACK_WALLET_UPDATED_DATA } from "@/lib/scenario-data";
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
import { FlashbackBankSelection } from "@/components/wallet/flashback-bank-selection";
import { FlashbackBankRedirectCE } from "@/components/wallet/flashback-bank-redirect-ce";
import { FlashbackCELoading } from "@/components/wallet/flashback-ce-loading";
import { FlashbackCEConsent } from "@/components/wallet/flashback-ce-consent";
import { FlashbackCEAuthorized } from "@/components/wallet/flashback-ce-authorized";
import { FlashbackCEProgress } from "@/components/wallet/flashback-ce-progress";
import { FlashbackTransmissionComplete } from "@/components/wallet/flashback-transmission-complete";
import { FlashbackCertifiedDetail } from "@/components/wallet/flashback-certified-detail";

export function WalletPage() {
  const { step, goTo } = useScenario();

  // --- Flashback fullscreen views (no wallet-home behind) ---
  if (step === "flashback-bank-consent") {
    return (
      <div className="animate-page-slide-up h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackBankConsent />
      </div>
    );
  }

  if (step === "flashback-bank-selection-revolut") {
    return (
      <div className="flex h-dvh flex-col bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackBankSelection targetBankId="revolut" />
      </div>
    );
  }

  if (step === "flashback-bank-redirect") {
    return (
      <div className="animate-page-slide-up h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
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
        <WalletHeader hideBackButton compact />
        <FlashbackBankProgress />
      </div>
    );
  }

  if (step === "flashback-bank-warning") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackBankWarning />
      </div>
    );
  }

  if (step === "flashback-bank-selection") {
    return (
      <div className="flex h-dvh flex-col bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackBankSelection />
      </div>
    );
  }

  if (step === "flashback-bank-redirect-ce") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackBankRedirectCE />
      </div>
    );
  }

  if (step === "flashback-ce-loading") {
    return <FlashbackCELoading />;
  }

  if (step === "flashback-ce-consent") {
    return <FlashbackCEConsent />;
  }

  if (step === "flashback-ce-authorized") {
    return <FlashbackCEAuthorized />;
  }

  if (step === "flashback-ce-progress") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackCEProgress />
      </div>
    );
  }

  if (step === "flashback-transmission-complete") {
    return (
      <div className="h-dvh overflow-y-auto bg-white">
        <WalletHeader hideBackButton compact />
        <FlashbackTransmissionComplete />
      </div>
    );
  }

  if (step === "flashback-certified-detail") {
    return (
      <div className="h-dvh overflow-y-auto bg-cercle-soft-blue">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_DATA.userName}
        />
        <FlashbackCertifiedDetail />
        <WalletHome
          categories={FLASHBACK_WALLET_DATA.categories.filter((c) => c.id !== "financial")}
        />
      </div>
    );
  }

  if (step === "flashback-wallet-updated") {
    return (
      <div className="h-dvh overflow-y-auto bg-cercle-soft-blue">
        <WalletHeader
          hideBackButton
          lastUpdate={FLASHBACK_WALLET_UPDATED_DATA.lastUpdate}
          userName={FLASHBACK_WALLET_UPDATED_DATA.userName}
        />
        <WalletHome categories={FLASHBACK_WALLET_UPDATED_DATA.categories} />
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
