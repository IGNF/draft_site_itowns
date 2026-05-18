import type { Bilingual } from "@i18n/types";

type ErrorPageCopy = {
  title: string;
  description: string;
  message: Bilingual;
  body: Bilingual;
  cta: Bilingual;
};

export const errorPages = {
  "404": {
    title: "404 - Page Not Found",
    description:
      "Sorry, the page you're looking for doesn't exist or has been moved.",
    message: { en: "Oops! Page Not Found", fr: "Oups ! Page introuvable" },
    body: {
      en: "The page you're looking for might have been moved, deleted, or never existed.",
      fr: "La page recherchée a peut-être été déplacée, supprimée ou n’a jamais existé.",
    },
    cta: { en: "GO TO HOMEPAGE", fr: "RETOUR À L’ACCUEIL" },
  },
  "500": {
    title: "500 - Internal Server Error",
    description: "Something went wrong on our end. We're working to fix it.",
    message: {
      en: "Internal Server Error",
      fr: "Erreur interne du serveur",
    },
    body: {
      en: "Something went wrong on our servers. We're aware of the issue and are working to fix it. Please try again later.",
      fr: "Une erreur s’est produite sur nos serveurs. Nous sommes au courant et travaillons à la corriger. Réessayez plus tard.",
    },
    cta: { en: "GO TO HOMEPAGE", fr: "RETOUR À L’ACCUEIL" },
  },
  "503": {
    title: "503 - Service Unavailable",
    description: "Site is temporarily unavailable due to maintenance.",
    message: { en: "Under Maintenance", fr: "Maintenance en cours" },
    body: {
      en: "We're currently performing some maintenance on our site. We'll be back shortly!",
      fr: "Nous effectuons actuellement une maintenance. Nous serons de retour très bientôt !",
    },
    cta: { en: "GO TO HOMEPAGE", fr: "RETOUR À L’ACCUEIL" },
  },
} satisfies Record<string, ErrorPageCopy>;

export type ErrorPageCode = keyof typeof errorPages;
