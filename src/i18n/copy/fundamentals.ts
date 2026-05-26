import type { Bilingual } from "@i18n/types";

export type FundamentalTopic = {
    id: string;
    title: Bilingual;
    paragraphs: Bilingual[];
    list?: Bilingual[];
    images?: { src: string; alt: Bilingual }[];
};

const MANUALS_IMG = "https://www.itowns-project.org/assets/images/manuals";

export const fundamentalsCopy = {
    sectionTitle: {
        en: "Fundamentals",
        fr: "Fondamentaux",
    },
    lead: {
        en: "iTowns combines several building blocks to display ortho-images, digital elevation models, 3D models, and more. Here is how the framework is structured.",
        fr: "iTowns combine plusieurs briques pour afficher orthophotos, modèles numériques de terrain, modèles 3D, etc. Voici comment le cadriciel est structuré.",
    },
    topics: [
        {
            id: "how-it-works",
            title: { en: "How it works", fr: "Comment ça marche" },
            paragraphs: [
                {
                    en: "Three.js is the JavaScript WebGL engine at the heart of iTowns: it draws 3D scenes in the browser with GPU acceleration.",
                    fr: "Three.js est le moteur WebGL JavaScript au cœur d’iTowns : il dessine des scènes 3D dans le navigateur avec l’accélération GPU.",
                },
                {
                    en: "WebGL renders interactive 2D and 3D graphics in HTML canvas elements without plugins, following the OpenGL ES 2.0 API.",
                    fr: "WebGL affiche des graphiques 2D et 3D interactifs dans des éléments canvas HTML sans plugin, en suivant l’API OpenGL ES 2.0.",
                },
                {
                    en: "Proj4JS transforms coordinates between reference systems, including datum shifts — essential for mixing datasets in different CRS.",
                    fr: "Proj4JS transforme les coordonnées entre systèmes de référence, y compris les changements de datum — indispensable pour mélanger des jeux de données en CRS différents.",
                },
            ],
        },
        {
            id: "protocols",
            title: {
                en: "Protocols and data formats",
                fr: "Protocoles et formats de données",
            },
            paragraphs: [
                {
                    en: "iTowns ships with sources and parsers for the main geographic protocols and formats. You can also add your own source or parser for custom data.",
                    fr: "iTowns fournit des sources et parseurs pour les principaux protocoles et formats géographiques. Vous pouvez aussi ajouter votre propre source ou parseur pour des données personnalisées.",
                },
            ],
            list: [
                {
                    en: "OGC services: WMS, WMTS, WFS, TMS and XYZ",
                    fr: "Services OGC : WMS, WMTS, WFS, TMS et XYZ",
                },
                {
                    en: "Mapbox Vector Tiles and styling",
                    fr: "Tuiles vectorielles Mapbox et styles",
                },
                {
                    en: "Point clouds: Potree, Potree 2, Entwine (EPT)",
                    fr: "Nuages de points : Potree, Potree 2, Entwine (EPT)",
                },
                {
                    en: "3D Tiles (OGC, Cesium ion, Google API): meshes (b3dm) and point clouds (pnts)",
                    fr: "3D Tiles (OGC, Cesium ion, API Google) : maillages (b3dm) et nuages de points (pnts)",
                },
                {
                    en: "GeoJSON, KML, GPX, oriented images",
                    fr: "GeoJSON, KML, GPX, images orientées",
                },
            ],
        },
        {
            id: "view",
            title: { en: "The View", fr: "La vue" },
            paragraphs: [
                {
                    en: "A View is what displays 3D data in iTowns. Each View uses one coordinate reference system (CRS), but layers can come from other CRS thanks to reprojection.",
                    fr: "Une vue (View) est ce qui affiche les données 3D dans iTowns. Chaque vue utilise un système de coordonnées (CRS), mais les couches peuvent provenir d’autres CRS grâce à la reprojection.",
                },
                {
                    en: "GlobeView shows raster data in WGS 84 or Pseudo-Mercator, and 3D vector objects in any CRS. PlanarView is for local projected CRS (e.g. Lambert-93): all raster sources must share the same CRS.",
                    fr: "GlobeView affiche les rasters en WGS 84 ou Pseudo-Mercator, et les objets vectoriels 3D dans tout CRS. PlanarView convient aux projections locales (ex. Lambert-93) : toutes les sources raster doivent partager le même CRS.",
                },
            ],
        },
        {
            id: "layers",
            title: { en: "Layers", fr: "Couches" },
            paragraphs: [
                {
                    en: "Data are organized as Layers. ColorLayer and ElevationLayer are projected onto a geometry layer (globe or plane); GeometryLayer and FeatureGeometryLayer carry 2D/3D vector data; PointCloudLayer and OGC3DTilesLayer handle point clouds and 3D Tiles.",
                    fr: "Les données sont organisées en couches (Layers). ColorLayer et ElevationLayer se projettent sur une couche de géométrie (globe ou plan) ; GeometryLayer et FeatureGeometryLayer portent les données vectorielles 2D/3D ; PointCloudLayer et OGC3DTilesLayer gèrent nuages de points et 3D Tiles.",
                },
            ],
            images: [
                {
                    src: `${MANUALS_IMG}/layer-1.png`,
                    alt: {
                        en: "ColorLayer example",
                        fr: "Exemple de ColorLayer",
                    },
                },
                {
                    src: `${MANUALS_IMG}/layer-2.png`,
                    alt: {
                        en: "ElevationLayer added for terrain",
                        fr: "ElevationLayer ajoutée pour le relief",
                    },
                },
                {
                    src: `${MANUALS_IMG}/layer-3.png`,
                    alt: {
                        en: "GeometryLayer for buildings",
                        fr: "GeometryLayer pour les bâtiments",
                    },
                },
            ],
        },
        {
            id: "style",
            title: { en: "Style", fr: "Style" },
            paragraphs: [
                {
                    en: "Vector data can be flattened on the ground (ColorLayer) or shown as 3D objects (GeometryLayer). The Style of a layer controls fill, stroke, point, and text appearance — with static values or functions driven by feature properties.",
                    fr: "Les données vectorielles peuvent être aplaties au sol (ColorLayer) ou affichées en 3D (GeometryLayer). Le Style d’une couche règle l’apparence du remplissage, des traits, des points et du texte — avec des valeurs fixes ou des fonctions basées sur les propriétés des entités.",
                },
                {
                    en: "Use base_altitude and extrusion_height to position and extrude polygons in 3D. Set text.field to display labels from your data (e.g. '{name}').",
                    fr: "Utilisez base_altitude et extrusion_height pour positionner et extruder des polygones en 3D. Définissez text.field pour afficher des étiquettes depuis vos données (ex. '{name}').",
                },
            ],
            images: [
                {
                    src: `${MANUALS_IMG}/style-1.png`,
                    alt: {
                        en: "Vector data projected on the ground",
                        fr: "Données vectorielles projetées au sol",
                    },
                },
                {
                    src: `${MANUALS_IMG}/style-2.png`,
                    alt: {
                        en: "Vector data as 3D objects",
                        fr: "Données vectorielles en objets 3D",
                    },
                },
            ],
        },
    ] satisfies FundamentalTopic[],
};
