import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'iTowns',
  LEGAL_NAME: 'iTowns Project Showcase',
  TITLE: 'Visualising 3D geospatial data on the web.',
  DESCRIPTION:
    'With iTowns, build your own geographic service: globe, planar maps, 3D Tiles, vector tiles, point clouds, and raster.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://www.itowns-project.org',
  LOCALE: 'en',
  EMAIL: 'itowns@ign.fr',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@itowns',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'GitHub',
    ICON: 'github',
    LABEL: `${SITE.COMPANY_NAME} on GitHub`,
    HREF: 'https://github.com/iTowns/itowns',
  },
];
