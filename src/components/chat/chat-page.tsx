"use client";

import { useScenario } from "@/hooks/use-scenario";
import { CHAT_DATA } from "@/lib/scenario-data";
import type { ScenarioStep } from "@/types/scenario";

import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessageList } from "@/components/chat/chat-message-list";
import { ChatInput } from "@/components/chat/chat-input";
import { TypingIndicator } from "@/components/chat/typing-indicator";
import { HotelCard } from "@/components/chat/hotel-card";
import { HotelDetail } from "@/components/chat/hotel-detail";
import { PaymentOptions } from "@/components/chat/payment-options";
import { PaymentDetail } from "@/components/chat/payment-detail";
import { WalletPrompt } from "@/components/chat/wallet-prompt";
import { WalletConnected } from "@/components/chat/wallet-connected";
import { ContractView } from "@/components/chat/contract-view";

const WALLET_STEPS = new Set<ScenarioStep>([
  "wallet-home",
  "wallet-consent",
  "wallet-attribute-detail",
  "wallet-shared-confirmation",
]);

/**
 * Computes which message blocks are visible for a given step.
 * Messages accumulate: step N shows all messages from steps 0..N.
 */
function getVisibleBlocks(step: ScenarioStep): string[] {
  const allBlocks = [
    "greeting",
    "user-message",
    "ai-response",
    "choice-detail",
    "payment-options",
    "payment-detail",
    "taeg-question",
    "taeg-response",
    "user-confirm",
    "wallet-prompt",
    "wallet-connected",
    "contract-signed",
    "add-wallet-user",
    "add-wallet-bot",
    "add-wallet-done",
  ];

  const stepToBlockCount: Partial<Record<ScenarioStep, number>> = {
    "chat-loading": 2,
    "chat-ai-response": 3,
    "chat-choice-detail": 4,
    "chat-payment-options": 5,
    "chat-payment-detail": 6,
    "chat-taeg-question": 6,
    "chat-taeg-sent": 7,
    "chat-taeg-loading": 7,
    "chat-taeg-response": 8,
    "chat-user-confirm": 8,
    "chat-wallet-prompt": 10,
    "chat-wallet-connected": 11,
    "chat-decision": 11,
    "chat-decision-sign": 11,
    "chat-contract-view": 11,
    "chat-contract-signed": 12,
    "chat-add-wallet-question": 12,
    "chat-add-wallet-sent": 13,
    "chat-add-wallet-response": 14,
    "chat-add-wallet-done": 15,
  };

  const count = stepToBlockCount[step] ?? 0;
  return allBlocks.slice(0, count);
}

/** Right-aligned user message bubble */
function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-message-in flex justify-end">
      <div className="rounded-[15px] border border-[#E9ECEE] bg-[#F6F8F9] px-4 py-3">
        <p className="text-base leading-relaxed text-[#242A2F]">{children}</p>
      </div>
    </div>
  );
}

/** PDF chip link */
function PdfChip({ name }: { name: string }) {
  return (
    <div className="animate-message-in inline-block rounded-lg bg-[#E8F1FA] px-4 py-3">
      <p className="text-sm font-medium text-cercle-blue">{name}</p>
    </div>
  );
}

