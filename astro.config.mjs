// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://malinovsky.dev',
  
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
    },
    // 'Viga' if we ever decide to have the headline text be actual text and not an SVG
  ],

  integrations: [icon()],

  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeExternalLinks,
      ]
    })
  }
});
