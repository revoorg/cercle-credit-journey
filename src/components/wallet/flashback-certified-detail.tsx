"use client";

import { Sparkles, ChevronRight } from "lucide-react";
import { useScenario } from "@/hooks/use-scenario";
import { FLASHBACK_CERTIFIED_DETAIL_DATA } from "@/lib/scenario-data";

export function FlashbackCertifiedDetail() {
  const { advance } = useScenario();

  return (
    <div className="relative z-10 -mt-4 px-4">
      <div className="overflow-hidden rounded-xl border-2 border-[#d1e0ef] bg-white shadow">
        {/* Purple category banner */}
        <div className="flex h-10 items-center justify-between bg-cercle-purple px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">
              {FLASHBACK_CERTIFIED_DETAIL_DATA.categoryTitle}
            </span>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
            <ChevronRight className="h-3 w-3 text-white" />
          </div>
        </div>

        <div className="px-6 py-5">
          {/* Certified date */}
          <p className="text-base font-medium leading-6 text-[#385872]">
            Détail des attributs certifiés le {FLASHBACK_CERTIFIED_DETAIL_DATA.certifiedDate}
          </p>

          {/* Attributes list */}
          <ul className="mt-4 list-disc space-y-1 pl-5">
            {FLASHBACK_CERTIFIED_DETAIL_DATA.attributes.map((attr) => (
              <li key={attr.label} className="text-base leading-6 text-[#385872]">
                {attr.label} :{" "}
                <span className={attr.highlight ? "font-semibold text-[#12B17A]" : "font-medium"}>
                  {attr.value}
                </span>
              </li>
            ))}
          </ul>

          {/* Borrowing capacity */}
          <div className="mt-4 rounded-md bg-gradient-to-r from-[#ECF7F6] to-[#E3F1F0] px-5 py-4">
            <ul className="list-disc pl-5">
              <li className="text-base leading-6 text-[#385872]">
                Capacité d&apos;emprunt
              </li>
            </ul>
            <p className="mt-1 pl-5 text-base font-medium leading-6 text-[#385872]">
              {FLASHBACK_CERTIFIED_DETAIL_DATA.borrowingCapacity}
            </p>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-base italic leading-6 text-[#385872]">
            {FLASHBACK_CERTIFIED_DETAIL_DATA.disclaimer}
          </p>

          {/* Certify button */}
          <button
            onClick={() => advance()}
            className="mt-6 h-[52px] w-full rounded-full bg-cercle-teal text-base font-semibold text-white"
          >
            {FLASHBACK_CERTIFIED_DETAIL_DATA.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
