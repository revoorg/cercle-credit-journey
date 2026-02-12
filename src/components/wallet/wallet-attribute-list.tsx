"use client";

import { Bell, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScenario } from "@/hooks/use-scenario";
import { WALLET_DATA } from "@/lib/scenario-data";

export function WalletAttributeList() {
  const { goTo } = useScenario();

  const { requester, attributeCount } = WALLET_DATA.consentRequest;

  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      {/* Header: bell icon + request text */}
      <div className="flex items-start gap-3">
        <Bell className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="currentColor" />
        <p className="text-sm text-cercle-grey-text">
          {requester} souhaite r&eacute;cup&eacute;rer{" "}
          {attributeCount} attributs certifi&eacute;s.
        </p>
      </div>

      {/* Subtitle */}
      <p className="mt-4 text-center text-sm font-medium text-cercle-grey-text">
        D&eacute;tail des attributs certifi&eacute;s :
      </p>

      {/* Attribute list */}
      <ul className="mt-3 divide-y divide-cercle-grey-border">
        {WALLET_DATA.attributes.map((attr) => (
          <li
            key={attr.name}
            className="flex items-center gap-3 py-3"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#12B17A]" />
            <span className="flex-1 text-sm text-cercle-grey-text">
              {attr.name}
            </span>
            {attr.certified && (
              <span className="text-xs font-medium text-[#12B17A]">
                Certifi&eacute;
              </span>
            )}
          </li>
        ))}
      </ul>

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
