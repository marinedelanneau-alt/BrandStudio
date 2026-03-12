import type { Module } from "../types/brand";
import { brandAssets } from "../lib/brand-assets";

export const modules: Module[] = [
  {
    id: "dashboard",
    kind: "dashboard",
    eyebrow: "Accueil",
    title: "En route vers ta nouvelle stratégie de marque",
    subtitle:
      "Bienvenue dans le Brand Studio. Ce guide est le document de référence de ton identité, un kit clé en main pour poser les bases d’une marque forte.",
    accent: "yellow",
    quote:
      "Utilise-le comme un cadre : il t’aidera à créer, décliner et faire évoluer ta marque en toute autonomie.",
    sections: [
      {
        title: "Ce que vous allez construire ici",
        body:
          "Au fil des sections, vous allez clarifier l’ADN de votre marque, définir votre positionnement, structurer votre baseline, construire votre direction artistique, poser les règles d’utilisation de votre identité et apprendre à décliner votre marque en toute autonomie.",
      },
      {
        title: "Comment utiliser Brand Studio",
        body:
          "Je te conseille de suivre les sections dans l’ordre, de prendre ton temps, et de t’appuyer sur les exemples fournis. Ce guide n’est pas figé : il évoluera avec ta marque.",
      },
    ],
  },
  {
    id: "about",
    kind: "module",
    eyebrow: "Qui te propose cette offre ?",
    title: "Qui te propose cette offre ?",
    subtitle:
      "Avant de commencer, découvre qui a conçu Brand Studio et dans quelle intention ce programme a été imaginé.",
    accent: "sage",
    example:
      "Je suis Marine et je vous accompagne sur toutes vos actions de communication pour écrire et donner vie à votre histoire, vos valeurs.",
    steps: [
      {
        id: "about-marine",
        title: "Présentation",
        description:
          "Après une dizaine d’années passée dans le milieu salarial en tant que chargée de communication, j’ai décidé de mettre mon expérience et mes compétences au service des entrepreneurs et PME.",
        fields: [
          {
            key: "instagramLink",
            label: "Instagram",
            type: "text",
            placeholder: "https://...",
          },
          {
            key: "linkedinLink",
            label: "LinkedIn",
            type: "text",
            placeholder: "https://...",
          },
          {
            key: "websiteLink",
            label: "Mon site internet",
            type: "text",
            placeholder: "https://...",
          },
        ],
      },
    ],
  },
  {
    id: "vision-marque",
    kind: "module",
    eyebrow: "Section 1",
    title: "Vision & marque",
    subtitle:
      "Dans cette section, on va travailler sur l’ADN de ta marque. L’ADN, c’est le socle de tout : pourquoi ta marque existe, ce qu’elle défend, et ce qui la rend unique.",
    accent: "terracotta",
    introNote:
      "Sans ADN clair, une identité visuelle devient décorative et incohérente dans le temps. Avec un ADN solide, chaque choix graphique devient logique et aligné.",
    steps: [
      {
        id: "adn-intro",
        title: "L’ADN de marque, quésaco ?",
        description:
          "L’ADN de marque est la base de toute identité forte et cohérente.",
        insightTitle: "L’ADN de marque permet notamment",
        insight:
          "de créer une identité visuelle cohérente et reconnaissable, d’aligner communication, discours et visuels, de prendre des décisions plus facilement et de faire évoluer la marque sans la dénaturer.",
        fields: [
          { key: "brandName", label: "Nom de ta marque", type: "text" },
          {
            key: "activity",
            label: "Peux-tu décrire ton activité en quelques phrases ?",
            type: "textarea",
          },
          {
            key: "goal",
            label: "Quel est ton objectif principal avec ce (re)branding ?",
            type: "textarea",
          },
          {
            key: "funReminder",
            label: "Et surtout, amuses toi !",
            type: "textarea",
          },
        ],
      },
      {
        id: "mission",
        title: "Mission",
        description:
          "Ta mission exprime la raison d’être de ta marque. Elle explique pourquoi ton activité existe et ce que tu cherches à apporter à tes clients.",
        note:
          "Beaucoup confondent mission et activité. La mission ne décrit pas ce que vous faites.",
        audioTitle: "Comprendre la mission de marque",
        audioDescription:
          "Pourquoi la mission guide toute la suite du guide.",
        checklist: [
          "Une cible claire",
          "Un problème réel",
          "Une transformation concrète",
          "La mission doit pouvoir guider vos offres et décisions",
        ],
        exampleText:
          "Exemple : Nous aidons les entrepreneurs à structurer une identité de marque claire et stratégique afin qu’ils puissent communiquer avec cohérence et confiance.",
        fields: [
          {
            key: "missionFormula",
            label:
              "Complète la phrase : Ma marque existe pour aider [...] à [...] grâce à [...].",
            type: "textarea",
          },
          {
            key: "missionWhy",
            label: "Pourquoi as-tu créé cette activité ?",
            type: "textarea",
          },
          {
            key: "clientProblem",
            label:
              "Quel problème cherches-tu à résoudre pour tes clients ?",
            type: "textarea",
          },
          {
            key: "missionLong",
            label:
              "Version explicative (3–4 lignes) — Pour votre site ou présentation",
            type: "textarea",
          },
          {
            key: "missionShort",
            label: "Version synthétique (1 phrase) — Pour vos supports",
            type: "textarea",
          },
          {
            key: "missionInternal",
            label:
              "Version interne (ultra claire) — Pour guider vos décisions",
            type: "textarea",
          },
          {
            key: "missionFinal",
            label: "Ta Mission ➡️",
            type: "textarea",
          },
        ],
        summaryFields: ["missionFormula", "missionFinal"],
      },
      {
        id: "vision",
        title: "Vision",
        description:
          "Ta vision projette ta marque dans le futur. Elle donne une direction et une ambition à long terme.",
        note:
          "Ta vision agit comme une boussole. Elle t’aide à prendre des décisions cohérentes.",
        checklist: [
          "Une marque sans vision avance",
          "Une marque avec vision construit",
          "Une vision claire transforme chaque décision en choix stratégique",
        ],
        fields: [
          {
            key: "visionWhere",
            label: "Où aimerais-tu que ta marque soit dans 3 à 5 ans ?",
            type: "textarea",
          },
          {
            key: "visionImpact",
            label: "Quel impact veux-tu avoir ?",
            type: "textarea",
          },
          {
            key: "visionMarket",
            label: "Quelle place occupera t-elle sur son marché ?",
            type: "textarea",
          },
          {
            key: "visionClients",
            label: "Avec quel type de clients tu travaillera ?",
            type: "textarea",
          },
          {
            key: "transformationClients",
            label: "Grâce à ma marque, mes clients pourront...",
            type: "textarea",
          },
          {
            key: "transformationImpact",
            label: "Si ma marque réussit pleinement, cela changera...",
            type: "textarea",
          },
          {
            key: "brandingGoal",
            label: "Que souhaites-tu obtenir grâce à ce branding ?",
            type: "textarea",
          },
          {
            key: "visionLong",
            label: "Version longue (3-4 lignes)",
            type: "textarea",
          },
          {
            key: "visionShort",
            label: "Version synthétique (1 phrase claire)",
            type: "textarea",
          },
          {
            key: "visionInternal",
            label: "Version interne (une phrase pour vous uniquement)",
            type: "textarea",
          },
          {
            key: "visionFinal",
            label: "Ta Vision ➡️",
            type: "textarea",
          },
        ],
        summaryFields: ["visionShort", "visionFinal"],
      },
      {
        id: "values",
        title: "Valeurs",
        description:
          "Les valeurs guident ton comportement et ta communication.",
        note:
          "Une valeur n’existe que si elle influence un comportement.",
        checklist: [
          "Est-ce que cette valeur influence mes décisions ?",
          "Est-ce que je serais prêt(e) à perdre un client pour la respecter ?",
          "Est-ce que mes clients la perçoivent réellement ?",
        ],
        fields: [
          {
            key: "valuesBrainstorm",
            label: "Liste 10 mots qui résonnent avec vous",
            type: "textarea",
          },
          {
            key: "value1",
            label: "Valeur 1 — formulation finale",
            type: "textarea",
          },
          {
            key: "value1Action",
            label:
              "Valeur 1 — Cela signifie que je / Concrètement cela se traduit par / Dans ma communication cela donne",
            type: "textarea",
          },
          {
            key: "value2",
            label: "Valeur 2 — formulation finale",
            type: "textarea",
          },
          {
            key: "value2Action",
            label: "Valeur 2 — explication orientée action",
            type: "textarea",
          },
          {
            key: "value3",
            label: "Valeur 3 — formulation finale",
            type: "textarea",
          },
          {
            key: "value3Action",
            label:
              "Valeur 3 — lien avec votre posture ou votre communication",
            type: "textarea",
          },
        ],
        summaryFields: ["value1", "value2", "value3"],
      },
      {
        id: "promise",
        title: "Promesse de la marque",
        description:
          "Ta promesse est l’engagement que tu prends envers tes clients.",
        note:
          "Une promesse forte crée de la confiance. Une promesse floue crée de la déception.",
        insightTitle: "Promesse vs Mission vs Baseline",
        insight:
          "Mission → Pourquoi est-ce que tu agis. Vision → Où est-ce que tu vas. Baseline → Comment tu te résume. Promesse → Ce que le client peut attendre de toi.",
        fields: [
          {
            key: "beforeState",
            label: "Avant moi, mes clients sont...",
            type: "textarea",
          },
          {
            key: "afterState",
            label: "Après moi, mes clients sont...",
            type: "textarea",
          },
          {
            key: "promiseWeakVsStrong",
            label: "Promesse tangible vs promesse vague",
            type: "textarea",
          },
          {
            key: "promisedResult",
            label: "Résultat promis",
            type: "textarea",
          },
          {
            key: "promisedExperience",
            label: "Expérience promise",
            type: "textarea",
          },
          {
            key: "promisedPosture",
            label: "Posture promise",
            type: "textarea",
          },
          {
            key: "promiseFinal",
            label: "Ta promesse finale",
            type: "textarea",
          },
        ],
        summaryFields: ["beforeState", "afterState", "promiseFinal"],
      },
    ],
  },
  {
    id: "positionnement",
    kind: "module",
    eyebrow: "Section 2",
    title: "Positionnement",
    subtitle:
      "Le positionnement va te permettre de clarifier à qui tu t’adresses et pourquoi on te choisit toi.",
    accent: "yellow",
    banner: brandAssets.bannerPositioning,
    introNote:
      "Le positionnement va te permettre de clarifier à qui tu t’adresses et pourquoi on te choisit toi.",
    steps: [
      {
        id: "target",
        title: "Exercice — Cible stratégique",
        description:
          "Ici, l’objectif est d’être précis : mieux vaut une cible claire qu’une cible trop large.",
        checklist: [
          "À quel moment précis intervient ma marque ?",
          "Quelle est la situation exacte de mon client lorsqu’il me contacte ?",
          "Qu’est-ce qu’il a déjà essayé ?",
          "Qu’est-ce qu’il refuse ?",
        ],
        fields: [
          {
            key: "targetWho1",
            label: "À qui t’adresses tu principalement ? — réponse 1",
            type: "textarea",
          },
          {
            key: "targetWho2",
            label: "À qui t’adresses tu principalement ? — réponse 2",
            type: "textarea",
          },
          {
            key: "targetWho3",
            label: "À qui t’adresses tu principalement ? — réponse 3",
            type: "textarea",
          },
          {
            key: "targetFrustration1",
            label:
              "Quels sont les problèmes ou frustrations de cette cible ? — réponse 1",
            type: "textarea",
          },
          {
            key: "targetFrustration2",
            label:
              "Quels sont les problèmes ou frustrations de cette cible ? — réponse 2",
            type: "textarea",
          },
          {
            key: "targetFrustration3",
            label:
              "Quels sont les problèmes ou frustrations de cette cible ? — réponse 3",
            type: "textarea",
          },
        ],
        summaryFields: ["targetWho1", "targetFrustration1"],
      },
      {
        id: "difference",
        title: "2 - Différenciation",
        description:
          "Ton angle peut se situer sur la méthode, la posture, l’expérience client, la spécialisation, le niveau d’autonomie transmis ou le niveau d’exigence.",
        fields: [
          {
            key: "difference",
            label: "Qu’est-ce qui te distingue de tes concurrents ?",
            type: "textarea",
          },
          {
            key: "whyYou",
            label: "Pourquoi devrait-on te choisir toi ?",
            type: "textarea",
          },
        ],
      },
      {
        id: "competition",
        title: "3 - Concurrence / Positionnement vs concurrence",
        description:
          "Un bon positionnement assume une différence. Tu ne doit pas être meilleur. Tu dois être clair.",
        fields: [
          { key: "competitor1a", label: "Acteur proche 1", type: "text" },
          {
            key: "competitor1b",
            label: "Ce qu’il met en avant 1",
            type: "text",
          },
          {
            key: "competitor1c",
            label: "Ce que tu as choisi d’incarner différemment 1",
            type: "text",
          },
          { key: "competitor2a", label: "Acteur proche 2", type: "text" },
          {
            key: "competitor2b",
            label: "Ce qu’il met en avant 2",
            type: "text",
          },
          {
            key: "competitor2c",
            label: "Ce que tu as choisi d’incarner différemment 2",
            type: "text",
          },
          { key: "competitor3a", label: "Acteur proche 3", type: "text" },
          {
            key: "competitor3b",
            label: "Ce qu’il met en avant 3",
            type: "text",
          },
          {
            key: "competitor3c",
            label: "Ce que tu as choisi d’incarner différemment 3",
            type: "text",
          },
          {
            key: "competitors",
            label: "Qui sont tes principaux concurrents ?",
            type: "textarea",
          },
          {
            key: "whatILike",
            label: "Ce que j’aime dans leur communication",
            type: "textarea",
          },
          {
            key: "whatIDislike",
            label: "Ce que je n’aime pas dans leur communication",
            type: "textarea",
          },
          {
            key: "positioningSentence",
            label: "Ton positionnement synthétique",
            type: "textarea",
          },
        ],
        summaryFields: ["difference", "positioningSentence"],
      },
    ],
  },
  {
    id: "personnalite-ton",
    kind: "module",
    eyebrow: "Section 3",
    title: "Personnalité & ton de marque",
    subtitle:
      "Dans cette partie, on va donner une personnalité à ta marque.",
    accent: "lilac",
    introNote:
      "Prends le temps de remplie le tableau est / n’est pas, il t’aidera énormément à éviter les incohérences dans le ton utilisé par ta marque.",
    steps: [
      {
        id: "persona-core",
        title: "Si ta marque était une personne",
        description:
          "On transforme ici la marque en personnage vivant.",
        fields: [
          {
            key: "personaProfile",
            label: "Description générale",
            type: "textarea",
          },
          { key: "personaFirstname", label: "Prénom", type: "text" },
          { key: "personaAge", label: "Âge approximatif", type: "text" },
          { key: "personaJob", label: "Profession", type: "text" },
          {
            key: "personaStyle",
            label: "Style global / allure générale",
            type: "textarea",
          },
          {
            key: "personaTraits",
            label: "Traits dominants",
            type: "textarea",
          },
        ],
      },
      {
        id: "relations",
        title: "Relations & interactions",
        description:
          "Comment cette personne entre en relation et se comporte.",
        fields: [
          {
            key: "personaWelcome",
            label: "Comment accueille-t-elle quelqu'un ?",
            type: "textarea",
          },
          {
            key: "personaProblem",
            label: "Comment réagit-elle face à un problème ?",
            type: "textarea",
          },
          {
            key: "personaFriend",
            label: "Quel type d'ami/conseiller serait-elle ?",
            type: "textarea",
          },
        ],
      },
      {
        id: "universe",
        title: "Environnement & univers",
        description:
          "Les détails qui rendent la persona concrète.",
        fields: [
          {
            key: "personaPlace",
            label: "Son lieu de vie / travail idéal",
            type: "textarea",
          },
          {
            key: "personaObjects",
            label: "Objets fétiches sur son bureau",
            type: "textarea",
          },
          {
            key: "personaMusic",
            label: "Musique qu'elle écoute",
            type: "textarea",
          },
          {
            key: "signatureSentence",
            label: "Citation qui la définit",
            type: "textarea",
          },
          {
            key: "personaCanvaLink",
            label: "Lien Canva pour créer tes fiches PERSONA",
            type: "text",
            placeholder: "https://...",
          },
        ],
      },
      {
        id: "tone-and-baseline",
        title: "Ton & Baseline",
        description:
          "Le ton de voix et la baseline traduisent la personnalité dans la communication.",
        checklist: [
          "Compréhensible en 5 secondes",
          "Alignée avec ton positionnement",
          "Cohérente avec ta tonalité",
          "Durable dans le temps",
          "Différenciante",
        ],
        fields: [
          {
            key: "tone",
            label: "Ton de voix de la marque",
            type: "textarea",
          },
          {
            key: "toneTable",
            label: "Tableau est / n’est pas",
            type: "textarea",
          },
          {
            key: "baselineCurrent",
            label: "Notre baseline actuelle ou souhaitée",
            type: "textarea",
          },
          {
            key: "baselineObjective",
            label:
              "En une phrase, que doit comprendre une personne qui découvre ta marque pour la première fois ?",
            type: "textarea",
          },
          {
            key: "baselineRaw",
            label: "Exercice 1 – La phrase brute",
            type: "textarea",
          },
          {
            key: "baselineShort",
            label: "Exercice 2 – Simplification (moins de 10 mots)",
            type: "textarea",
          },
          {
            key: "baselineEmotion",
            label:
              "Exercice 3 – Angle émotionnel / bénéfice / transformation",
            type: "textarea",
          },
          {
            key: "baselineTest",
            label: "Exercice 4 – Test de compréhension",
            type: "textarea",
          },
          {
            key: "baselineFinal",
            label: "Ta Baseline",
            type: "textarea",
          },
        ],
        summaryFields: ["tone", "baselineFinal"],
      },
      {
        id: "visual-coherence",
        title:
          "Cohérence visuelle / palettes de couleurs / images & éléments graphiques",
        description:
          "On termine par la partie visuelle, avec préférences, couleurs, moodboard et éléments graphiques.",
        fields: [
          {
            key: "favoriteColors",
            label: "Y a-t-il des couleurs que tu aimes particulièrement ?",
            type: "textarea",
          },
          {
            key: "avoidColors",
            label: "Y a-t-il des couleurs à éviter absolument ?",
            type: "textarea",
          },
          { key: "primaryColor1", label: "Couleur principale 1", type: "colorrow" },
          { key: "primaryColor2", label: "Couleur principale 2", type: "colorrow" },
          { key: "primaryColor3", label: "Couleur principale 3", type: "colorrow" },
          { key: "secondaryColor1", label: "Couleur secondaire 1", type: "colorrow" },
          { key: "secondaryColor2", label: "Couleur secondaire 2", type: "colorrow" },
          { key: "secondaryColor3", label: "Couleur secondaire 3", type: "colorrow" },
          { key: "imagePhotos", label: "Photos", type: "checkbox" },
          { key: "imageIllustrations", label: "Illustrations", type: "checkbox" },
          { key: "imageMix", label: "Un mix des deux", type: "checkbox" },
          {
            key: "moodboardAmbiences",
            label: "Ambiances visuelles à privilégier",
            type: "textarea",
          },
          {
            key: "moodboardLink",
            label: "MOODBOARD — lien Canva",
            type: "text",
            placeholder: "https://...",
          },
          {
            key: "uploadReferences",
            label: "Upload d’images de références",
            type: "imageupload",
          },
          {
            key: "uploadInspiration",
            label: "Upload de captures / inspirations",
            type: "imageupload",
          },
          {
            key: "typographyIntentions",
            label: "Intentions typographiques",
            type: "textarea",
          },
          {
            key: "brandApplications",
            label: "Applications de la marque",
            type: "textarea",
          },
          {
            key: "colorGenerator",
            label: "Outil de génération des couleurs",
            type: "colorgenerator",
          },
        ],
      },
    ],
  },
  {
    id: "creation-document",
    kind: "module",
    eyebrow: "Section 4",
    title: "Création du document, à toi de jouer !",
    subtitle:
      "Ouvre ce fichier dans CANVA et duplique le dans tes documents avant de le modifier, sinon tu vas modifier l’original !",
    accent: "sage",
    steps: [
      {
        id: "canva-template",
        title: "Création du document final",
        description: "Finalise ici ton document de marque.",
        audioTitle: "Note vocale",
        audioDescription:
          "Ouvre ce fichier dans Canva et duplique le avant de le modifier.",
        fields: [
          {
            key: "canvaTemplateLink",
            label: "Lien Canva du template de Brand Book",
            type: "text",
            placeholder: "https://...",
          },
        ],
      },
    ],
  },
  {
    id: "supports-bonus",
    kind: "module",
    eyebrow: "Section 5",
    title: "SUPPORTS BONUS",
    subtitle:
      "3 templates INSTA + 3 checklists pour t’aider à garder une marque cohérente dans le temps.",
    accent: "terracotta",
    steps: [
      {
        id: "bonus-intro",
        title: "Supports bonus",
        description: "Ressources complémentaires et checklists.",
        audioTitle: "Note vocale",
        audioDescription:
          "Ces bonus servent à faire vivre ta marque avec cohérence dans le temps.",
        fields: [
          {
            key: "instaTemplates",
            label: "3 templates INSTA",
            type: "textarea",
          },
          {
            key: "checkColors",
            label: "Les couleurs respectent la palette définie",
            type: "checkbox",
          },
          {
            key: "checkLogo",
            label: "Le logo est utilisé correctement",
            type: "checkbox",
          },
          {
            key: "checkTypo",
            label: "Les typographies sont cohérentes",
            type: "checkbox",
          },
          {
            key: "checkContrast",
            label: "Le contraste est suffisant",
            type: "checkbox",
          },
          {
            key: "checkTone",
            label: "Le ton correspond à la personnalité de la marque",
            type: "checkbox",
          },
          {
            key: "supportGoal",
            label: "Objectif du support défini",
            type: "checkbox",
          },
          {
            key: "supportPriority",
            label: "Support prioritaire identifié",
            type: "checkbox",
          },
          {
            key: "supportRules",
            label: "Règles du guide respectées",
            type: "checkbox",
          },
          {
            key: "supportMessage",
            label: "Message clair et lisible",
            type: "checkbox",
          },
          {
            key: "evolutionAdn",
            label: "L’ADN reste inchangé",
            type: "checkbox",
          },
          {
            key: "evolutionProgressive",
            label: "Les évolutions sont progressives",
            type: "checkbox",
          },
          {
            key: "evolutionDocumented",
            label: "Les changements sont documentés",
            type: "checkbox",
          },
          {
            key: "evolutionGuide",
            label: "Le guide est mis à jour",
            type: "checkbox",
          },
        ],
      },
    ],
  },
  {
    id: "brandbook",
    kind: "export",
    eyebrow: "Livrable",
    title: "Guide de marque final",
    subtitle:
      "Tous les éléments saisis dans les sections précédentes se rassemblent ici pour former ton Brand Book. Tu peux le relire, l’ajuster et l’exporter.",
    accent: "terracotta",
  },
];
