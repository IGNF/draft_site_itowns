import type { ImageMetadata } from "astro";
import type { Bilingual } from "@i18n/types";
import picGlobe from "/src/assets/images/home-examples/example-globe.png";
import picPlanar from "/src/assets/images/home-examples/example-planar.png";
import picVector from "/src/assets/images/home-examples/example-vector-tiles.png";
import pic3d from "/src/assets/images/home-examples/example-3d-tiles.png";
import picCopc from "/src/assets/images/home-examples/example-copc.png";
import picDsm from "/src/assets/images/home-examples/example-dsm.png";

const EXAMPLES_BASE = "https://itowns.github.io/itowns/examples";

type ViewerExample = {
  title: Bilingual;
  thumbAlt: Bilingual;
  description: Bilingual;
  link: string;
  thumb: ImageMetadata;
};

export const viewerExamples: ViewerExample[] = [
  {
    title: { en: "Globe viewer", fr: "Visionneuse globe" },
    thumbAlt: {
      en: "Screenshot — globe viewer example",
      fr: "Capture — exemple visionneuse globe",
    },
    description: {
      en: "Visualize data in a global reference coordinates system.",
      fr: "Visualisez des données dans un système de référence mondial.",
    },
    link: `${EXAMPLES_BASE}/view_3d_map.html`,
    thumb: picGlobe,
  },
  {
    title: { en: "Planar viewer", fr: "Visionneuse plane" },
    thumbAlt: {
      en: "Screenshot — planar viewer example",
      fr: "Capture — exemple visionneuse plane",
    },
    description: {
      en: "Visualize data in a local projected Coordinates Reference System. Here, we display data in RGF93/Lambert93 CRS.",
      fr: "Visualisez des données dans un SCR projeté local. Ici, affichage en RGF93 / Lambert-93.",
    },
    link: `${EXAMPLES_BASE}/view_25d_map.html`,
    thumb: picPlanar,
  },
  {
    title: {
      en: "Vector tiles viewer",
      fr: "Visionneuse tuiles vectorielles",
    },
    thumbAlt: {
      en: "Screenshot — vector tiles example",
      fr: "Capture — exemple tuiles vectorielles",
    },
    description: {
      en: "Visualize Vector Tiles data. Here we display polygons for the holds of buildings and extrude them, their height being extracted from data.",
      fr: "Visualisez des tuiles vectorielles. Ici, emprises de bâtiments extrudées, la hauteur étant issue des attributs.",
    },
    link: `${EXAMPLES_BASE}/vector_tile_3d_mesh_mapbox.html`,
    thumb: picVector,
  },
  {
    title: { en: "3D tiles viewer", fr: "Visionneuse 3D Tiles" },
    thumbAlt: {
      en: "Screenshot — 3D Tiles example",
      fr: "Capture — exemple 3D Tiles",
    },
    description: {
      en: "Visualize 3D Tiles data. Here we display some batched 3d model.",
      fr: "Visualisez des données 3D Tiles. Ici, un modèle 3D batché.",
    },
    link: `${EXAMPLES_BASE}/3dtiles_loader.html`,
    thumb: pic3d,
  },
  {
    title: { en: "Point cloud viewer", fr: "Visionneuse nuage de points" },
    thumbAlt: {
      en: "Screenshot — point cloud example",
      fr: "Capture — exemple nuage de points",
    },
    description: {
      en: "Visualize point cloud data and style it as you wish. Here we display COPC data colored from its classification.",
      fr: "Visualisez un nuage de points et stylisez-le. Ici, données COPC colorées selon la classification.",
    },
    link: `${EXAMPLES_BASE}/copc_simple_loader.html?copc=https%3A%2F%2Fs3.amazonaws.com%2Fhobu-lidar%2Fautzen-classified.copc.laz`,
    thumb: picCopc,
  },
  {
    title: { en: "Raster data viewer", fr: "Visionneuse données raster" },
    thumbAlt: {
      en: "Screenshot — raster / DSM example",
      fr: "Capture — exemple raster / MNS",
    },
    description: {
      en: "Visualize raster data. Here we display some ortho-images as well as a Digital Surface Model.",
      fr: "Visualisez des données raster. Ici, orthophotos et modèle numérique de surface.",
    },
    link: `${EXAMPLES_BASE}/view_3d_mns_map.html`,
    thumb: picDsm,
  },
];
