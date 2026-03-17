export type StudioNavItem = {
  id: "dashboard" | "vision" | "positioning" | "tone" | "summary";
  href: string;
  title: string;
  description: string;
  cta: string;
};

export const studioNavigation: StudioNavItem[] = [
  {
    id: "dashboard",
    href: "/dashboard",
    title: "Dashboard",
    description: "Retrouve ton parcours, ta progression et tes modules actifs.",
    cta: "Voir le tableau de bord",
  },
  {
    id: "vision",
    href: "/vision",
    title: "Vision",
    description: "Clarifie la mission, la vision, les valeurs et la promesse de ta marque.",
    cta: "Continuer sur Vision",
  },
  {
    id: "positioning",
    href: "/positioning",
    title: "Positionnement",
    description: "Affirme ta cible, ta différence et ton positionnement final.",
    cta: "Continuer sur Positionnement",
  },
  {
    id: "tone",
    href: "/tone",
    title: "Personnalité & ton",
    description: "Cadre la personnalité, le ton et la baseline de la marque.",
    cta: "Continuer sur Personnalité & ton",
  },
  {
    id: "summary",
    href: "/summary",
    title: "Synthèse",
    description: "Relis les décisions finales et prépare une restitution claire.",
    cta: "Voir la synthèse",
  },
];
