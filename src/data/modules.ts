import type { Module } from "../types/brand";

export const modules: Module[] = [
  {
    id: "offre",
    slug: "qui-te-propose-cette-offre",
    title: "Qui te propose cette offre ?",
    href: "/Qui te propose cette offre 295057792efe81ffa620f0a50d9b1a35.html",
    index: 0,
    steps: [],
  },
  {
    id: "vision",
    slug: "vision-marque",
    title: "Vision & marque",
    href: "/Vision & marque 295057792efe81b4ac90f13958e3abad.html",
    index: 1,
    coverSrc: "/banner-vision.png",
    steps: [],
  },
  {
    id: "positionnement",
    slug: "positionnement",
    title: "Positionnement",
    href: "/Positionnement 295057792efe810e98f4ffd60c74fad4.html",
    index: 2,
    coverSrc: "/banner-positionnement.png",
    steps: [],
  },
  {
    id: "personnalite",
    slug: "personnalite-ton-de-marque",
    title: "Personnalité & ton de marque",
    href: "/Personnalité & ton de marque 295057792efe81e6be2be44f4963e114.html",
    index: 3,
    coverSrc: "/banner-ton-personnalite.png",
    steps: [],
  },
  {
    id: "creation",
    slug: "creation-document",
    title: "Création du document, à toi de jouer !",
    href: "/Création du document, à toi de jouer ! 2ee057792efe80899ba8ef2c7e90fe6e.html",
    index: 4,
    steps: [],
  },
  {
    id: "bonus",
    slug: "supports-bonus",
    title: "Supports bonus",
    href: "/SUPPORTS BONUS 2fe057792efe801c9accfc2deb83190e.html",
    index: 5,
    steps: [],
  },
];

export function getModuleBySlug(slug: string) {
  return modules.find((module) => module.slug === slug);
}
