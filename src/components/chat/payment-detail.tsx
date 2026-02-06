"use client";

import { useState } from "react";
import Image from "next/image";
import { MonCreditLogo } from "@/components/shared/moncredit-logo";
import { CHAT_DATA } from "@/lib/scenario-data";

export function PaymentDetail() {
  const [insuranceSelected, setInsuranceSelected] = useState(false);
  const hotel = CHAT_DATA.hotels[0];
  const credit = CHAT_DATA.creditDetail;

  return (
    <div className="flex flex-col gap-4">
      {/* Trip summary card */}
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
      <h3 className="text-lg font-medium text-[#242A2F]">
        {CHAT_DATA.paymentQuestion}
      </h3>

      {/* MonCrédit detail card */}
      <div className="overflow-hidden rounded-xl border border-[#DEE3E6] bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 px-5 pt-5">
          <span className="text-lg font-medium text-[#242A2F]">
            Payer en {credit.installments}x avec
          </span>
          <MonCreditLogo />
        </div>

        {/* Breakdown */}
        <div className="flex flex-col gap-2 px-5 pb-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base text-[#242A2F]">Mensualité</span>
            <span className="text-base font-medium text-[#242A2F]">
              {credit.monthlyPayment}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-[#242A2F]">TAEG</span>
            <span className="text-base font-medium text-[#242A2F]">
              {credit.taeg}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-[#242A2F]">
              Montant total du crédit
            </span>
            <span className="text-base font-medium text-[#242A2F]">
              {credit.totalCreditAmount}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-[#242A2F]">
              Coût total du crédit
            </span>
            <span className="text-base font-medium text-[#242A2F]">
              {credit.totalCreditCost}
            </span>
          </div>
        </div>

        {/* Insurance section */}
        <div className="mx-5 mb-5 rounded-xl bg-[#F6F8F9] px-4 py-4">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-cercle-blue"
            >
              <path
                d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base font-medium text-[#242A2F]">
              Assurance emprunteur facultative
            </span>
          </div>
          <div
            className="mt-3 flex cursor-pointer items-start gap-3"
            onClick={() => setInsuranceSelected(!insuranceSelected)}
          >
            {/* Radio button */}
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-cercle-blue">
              {insuranceSelected && (
                <div className="h-2.5 w-2.5 rounded-full bg-cercle-blue" />
              )}
            </div>
            <p className="text-sm leading-relaxed text-[#47535C]">
              Je souscris l&apos;assurance emprunteur pour un coût
              supplémentaire de{" "}
              <strong className="text-[#242A2F]">
                {credit.insurance.monthlyCost}/mois
              </strong>
              .
              <br />
              Coût total de la mensualité du crédit avec assurance :{" "}
              <strong className="text-[#242A2F]">
                {credit.insurance.monthlyWithInsurance}€
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Legal notice */}
      <p className="text-sm italic leading-relaxed text-[#47535C]">
        {credit.legalNotice}
      </p>

      {/* CTA */}
      <button className="h-[57px] w-full cursor-pointer rounded-[35px] bg-[#005A9E] text-lg font-medium text-white transition-colors hover:bg-[#004A84]">
        Choisir ce mode de paiement
      </button>
    </div>
  );
}
