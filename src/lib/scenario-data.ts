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
    "Je souhaite offrir un voyage en Italie à ma femme, pour la saint Valentin. Durée 7 jours. Budget maximum 3000 euros. Fais-moi 3 propositions.",

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
      description: "7 jours/6 nuits avec train et hébergement",
      dates: "Du 28/03 au 03/04/2026",
    },
    {
      id: "hotel-3",
      name: "Venise et la lagune",
      location: "Burano, Murano, Torcello",
      price: "2 990€",
      image: "/images/hotels/hotel-3.png",
      description: "7 jours/6 nuits avec train, navettes et hébergement",
      dates: "Du 28/03 au 03/04/2026",
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

  taegQuestion: "Rappelle-moi ce qu’est le TAEG ?",

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
    "Non c’est très clair. Prend le voyage avec le crédit et l’assurance.",

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
  addWalletDoneMessage: "C'est fait, bon voyage !",
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
      id: "financial",
      title: "Mes informations financières",
      color: "purple" as const,
      lastUpdate: "15/02/2026",
      attributeCount: 9,
    },
    {
      id: "housing",
      title: "Mon logement",
      color: "green-teal" as const,
      lastUpdate: "29/01/2026",
      attributeCount: 5,
    },
    {
      id: "health",
      title: "Ma santé",
      color: "pink" as const,
      lastUpdate: "13/02/2026",
      attributeCount: 4,
    },
  ] satisfies WalletCategory[],

  consentRequest: {
    requester: "MonCrédit.com",
    attributeCount: 16,
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
    { name: "Capacité d'emprunt", category: "financial", certified: true },
  ] satisfies WalletAttribute[],
};

// --- Flashback data ---

export const FLASHBACK_TITLE_TEXT = "Quelques jours plus tôt...";

export const FLASHBACK_WALLET_DATA = {
  userName: "Guillaume",
  lastUpdate: "27/01/2026",

  categories: [
    {
      id: "identity",
      title: "Mon identité",
      color: "teal" as const,
      lastUpdate: "11/01/2026",
      attributeCount: 8,
    },
    {
      id: "financial",
      title: "Mes informations financières",
      color: "purple" as const,
      lastUpdate: "",
      attributeCount: 0,
    },
    {
      id: "housing",
      title: "Mon logement",
      color: "green-teal" as const,
      lastUpdate: "",
      attributeCount: 0,
    },
    {
      id: "health",
      title: "Ma santé",
      color: "pink" as const,
      lastUpdate: "",
      attributeCount: 0,
    },
  ] satisfies WalletCategory[],
};

export const FLASHBACK_FINANCIAL_DATA = {
  description:
    "Connectez vos comptes bancaires pour certifier automatiquement vos informations financières dans votre wallet.",
  connectParagraph:
    "La connexion bancaire permet de certifier les attributs suivants :",
  attributes: [
    "Salaire",
    "Autres revenus",
    "Charges mensuelles",
    "Mensualités de crédit",
    "Reste-à-vivre",
    "Indicateurs de risque",
    "Score de crédit",
    "Eligibilité au crédit",
  ],
  consentText:
    "J'autorise Wallet à collecter mes données bancaires pendant 180 jours auprès de l'agrégateur et à les transmettre au fournisseur de score pour certifier mes données.",
  buttonText: "Connecter mes comptes bancaires",
};

export const FLASHBACK_BANK_CONSENT_DATA = {
  title: "Partagez\nvos données bancaires",
  subtitle: "C'est simple, rapide et sécurisé",
  badges: ["Sécurité", "RGPD", "Confidentialité"] as const,
  consentText:
    "J'autorise l'agrégateur à traiter mes données personnelles conformément à la Politique de confidentialité, de manière automatisée à des fins de score, et à les transmettre à Wallet.",
  cguText: "En continuant, vous acceptez les CGU de l'agrégateur.",
  buttonText: "Continuer vers le choix de la banque",
};

