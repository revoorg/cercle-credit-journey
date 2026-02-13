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
      {/* Corner brackets */}
      <path
        d="M4 18V10C4 6.68629 6.68629 4 10 4H18"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M46 4H54C57.3137 4 60 6.68629 60 10V18"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M60 46V54C60 57.3137 57.3137 60 54 60H46"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M18 60H10C6.68629 60 4 57.3137 4 54V46"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <path
        d="M22 22V28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M42 22V28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Nose */}
      <path
        d="M32 26V36H36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Mouth */}
      <path
        d="M22 40C22 40 26 46 32 46C38 46 42 40 42 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
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
      <path
        d="M17 28L25 36L39 22"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Phase = "revolut" | "faceid" | "faceid-done";

export function FlashbackBankLoading() {
  const [phase, setPhase] = useState<Phase>("revolut");

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
    <div className="relative flex h-dvh flex-col items-center justify-center bg-white">
      {/* Revolut wordmark */}
      <Image
        src="/images/banks/revolut-wordmark.png"
        alt="Revolut"
        width={225}
        height={58}
        className="-mt-20"
      />

      {/* Face ID modal overlay */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[152px] w-[149px] flex-col items-center justify-center gap-2 rounded-[9px] bg-[#D4D7DB]">
            {phase === "faceid" ? <FaceIdIcon /> : <CheckCircleIcon />}
            <p className="text-lg font-medium text-black">Face ID</p>
          </div>
        </div>
      )}

      {/* Bottom section */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <Image
          src="/images/banks/privacy-icon.png"
          alt=""
          width={45}
          height={33}
        />
        <p className="text-center text-[13px] leading-6 text-[#97999E]">
          This screen is hidden to protect your personal information
        </p>
      </div>
    </div>
  );
}
