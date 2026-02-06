"use client";

import { BellRing } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/shared/cta-button";
import { useScenario } from "@/hooks/use-scenario";
import { WALLET_DATA } from "@/lib/scenario-data";

interface WalletConsentDialogProps {
  open: boolean;
}

export function WalletConsentDialog({ open }: WalletConsentDialogProps) {
  const { goTo } = useScenario();

  const { requester, attributeCount } = WALLET_DATA.consentRequest;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[360px] rounded-2xl border-cercle-grey-border p-6"
      >
        <DialogHeader className="items-center gap-3">
          {/* Notification icon with red dot */}
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cercle-soft-blue">
              <BellRing className="h-6 w-6 text-cercle-blue" />
            </div>
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
          </div>

          <DialogTitle className="text-center text-base font-semibold text-cercle-blue">
            {requester} souhaite r&eacute;cup&eacute;rer {attributeCount}{" "}
            attributs certifi&eacute;s.
          </DialogTitle>

          <DialogDescription asChild>
            <button
              onClick={() => goTo("wallet-attribute-detail")}
              className="text-sm font-medium text-cercle-teal underline underline-offset-2"
            >
              Voir le d&eacute;tail des attributs
            </button>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 flex flex-col gap-3">
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
      </DialogContent>
    </Dialog>
  );
}