export function ChatPage() {
  const { step, goTo } = useScenario();

  // Don't render chat page if we're on a wallet step
  if (WALLET_STEPS.has(step)) {
    return null;
  }

  // --- Contract view: fullscreen overlay ---
  if (step === "chat-contract-view") {
    return <ContractView />;
  }

  // --- Welcome & user-message: centered greeting layout ---
  if (step === "chat-welcome" || step === "chat-user-message") {
    return (
      <div className="flex h-dvh flex-col bg-white">
        <ChatHeader />

        {/* Centered greeting */}
        <div className="flex flex-1 flex-col">
          <p className="mt-2 whitespace-pre-line text-center text-xl font-medium text-cercle-blue">
            {CHAT_DATA.botGreeting}
          </p>
          <div className="flex-1" />
        </div>

        <ChatInput />
      </div>
    );
  }

  // --- Chat flow (loading → end) ---
  const blocks = getVisibleBlocks(step);

  return (
    <div className="flex h-dvh flex-col bg-white">
      <ChatHeader />

      <ChatMessageList>
        {/* Greeting (centered, not in a bubble) */}
        {blocks.includes("greeting") && (
          <p className="animate-message-in whitespace-pre-line text-center text-xl font-medium text-cercle-blue">
            {CHAT_DATA.botGreeting}
          </p>
        )}

        {/* User message card */}
        {blocks.includes("user-message") && (
          <div className="animate-message-in rounded-[15px] border border-[#E9ECEE] bg-[#F6F8F9] px-4 py-4">
            <p className="whitespace-pre-line text-lg leading-relaxed text-[#242A2F]">
              {CHAT_DATA.userMessage}
            </p>
          </div>
        )}

        {/* Typing indicator (initial loading) */}
        {step === "chat-loading" && (
          <div className="animate-message-in">
            <TypingIndicator />
          </div>
        )}

        {/* AI response intro text + hotel cards */}
        {blocks.includes("ai-response") && (
          <>
            <p className="animate-message-in text-lg font-medium text-[#242A2F]">
              {CHAT_DATA.aiResponseIntro}
            </p>
            <div className="-mx-4 flex gap-4 overflow-x-auto pl-4 pb-2">
              {CHAT_DATA.hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
              <div className="w-px shrink-0" aria-hidden="true" />
            </div>
          </>
        )}

        {/* Hotel detail */}
        {blocks.includes("choice-detail") && (
          <div className="animate-message-in">
            <HotelDetail />
          </div>
        )}

        {/* Payment options (hidden once payment-detail is visible) */}
        {blocks.includes("payment-options") &&
          !blocks.includes("payment-detail") && (
            <div className="animate-message-in">
              <PaymentOptions />
            </div>
          )}

        {/* Payment detail (replaces payment-options visually) */}
        {blocks.includes("payment-detail") && (
          <div className="animate-message-in">
            <PaymentDetail />
          </div>
        )}

        {/* TAEG question (user bubble) */}
        {blocks.includes("taeg-question") && (
          <UserBubble>{CHAT_DATA.taegQuestion}</UserBubble>
        )}

        {/* Typing indicator (TAEG loading) */}
        {step === "chat-taeg-loading" && (
          <div className="animate-message-in">
            <TypingIndicator />
          </div>
        )}

        {/* TAEG response (bot text with bullet list) */}
        {blocks.includes("taeg-response") && (
          <div className="animate-message-in text-base leading-relaxed text-[#242A2F]">
            <p className="whitespace-pre-line">{CHAT_DATA.taegResponse}</p>
            <ul className="my-2 list-disc space-y-1 pl-5">
              {CHAT_DATA.taegBullets.map((bullet) => (
                <li key={bullet}>
                  <strong>{bullet}</strong>
                </li>
              ))}
            </ul>
            <p className="whitespace-pre-line">{CHAT_DATA.taegConclusion}</p>
          </div>
        )}

        {/* User confirm (user bubble) */}
        {blocks.includes("user-confirm") && (
          <UserBubble>{CHAT_DATA.userConfirmMessage}</UserBubble>
        )}

        {/* Wallet prompt */}
        {blocks.includes("wallet-prompt") && (
          <div className="animate-message-in">
            <WalletPrompt />
          </div>
        )}

        {/* Wallet connected (trip summary + MonCrédit evolving card) */}
        {blocks.includes("wallet-connected") && (
          <div className="animate-message-in">
            <WalletConnected />
          </div>
        )}

        {/* Contract signed — bot message + PDF chip */}
        {blocks.includes("contract-signed") && (
          <div className="animate-message-in flex flex-col gap-3">
            <p className="whitespace-pre-line text-base leading-relaxed text-[#242A2F]">
              {CHAT_DATA.contractSignedMessage}
            </p>
            <PdfChip name={CHAT_DATA.contractPdfName} />
          </div>
        )}

        {/* Add to wallet — user bubble "Oui" */}
        {blocks.includes("add-wallet-user") && (
          <UserBubble>{CHAT_DATA.addWalletUserMessage}</UserBubble>
        )}

        {/* Add to wallet — bot response + PDF + Wallet button */}
        {blocks.includes("add-wallet-bot") && (
          <div className="animate-message-in flex flex-col gap-3">
            <p className="text-base text-[#242A2F]">
              {CHAT_DATA.addWalletBotMessage}
            </p>
            {!blocks.includes("add-wallet-done") && (
              <PdfChip name={CHAT_DATA.contractPdfName} />
            )}
            <div className="flex items-center gap-3">
              <button
                onClick={() => goTo("wallet-home")}
                className="rounded-full bg-cercle-teal px-6 py-2.5 text-base font-medium text-white"
              >
                Wallet
              </button>
            </div>
          </div>
        )}

        {/* Add to wallet — done confirmation */}
        {blocks.includes("add-wallet-done") && (
          <p className="animate-message-in text-base text-[#242A2F]">
            {CHAT_DATA.addWalletDoneMessage}
          </p>
        )}
      </ChatMessageList>

      <ChatInput />
    </div>
  );
}
