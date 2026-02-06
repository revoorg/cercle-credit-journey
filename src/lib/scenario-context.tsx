"use client";

import {
  createContext,
  useReducer,
  useState,
  useCallback,
  type ReactNode,
  type Dispatch,
} from "react";
import type { ScenarioStep } from "@/types/scenario";
import { STEP_SEQUENCE, getNextStep } from "@/lib/scenario";

export interface ScenarioState {
  currentStep: ScenarioStep;
  history: ScenarioStep[];
}

export type ScenarioAction =
  | { type: "ADVANCE" }
  | { type: "GO_TO"; step: ScenarioStep }
  | { type: "BACK" }
  | { type: "RESET" };

export type TransitionDirection = "to-wallet" | "to-chat" | null;

function scenarioReducer(
  state: ScenarioState,
  action: ScenarioAction
): ScenarioState {
  switch (action.type) {
    case "ADVANCE": {
      const next = getNextStep(state.currentStep);
      if (!next) return state;
      return {
        currentStep: next,
        history: [...state.history, state.currentStep],
      };
    }
    case "GO_TO":
      if (action.step === state.currentStep) return state;
      return {
        currentStep: action.step,
        history: [...state.history, state.currentStep],
      };
    case "BACK": {
      const prev = state.history[state.history.length - 1];
      if (!prev) return state;
      return {
        currentStep: prev,
        history: state.history.slice(0, -1),
      };
    }
    case "RESET":
      return { currentStep: "chat-welcome", history: [] };
  }
}

const initialState: ScenarioState = {
  currentStep: STEP_SEQUENCE[0],
  history: [],
};

export const ScenarioContext = createContext<{
  state: ScenarioState;
  dispatch: Dispatch<ScenarioAction>;
  isTransitioning: boolean;
  transitionDirection: TransitionDirection;
  startTransition: (direction: TransitionDirection) => void;
  endTransition: () => void;
}>({
  state: initialState,
  dispatch: () => {},
  isTransitioning: false,
  transitionDirection: null,
  startTransition: () => {},
  endTransition: () => {},
});

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(scenarioReducer, initialState);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDirection>(null);

  const startTransition = useCallback((direction: TransitionDirection) => {
    setIsTransitioning(true);
    setTransitionDirection(direction);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
    setTransitionDirection(null);
  }, []);

  return (
    <ScenarioContext.Provider
      value={{
        state,
        dispatch,
        isTransitioning,
        transitionDirection,
        startTransition,
        endTransition,
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
}
