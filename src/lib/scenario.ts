import type { StepDefinition, ScenarioStep, PageType } from "@/types/scenario";

export const STEP_DEFINITIONS: StepDefinition[] = [
  // Chat flow
  { id: "chat-welcome", page: "chat" },
  { id: "chat-user-message", page: "chat" },
  { id: "chat-loading", page: "chat", autoAdvance: { delayMs: 2500, nextStep: "chat-ai-response" } },
  { id: "chat-ai-response", page: "chat" },
  { id: "chat-choice-detail", page: "chat" },
  { id: "chat-payment-options", page: "chat" },
  { id: "chat-payment-detail", page: "chat" },
  { id: "chat-taeg-question", page: "chat" },
  { id: "chat-taeg-sent", page: "chat", autoAdvance: { delayMs: 500, nextStep: "chat-taeg-loading" } },
  { id: "chat-taeg-loading", page: "chat", autoAdvance: { delayMs: 2500, nextStep: "chat-taeg-response" } },
  { id: "chat-taeg-response", page: "chat" },
  { id: "chat-user-confirm", page: "chat" },
  { id: "chat-bot-ok", page: "chat", autoAdvance: { delayMs: 1500, nextStep: "chat-wallet-prompt" } },
  { id: "chat-wallet-prompt", page: "chat" },

  // Wallet flow (entered from chat)
  { id: "wallet-home", page: "wallet", autoAdvance: { delayMs: 1500, nextStep: "wallet-consent" } },
  { id: "wallet-consent", page: "wallet" },
  { id: "wallet-attribute-detail", page: "wallet" },
  { id: "wallet-shared-confirmation", page: "wallet", autoAdvance: { delayMs: 2000, nextStep: "chat-wallet-connected" } },

  // Back to chat — post-wallet flow
  { id: "chat-wallet-connected", page: "chat", autoAdvance: { delayMs: 4000, nextStep: "chat-decision" } },
  { id: "chat-decision", page: "chat", autoAdvance: { delayMs: 2000, nextStep: "chat-decision-sign" } },
  { id: "chat-decision-sign", page: "chat" },
  { id: "chat-contract-view", page: "chat" },
  { id: "chat-contract-signed", page: "chat", autoAdvance: { delayMs: 2000, nextStep: "chat-add-wallet-question" } },
  { id: "chat-add-wallet-question", page: "chat", autoAdvance: { delayMs: 1500, nextStep: "chat-add-wallet-sent" } },
  { id: "chat-add-wallet-sent", page: "chat", autoAdvance: { delayMs: 1000, nextStep: "chat-add-wallet-response" } },
  { id: "chat-add-wallet-response", page: "chat", autoAdvance: { delayMs: 2000, nextStep: "chat-add-wallet-done" } },
  { id: "chat-add-wallet-done", page: "chat" },
];

export const STEP_SEQUENCE: ScenarioStep[] = STEP_DEFINITIONS.map((d) => d.id);

export function getStepDefinition(step: ScenarioStep): StepDefinition {
  const def = STEP_DEFINITIONS.find((d) => d.id === step);
  if (!def) throw new Error(`Unknown step: ${step}`);
  return def;
}

export function getStepIndex(step: ScenarioStep): number {
  return STEP_SEQUENCE.indexOf(step);
}

export function getStepPage(step: ScenarioStep): PageType {
  return getStepDefinition(step).page;
}

export function getNextStep(step: ScenarioStep): ScenarioStep | null {
  const index = getStepIndex(step);
  return STEP_SEQUENCE[index + 1] ?? null;
}
