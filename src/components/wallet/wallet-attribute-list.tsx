"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/shared/cta-button";
import { useScenario } from "@/hooks/use-scenario";
import { WALLET_DATA } from "@/lib/scenario-data";

export function WalletAttributeList() {
  const { goTo } = useScenario();

  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-cercle-grey-border px-4 py-3">
          <p className="text-sm font-semibold text-cercle-blue">
            {WALLET_DATA.consentRequest.requester} souhaite récupérer{" "}
            {WALLET_DATA.consentRequest.attributeCount} attributs certifiés
          </p>
        </div>

        {/* Attribute list */}
        <ul className="divide-y divide-cercle-grey-border">
          {WALLET_DATA.attributes.map((attr) => (
            <li
              key={attr.name}
              className="flex items-center gap-3 px-4 py-3"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-cercle-teal" />
              <span className="flex-1 text-sm text-cercle-blue">
                {attr.name}
              </span>
              {attr.certified && (
                <span className="text-xs text-cercle-teal font-medium">
                  Certifié
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <CtaButton onClick={() => goTo("wallet-shared-confirmation")}>
          Accepter
        </CtaButton>
        <Button
          variant="outline"
          className="h-12 w-full rounded-xl border-cercle-grey-border text-base font-medium text-cercle-blue cursor-pointer"
          onClick={() => goTo("wallet-home")}
        >
          Refuser
        </Button>
      </div>
    </div>
  );
}
