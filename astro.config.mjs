// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// Astro's `defineConfig` doesn't accept a callback; detect the current command via argv.
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  integrations: [react()],
  vite: {
    resolve: {
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
    },
  },
});
