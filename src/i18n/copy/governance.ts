import type { Bilingual } from "@i18n/types";

export type GovernanceBlock = {
    title: Bilingual;
    text?: Bilingual;
    items?: Bilingual[];
};

export const governanceCopy = {
    sectionTitle: {
        en: "Governance",
        fr: "Gouvernance",
    },
    lead: {
        en: "iTowns is a geographic commons: a shared resource developed collectively by developers, public bodies, research labs, and companies. Rules guarantee its growth and the permanence of its open, shared nature.",
        fr: "iTowns est un commun géographique : une ressource partagée développée collectivement par des développeurs, des organismes publics, des laboratoires de recherche et des entreprises. Des règles garantissent son développement et le caractère ouvert et partagé du projet.",
    },
    readMore: {
        en: "Full governance document on GitHub",
        fr: "Document de gouvernance complet sur GitHub",
    },
    proposeChanges: {
        en: "Propose a change (pull request or proposal)",
        fr: "Proposer une modification (pull request ou proposition)",
    },
    blocks: [
        {
            title: { en: "Core values", fr: "Valeurs fondatrices" },
            items: [
                {
                    en: "Community driven: an open commons, collectively maintained",
                    fr: "Piloté par la communauté : un commun ouvert, entretenu collectivement",
                },
                {
                    en: "Free software (MIT or CeCILL-B), reusable and modifiable",
                    fr: "Logiciel libre (MIT ou CeCILL-B), réutilisable et modifiable",
                },
                {
                    en: "Public benefit first, inclusion, and transparent collaboration",
                    fr: "Intérêt général, inclusion et collaboration transparente",
                },
                {
                    en: "Peer review, community sovereignty, and open planning",
                    fr: "Revue par les pairs, souveraineté de la communauté et planification ouverte",
                },
            ],
        },
        {
            title: { en: "Roles in the community", fr: "Rôles dans la communauté" },
            items: [
                {
                    en: "User — individual or organization using iTowns",
                    fr: "Utilisateur — personne ou organisation qui utilise iTowns",
                },
                {
                    en: "Contributor — improves the project without direct commit rights on the main repository",
                    fr: "Contributeur — améliore le projet sans droits de commit direct sur le dépôt principal",
                },
                {
                    en: "Core contributor — trusted contributor with commit rights and technical governance duties",
                    fr: "Contributeur principal — contributeur de confiance avec droits de commit et responsabilités techniques",
                },
                {
                    en: "Community — umbrella term for all project participants",
                    fr: "Communauté — terme englobant l’ensemble des acteurs du projet",
                },
            ],
        },
        {
            title: { en: "Core contributors", fr: "Contributeurs principaux" },
            text: {
                en: "Core contributors ensure sustainability, review and merge pull requests, arbitrate technical architecture, and enforce cross-validation (no self-validation or validation within the same organization). Access is individual, granted after significant contributions and nomination, then confirmed by a double majority vote among core contributors.",
                fr: "Les contributeurs principaux assurent la pérennité du projet, relisent et fusionnent les pull requests, arbitrent l’architecture technique et appliquent la contre-validation (pas d’auto-validation ni de validation au sein d’une même organisation). Le rôle est individuel, accordé après contributions significatives et nomination, puis confirmé par un vote à double majorité parmi les contributeurs principaux.",
            },
        },
        {
            title: {
                en: "Project Steering Committee (PSC)",
                fr: "Comité de pilotage (PSC)",
            },
            text: {
                en: "The PSC steers the open-source project: roadmap, releases, governance changes, and dispute resolution. It operates openly with lazy consensus; formal votes weight one vote per organization. Meetings are held at least every two months; sponsors meet once a year. Members are listed in the membership document.",
                fr: "Le PSC pilote le projet open source : feuille de route, releases, évolutions de gouvernance et résolution des litiges. Il fonctionne en toute transparence avec un consensus paresseux ; les votes formels comptent une voix par organisation. Des réunions ont lieu au minimum tous les deux mois ; les sponsors se réunissent une fois par an. Les membres sont listés dans le document d’adhésion.",
            },
        },
        {
            title: { en: "Contributing and proposals", fr: "Contribuer et proposer" },
            text: {
                en: "You may contribute code or documentation following the contributing guide, or submit governance changes via pull request or the dedicated proposal process — one topic per pull request or issue. Contact: iTowns@ign.fr.",
                fr: "Vous pouvez contribuer au code ou à la documentation selon le guide de contribution, ou soumettre des évolutions de gouvernance par pull request ou via le processus de proposition dédié — un sujet par pull request ou issue. Contact : iTowns@ign.fr.",
            },
        },
    ] satisfies GovernanceBlock[],
};
