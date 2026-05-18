import type { Bilingual } from "@i18n/types";

type FaqItem = {
  id: number;
  question: Bilingual;
  answer: Bilingual;
};

export const faqCopy = {
  sectionTitle: {
    en: "Frequently asked questions.",
    fr: "Foire aux questions.",
  },
  items: [
    {
      id: 1,
      question: {
        en: "What is iTowns?",
        fr: "Qu’est-ce qu’iTowns ?",
      },
      answer: {
        en: "iTowns is an open-source framework for visualizing, navigating, and interacting with 2D/3D geospatial data directly in web applications.",
        fr: "iTowns est une bibliothèque open source pour visualiser, naviguer et interagir avec des données géospatiales 2D/3D directement dans des applications web.",
      },
    },
    {
      id: 2,
      question: {
        en: "Which data formats are supported?",
        fr: "Quels formats de données sont pris en charge ?",
      },
      answer: {
        en: "Major families include 3D Tiles, Mapbox Vector Tiles, raster streams, GeoTIFF/COG, and point cloud formats such as Potree, EPT, COPC, and LAS.",
        fr: "Les formats principaux incluent 3D Tiles, Mapbox Vector Tiles, flux raster, GeoTIFF/COG, et des nuages de points (Potree, EPT, COPC, LAS, etc.).",
      },
    },
    {
      id: 3,
      question: {
        en: "Can iTowns run in globe or planar modes?",
        fr: "iTowns peut-il fonctionner en mode globe ou plan ?",
      },
      answer: {
        en: "Yes. You can visualize global data in a globe viewer or work in local projected coordinate systems with planar viewers.",
        fr: "Oui. Vous pouvez visualiser des données mondiales dans une visionneuse globe ou travailler en systèmes projetés locaux avec des visionneuses planes.",
      },
    },
    {
      id: 4,
      question: {
        en: "Where can I find runnable examples?",
        fr: "Où trouver des exemples exécutables ?",
      },
      answer: {
        en: "Use the official examples index at https://www.itowns-project.org/itowns/dev/examples/?#demo/index to open many ready-to-run demos.",
        fr: "Utilisez l’index officiel des exemples sur https://www.itowns-project.org/itowns/dev/examples/?#demo/index pour ouvrir de nombreuses démos prêtes à l’emploi.",
      },
    },
    {
      id: 5,
      question: {
        en: "Is there a starter project?",
        fr: "Existe-t-il un projet de démarrage ?",
      },
      answer: {
        en: "Yes. A community starter template exists to bootstrap an iTowns app quickly with a standard project structure.",
        fr: "Oui. Un modèle de démarrage permet d’initialiser rapidement une application iTowns avec une structure de projet standard.",
      },
    },
    {
      id: 6,
      question: {
        en: "Who maintains iTowns?",
        fr: "Qui maintient iTowns ?",
      },
      answer: {
        en: "The project is community-driven with contributors and stakeholders from public and private organizations around geospatial use cases.",
        fr: "Le projet est porté par la communauté, avec des contributeurs parties prenantes d’organisations publiques et privées.",
      },
    },
  ] satisfies FaqItem[],
};
