export const PRIMARY_NAV = [
  { id: "dashboard", label: "Dashboard" },
  { id: "journey", label: "Parcours" },
  { id: "brand-card", label: "Brand Card" },
  { id: "export", label: "Export" }
];

export const MODULES = [
  {
    id: "vision",
    title: "Vision & marque",
    eyebrow: "Module 1",
    duration: 35,
    legacyHref: "/Vision%20&%20marque%20295057792efe81b4ac90f13958e3abad.html",
    summary: "Clarifie l'ADN de ta marque pour donner un cadre a tout le reste.",
    intro: "On pose ici le socle de ta marque : mission, vision et valeurs. Sans ce bloc, le reste manque de colonne vertebrale.",
    insight: "Une marque claire prend de meilleures decisions parce qu'elle sait deja ce qu'elle defend, pour qui et pourquoi.",
    example: "Version faible : Je fais de la communication. Version forte : J'aide les independantes a rendre leur expertise lisible, credible et desirable.",
    tip: "Ne cherche pas une formule parfaite du premier coup. Commence par une phrase vraie, puis simplifie-la.",
    exercise: "Ecris d'abord une version longue, puis une version courte, puis une version que tu pourrais lire a voix haute sans bloquer.",
    fields: [
      { key: "brandName", label: "Nom de ta marque", type: "text", placeholder: "Exemple : Studio Lea Martin" },
      { key: "mission", label: "Mission", type: "textarea", placeholder: "Ma marque existe pour aider..." },
      { key: "vision", label: "Vision", type: "textarea", placeholder: "Dans 3 a 5 ans, je veux que ma marque..." },
      { key: "values", label: "Valeurs", type: "textarea", placeholder: "Liste 3 valeurs avec leur traduction concrete" }
    ],
    summaryKeys: ["mission", "vision", "values"]
  },
  {
    id: "positioning",
    title: "Positionnement",
    eyebrow: "Module 2",
    duration: 30,
    legacyHref: "/Positionnement%20295057792efe810e98f4ffd60c74fad4.html",
    summary: "Definis pour qui tu travailles, ce que tu resolves et la promesse que tu portes.",
    intro: "Ce module transforme une expertise floue en message lisible. On precise la cible, le probleme et la promesse.",
    insight: "Si ta cible se reconnait tout de suite, tu n'as pas besoin d'en dire trop. La clarte fait deja le tri.",
    example: "Version faible : J'aide les entreprises. Version forte : J'aide les consultantes independantes a sortir d'un discours trop generique pour mieux se vendre.",
    tip: "Utilise les mots que tes clientes diraient elles-memes. C'est souvent plus puissant que le jargon.",
    exercise: "Ecris ta promesse en une phrase, puis retire tout ce qui ne change pas le sens.",
    fields: [
      { key: "targetAudience", label: "Cible ideale", type: "textarea", placeholder: "A qui t'adresses-tu en priorite ?" },
      { key: "clientProblem", label: "Probleme principal", type: "textarea", placeholder: "Quel probleme concret resols-tu ?" },
      { key: "brandPromise", label: "Promesse de marque", type: "textarea", placeholder: "J'aide ... a ... grace a ..." },
      { key: "offerSummary", label: "Description de l'offre", type: "textarea", placeholder: "En quoi ton offre delivre-t-elle cette promesse ?" }
    ],
    summaryKeys: ["targetAudience", "clientProblem", "brandPromise", "offerSummary"]
  },
  {
    id: "personality",
    title: "Personnalite & ton",
    eyebrow: "Module 3",
    duration: 25,
    legacyHref: "/Personnalit%C3%A9%20&%20ton%20de%20marque%20295057792efe81e6be2be44f4963e114.html",
    summary: "Cadre la voix, l'energie et les codes d'expression de ta marque.",
    intro: "Ici, on rend ta marque reconnaissable dans sa maniere de parler, d'ecrire et de se montrer.",
    insight: "Une personnalite claire evite de repartir de zero a chaque support. Elle donne un filtre simple a toutes tes decisions.",
    example: "On dit : clair, concret, direct. On evite : jargon, promesses abstraites, phrases qui tournent autour du pot.",
    tip: "Choisis des reperes activables demain, pas des adjectifs flatteurs impossibles a appliquer.",
    exercise: "Definis 3 mots pour la personnalite, 3 choses que ta marque dit volontiers, et 3 choses qu'elle evite.",
    fields: [
      { key: "personalityTraits", label: "3 mots de personnalite", type: "textarea", placeholder: "Exemple : clair, chaleureux, structure" },
      { key: "toneDo", label: "On dit", type: "textarea", placeholder: "3 formulations ou intentions a favoriser" },
      { key: "toneAvoid", label: "On evite", type: "textarea", placeholder: "3 formulations ou intentions a eviter" },
      { key: "brandBio", label: "Bio courte", type: "textarea", placeholder: "Une bio directe pour LinkedIn ou le site" }
    ],
    summaryKeys: ["personalityTraits", "toneDo", "toneAvoid", "brandBio"]
  },
  {
    id: "document",
    title: "Creation du document",
    eyebrow: "Module 4",
    duration: 30,
    legacyHref: "/Cr%C3%A9ation%20du%20document,%20%C3%A0%20toi%20de%20jouer%20!%202ee057792efe80899ba8ef2c7e90fe6e.html",
    summary: "Assemble les formulations utiles dans un livrable clair et partageable.",
    intro: "On transforme ici tes reponses en document de travail. L'objectif n'est plus de reflechir, mais d'organiser ce qui est deja solide.",
    insight: "Un bon livrable n'est pas seulement joli. Il doit etre reutilisable sans effort par toi, ton site ou ton graphiste.",
    example: "Ta Brand Card doit permettre a quelqu'un d'autre de comprendre ta marque en moins de deux minutes.",
    tip: "Commence par le document le plus utile des demain. La perfection peut venir apres.",
    exercise: "Rassemble ta promesse, ta bio, ta cible, ton offre et ton ton de voix en une page lisible.",
    fields: [
      { key: "brandStory", label: "Resume de marque", type: "textarea", placeholder: "Explique en quelques lignes l'essentiel de ta marque" },
      { key: "ctaLine", label: "Phrase de contact", type: "text", placeholder: "Exemple : Ecris-moi pour clarifier ta marque" },
      { key: "brandDocumentNotes", label: "Notes pour le livrable final", type: "textarea", placeholder: "Que doit absolument contenir le document final ?" },
      { key: "exportPriority", label: "Priorite d'export", type: "text", placeholder: "PDF, Canva, texte brut..." }
    ],
    summaryKeys: ["brandStory", "ctaLine", "brandDocumentNotes", "exportPriority"]
  },
  {
    id: "bonus",
    title: "Supports bonus",
    eyebrow: "Module 5",
    duration: 20,
    legacyHref: "/SUPPORTS%20BONUS%202fe057792efe801c9accfc2deb83190e.html",
    summary: "Finalise la direction visuelle et prepare l'application sur tes supports.",
    intro: "Cette partie complete ton systeme avec des decisions pratiques pour passer de l'intention a l'execution.",
    insight: "Le bon support bonus n'ajoute pas de bruit. Il t'aide a deployer la meme marque partout avec moins d'hesitation.",
    example: "Une palette de 3 a 4 couleurs et une typo principale suffisent souvent pour produire des supports plus propres et plus constants.",
    tip: "Reste simple : une couleur principale, une couleur d'appui, une couleur de fond, une police de reference.",
    exercise: "Choisis une palette, une typographie et trois actions concretes a faire dans les 7 prochains jours.",
    fields: [
      { key: "colorPalette", label: "Palette de couleurs", type: "textarea", placeholder: "Exemple : #534AB7 / #F8F7F4 / #2C2C2A / #C96F2B" },
      { key: "typographyChoice", label: "Typographie principale", type: "text", placeholder: "Exemple : Inter" },
      { key: "supportChecklist", label: "Checklist d'application", type: "textarea", placeholder: "3 a 5 actions concretes a lancer" },
      { key: "nextActions", label: "Prochaines actions", type: "textarea", placeholder: "Ce que tu fais cette semaine avec ta marque" }
    ],
    summaryKeys: ["colorPalette", "typographyChoice", "supportChecklist", "nextActions"]
  }
];

export const QUICK_ACTIONS = [
  { id: "copy-promise", label: "Copier promesse", helper: "Recupere ta promesse en un clic." },
  { id: "copy-palette", label: "Palette", helper: "Copie ta palette et ta typo." },
  { id: "open-export", label: "Exporter", helper: "Passe directement a la sortie de livrable." }
];
