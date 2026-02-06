"use client";

import { useScenario } from "@/hooks/use-scenario";
import { CHAT_DATA } from "@/lib/scenario-data";

export function ContractView() {
  const { goTo } = useScenario();

  return (
    <div className="flex h-dvh flex-col bg-white">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between px-4 pt-[max(16px,env(safe-area-inset-top))] pb-3">
        <div className="w-10" />
        <h1 className="text-base font-medium text-[#242A2F]">
          {CHAT_DATA.contractTitle}
        </h1>
        <button
          onClick={() => goTo("chat-decision-sign")}
          className="flex h-10 w-10 cursor-pointer items-center justify-center"
          aria-label="Fermer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#47535C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Contract body */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#47535C]">
          {/* Section 1 */}
          <div>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-[#242A2F]">
              INFORMATIONS PRECONTRACTUELLES EUROPEENNES NORMALISEES
            </p>
            <p className="mb-2 text-center text-xs font-bold uppercase text-[#242A2F]">
              EN MATIERE DE CREDIT AUX CONSOMMATEURS
            </p>
          </div>

          <ContractSection title="1 - Identité et coordonnées du prêteur">
            <p>
              MonCrédit.com SAS, au capital de 10 000 000€, immatriculée au RCS
              de Paris sous le n° 123 456 789, dont le siège social est situé au
              15 rue de la Banque, 75002 Paris. Intermédiaire en opérations de
              banque et en services de paiement (IOBSP) inscrit à l&apos;ORIAS
              sous le n° 07 000 000.
            </p>
          </ContractSection>

          <ContractSection title="2 - Description des principales caractéristiques du crédit">
            <ContractTable
              rows={[
                ["Type de crédit", "Crédit à la consommation affecté"],
                ["Montant total du crédit", CHAT_DATA.creditDetail.totalCreditAmount],
                ["Durée du contrat de crédit", `${CHAT_DATA.creditDetail.installments} mois`],
                [
                  "Montant, nombre et périodicité des remboursements",
                  `${CHAT_DATA.creditDetail.installments} mensualités de ${CHAT_DATA.creditDetail.monthlyPayment}`,
                ],
              ]}
            />
          </ContractSection>

          <ContractSection title="3 - Coût du crédit">
            <ContractTable
              rows={[
                ["Taux débiteur", "7,18% fixe"],
                [
                  "Taux Annuel Effectif Global (TAEG)",
                  CHAT_DATA.creditDetail.taeg,
                ],
                ["Montant total dû par l'emprunteur", CHAT_DATA.creditDetail.totalCreditAmount],
                [
                  "Coût total du crédit",
                  CHAT_DATA.creditDetail.totalCreditCost,
                ],
              ]}
            />
          </ContractSection>

          <ContractSection title="4 - Autres aspects juridiques importants">
            <p>
              L&apos;emprunteur dispose d&apos;un délai de rétractation de 14
              jours calendaires à compter de la date de signature du contrat de
              crédit. L&apos;exercice du droit de rétractation implique le
              remboursement du capital et des intérêts éventuellement échus.
            </p>
            <p className="mt-2">
              En cas de non-respect de vos obligations contractuelles, le
              prêteur pourra exiger le remboursement immédiat du capital restant
              dû, majoré des intérêts échus et non payés.
            </p>
          </ContractSection>

          <ContractSection title="5 - Assurance emprunteur facultative">
            <p>
              Vous pouvez souscrire une assurance emprunteur facultative pour un
              coût mensuel de {CHAT_DATA.creditDetail.insurance.monthlyCost}.
              Cette assurance couvre les risques de décès, d&apos;invalidité permanente
              et d&apos;incapacité temporaire de travail.
            </p>
          </ContractSection>

          <div className="rounded-lg border border-[#DEE3E6] p-4">
            <p className="text-center text-xs font-medium text-[#242A2F]">
              FICHE DE DIALOGUE
            </p>
            <div className="mt-3 space-y-2 text-xs">
              <p>
                <strong>Emprunteur :</strong> Guillaume De Fromont
              </p>
              <p>
                <strong>Objet du financement :</strong> Voyage - Les lacs du
                Nord (Italie)
              </p>
              <p>
                <strong>Montant :</strong>{" "}
                {CHAT_DATA.hotels[0].price}
              </p>
            </div>
          </div>

          <div className="border-t border-[#DEE3E6] pt-4">
            <p className="text-xs font-bold text-[#242A2F]">
              AVIS IMPORTANT
            </p>
            <p className="mt-2 text-xs italic">
              {CHAT_DATA.creditDetail.legalNotice}
            </p>
          </div>

          <div className="border-t border-[#DEE3E6] pt-4">
            <p className="text-xs font-bold text-[#242A2F]">
              BON DE COMMANDE
            </p>
            <p className="mt-2 text-xs">
              Nous vous recommandons de lire attentivement la totalité des
              conditions de votre contrat de crédit, et en particulier les
              clauses relatives aux obligations de l&apos;emprunteur et aux
              conséquences de la défaillance.
            </p>
          </div>

          <div className="border-t border-[#DEE3E6] pt-4 text-center">
            <p className="text-xs font-bold text-[#242A2F]">
              INFORMATIONS GENERALES
            </p>
            <p className="mt-2 text-xs">
              Offre valable sous réserve d&apos;acceptation par MonCrédit.com
              SAS. Le présent document ne constitue pas une offre de contrat de
              crédit.
            </p>
          </div>
        </div>
      </div>

      {/* Sign CTA */}
      <div className="shrink-0 px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3">
        <button
          onClick={() => goTo("chat-contract-signed")}
          className="h-[57px] w-full cursor-pointer rounded-[35px] bg-[#005A9E] text-lg font-medium text-white transition-colors hover:bg-[#004A84]"
        >
          Signer mon contrat
        </button>
      </div>
    </div>
  );
}

function ContractSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold text-[#242A2F]">{title}</p>
      {children}
    </div>
  );
}

function ContractTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full border-collapse text-xs">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-b border-[#E9ECEE]">
            <td className="py-2 pr-3 text-[#47535C]">{label}</td>
            <td className="py-2 text-right font-medium text-[#242A2F]">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
