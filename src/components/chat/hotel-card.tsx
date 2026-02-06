"use client";

import { useScenario } from "@/hooks/use-scenario";
import type { Hotel } from "@/types/scenario";

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const { goTo } = useScenario();

  return (
    <button
      onClick={() => goTo("chat-choice-detail")}
      className="flex w-[216px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[15px] border border-[#DEE3E6] bg-white text-left transition-shadow hover:shadow-md"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hotel.image}
        alt={hotel.name}
        width={216}
        height={135}
        className="h-[135px] w-[216px] object-cover"
      />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-2">
        <p className="text-lg font-medium leading-[27px] text-[#242A2F]">
          {hotel.name}
        </p>
        <p className="text-sm font-medium leading-[27px] text-[#242A2F]">
          {hotel.location}
        </p>
        <p className="text-sm leading-[19px] text-[#47535C]">
          {hotel.description}
        </p>
        <div className="mt-auto flex items-baseline justify-end gap-1.5 pt-2">
          <span className="text-sm text-[#47535C]">À partir de</span>
          <span className="text-xl font-medium text-[#242A2F]">
            {hotel.price}
          </span>
        </div>
      </div>
    </button>
  );
}
