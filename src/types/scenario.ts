export type ChatStep =
  | "chat-welcome"
  | "chat-user-message"
  | "chat-loading"
  | "chat-ai-response"
  | "chat-choice-detail"
  | "chat-payment-options"
  | "chat-payment-detail"
  | "chat-taeg-question"
  | "chat-taeg-sent"
  | "chat-taeg-loading"
  | "chat-taeg-response"
  | "chat-user-confirm"
  | "chat-bot-ok"
  | "chat-wallet-prompt"
  | "chat-wallet-connected"
  | "chat-decision"
  | "chat-decision-sign"
  | "chat-contract-view"
  | "chat-contract-signed"
  | "chat-add-wallet-question"
  | "chat-add-wallet-sent"
  | "chat-add-wallet-response"
  | "chat-add-wallet-done";

export type WalletStep =
  | "wallet-home"
  | "wallet-consent"
  | "wallet-attribute-detail"
  | "wallet-shared-confirmation";

export type ScenarioStep = ChatStep | WalletStep;

export type PageType = "chat" | "wallet";

export interface StepDefinition {
  id: ScenarioStep;
  page: PageType;
  autoAdvance?: {
    delayMs: number;
    nextStep: ScenarioStep;
  };
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  description: string;
  highlights?: string[];
  dates?: string;
  paymentNote?: string;
}

export interface PaymentOption {
  id: string;
  label: string;
  icon: string;
  highlight?: boolean;
}

export interface CreditDetail {
  monthlyPayment: string;
  taeg: string;
  totalCreditAmount: string;
  totalCreditCost: string;
  installments: number;
  legalNotice: string;
  insurance: {
    monthlyCost: string;
    monthlyWithInsurance: string;
  };
}

export interface WalletCategory {
  id: string;
  title: string;
  color: "teal" | "green-teal" | "purple" | "pink";
  lastUpdate: string;
  attributeCount: number;
}

export interface WalletAttribute {
  name: string;
  category: string;
  certified: boolean;
}

export interface ConsentRequest {
  requester: string;
  attributeCount: number;
}

export type MessageType =
  | "bot-text"
  | "user-text"
  | "bot-loading"
  | "bot-hotels"
  | "bot-hotel-detail"
  | "bot-payment-options"
  | "bot-payment-detail"
  | "bot-wallet-prompt"
  | "bot-wallet-connected"
  | "bot-decision";

export interface Message {
  type: MessageType;
  content?: string;
}
