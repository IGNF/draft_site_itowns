// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/consts";

import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";

/** GitHub Pages (projet) : SITE_URL + BASE_PATH via le workflow CI. */
const siteURL = process.env.SITE_URL || SITE.CANONICAL_URL;
const basePath = process.env.BASE_PATH || "/";

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  base: basePath,
  output: "static",

  devToolbar: {
    enabled: false,
  },

  build: {
    inlineStylesheets: "always",
  },

  integrations: [sitemap(), favicons()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "DMSans",
        cssVariable: "--font-dm-sans",
        options: {
          variants: [
            {
              src: ["./src/assets/fonts/DMSans.woff2"],
              weight: "normal",
              style: "normal",
              display: "swap",
            },
          ],
        },
      },
    ],
  },
});
