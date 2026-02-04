import { expect, test } from "@playwright/test";

test("homepage displays the hero title", async ({ page }) => {
 await page.goto("/");
 await expect(page.getByRole("heading", { name: "Hugo Miranda" })).toBeVisible();
});
