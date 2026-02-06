"use client";

import { useScenario } from "@/hooks/use-scenario";
import { CHAT_DATA } from "@/lib/scenario-data";
import type { ScenarioStep } from "@/types/scenario";

const HIDDEN_STEPS = new Set<ScenarioStep>([
  "wallet-home",
  "wallet-consent",
  "wallet-attribute-detail",
  "wallet-shared-confirmation",
  "chat-contract-view",
]);

export function ChatInput() {
  const { step, goTo } = useScenario();

  // Hide input on wallet/contract steps
  if (HIDDEN_STEPS.has(step)) {
    return null;
  }

  const isWelcome = step === "chat-welcome";
  const isUserMessage = step === "chat-user-message";

  // Welcome: tappable placeholder
  if (isWelcome) {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div
          className="flex cursor-pointer items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4"
          onClick={() => goTo("chat-user-message")}
        >
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <MicIcon />
        </div>
      </div>
    );
  }

  // User message: show text + send button
  if (isUserMessage) {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <div className="flex flex-col gap-3">
            <p className="whitespace-pre-line text-lg leading-relaxed text-[#242A2F]">
              {CHAT_DATA.userMessage}
            </p>
            <div className="flex items-center justify-end gap-2">
              <MicIcon />
              <button
                onClick={() => goTo("chat-loading")}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cercle-blue text-white"
                aria-label="Envoyer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TAEG question: show "C'est quoi le TAEG ?" with send button
  if (step === "chat-taeg-question") {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-[#242A2F]">
            {CHAT_DATA.taegQuestion}
          </p>
          <MicIcon />
          <button
            onClick={() => goTo("chat-taeg-sent")}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cercle-blue text-white"
            aria-label="Envoyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Add to wallet question: show "Oui" with send button
  if (step === "chat-add-wallet-question") {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-[#242A2F]">
            {CHAT_DATA.addWalletUserMessage}
          </p>
          <MicIcon />
          <button
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cercle-blue text-white"
            aria-label="Envoyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Payment detail: tappable input triggers TAEG flow
  if (step === "chat-payment-detail") {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div
          className="flex cursor-pointer items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4"
          onClick={() => goTo("chat-taeg-question")}
        >
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <MicIcon />
        </div>
      </div>
    );
  }

  // TAEG response: tappable input triggers confirm flow
  if (step === "chat-taeg-response") {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div
          className="flex cursor-pointer items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4"
          onClick={() => goTo("chat-user-confirm")}
        >
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <MicIcon />
        </div>
      </div>
    );
  }

  // User confirm: show confirm message with send button
  if (step === "chat-user-confirm") {
    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-[#242A2F]">
            {CHAT_DATA.userConfirmMessage}
          </p>
          <MicIcon />
          <button
            onClick={() => goTo("chat-wallet-prompt")}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-cercle-blue text-white"
            aria-label="Envoyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // All other chat steps: non-interactive placeholder input
  return (
    <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
      <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
        <p className="flex-1 text-lg text-cercle-grey-text">
          Posez votre question, décrivez votre demande
        </p>
        <MicIcon />
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center text-cercle-grey-text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    </div>
  );
}
