export const positioningContent = {
  subtitle:
    "Dans cette section, tu clarifies à qui tu t'adresses, ce que cette cible traverse et ce qui rend ton positionnement plus net.",
  sections: [
    {
      id: "target",
      title: "Cible stratégique",
      intro:
        "Ici, l'objectif est d'être précis. Mieux vaut une cible claire qu'une cible trop large.",
      exerciseTitle: "Réponds aux questions suivantes :",
      promptItems: [
        "À quel moment précis intervient ta marque ?",
        "Quelle est la situation exacte de ton client lorsqu'il te contacte ?",
        "Qu'a-t-il déjà essayé ?",
        "Qu'est-ce qu'il refuse ?",
      ],
      example:
        "Plus ta cible est précise, plus ton discours devient juste, utile et crédible.",
      answers: [
        {
          key: "targetWho1",
          label: "À qui t'adresses-tu principalement ? — réponse 1",
          placeholder: "Décris un premier angle de cible précis.",
        },
        {
          key: "targetWho2",
          label: "À qui t'adresses-tu principalement ? — réponse 2",
          placeholder: "Ajoute une deuxième formulation plus fine si besoin.",
        },
        {
          key: "targetWho3",
          label: "À qui t'adresses-tu principalement ? — réponse 3",
          placeholder: "Teste une dernière formulation plus resserrée.",
        },
        {
          key: "targetFrustration1",
          label: "Quels problèmes ou frustrations rencontre cette cible ? — réponse 1",
          placeholder: "Décris une première frustration concrète.",
        },
        {
          key: "targetFrustration2",
          label: "Quels problèmes ou frustrations rencontre cette cible ? — réponse 2",
          placeholder: "Ajoute un autre point de tension important.",
        },
        {
          key: "targetFrustration3",
          label: "Quels problèmes ou frustrations rencontre cette cible ? — réponse 3",
          placeholder: "Complète avec une dernière frustration utile.",
        },
      ],
      final:
        "Plus tu précises ta cible, plus ta marque devient facile à comprendre et à choisir.",
    },
    {
      id: "difference",
      title: "Différenciation",
      intro:
        "Ton angle peut se jouer sur la méthode, la posture, l'expérience client, la spécialisation ou le niveau d'exigence.",
      exerciseTitle: "Réponds aux questions suivantes :",
      promptItems: [
        "Qu'est-ce qui te distingue réellement ?",
        "Pourquoi devrait-on te choisir toi ?",
      ],
      example:
        "Une différence claire n'a pas besoin d'être spectaculaire. Elle doit surtout être nette et assumée.",
      answers: [
        {
          key: "difference",
          label: "Qu'est-ce qui te distingue de tes concurrents ?",
          placeholder: "Décris ce qui fait vraiment ta différence.",
        },
        {
          key: "whyYou",
          label: "Pourquoi devrait-on te choisir toi ?",
          placeholder: "Explique pourquoi ton approche mérite d'être choisie.",
        },
      ],
      final:
        "Une différenciation claire renforce ton positionnement sans surjouer la promesse.",
    },
    {
      id: "competition",
      title: "Concurrence et positionnement",
      intro:
        "Un bon positionnement assume une différence. Tu n'as pas besoin d'être tout pour tout le monde. Tu dois être clair.",
      exerciseTitle: "Travaille maintenant ta version finale :",
      promptItems: [
        "Observe les acteurs proches de toi.",
        "Identifie ce qu'ils mettent en avant.",
        "Clarifie ce que tu choisis d'incarner autrement.",
      ],
      example:
        "Comparer ne sert pas à copier. Cela sert à rendre ton angle plus lisible.",
      answers: [
        { key: "competitor1a", label: "Acteur proche 1", placeholder: "Nom ou type d'acteur" },
        { key: "competitor1b", label: "Ce qu'il met en avant 1", placeholder: "Message principal" },
        { key: "competitor1c", label: "Ce que tu incarnes différemment 1", placeholder: "Ta différence" },
        { key: "competitor2a", label: "Acteur proche 2", placeholder: "Nom ou type d'acteur" },
        { key: "competitor2b", label: "Ce qu'il met en avant 2", placeholder: "Message principal" },
        { key: "competitor2c", label: "Ce que tu incarnes différemment 2", placeholder: "Ta différence" },
        { key: "competitor3a", label: "Acteur proche 3", placeholder: "Nom ou type d'acteur" },
        { key: "competitor3b", label: "Ce qu'il met en avant 3", placeholder: "Message principal" },
        { key: "competitor3c", label: "Ce que tu incarnes différemment 3", placeholder: "Ta différence" },
        {
          key: "competitors",
          label: "Qui sont tes principaux concurrents ?",
          placeholder: "Liste les acteurs qui occupent le même terrain que toi.",
        },
        {
          key: "whatILike",
          label: "Ce que tu apprécies dans leur communication",
          placeholder: "Repère ce qui te semble fort ou inspirant.",
        },
        {
          key: "whatIDislike",
          label: "Ce que tu ne veux pas reproduire",
          placeholder: "Repère ce qui manque de clarté, de justesse ou d'alignement.",
        },
      ],
      finalField: {
        key: "positioningSentence",
        label: "Ton positionnement final",
        placeholder: "Formule ici la version finale de ton positionnement.",
      },
      final:
        "Un positionnement clair t'aide à parler plus juste, à choisir plus vite et à te différencier sans forcer.",
    },
  ],
} as const;

