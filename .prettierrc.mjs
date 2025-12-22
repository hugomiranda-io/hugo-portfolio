export default {
 plugins: ["prettier-plugin-astro"],
 overrides: [{ files: "*.astro", options: { parser: "astro" } }],
 printWidth: 100,
 trailingComma: "all",
 tabWidth: 1,
};
