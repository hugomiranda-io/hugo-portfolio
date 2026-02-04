import { defineConfig, devices } from "@playwright/test";

const PORT = 4321;

export default defineConfig({
 testDir: "tests/e2e",
 fullyParallel: true,
 retries: process.env.CI ? 2 : 0,
 reporter: process.env.CI ? "dot" : "list",
 use: {
  baseURL: `http://localhost:${PORT}`,
  trace: "on-first-retry",
 },
 webServer: {
  command: `pnpm astro dev --port ${PORT} --host 127.0.0.1`,
  url: `http://localhost:${PORT}`,
  reuseExistingServer: !process.env.CI,
 },
 projects: [
  { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  { name: "firefox", use: { ...devices["Desktop Firefox"] } },
  { name: "webkit", use: { ...devices["Desktop Safari"] } },
 ],
});
