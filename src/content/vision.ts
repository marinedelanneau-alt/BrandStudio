export {
  visionPageContent,
  visionTrackedFields,
  type VisionPrompt,
  type VisionValueBlock,
} from "./brandStudioVision";

import type { BrandModuleContent } from "./brandStudioSchema";

export const visionModuleContent: BrandModuleContent = {
  id: "vision",
  eyebrow: "Module 1",
  title: "Vision & marque",
  description:
    "Clarifie le socle stratégique de ta marque pour que les futures décisions visuelles, éditoriales et commerciales soient cohérentes.",
  summary:
    "Mission, vision, valeurs et promesse deviennent ici des décisions utilisables dans toute l’application.",
  requiredFields: ["mission", "vision", "promise", "value-0", "value-1", "value-2"],
  sections: [
    {
      id: "mission-section",
      title: "Mission",
      intro:
        "Ta mission explique pourquoi ta marque existe et ce qu’elle cherche à rendre possible pour ses clients.",
      exercise: "Réponds aux questions suivantes puis travaille maintenant ta version finale :",
      finalNote:
        "Une mission juste doit pouvoir guider les décisions, la communication, l’offre et l’expérience que tu proposes.",
      fields: [
        {
          id: "missionWhy",
          label: "Pourquoi cette marque existe-t-elle ?",
          type: "textarea",
          placeholder: "Décris la raison d’être derrière ton activité.",
          required: true,
        },
        {
          id: "missionProblem",
          label: "Quel problème cherches-tu à résoudre ?",
          type: "textarea",
          placeholder: "Décris la tension ou le besoin que tu veux traiter.",
          required: true,
        },
        {
          id: "mission",
          label: "Ta mission finale",
          type: "textarea",
          placeholder: "Formule ici ta mission en une phrase claire et structurante.",
          required: true,
        },
        {
          id: "missionGuidesDecision",
          label: "Ta mission guide tes décisions",
          type: "checkbox",
        },
        {
          id: "missionGuidesCommunication",
          label: "Ta mission guide ta communication",
          type: "checkbox",
        },
        {
          id: "missionGuidesOffer",
          label: "Ta mission guide ton offre",
          type: "checkbox",
        },
        {
          id: "missionGuidesExperience",
          label: "Ta mission guide l’expérience proposée",
          type: "checkbox",
        },
      ],
    },
    {
      id: "vision-section",
      title: "Vision",
      intro:
        "Ta vision projette la marque dans le futur et donne une direction claire aux choix que tu feras ensuite.",
      exercise: "Réponds aux questions suivantes puis travaille maintenant ta version finale :",
      finalNote:
        "Une vision utile doit aider à arbitrer, à prioriser et à garder le cap quand l’activité évolue.",
      fields: [
        {
          id: "visionHorizon",
          label: "Où veux-tu emmener cette marque dans les prochaines années ?",
          type: "textarea",
          placeholder: "Projette la marque avec ambition, mais de façon concrète.",
          required: true,
        },
        {
          id: "visionImpact",
          label: "Quel impact veux-tu créer ?",
          type: "textarea",
          placeholder: "Décris la transformation ou la place visée.",
          required: true,
        },
        {
          id: "vision",
          label: "Ta vision finale",
          type: "textarea",
          placeholder: "Formule ici ta vision en une phrase claire.",
          required: true,
        },
      ],
    },
    {
      id: "values-section",
      title: "Valeurs",
      intro:
        "Les valeurs servent de cadre de décision. Elles ne doivent pas seulement être belles, elles doivent être vivantes.",
      exercise: "Travaille maintenant ta sélection finale de valeurs :",
      finalNote:
        "Choisis des valeurs suffisamment concrètes pour influencer ton discours, tes choix et ta manière de collaborer.",
      fields: [
        {
          id: "value-0",
          label: "Valeur clé 1",
          type: "text",
          placeholder: "Exemple : Clarté",
          required: true,
        },
        {
          id: "value-1",
          label: "Valeur clé 2",
          type: "text",
          placeholder: "Exemple : Exigence",
          required: true,
        },
        {
          id: "value-2",
          label: "Valeur clé 3",
          type: "text",
          placeholder: "Exemple : Transmission",
          required: true,
        },
      ],
    },
    {
      id: "promise-section",
      title: "Promesse",
      intro:
        "La promesse traduit ce que le client peut attendre de toi de manière fiable, tangible et répétable.",
      exercise: "Réponds aux questions suivantes puis travaille maintenant ta version finale :",
      finalNote:
        "Une promesse forte crée de la confiance parce qu’elle se vit réellement dans ton offre et dans ton expérience client.",
      fields: [
        {
          id: "promiseBefore",
          label: "Dans quel état arrive ton client avant de travailler avec toi ?",
          type: "textarea",
          placeholder: "Décris le point de départ.",
          required: true,
        },
        {
          id: "promiseAfter",
          label: "Dans quel état ressort-il après ton accompagnement ?",
          type: "textarea",
          placeholder: "Décris le résultat ou le changement perçu.",
          required: true,
        },
        {
          id: "promise",
          label: "Ta promesse finale",
          type: "textarea",
          placeholder: "Formule ici la promesse centrale de ta marque.",
          required: true,
        },
      ],
    },
  ],
};
