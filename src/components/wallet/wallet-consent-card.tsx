"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScenario } from "@/hooks/use-scenario";
import { WALLET_DATA } from "@/lib/scenario-data";

export function WalletConsentCard() {
  const { goTo } = useScenario();

  const { requester, attributeCount } = WALLET_DATA.consentRequest;

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* Icon + text row */}
      <div className="flex items-start gap-3">
        <Bell className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="currentColor" />
        <p className="text-sm font-medium text-cercle-blue">
          {requester} souhaite r&eacute;cup&eacute;rer {attributeCount}{" "}
          attributs certifi&eacute;s.
        </p>
      </div>

      {/* Detail link */}
      <div className="mt-3 text-center">
        <button
          onClick={() => goTo("wallet-attribute-detail")}
          className="text-sm font-medium text-cercle-blue underline underline-offset-2"
        >
          Voir le d&eacute;tail des attributs
        </button>
      </div>

      {/* Action buttons side by side */}
      <div className="mt-4 flex gap-3">
        <Button
          variant="outline"
          className="h-10 flex-1 rounded-full border-cercle-grey-border text-sm font-medium text-cercle-blue cursor-pointer"
          onClick={() => goTo("wallet-home")}
        >
          Refuser
        </Button>
        <Button
          className="h-10 flex-1 rounded-full bg-cercle-teal text-sm font-medium text-white hover:bg-cercle-teal/90 cursor-pointer"
          onClick={() => goTo("wallet-shared-confirmation")}
        >
          Accepter
        </Button>
      </div>
    </div>
  );
}
