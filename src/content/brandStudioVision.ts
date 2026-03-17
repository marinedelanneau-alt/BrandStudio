import type { Field } from "../types/brand";

export type VisionPrompt = {
  key: string;
  label: string;
  placeholder: string;
};

export type VisionValueBlock = {
  valueKey: string;
  meaningKey: string;
  concreteKey: string;
  communicationKey: string;
  finalKey: string;
};

export const visionTrackedFields: Field[] = [
  { key: "brandName", label: "Nom de ta marque", type: "text" },
  { key: "activity", label: "Décris ton activité", type: "textarea" },
  { key: "goal", label: "Objectif principal", type: "textarea" },
  { key: "missionAudience", label: "Mission - cible", type: "text" },
  { key: "missionOutcome", label: "Mission - résultat", type: "text" },
  { key: "missionMethod", label: "Mission - levier", type: "text" },
  { key: "missionFormula", label: "Mission - phrase essentielle", type: "textarea" },
  { key: "missionWhy", label: "Pourquoi cette activité", type: "textarea" },
  { key: "clientProblem", label: "Problème client", type: "textarea" },
  { key: "missionLong", label: "Mission longue", type: "textarea" },
  { key: "missionShort", label: "Mission courte", type: "textarea" },
  { key: "missionInternal", label: "Mission interne", type: "textarea" },
  { key: "missionFinal", label: "Mission finale", type: "textarea" },
  { key: "visionWhere", label: "Vision dans 3-5 ans", type: "textarea" },
  { key: "visionImpact", label: "Impact visé", type: "textarea" },
  { key: "visionMarket", label: "Place sur le marché", type: "textarea" },
  { key: "visionClients", label: "Clients visés", type: "textarea" },
  { key: "transformationClientsValue", label: "Transformation client", type: "text" },
  { key: "transformationImpactValue", label: "Transformation globale", type: "text" },
  { key: "transformationClients", label: "Transformation client - phrase", type: "textarea" },
  { key: "transformationImpact", label: "Transformation impact - phrase", type: "textarea" },
  { key: "visionLong", label: "Vision longue", type: "textarea" },
  { key: "visionShort", label: "Vision courte", type: "textarea" },
  { key: "visionInternal", label: "Vision interne", type: "textarea" },
  { key: "visionFinal", label: "Vision finale", type: "textarea" },
  ...Array.from({ length: 10 }, (_, index) => ({
    key: `valuesBrainstorm${index + 1}`,
    label: `Mot-clé ${index + 1}`,
    type: "text" as const,
  })),
  { key: "value1", label: "Valeur 1", type: "text" },
  { key: "value1Meaning", label: "Valeur 1 - sens", type: "textarea" },
  { key: "value1Concrete", label: "Valeur 1 - concret", type: "textarea" },
  { key: "value1Communication", label: "Valeur 1 - communication", type: "textarea" },
  { key: "value1Action", label: "Valeur 1 - finale", type: "textarea" },
  { key: "value2", label: "Valeur 2", type: "text" },
  { key: "value2Meaning", label: "Valeur 2 - sens", type: "textarea" },
  { key: "value2Concrete", label: "Valeur 2 - concret", type: "textarea" },
  { key: "value2Communication", label: "Valeur 2 - communication", type: "textarea" },
  { key: "value2Action", label: "Valeur 2 - finale", type: "textarea" },
  { key: "value3", label: "Valeur 3", type: "text" },
  { key: "value3Meaning", label: "Valeur 3 - sens", type: "textarea" },
  { key: "value3Concrete", label: "Valeur 3 - concret", type: "textarea" },
  { key: "value3Communication", label: "Valeur 3 - communication", type: "textarea" },
  { key: "value3Action", label: "Valeur 3 - finale", type: "textarea" },
  { key: "beforeStateValue", label: "Avant", type: "text" },
  { key: "beforeState", label: "Avant - phrase", type: "textarea" },
  { key: "afterStateValue", label: "Après", type: "text" },
  { key: "afterState", label: "Après - phrase", type: "textarea" },
  { key: "promisedResult", label: "Résultat promis", type: "textarea" },
  { key: "promisedExperience", label: "Expérience promise", type: "textarea" },
  { key: "promisedPosture", label: "Posture promise", type: "textarea" },
  { key: "promiseWeakVsStrong", label: "Promesse tangible vs promesse vague", type: "textarea" },
  { key: "promiseExplicit", label: "Promesse explicite", type: "textarea" },
  { key: "promiseIntegrated", label: "Promesse intégrée", type: "textarea" },
  { key: "promiseFinal", label: "Promesse finale", type: "textarea" },
];

