"use client";

import Image from "next/image";
import { useScenario } from "@/hooks/use-scenario";
import { CHAT_DATA } from "@/lib/scenario-data";

export function HotelDetail() {
  const { step, goTo } = useScenario();
  const isSelected = step !== "chat-choice-detail";
  const hotel = CHAT_DATA.hotels[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-[18px] border border-[#DEE3E6] bg-white">
        {/* Hero image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="px-4 pb-6 pt-4">
          {/* Title & subtitle */}
          <h2 className="text-2xl font-medium leading-[27px] text-[#242A2F]">
            {hotel.name}
          </h2>
          <p className="mt-1 text-lg font-medium text-[#242A2F]">
            {hotel.location}
          </p>

          {/* Description */}
          <p className="mt-3 text-lg leading-relaxed text-[#47535C]">
            {hotel.description}
            {hotel.dates && ` - ${hotel.dates}`}
          </p>

          {/* Highlights */}
          {hotel.highlights && hotel.highlights.length > 0 && (
            <div className="mt-5">
              <p className="text-base font-medium text-[#242A2F]">
                Vous allez adorer
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {hotel.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-[21px] text-[#47535C]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Options link */}
          <button className="mt-5 text-base text-[#47535C] underline underline-offset-2">
            Ajouter des options
          </button>

          {/* Price row */}
          <div className="mt-4 flex items-end justify-between">
            <div />
            <div className="text-right">
              <p className="text-[28px] font-medium leading-[27px] text-[#242A2F]">
                {hotel.price}
              </p>
              {hotel.paymentNote && (
                <p className="mt-1 text-sm italic text-[#60707C]">
                  {hotel.paymentNote}
                </p>
              )}
            </div>
          </div>

          {/* CTA */}
          {isSelected ? (
            <div className="mt-5 flex h-[57px] w-full items-center justify-center gap-2 rounded-[35px] border border-[#DEE3E6] bg-[#F6F8F9]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#22C55E" />
                <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-lg font-medium text-[#60707C]">
                Voyage sélectionné
              </span>
            </div>
          ) : (
            <button
              onClick={() => goTo("chat-payment-options")}
              className="mt-5 h-[57px] w-full cursor-pointer rounded-[35px] bg-[#005A9E] text-lg font-medium text-white transition-colors hover:bg-[#004A84]"
            >
              Choisir ce voyage
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
