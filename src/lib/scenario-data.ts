import type {
  Hotel,
  PaymentOption,
  CreditDetail,
  WalletCategory,
  WalletAttribute,
  ConsentRequest,
} from "@/types/scenario";

export const CHAT_DATA = {
  userName: "Guillaume",
  botGreeting: "Bonjour Guillaume,\nComment puis-je vous aider ?",

  userMessage:
    "J'aimerais faire une surprise à ma compagne pour ses 40 ans : lui offrir un roadtrip en Italie, pour un budget maximum de 3 000€.\nQu'est-ce que tu peux me proposer ?",

  aiResponseIntro: "Voici ce que je peux te proposer avec tes critères :",

  hotels: [
    {
      id: "hotel-1",
      name: "Les lacs du Nord",
      location: "Majeur, Côme et Garde",
      price: "2 600€",
      image: "/images/hotels/hotel-1.png",
      description: "7 jours/6 nuits avec véhicule et hébergement",
      dates: "Du 28/03 au 03/04/2026",
      paymentNote: "Paiement en 24x disponible.",
      highlights: [
        "Découvrir les lacs célèbres du nord de l'Italie en autotour.",
        "Séjourner près du lac Majeur et explorez les îles Borromées en bateau.",
        "Profiter des villages pittoresques sur la rive ouest du lac de Côme.",
        "Visiter le lac de Garde avec un hébergement dans un agritourisme.",
        "Terminer par la dégustation de vins locaux et leur histoire.",
        "Hébergements 3* tout au long du voyage.",
        "Location d'un véhicule de tourisme type citadine.",
      ],
    },
    {
      id: "hotel-2",
      name: "Le Ponente Ligure",
      location: "Camogli, Portofino, Gênes",
      price: "2 900€",
      image: "/images/hotels/hotel-2.png",
      description: "10 jours/9 nuits avec train et hébergement",
      dates: "Du 28/03 au 02/04/2026",
    },
    {
      id: "hotel-3",
      name: "Venise et la lagune",
      location: "Burano, Murano, Torcello",
      price: "2 990€",
      image: "/images/hotels/hotel-3.png",
      description: "7 jours/6 nuits avec train, navettes et hébergement",
      dates: "Du 28/03 au 02/04/2026",
    },
  ] satisfies Hotel[],

  paymentQuestion: "Comment souhaitez-vous payer votre voyage ?",

  paymentOptions: [
    {
      id: "credit-24x",
      label: "Payer en 24x avec",
      icon: "/images/payments/moncredit.svg",
      highlight: true,
    },
    { id: "apple-pay", label: "Acheter avec", icon: "/images/payments/apple-pay.svg" },
    { id: "card", label: "Payer par carte bancaire", icon: "/images/payments/card.svg" },
  ] satisfies PaymentOption[],

  creditDetail: {
    monthlyPayment: "116,71€",
    taeg: "7,5%",
    totalCreditAmount: "2 801,06€",
    totalCreditCost: "201,06€",
    installments: 24,
    legalNotice:
      "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    insurance: {
      monthlyCost: "4,43€",
      monthlyWithInsurance: "121,14€",
    },
  } satisfies CreditDetail,

  taegQuestion: "C'est quoi le TAEG ?",

  taegResponse: `Le TAEG (Taux Annuel Effectif Global) est le taux qui mesure le coût total d'un crédit pour l'emprunteur, exprimé en pourcentage annuel du montant emprunté.

Il inclut **l'ensemble des frais obligatoires** liés au crédit, notamment :`,

  taegBullets: [
    "le taux d'intérêt nominal,",
    "les frais de dossier,",
    "les commissions,",
    "le coût de l'assurance obligatoire (si elle est exigée pour obtenir le crédit),",
    "et tout autre frais imposé par le prêteur.",
  ],

  taegConclusion: `L'objectif du TAEG est de **permettre aux emprunteurs de comparer facilement différentes offres de crédit**, car il reflète le coût réel et complet du crédit, au-delà du seul taux d'intérêt.

En Europe (et donc en France), **le TAEG est obligatoire et strictement encadré par la loi** pour protéger les consommateurs.

Une autre question ?`,

  userConfirmMessage:
    "Non, c'est très clair, je vais donc choisir ce mode paiement avec l'assurance.",

  botOkMessage: "Ok",

  walletIntro: "Ok, voici donc la prochaine étape :",

  walletPromptTitle: "Connectez votre wallet pour soumettre votre demande",
  walletPromptDescription:
    "La connexion à votre wallet permet de récupérer en toute sécurité et en un clic toutes les informations nécessaires :",
  walletPromptItems: [
    "Preuve d'identité",
    "Analyse de solvabilité",
    "Preuve de salaire",
    "Justificatif de domicile",
  ],

  // Post-wallet flow
  walletConnectedLabel: "Connexion au wallet effectuée",
  walletStudyMessage: "MonCrédit.com étudie votre demande",
  decisionAcceptedMessage: "Votre demande est acceptée !",
  decisionSignInvitation:
    "Nous vous invitons à prendre connaissance des documents contractuels et à signer votre contrat.",
  contractTitle: "Contrat de prêt Guillaume De Fromont",
  contractPdfName: "Contrat de prêt Guillaume de Fromont.PDF",
  contractSignedMessage:
    "Parfait ! Votre contrat est signé.\nSouhaitez-vous l'ajouter à votre wallet ?",
  addWalletUserMessage: "Oui",
  addWalletBotMessage: "Ok, je m'en occupe",
  addWalletDoneMessage: "C'est fait !",
};

export const WALLET_DATA = {
  userName: "Guillaume",
  lastUpdate: "18/02/2026",

  categories: [
    {
      id: "identity",
      title: "Mon identité",
      color: "teal" as const,
      lastUpdate: "11/01/2026",
      attributeCount: 8,
    },
    {
      id: "housing",
      title: "Mon logement",
      color: "green-teal" as const,
      lastUpdate: "29/01/2026",
      attributeCount: 5,
    },
    {
      id: "financial",
      title: "Mes informations financières",
      color: "purple" as const,
      lastUpdate: "29/01/2026",
      attributeCount: 9,
    },
    {
      id: "health",
      title: "Ma santé",
      color: "pink" as const,
      lastUpdate: "13/02/2026",
      attributeCount: 0,
    },
  ] satisfies WalletCategory[],

  consentRequest: {
    requester: "MonCrédit.com",
    attributeCount: 15,
  } satisfies ConsentRequest,

  attributes: [
    { name: "Nom", category: "identity", certified: true },
    { name: "Prénom", category: "identity", certified: true },
    { name: "Date de naissance", category: "identity", certified: true },
    { name: "Ville et pays de naissance", category: "identity", certified: true },
    { name: "Nationalité", category: "identity", certified: true },
    { name: "Adresse postale", category: "identity", certified: true },
    { name: "Salaire", category: "financial", certified: true },
    { name: "Autres revenus", category: "financial", certified: true },
    { name: "Employeur", category: "financial", certified: true },
    { name: "Type de contrat", category: "financial", certified: true },
    { name: "Charges mensuelles", category: "financial", certified: true },
    { name: "Mensualités de crédit", category: "financial", certified: true },
    { name: "Reste-à-vivre", category: "financial", certified: true },
    { name: "Indicateurs de risque", category: "financial", certified: true },
    { name: "Score de crédit", category: "financial", certified: true },
  ] satisfies WalletAttribute[],
};
