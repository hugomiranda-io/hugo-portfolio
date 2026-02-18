// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// Astro's `defineConfig` doesn't accept a callback; detect the current command via argv.
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
 site: "https://hugomiranda.io",
 build: {
  inlineStylesheets: "never",
 },
 integrations: [
  react(),
  sitemap({
   changefreq: "weekly",
   priority: 0.7,
   filter: (page) => !page.includes("/404"),
  }),
 ],
  vite: {
    resolve: {
    alias: {
     "@components": "/src/components",
     "@data": "/src/data",
     "@layouts": "/src/layouts",
     "@pages": "/src/pages",
     "@styles": "/src/styles",
     "@types": "/src/types",
     "@utils": "/src/utils",
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    define: {
     "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
    },
  },
});
