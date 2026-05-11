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

    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "img-src 'self' https://res.cloudinary.com/dellp9a4z/ data: https://avatars.githubusercontent.com https://github.com https://upload.wikimedia.org https://www.ign.fr https://cirilgroup.com https://www.sogelink.com https://liris.cnrs.fr",
        "media-src 'self' https://res.cloudinary.com/dellp9a4z/",
        "font-src 'self' data:",
        "frame-src 'self' https://www.google.com/ https://www.itowns-project.org/",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-hashes'"],
        hashes: [
          "sha256-WUDfWmQP7MHmJVPG87eP2N5ZE7RjDV9+6B/uKHMlSAE=",
          "sha256-P+wlFJoxzaX+ilJ24YqyBBK/sG4spb5yZWdYMQspG1I=",
          "sha256-UI6m4fBliGqfCKOZ9qe8Jk7vapco4kY9asvtzmDNHtI=",
          "sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
          "sha256-kdaXPEOwTw3zyiuCzGv1vpohcW9SqOWq8k6gy2OWgtI=",
        ],
      },
    },
  },
});
