"use client";

import { useContext } from "react";
import { ScenarioContext } from "@/lib/scenario-context";

export function PageTransitionOverlay() {
  const { isTransitioning, transitionDirection } = useContext(ScenarioContext);

  if (!isTransitioning) return null;

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-[100] bg-black/50"
      aria-hidden="true"
    >
      {/* App icon hint for wallet transition */}
      {transitionDirection === "to-wallet" && (
        <div className="flex h-full items-center justify-center">
          <div className="animate-page-fade-in flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white/80">
              Ouverture du wallet…
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