export const visionPageContent = {
  subtitle:
    "Dans cette section, tu poses l’ADN de ta marque pour clarifier ce qu’elle porte, ce qu’elle défend et ce qui la rend cohérente dans le temps.",
  intro: {
    title: "Introduction ADN de marque",
    intro:
      "L’ADN de marque est le socle de toute identité forte et cohérente. Quand il est clair, tes décisions deviennent plus simples, plus lisibles et plus durables.",
    exerciseTitle: "L’ADN de marque, quésaco ?",
    exerciseDescription:
      "Lis ces quatre repères pour comprendre ce que l’ADN de marque rend possible.",
    highlights: [
      "Créer une identité visuelle cohérente et reconnaissable.",
      "Aligner la communication, le discours et les visuels.",
      "Prendre des décisions plus facilement.",
      "Faire évoluer la marque sans la dénaturer.",
    ],
    takeaway:
      "Un ADN clair transforme une suite d’idées en direction de marque solide.",
  },
  basics: {
    title: "Bases de départ",
    intro:
      "Avant de formuler ta mission, ta vision et ta promesse, pose une base simple et honnête. Cette étape donne du relief à tout le reste.",
    supportText:
      "Prends le temps de répondre avec des mots simples, concrets et sincères. Plus cette base est juste, plus les sections suivantes seront faciles à construire.",
    exercises: [
      {
        title: "Décris ton activité",
        fieldKey: "activity",
        placeholder:
          "Décris ce que tu proposes, à qui tu t’adresses et dans quel contexte ton activité intervient.",
      },
      {
        title: "Clarifie ton objectif principal",
        fieldKey: "goal",
        placeholder:
          "Explique ce que tu veux obtenir grâce à ce travail de marque.",
      },
    ],
    finalPrompt: {
      label: "Nom de ta marque",
      placeholder: "Nom de la marque",
    },
    takeaway:
      "Une base de départ claire t’aide à travailler le reste avec plus de précision.",
  },
  mission: {
    title: "Mission",
    intro:
      "Ta mission exprime la raison d’être de ta marque. Elle explique pourquoi ton activité existe et ce qu’elle cherche à changer.",
    prompts: [
      "Pourquoi la marque existe-t-elle ?",
      "Pourquoi as-tu créé cette activité ?",
      "Quel problème cherches-tu à résoudre pour tes clients ?",
    ],
    example:
      "Nous aidons les entrepreneurs à structurer une identité de marque claire et stratégique afin qu’ils puissent communiquer avec cohérence et confiance.",
    versions: [
      {
        key: "missionLong",
        label: "Version explicative (3-4 lignes)",
        placeholder:
          "Formule une version claire pour ton site, ta présentation ou un support détaillé.",
      },
      {
        key: "missionShort",
        label: "Version synthétique (1 phrase)",
        placeholder: "Formule une phrase courte, nette et facile à réutiliser.",
      },
      {
        key: "missionInternal",
        label: "Version interne",
        placeholder: "Formule une version qui guide vraiment tes décisions.",
      },
    ],
    finalKey: "missionFinal",
    finalLabel: "Ta mission",
    finalPlaceholder: "Formule ici la version finale de ta mission.",
    takeaway:
      "Une mission claire transforme ton activité en engagement lisible.",
    consistencyCheck: {
      title: "Teste la cohérence avec cette question :",
      question:
        "Si tu lances une nouvelle offre, est-elle vraiment alignée avec ta mission ?",
      answer:
        "Si la réponse reste floue, ta mission a encore besoin d’être clarifiée.",
    },
  },
  vision: {
    title: "Vision",
    intro:
      "Ta vision projette ta marque dans le futur. Elle donne une direction et une ambition à long terme.",
    prompts: [
      {
        key: "visionWhere",
        label: "Où aimerais-tu que ta marque soit dans 3-5 ans ?",
        placeholder: "Projette ta marque dans 3-5 ans.",
      },
      {
        key: "visionImpact",
        label: "Quel impact veux-tu avoir ?",
        placeholder: "Décris l’impact que tu veux créer.",
      },
      {
        key: "visionMarket",
        label: "Quelle place occupera-t-elle sur son marché ?",
        placeholder: "Décris la place visée sur ton marché.",
      },
      {
        key: "visionClients",
        label: "Avec quel type de clients travailleras-tu ?",
        placeholder: "Décris les clients avec qui tu veux travailler.",
      },
    ] as VisionPrompt[],
    example:
      "Créer un studio reconnu pour sa capacité à structurer des marques claires, désirables et durables.",
    versions: [
      {
        key: "visionLong",
        label: "Version explicative (3-4 lignes)",
        placeholder: "Formule une version développée de ta vision.",
      },
      {
        key: "visionShort",
        label: "Version synthétique (1 phrase)",
        placeholder: "Formule une phrase courte et claire.",
      },
      {
        key: "visionInternal",
        label: "Version interne",
        placeholder: "Formule une phrase pour toi uniquement.",
      },
    ],
    finalKey: "visionFinal",
    finalLabel: "Ta vision finale",
    finalPlaceholder: "Formule ici la version finale de ta vision.",
    takeaway:
      "Une vision claire transforme chaque décision en choix stratégique.",
  },
  values: {
    title: "Valeurs",
    intro:
      "Les valeurs guident ton comportement et ta communication. Elles n’ont de sens que si elles influencent vraiment ta façon d’agir.",
    prompts: [
      "Est-ce que cette valeur influence mes décisions ?",
      "Est-ce que je serais prêt à perdre un client pour la respecter ?",
      "Est-ce que mes clients la perçoivent réellement ?",
    ],
    brainstormPlaceholder: "Ajoute un mot-clé",
    valueBlocks: [
      {
        valueKey: "value1",
        meaningKey: "value1Meaning",
        concreteKey: "value1Concrete",
        communicationKey: "value1Communication",
        finalKey: "value1Action",
      },
      {
        valueKey: "value2",
        meaningKey: "value2Meaning",
        concreteKey: "value2Concrete",
        communicationKey: "value2Communication",
        finalKey: "value2Action",
      },
      {
        valueKey: "value3",
        meaningKey: "value3Meaning",
        concreteKey: "value3Concrete",
        communicationKey: "value3Communication",
        finalKey: "value3Action",
      },
    ] as VisionValueBlock[],
    takeaway:
      "Des valeurs utiles ne décorent pas ton discours, elles structurent tes choix.",
  },
  promise: {
    title: "Promesse de marque",
    intro:
      "Ta promesse exprime ce que tes clients peuvent attendre de toi de manière fiable, concrète et constante.",
    comparison: [
      "Mission : pourquoi ta marque agit.",
      "Vision : où ta marque veut aller.",
      "Baseline : comment ta marque se résume en quelques mots.",
      "Promesse : ce que ton client peut réellement attendre de toi.",
    ],
    beforeAfterExamples: [
      "Avant : mes clients avancent sans cadre clair.",
      "Après : mes clients repartent avec une base de marque structurée et directement activable.",
    ],
    examples: [
      "Promesse vague : Je t’aide à améliorer ta communication.",
      "Promesse tangible : Je t’aide à structurer une identité de marque claire et exploitable en autonomie.",
    ],
    prompts: [
      {
        key: "promisedResult",
        label: "Résultat promis",
        placeholder: "Formule le résultat concret que ton client peut attendre.",
      },
      {
        key: "promisedExperience",
        label: "Expérience promise",
        placeholder: "Formule l’expérience que tu promets tout au long du parcours.",
      },
      {
        key: "promisedPosture",
        label: "Posture promise",
        placeholder: "Formule la posture ou la qualité de relation que ton client peut attendre.",
      },
    ] as VisionPrompt[],
    versions: [
      {
        key: "promiseWeakVsStrong",
        label: "Promesse tangible VS promesse vague",
        placeholder:
          "Compare ici une formulation trop vague avec une formulation plus concrète et crédible.",
      },
      {
        key: "promiseExplicit",
        label: "Version explicite",
        placeholder: "Formule une promesse claire, simple et tangible.",
      },
      {
        key: "promiseIntegrated",
        label: "Version intégrée",
        placeholder:
          "Formule une version qui s’intègre naturellement dans ton discours de marque.",
      },
    ],
    finalKey: "promiseFinal",
    finalLabel: "Ta promesse finale",
    finalPlaceholder: "Formule ici la version finale de ta promesse.",
    takeaway:
      "Une promesse claire transforme la confiance en engagement durable.",
  },
} as const;
