"use client";

import { CheckmarkBadge } from "@/components/shared/checkmark-badge";

export function WalletSharedConfirmation() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-12">
      <CheckmarkBadge size={64} />
      <div className="text-center">
        <h3 className="text-lg font-bold text-cercle-blue">
          Attributs partagés
        </h3>
        <p className="mt-2 text-sm text-cercle-grey-text">
          Vos informations ont été transmises en toute sécurité à
          MonCrédit.com
        </p>
      </div>
    </div>
  );
}