export const FLASHBACK_BANK_REDIRECT_DATA = {
  title: "Connectez votre banque",
  bankName: "Revolut",
  bankLogo: "/images/banks/revolut.png",
  steps: [
    {
      title: "Redirection sécurisée",
      description:
        "vers l'application ou le site web de votre banque.",
    },
    {
      title: "Authentification",
      description:
        "avec votre mode d'identification habituel.",
    },
    {
      title: "Retour",
      description:
        "sur ce parcours pour finaliser la transmission de vos données.",
    },
  ],
  disclaimer:
    "En poursuivant, vous pourrez autoriser votre banque à transmettre vos informations bancaires à Algoan.",
  buttonText: "Poursuivre vers ma banque",
};

export const FLASHBACK_BANK_ACCOUNTS_DATA = {
  title: "Accounts access\nrequest",
  subtitle:
    "Authorise Wallet to read your accounts information.\nPermission will expire on 15 Mai 2024.",
  sectionTitle: "Accounts",
  accountName: "EUR",
  accountBalance: "€2 153,32",
  accountFlag: "/images/banks/eu-flag.png",
  infoLabel: "Info I'm providing",
  cancelText: "Cancel",
  authoriseText: "Authorise",
};

export const FLASHBACK_BANK_PROGRESS_DATA = {
  title: "Transmission en cours...",
  waitText: "Patientez s'il vous plaît...",
  warningText: "Merci de ne pas quitter ni rafraîchir\ncette page.",
};

export const FLASHBACK_BANK_WARNING_DATA = {
  title: "Absence de revenu\nsur le compte",
  bankName: "Revolut",
  bankLogo: "/images/banks/revolut.png",
  warningIcon: "/images/icons/icon-warning-orange.svg",
  noIncomeText: "Aucun revenu n'a été détecté\nsur ce compte.",
  addAccountText:
    "Ajoutez le compte sur lequel vous percevez vos revenus pour maximiser vos chances que votre demande soit acceptée.",
  addButtonText: "Ajouter un autre compte",
  continueText: "Continuer sans compte additionnel",
};

export const FLASHBACK_BANK_SELECTION_DATA = {
  title: "Sélectionnez votre banque",
  searchPlaceholder: "Recherchez votre banque",
  suggestionsLabel: "SUGGESTIONS",
  availableLabel: "BANQUES DISPONIBLES",
  suggestions: [
    { id: "credit-mutuel", name: "Crédit\nMutuel", logo: "/images/banks/credit-mutuel.png" },
    { id: "credit-agricole", name: "Crédit\nAgricole", logo: "/images/banks/credit-agricole.png" },
    { id: "caisse-epargne", name: "Caisse\nd'Épargne", logo: "/images/banks/caisse-epargne.png" },
    { id: "banque-postale", name: "La Banque\nPostale", logo: "/images/banks/banque-postale.png" },
    { id: "revolut", name: "Revolut", logo: "/images/banks/revolut.png" },
  ],
  banks: [
    { letter: "A", items: [
      { id: "allianz", name: "Allianz Banque", logo: "/images/banks/allianz.png" },
      { id: "american-express", name: "American Express", logo: "/images/banks/american-express.png" },
      { id: "axa", name: "Axa Banque", logo: "/images/banks/axa.png" },
    ]},
    { letter: "B", items: [
      { id: "banque-populaire", name: "Banque Populaire", logo: "/images/banks/banque-populaire.png" },
      { id: "bnp-paribas", name: "BNP Paribas", logo: "/images/banks/bnp-paribas.png" },
      { id: "boursorama", name: "Boursorama", logo: "/images/banks/boursorama.png" },
    ]},
    { letter: "C", items: [
      { id: "caisse-epargne-list", name: "Caisse d'Épargne", logo: "/images/banks/caisse-epargne.png" },
    ]},
  ],
};

