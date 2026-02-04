import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
 plugins: [react(), tsconfigPaths()],
 test: {
  css: true,
  environment: "jsdom",
  globals: true,
  exclude: ["tests/e2e/**"],
  setupFiles: "./src/test/setup.ts",
 },
});
