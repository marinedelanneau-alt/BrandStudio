export const toneContent = {
  subtitle:
    "Dans cette partie, tu donnes une personnalité à ta marque, tu clarifies son ton et tu poses les bases de sa cohérence visuelle.",
  sections: [
    {
      id: "persona-core",
      title: "Si ta marque était une personne",
      intro:
        "Tu transformes ici la marque en personnage vivant pour rendre sa personnalité plus concrète et plus facile à incarner.",
      exerciseTitle: "Réponds aux questions suivantes :",
      example:
        "Plus ta marque devient concrète, plus ton ton et tes choix créatifs gagnent en cohérence.",
      answers: [
        { key: "personaProfile", label: "Description générale", placeholder: "Décris cette personne de manière vivante et crédible.", type: "textarea" },
        { key: "personaFirstname", label: "Prénom", placeholder: "Prénom de la persona", type: "text" },
        { key: "personaAge", label: "Âge approximatif", placeholder: "Âge ou tranche d'âge", type: "text" },
        { key: "personaJob", label: "Profession", placeholder: "Métier ou rôle principal", type: "text" },
        { key: "personaStyle", label: "Style global ou allure générale", placeholder: "Décris son style, son allure, sa présence.", type: "textarea" },
        { key: "personaTraits", label: "Traits dominants", placeholder: "Liste ses traits principaux.", type: "textarea" },
      ],
      final:
        "Une persona bien posée t'aide à rendre ta marque plus vivante, plus nette et plus cohérente.",
    },
    {
      id: "relations",
      title: "Relations et interactions",
      intro:
        "Tu précises maintenant la façon dont cette personne accueille, réagit et crée du lien.",
      exerciseTitle: "Réponds aux questions suivantes :",
      example:
        "Ce bloc t'aide à transformer une impression vague en posture relationnelle claire.",
      answers: [
        { key: "personaWelcome", label: "Comment accueille-t-elle quelqu'un ?", placeholder: "Décris sa façon d'entrer en relation.", type: "textarea" },
        { key: "personaProblem", label: "Comment réagit-elle face à un problème ?", placeholder: "Décris sa manière de gérer une difficulté.", type: "textarea" },
        { key: "personaFriend", label: "Quel type d'ami ou de conseiller serait-elle ?", placeholder: "Décris la qualité de relation qu'elle crée.", type: "textarea" },
      ],
      final:
        "Une posture relationnelle claire donne de la consistance à ton ton de marque.",
    },
    {
      id: "universe",
      title: "Environnement et univers",
      intro:
        "Les détails concrets rendent ta persona crédible et facilitent les choix visuels et éditoriaux.",
      exerciseTitle: "Réponds aux questions suivantes :",
      example:
        "L'univers de ta marque se joue souvent dans les détails que l'on oublie de formuler.",
      answers: [
        { key: "personaPlace", label: "Son lieu de vie ou de travail idéal", placeholder: "Décris le décor dans lequel cette personne évolue.", type: "textarea" },
        { key: "personaObjects", label: "Objets fétiches sur son bureau", placeholder: "Liste les objets qui la représentent.", type: "textarea" },
        { key: "personaMusic", label: "Musique qu'elle écoute", placeholder: "Décris son univers sonore.", type: "textarea" },
        { key: "signatureSentence", label: "Citation qui la définit", placeholder: "Formule une citation signature qui lui ressemble.", type: "textarea" },
        { key: "personaCanvaLink", label: "Lien Canva pour créer tes fiches persona", placeholder: "https://...", type: "text" },
      ],
      final:
        "Un univers clair rend ta marque plus mémorable et plus facile à décliner.",
    },
    {
      id: "tone-and-baseline",
      title: "Ton et baseline",
      intro:
        "Le ton de voix et la baseline traduisent la personnalité de la marque dans la communication quotidienne.",
      exerciseTitle: "Travaille maintenant ta version finale :",
      example:
        "Une baseline juste se comprend vite, reste cohérente dans le temps et reflète vraiment ta marque.",
      answers: [
        { key: "tone", label: "Ton de voix de la marque", placeholder: "Décris le ton que ta marque doit adopter.", type: "textarea" },
        { key: "toneTable", label: "Tableau est / n'est pas", placeholder: "Précise ce que ton ton incarne et ce qu'il évite.", type: "textarea" },
        { key: "baselineCurrent", label: "Baseline actuelle ou souhaitée", placeholder: "Indique la baseline existante ou l'intention de départ.", type: "textarea" },
        { key: "baselineObjective", label: "Que doit comprendre une personne qui découvre ta marque pour la première fois ?", placeholder: "Formule l'idée essentielle à transmettre.", type: "textarea" },
        { key: "baselineRaw", label: "La phrase brute", placeholder: "Écris une première version sans chercher à la raccourcir.", type: "textarea" },
        { key: "baselineShort", label: "Version simplifiée (moins de 10 mots)", placeholder: "Resserre la formulation.", type: "textarea" },
        { key: "baselineEmotion", label: "Angle émotionnel, bénéfice ou transformation", placeholder: "Travaille la promesse portée par la baseline.", type: "textarea" },
        { key: "baselineTest", label: "Test de compréhension", placeholder: "Vérifie si la phrase reste claire et immédiate.", type: "textarea" },
      ],
      finalField: {
        key: "baselineFinal",
        label: "Ta baseline finale",
        placeholder: "Formule ici la version finale de ta baseline.",
      },
      final:
        "Un ton clair et une baseline juste renforcent l'identité perçue de ta marque à chaque point de contact.",
    },
    {
      id: "visual-coherence",
      title: "Cohérence visuelle",
      intro:
        "Tu termines par les préférences visuelles, les couleurs, le moodboard et les applications concrètes de la marque.",
      exerciseTitle: "Réponds aux questions suivantes :",
      example:
        "La cohérence visuelle ne sert pas à décorer. Elle sert à rendre ta marque plus reconnaissable et plus stable.",
      answers: [
        { key: "favoriteColors", label: "Y a-t-il des couleurs que tu aimes particulièrement ?", placeholder: "Décris les couleurs qui t'attirent.", type: "textarea" },
        { key: "avoidColors", label: "Y a-t-il des couleurs à éviter absolument ?", placeholder: "Précise les couleurs à écarter.", type: "textarea" },
        { key: "primaryColor1", label: "Couleur principale 1", type: "colorrow" },
        { key: "primaryColor2", label: "Couleur principale 2", type: "colorrow" },
        { key: "primaryColor3", label: "Couleur principale 3", type: "colorrow" },
        { key: "secondaryColor1", label: "Couleur secondaire 1", type: "colorrow" },
        { key: "secondaryColor2", label: "Couleur secondaire 2", type: "colorrow" },
        { key: "secondaryColor3", label: "Couleur secondaire 3", type: "colorrow" },
        { key: "imagePhotos", label: "Photos", type: "checkbox" },
        { key: "imageIllustrations", label: "Illustrations", type: "checkbox" },
        { key: "imageMix", label: "Un mix des deux", type: "checkbox" },
        { key: "moodboardAmbiences", label: "Ambiances visuelles à privilégier", placeholder: "Décris les ambiances et intentions visuelles souhaitées.", type: "textarea" },
        { key: "moodboardLink", label: "Moodboard — lien Canva", placeholder: "https://...", type: "text" },
        { key: "uploadReferences", label: "Upload d'images de références", type: "imageupload" },
        { key: "uploadInspiration", label: "Upload de captures ou inspirations", type: "imageupload" },
        { key: "typographyIntentions", label: "Intentions typographiques", placeholder: "Décris la direction typographique recherchée.", type: "textarea" },
        { key: "brandApplications", label: "Applications de la marque", placeholder: "Liste les supports où la marque devra vivre.", type: "textarea" },
        { key: "colorGenerator", label: "Outil de génération des couleurs", type: "colorgenerator" },
      ],
      final:
        "Une cohérence visuelle claire rend ta marque plus stable, plus lisible et plus facile à faire vivre.",
    },
  ],
} as const;

