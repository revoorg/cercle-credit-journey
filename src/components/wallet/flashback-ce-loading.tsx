"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/** Face ID scan icon (bracket corners with face outline) */
function FaceIdIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 18V10C4 6.68629 6.68629 4 10 4H18" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M46 4H54C57.3137 4 60 6.68629 60 10V18" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M60 46V54C60 57.3137 57.3137 60 54 60H46" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M18 60H10C6.68629 60 4 57.3137 4 54V46" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M22 22V28" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 22V28" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 26V36H36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 40C22 40 26 46 32 46C38 46 42 40 42 40" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Checkmark circle icon (success state) */
function CheckCircleIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="26" stroke="white" strokeWidth="3" />
      <path d="M17 28L25 36L39 22" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Phase = "welcome" | "faceid" | "faceid-done";

export function FlashbackCELoading() {
  const [phase, setPhase] = useState<Phase>("welcome");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("faceid"), 1500);
    const t2 = setTimeout(() => setPhase("faceid-done"), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const showModal = phase === "faceid" || phase === "faceid-done";

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Background image (full CE app screenshot) */}
      <Image
        src="/images/banks/ce-background.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Face ID modal overlay */}
      {showModal && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex h-[152px] w-[149px] flex-col items-center justify-center gap-2 rounded-[9px] bg-[#D4D7DB]">
            {phase === "faceid" ? <FaceIdIcon /> : <CheckCircleIcon />}
            <p className="text-lg font-medium text-black">Face ID</p>
          </div>
        </div>
      )}
    </div>
  );
}