export const FLASHBACK_BANK_REDIRECT_CE_DATA = {
  title: "Connectez votre banque",
  bankName: "Caisse d'Épargne",
  bankLogo: "/images/banks/caisse-epargne.png",
  steps: [
    {
      title: "Redirection sécurisée",
      description: "vers l'application ou le site web de votre banque.",
    },
    {
      title: "Authentification",
      description: "avec votre mode d'identification habituel.",
    },
    {
      title: "Retour",
      description: "sur ce parcours pour finaliser la transmission de vos données.",
    },
  ],
  disclaimer:
    "En poursuivant, vous pourrez autoriser votre banque à transmettre vos informations bancaires à Algoan.",
  buttonText: "Poursuivre vers ma banque",
};

export const FLASHBACK_CE_CONSENT_DATA = {
  title: "Validez votre opération",
  bankLogo: "/images/banks/caisse-epargne.png",
  fraudTitle: "Information Fraude",
  fraudText:
    "Si vous n'êtes pas à l'intiative de cette opération, cliquez sur \"JE REFUSE CETTE OPÉRATION\" et contactez votre conseiller.",
  requestText:
    "Wallet demande un accès temporaire\npour récupérer les informations de\nvos comptes bancaires.",
  authorizeText: "J'autorise cette opération",
  refuseText: "Je refuse cette opération",
};

export const FLASHBACK_CE_AUTHORIZED_DATA = {
  title: "Opération autorisée",
  subtitle:
    "Veuillez retourner sur le site du demandeur pour vous assurer que l'opération a bien été prise en compte.",
  buttonText: "Fermer",
};

export const FLASHBACK_CE_PROGRESS_DATA = {
  title: "Transmission en cours...",
  bankLogo: "/images/banks/caisse-epargne.png",
  waitText: "Patientez s'il vous plaît...",
  warningText: "Merci de ne pas quitter ni rafraîchir\ncette page.",
};

export const FLASHBACK_TRANSMISSION_COMPLETE_DATA = {
  title: "Transmission terminée !",
  banks: [
    { name: "Revolut", logo: "/images/banks/revolut.png" },
    { name: "Caisse d'Épargne", logo: "/images/banks/caisse-epargne.png" },
  ],
  successText: "Données récupérées avec succès",
  addButtonText: "Ajouter un autre compte",
  certifyButtonText: "Certifier mes données",
};

export const FLASHBACK_CERTIFIED_DETAIL_DATA = {
  categoryTitle: "Mes informations financières",
  certifiedDate: "15/02/2026",
  attributes: [
    { label: "Salaire", value: "2 400€" },
    { label: "Autres revenus", value: "300€" },
    { label: "Mensualités de crédit", value: "600€" },
    { label: "Autres charges", value: "120€" },
    { label: "Reste-à-vivre", value: "1 980€" },
    { label: "Alertes de risque", value: "néant" },
    { label: "Score de crédit", value: "780", highlight: true },
  ],
  borrowingCapacity: "8 000€ sur une durée de 48 mois.",
  disclaimer:
    "Ces montants sont basés sur vos transactions bancaires des derniers mois et sont dynamiques. Leur montant peut donc évoluer à chaque mise à jour hebdomadaire de vos données bancaires.",
  buttonText: "Certifier mes données",
};

export const FLASHBACK_WALLET_UPDATED_DATA = {
  userName: "Guillaume",
  lastUpdate: "15/02/2026",
  categories: [
    {
      id: "identity",
      title: "Mon identité",
      color: "teal" as const,
      lastUpdate: "11/01/2026",
      attributeCount: 8,
    },
    {
      id: "financial",
      title: "Mes informations financières",
      color: "purple" as const,
      lastUpdate: "15/02/2026",
      attributeCount: 8,
    },
    {
      id: "housing",
      title: "Mon logement",
      color: "green-teal" as const,
      lastUpdate: "",
      attributeCount: 0,
    },
    {
      id: "health",
      title: "Ma santé",
      color: "pink" as const,
      lastUpdate: "",
      attributeCount: 0,
    },
  ] satisfies WalletCategory[],
};
