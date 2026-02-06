import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
 // Base JS
 js.configs.recommended,

 // TypeScript
 ...tseslint.configs.recommended,

 // Astro (lint .astro) — doit passer après TypeScript (qui set un parser global)
 ...eslintPluginAstro.configs["flat/recommended"],

 // Node globals pour les fichiers de config
 {
  files: ["**/*.config.{js,cjs,mjs,ts}", ".prettierrc.mjs"],
  languageOptions: {
   globals: {
    process: "readonly",
   },
  },
 },

 // Import order + resolver TS (alias, paths)
 {
  files: ["**/*.{js,jsx,ts,tsx,astro}"],
  plugins: { import: importPlugin },
 settings: {
   "import/resolver": {
    typescript: {
     project: "./tsconfig.json",
    },
   },
  },
  rules: {
   "import/order": [
    "error",
    {
     groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
     pathGroups: [{ pattern: "@**", group: "internal" }],
     pathGroupsExcludedImportTypes: ["builtin"],
     "newlines-between": "always",
     alphabetize: { order: "asc", caseInsensitive: true },
    },
   ],
  },
 },

 // React uniquement sur JSX/TSX
 {
  files: ["**/*.{jsx,tsx}"],
  plugins: { react: reactPlugin, "react-hooks": reactHooksPlugin },
  settings: { react: { version: "detect" } },
  rules: {
   ...reactHooksPlugin.configs.recommended.rules,
   "react/react-in-jsx-scope": "off",
  },
 },

 // Ignores
 {
  ignores: ["dist/", ".astro/", "node_modules/"],
 },
];
