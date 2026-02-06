"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { MonCreditLogo } from "@/components/shared/moncredit-logo";
import { CHAT_DATA } from "@/lib/scenario-data";

export function PaymentOptions() {
  const { goTo } = useScenario();
  const hotel = CHAT_DATA.hotels[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Compact trip summary card */}
      <div className="flex overflow-hidden rounded-xl border border-[#DEE3E6] bg-white">
        <div className="relative h-[84px] w-[134px] shrink-0">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="134px"
          />
        </div>
        <div className="flex flex-col justify-center px-3 py-2">
          <p className="text-lg font-medium text-[#242A2F]">{hotel.name}</p>
          <p className="text-sm font-medium text-[#242A2F]">
            {hotel.location}
          </p>
          <p className="text-sm text-[#47535C]">{hotel.dates}</p>
        </div>
      </div>

      {/* Payment question */}
      <h3 className="mt-5 text-lg font-medium text-[#242A2F]">
        {CHAT_DATA.paymentQuestion}
      </h3>

      {/* Payment option cards */}
      <div className="mt-4 flex flex-col gap-3">
        {CHAT_DATA.paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              if (option.id === "credit-24x") {
                goTo("chat-payment-detail");
              }
            }}
            className="flex h-[72px] cursor-pointer items-center gap-3 rounded-[15px] border border-[#DEE3E6] bg-white px-6 transition-shadow hover:shadow-md"
          >
            <span className="text-lg font-medium text-[#242A2F]">
              {option.label}
            </span>
            {option.id === "credit-24x" ? (
              <MonCreditLogo />
            ) : (
              <Image
                src={option.icon}
                alt=""
                width={option.id === "card" ? 96 : 50}
                height={24}
                className="shrink-0 object-contain"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