import type { BrandModuleContent } from "./brandStudioSchema";

export const toneModuleContent: BrandModuleContent = {
  id: "tone",
  eyebrow: "Module 3",
  title: "Personnalité & ton",
  description:
    "Cadre l’expression relationnelle et éditoriale de la marque pour garantir une cohérence durable sur tous les supports.",
  summary:
    "La personnalité et le ton servent ensuite de filtre pour écrire, présenter et incarner la marque avec constance.",
  requiredFields: ["tonePersona", "toneVoice", "toneDo", "toneDont", "baselineFinal"],
  sections: [
    {
      id: "persona-section",
      title: "Personnalité",
      intro:
        "Projette ta marque comme une présence identifiable, avec une allure, une attitude et un style reconnaissables.",
      exercise: "Réponds aux questions suivantes :",
      finalNote:
        "Une personnalité claire rend ensuite les choix de ton et de visuels beaucoup plus cohérents.",
      fields: [
        {
          id: "tonePersona",
          label: "Si ta marque était une personne, comment la décrirais-tu ?",
          type: "textarea",
          placeholder: "Décris sa présence, sa posture, son énergie.",
          required: true,
        },
        {
          id: "toneRelationship",
          label: "Quelle relation crée-t-elle avec ses clients ?",
          type: "textarea",
          placeholder: "Décris la qualité de lien ou d’accompagnement perçue.",
        },
      ],
    },
    {
      id: "voice-section",
      title: "Ton de voix",
      intro:
        "Traduis maintenant cette personnalité en règles éditoriales claires pour produire des messages cohérents.",
      exercise: "Travaille maintenant ta ligne éditoriale :",
      finalNote:
        "Un bon ton de voix dit autant ce que la marque exprime que ce qu’elle choisit de ne pas exprimer.",
      fields: [
        {
          id: "toneVoice",
          label: "Comment ta marque doit-elle sonner ?",
          type: "textarea",
          placeholder: "Décris la voix, le rythme et la posture éditoriale.",
          required: true,
        },
        {
          id: "toneDo",
          label: "Ce que ton ton de voix doit incarner",
          type: "textarea",
          placeholder: "Liste les qualités à faire ressentir.",
          required: true,
        },
        {
          id: "toneDont",
          label: "Ce que ton ton de voix doit éviter",
          type: "textarea",
          placeholder: "Liste les travers ou styles à exclure.",
          required: true,
        },
      ],
    },
    {
      id: "baseline-section",
      title: "Baseline",
      intro:
        "Condense enfin l’essentiel dans une phrase qui porte la promesse, la posture ou la transformation de la marque.",
      exercise: "Travaille maintenant ta version finale :",
      finalNote:
        "Une baseline utile se comprend vite, reste juste dans le temps et peut vivre sur plusieurs supports.",
      fields: [
        {
          id: "baselineDraft",
          label: "Première formulation",
          type: "textarea",
          placeholder: "Écris une première version sans chercher à la rendre parfaite.",
        },
        {
          id: "baselineFinal",
          label: "Ta baseline finale",
          type: "textarea",
          placeholder: "Formule ici la version finale la plus claire.",
          required: true,
        },
      ],
    },
  ],
};
