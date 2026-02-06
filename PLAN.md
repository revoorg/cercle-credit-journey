# Plan: Implement Cercle Credit Journey from Figma

## Context

PWA demo showcasing futuristic credit journeys. Frontend-only, hardcoded scripted content. Two distinct pages (chat + wallet) driven by a scenario state machine. Mix of auto-advancing and interactive states.

Codebase already has: Next.js 16, App Router, TypeScript, Tailwind v4, shadcn/ui, PWA setup.

---

## Dependency Graph

```
[Phase 0: Foundation]  ──  SEQUENTIAL, must complete first
        │
        ├──────────────────┬──────────────────┐
        ▼                  ▼                  ▼
[Phase 1A: Chat]    [Phase 1B: Wallet]   [Phase 1C: Shared]
   PARALLEL            PARALLEL            PARALLEL
        │                  │                  │
        └──────────────────┴──────────────────┘
                           │
                           ▼
                  [Phase 2: Integration]  ──  SEQUENTIAL
                           │
                           ▼
                    [Phase 3: Polish]  ──  SEQUENTIAL
```

---

## Phase 0: Foundation (SEQUENTIAL — blocks everything)

**Must be completed before any parallel work begins.**

### 0.1 — Install shadcn/ui components
```bash
npx shadcn@latest add button avatar card dialog badge separator
```

### 0.2 — Design tokens (`src/app/globals.css`)
Add to existing file alongside shadcn defaults:
```
--cercle-blue: #00466B          (primary text, CTAs)
--cercle-soft-blue: #F3F8FD     (backgrounds)
--cercle-grey-bg: #F6F8F9       (input bg)
--cercle-grey-border: #E9ECEE   (input border)
--cercle-grey-text: #60707C     (placeholders)
--cercle-teal: #2D8C7F          (identity category)
--cercle-green-teal: #3B9B6E    (housing category)
--cercle-purple: #6B5B95        (financial category)
--cercle-pink: #D4577B          (health category)
```
Expose via `@theme inline` as `bg-cercle-blue`, `text-cercle-grey-text`, etc.

### 0.3 — Font setup
- Create `src/lib/fonts.ts` — DM Sans via `next/font/google` (swappable to Euclid Circular B later)
- Update `src/app/layout.tsx` — Swap Geist → DM Sans, `lang="fr"`, theme color `#00466B`

### 0.4 — Types (`src/types/scenario.ts`)
All TypeScript types for steps, messages, hotels, payments, wallet attributes.

### 0.5 — Scenario engine
- `src/lib/scenario.ts` — Step definitions + sequence
- `src/lib/scenario-context.tsx` — React Context + useReducer + auto-advance logic
- `src/hooks/use-scenario.ts` — `useScenario()` hook
- `src/lib/scenario-data.ts` — All hardcoded content

### 0.6 — Root layout update (`src/app/layout.tsx`)
Wrap children in `<ScenarioProvider>`, apply font, update metadata.

### 0.7 — Static assets
Add placeholder images to `public/images/`:
- `hotels/hotel-1.jpg`, `hotel-2.jpg`
- `avatars/bot-avatar.svg`, `user-avatar.svg`
- `payments/apple-pay.svg`, `card.svg`, `moncredit.svg`

---

## Phase 1A: Chat Page (PARALLEL — can run alongside 1B and 1C)

**Agent focus:** Build the entire chat experience at `/`.

### Files to create:
| File | Description |
|------|-------------|
| `src/components/chat/chat-page.tsx` | Main orchestrator — reads step, computes visible messages, renders sub-views |
| `src/components/chat/chat-header.tsx` | Top bar with bot logo + user avatar |
| `src/components/chat/chat-input.tsx` | Bottom input bar with mic icon, tappable to send pre-filled message |
| `src/components/chat/chat-bubble.tsx` | Message bubble (bot/user variants, left/right aligned) |
| `src/components/chat/chat-message-list.tsx` | Scrollable container with auto-scroll to bottom |
| `src/components/chat/bot-avatar.tsx` | Bot avatar with sparkle/gradient ring |
| `src/components/chat/typing-indicator.tsx` | Animated dots for "AI thinking" state |
| `src/components/chat/hotel-card.tsx` | Hotel option card (image + label), tappable |
| `src/components/chat/hotel-detail.tsx` | Full hotel image + CTA "Choisir ce week-end" |
| `src/components/chat/payment-options.tsx` | 3 payment methods (Apple Pay, Card, 10x MonCrédit) |
| `src/components/chat/payment-detail.tsx` | 10x breakdown + credit conditions + CTA |
| `src/components/chat/wallet-prompt.tsx` | Explains wallet connection + CTA "Connecter mon wallet" |
| `src/components/chat/wallet-connected.tsx` | Checkmark + "studying your request" |
| `src/components/chat/decision-result.tsx` | "Demande acceptée" + CTA "Signer mon contrat" |

### File to modify:
- `src/app/page.tsx` — Replace boilerplate with `<ChatPage />`

### Chat step flow:
```
chat-welcome → (tap input) → chat-user-message → (tap send) → chat-loading
→ (auto 2s) → chat-ai-response → (tap hotel) → chat-choice-detail
→ (tap CTA) → chat-payment-options → (tap 10x) → chat-payment-detail
→ (tap CTA) → chat-wallet-prompt → (tap connect) → [navigate to /wallet]
→ ... wallet flow ... → [navigate back to /]
→ chat-wallet-connected → (auto 3s) → chat-decision
```

