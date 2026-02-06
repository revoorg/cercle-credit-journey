"use client";

import { useContext, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ScenarioContext } from "@/lib/scenario-context";
import { getStepDefinition, getStepPage } from "@/lib/scenario";
import type { ScenarioStep } from "@/types/scenario";

export function useScenario() {
  const { state, dispatch, isTransitioning, startTransition, endTransition } =
    useContext(ScenarioContext);
  const router = useRouter();
  const pathname = usePathname();

  const { currentStep } = state;
  const stepDef = getStepDefinition(currentStep);

  // Auto-advance timer
  useEffect(() => {
    if (stepDef.autoAdvance) {
      const timer = setTimeout(() => {
        dispatch({ type: "GO_TO", step: stepDef.autoAdvance!.nextStep });
      }, stepDef.autoAdvance.delayMs);
      return () => clearTimeout(timer);
    }
  }, [currentStep, stepDef, dispatch]);

  // Cross-page navigation: start transition overlay, then navigate after delay
  useEffect(() => {
    const targetPage = getStepPage(currentStep);
    const currentPage = pathname === "/wallet" ? "wallet" : "chat";

    if (targetPage !== currentPage) {
      const direction = targetPage === "wallet" ? "to-wallet" : "to-chat";
      startTransition(direction);

      const navTimer = setTimeout(() => {
        router.push(targetPage === "wallet" ? "/wallet" : "/");
      }, 400);

      return () => clearTimeout(navTimer);
    }
  }, [currentStep, pathname, router, startTransition]);

  // Clear transition overlay once we arrive at the correct page
  useEffect(() => {
    if (!isTransitioning) return;

    const targetPage = getStepPage(currentStep);
    const currentPage = pathname === "/wallet" ? "wallet" : "chat";

    if (targetPage === currentPage) {
      const timer = setTimeout(() => {
        endTransition();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, pathname, isTransitioning, endTransition]);

  const advance = useCallback(() => {
    dispatch({ type: "ADVANCE" });
  }, [dispatch]);

  const goTo = useCallback(
    (step: ScenarioStep) => {
      dispatch({ type: "GO_TO", step });
    },
    [dispatch]
  );

  const back = useCallback(() => {
    dispatch({ type: "BACK" });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  return {
    step: currentStep,
    stepDef,
    history: state.history,
    advance,
    goTo,
    back,
    reset,
    dispatch,
  };
}