import type { BrandModuleContent } from "./brandStudioSchema";

export const positioningModuleContent: BrandModuleContent = {
  id: "positioning",
  eyebrow: "Module 2",
  title: "Positionnement",
  description:
    "Rends ta marque plus lisible avec une cible claire, une différence assumée et une formulation qui t’aide à être choisie.",
  summary:
    "Le positionnement transforme tes intuitions en angle clair, compréhensible et défendable.",
  requiredFields: [
    "positioningTarget",
    "positioningProblem",
    "positioningDifference",
    "positioningFinal",
  ],
  sections: [
    {
      id: "target-section",
      title: "Cible",
      intro:
        "Plus ta cible est précise, plus ton discours, ton offre et ta promesse deviennent convaincants.",
      exercise: "Réponds aux questions suivantes :",
      finalNote:
        "Une cible claire n’exclut pas. Elle rend simplement la marque plus lisible et plus facile à choisir.",
      fields: [
        {
          id: "positioningTarget",
          label: "À qui t’adresses-tu en priorité ?",
          type: "textarea",
          placeholder: "Décris le profil le plus important pour la marque.",
          required: true,
        },
        {
          id: "positioningProblem",
          label: "Quel problème traverse cette cible ?",
          type: "textarea",
          placeholder: "Précise le problème, la frustration ou la situation vécue.",
          required: true,
        },
      ],
    },
    {
      id: "difference-section",
      title: "Différence",
      intro:
        "Tu n’as pas besoin d’être spectaculaire. Tu dois être nette, identifiable et crédible.",
      exercise: "Réponds aux questions suivantes :",
      finalNote:
        "Une vraie différence peut venir de la méthode, de la posture, du rythme, de l’exigence ou de l’expérience.",
      fields: [
        {
          id: "positioningDifference",
          label: "Qu’est-ce qui te distingue réellement ?",
          type: "textarea",
          placeholder: "Décris ce que tu assumes de faire différemment.",
          required: true,
        },
        {
          id: "positioningProof",
          label: "Qu’est-ce qui rend cette différence crédible ?",
          type: "textarea",
          placeholder: "Ajoute une preuve ou un élément de réalité.",
        },
      ],
    },
    {
      id: "statement-section",
      title: "Positionnement final",
      intro:
        "Rassemble maintenant les éléments précédents dans une formulation simple, utile et mémorisable.",
      exercise: "Travaille maintenant ta version finale :",
      finalNote:
        "Un bon positionnement sert autant à te présenter qu’à prendre des décisions cohérentes dans le temps.",
      fields: [
        {
          id: "positioningFinal",
          label: "Ton positionnement final",
          type: "textarea",
          placeholder: "Formule ici la phrase finale de positionnement.",
          required: true,
        },
      ],
    },
  ],
};
