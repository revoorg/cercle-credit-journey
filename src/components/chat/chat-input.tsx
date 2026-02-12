"use client";

import { useState, useEffect, useCallback } from "react";
import { useScenario } from "@/hooks/use-scenario";
import { CHAT_DATA } from "@/lib/scenario-data";
import type { ScenarioStep } from "@/types/scenario";

/** Recording config per step: duration in ms and which step to go to when done */
const RECORDING_CONFIG: Partial<
  Record<ScenarioStep, { duration: number; nextStep: ScenarioStep }>
> = {
  "chat-welcome": { duration: 7000, nextStep: "chat-user-message" },
  "chat-payment-detail": { duration: 2000, nextStep: "chat-taeg-question" },
  "chat-taeg-response": { duration: 4000, nextStep: "chat-user-confirm" },
};

const HIDDEN_STEPS = new Set<ScenarioStep>([
  "wallet-home",
  "wallet-consent",
  "wallet-attribute-detail",
  "wallet-shared-confirmation",
  "chat-contract-view",
]);

export function ChatInput() {
  const { step, goTo } = useScenario();
  const [recordingTarget, setRecordingTarget] = useState<ScenarioStep | null>(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const isRecording = recordingTarget !== null;

  // Tick the elapsed timer every 100ms while recording
  useEffect(() => {
    if (!isRecording) return;
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, [isRecording]);

  // Auto-stop recording after configured duration
  useEffect(() => {
    if (!recordingTarget) return;
    const timeout = setTimeout(() => {
      const target = recordingTarget;
      setRecordingTarget(null);
      setRecordingDuration(0);
      setElapsed(0);
      goTo(target);
    }, recordingDuration);
    return () => clearTimeout(timeout);
  }, [recordingTarget, recordingDuration, goTo]);

  const startRecording = useCallback(() => {
    const config = RECORDING_CONFIG[step];
    if (!config) return;
    setElapsed(0);
    setRecordingTarget(config.nextStep);
    setRecordingDuration(config.duration);
  }, [step]);

  // Hide input on wallet/contract steps
  if (HIDDEN_STEPS.has(step)) {
    return null;
  }

  const isWelcome = step === "chat-welcome";
  const isUserMessage = step === "chat-user-message";

  // Welcome: mic-only trigger → recording bar → auto-transition
  if (isWelcome) {
    if (isRecording) {
      return (
        <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
          <RecordingBar elapsed={elapsed} />
        </div>
      );
    }

    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <button
            onClick={startRecording}
            className="cursor-pointer"
            aria-label="Enregistrer un message vocal"
          >
            <MicIcon />
          </button>
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

  // Payment detail: mic-only trigger → recording bar → TAEG question
  if (step === "chat-payment-detail") {
    if (isRecording) {
      return (
        <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
          <RecordingBar elapsed={elapsed} />
        </div>
      );
    }

    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <button
            onClick={startRecording}
            className="cursor-pointer"
            aria-label="Enregistrer un message vocal"
          >
            <MicIcon />
          </button>
        </div>
      </div>
    );
  }

  // TAEG response: mic-only trigger → recording bar → user confirm
  if (step === "chat-taeg-response") {
    if (isRecording) {
      return (
        <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
          <RecordingBar elapsed={elapsed} />
        </div>
      );
    }

    return (
      <div className="shrink-0 bg-white px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-2">
        <div className="flex items-center gap-3 rounded-[15px] border border-cercle-grey-border bg-cercle-grey-bg px-4 py-4">
          <p className="flex-1 text-lg text-cercle-grey-text">
            Posez votre question, décrivez votre demande
          </p>
          <button
            onClick={startRecording}
            className="cursor-pointer"
            aria-label="Enregistrer un message vocal"
          >
            <MicIcon />
          </button>
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

/** Animated full-width recording bar with waveform and timer */
function RecordingBar({ elapsed }: { elapsed: number }) {
  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const timeStr = `${minutes}:${displaySeconds.toString().padStart(2, "0")}`;

  // Generate bars with pseudo-random max heights and speeds for organic look
  const BAR_COUNT = 28;
  const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
    // Use a simple hash to vary height and speed per bar
    const seed = ((i * 7 + 3) % 11) / 11;
    const maxH = 6 + seed * 16; // 6px to 22px
    const speed = 0.5 + seed * 0.6; // 0.5s to 1.1s
    const delay = (i * 0.06) % 0.8; // stagger
    return { maxH, speed, delay };
  });

  return (
    <div className="flex items-center gap-3 rounded-[15px] border border-cercle-blue/20 bg-cercle-soft-blue px-4 py-4">
      {/* Pulsing red recording dot */}
      <div className="animate-recording-dot h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />

      {/* Waveform bars */}
      <div className="flex flex-1 items-center justify-center gap-[3px]">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="animate-recording-bar h-[3px] w-[3px] rounded-full bg-cercle-blue"
            style={{
              "--wave-max": `${bar.maxH}px`,
              "--wave-speed": `${bar.speed}s`,
              "--wave-delay": `${bar.delay}s`,
              opacity: 0.5,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Elapsed timer */}
      <span className="shrink-0 text-sm font-medium tabular-nums text-cercle-blue">
        {timeStr}
      </span>
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
