"use client";

import Image from "next/image";
import { FLASHBACK_CE_AUTHORIZED_DATA } from "@/lib/scenario-data";

export function FlashbackCEAuthorized() {
  return (
    <div className="flex h-dvh flex-col bg-white">
      {/* Green check circle */}
      <div className="mt-16 flex justify-center">
        <Image
          src="/images/banks/ce-authorized.png"
          alt=""
          width={80}
          height={86}
        />
      </div>

      {/* Title */}
      <h2 className="mt-4 text-center text-[21px] font-semibold leading-[30px] text-[#242A2F]">
        {FLASHBACK_CE_AUTHORIZED_DATA.title}
      </h2>

      {/* Subtitle */}
      <p className="mx-10 mt-4 text-center text-base leading-5 text-[#242A2F]">
        {FLASHBACK_CE_AUTHORIZED_DATA.subtitle}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Fermer button */}
      <div className="px-4 pb-8">
        <div className="h-10 w-full rounded bg-[#D8000F] flex items-center justify-center">
          <span className="text-base text-white">
            {FLASHBACK_CE_AUTHORIZED_DATA.buttonText}
          </span>
        </div>
      </div>
    </div>
  );
}
