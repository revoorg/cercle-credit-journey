"use client";

import { Bell } from "lucide-react";
import { CheckmarkBadge } from "@/components/shared/checkmark-badge";
import { WALLET_DATA } from "@/lib/scenario-data";

export function WalletSharedConfirmation() {
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

      {/* Checkmark + confirmation */}
      <div className="mt-6 flex flex-col items-center gap-3 pb-2">
        <CheckmarkBadge size={48} />
        <p className="text-base font-semibold text-cercle-blue">
          Attributs partag&eacute;s
        </p>
      </div>
    </div>
  );
}