### Key patterns:
- Chat is NOT append-only. `getVisibleMessages(currentStep)` returns the full message array for any step
- Messages accumulate: step N shows all messages from steps 0..N
- Mobile layout: fixed header top, scrollable messages, fixed input bottom
- Use `src/lib/scenario-data.ts` for all hardcoded text content
- Use shared `CtaButton` and `CheckmarkBadge` from `src/components/shared/`

### Figma reference nodes:
- Welcome: `57:33` — Greeting + input + header with user avatar
- User message: inside slide `2:6`
- Loading: inside slide `2:41`
- AI response: inside slide `2:107`
- Hotel detail: inside slide `2:148`
- Payment options: inside slide `3:5`
- Payment detail: inside slide `3:58`
- Wallet prompt: inside slide `3:106`
- Wallet connected: inside slide `16:384`
- Decision: inside slide `17:2`

---

## Phase 1B: Wallet Page (PARALLEL — can run alongside 1A and 1C)

**Agent focus:** Build the wallet experience at `/wallet`.

### Files to create:
| File | Description |
|------|-------------|
| `src/app/wallet/page.tsx` | Route shell (server component, imports WalletPage) |
| `src/components/wallet/wallet-page.tsx` | Orchestrator — reads step, renders correct sub-view |
| `src/components/wallet/wallet-header.tsx` | Teal gradient header with "+" icon, "Wallet" title, user initials, greeting, last update date |
| `src/components/wallet/wallet-category-card.tsx` | Category card: colored banner + title + last update + attribute count |
| `src/components/wallet/wallet-home.tsx` | Stack of 4 category cards (identity, housing, financial, health) |
| `src/components/wallet/wallet-consent-dialog.tsx` | "MonCrédit.com wants 15 attributes" popup using shadcn Dialog. Refuse/Accept buttons |
| `src/components/wallet/wallet-attribute-list.tsx` | Expanded list of all 15-16 attributes with Refuse/Accept at bottom |
| `src/components/wallet/wallet-shared-confirmation.tsx` | Green checkmark + "Attributs partagés" |

### Wallet step flow:
```
wallet-home → wallet-consent → (tap accept) → wallet-shared-confirmation
→ (auto 2s) → [navigate to /] → chat-wallet-connected
```

### Key patterns:
- Teal gradient header is the distinctive visual feature (different from chat)
- 4 category colors: teal (#2D8C7F), green-teal (#3B9B6E), purple (#6B5B95), pink (#D4577B)
- Consent dialog uses shadcn `Dialog`, controlled by step state
- Use `src/lib/scenario-data.ts` for wallet data (categories, attributes, consent request)
- Use shared `CtaButton` and `CheckmarkBadge` from `src/components/shared/`

### Figma reference nodes:
- Wallet home: `53:116` (standalone) or inside slide `7:2`
- Consent popup: inside slide `16:134`
- Attribute detail: inside slide `16:309`
- Shared confirmation: inside slide `16:232`

---

## Phase 1C: Shared Components (PARALLEL — can run alongside 1A and 1B)

**Agent focus:** Build reusable components and assets used by both pages.

### Files to create:
| File | Description |
|------|-------------|
| `src/components/shared/cta-button.tsx` | Dark blue (#00466B) full-width rounded button. Wraps shadcn Button |
| `src/components/shared/checkmark-badge.tsx` | Animated green circle with checkmark SVG |

### Design specs:
- **CtaButton**: `bg-[#00466B] text-white rounded-xl h-12 w-full font-medium text-base`
- **CheckmarkBadge**: Green (#22C55E) circle, white checkmark, CSS animation on mount (stroke-dashoffset)

---

## Phase 2: Integration (SEQUENTIAL — after all Phase 1 tracks complete)

### Tasks:
1. Wire up cross-page navigation in `useScenario` hook — when step changes page, auto-navigate
2. Test the complete flow: `chat-welcome` → through all steps → `chat-decision`
3. Ensure `router.push("/wallet")` and `router.back()` work with state machine
4. Verify auto-advance timers fire correctly (loading 2s, confirmation 2s, connected 3s)
5. `npm run build` — zero errors

---

## Phase 3: Polish (SEQUENTIAL — after integration)

### Tasks:
1. Entry animations on messages (`animate-in fade-in slide-in-from-bottom-4`)
2. Typing indicator animation (bouncing dots with staggered delay)
3. Checkmark draw animation (stroke-dashoffset CSS keyframes)
4. Auto-scroll to latest message on step change
5. Optional: PhoneFrame wrapper for desktop viewing (`max-w-[430px] mx-auto`)
6. Update `public/manifest.json` theme_color to `#00466B`

---

## Scenario Step Definitions (complete)

```typescript
type ChatStep =
  | "chat-welcome"
  | "chat-user-message"
  | "chat-loading"
  | "chat-ai-response"
  | "chat-choice-detail"
  | "chat-payment-options"
  | "chat-payment-detail"
  | "chat-wallet-prompt"
  | "chat-wallet-connected"
  | "chat-decision";

type WalletStep =
  | "wallet-home"
  | "wallet-consent"
  | "wallet-attribute-detail"
  | "wallet-shared-confirmation";

type ScenarioStep = ChatStep | WalletStep;
```

---

## Verification

1. `npm run build` — zero type/build errors
2. `npm run dev` — walk through entire scenario from welcome to signed contract
3. Test on mobile viewport (390px) in Chrome DevTools
4. Verify PWA installability: DevTools → Application → Manifest
5. Each step transition works (interactive + auto-advance)
6. Chat → Wallet → Chat navigation round-trip is seamless
