import { test, expect } from '@playwright/test';

test('dashboard grouping and tiers', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Login as High School student
  await page.click('text=Subscribe Now >> nth=2');

  await expect(page).toHaveURL(/.*dashboard/);

  // Should see High School Curriculum unlocked
  await expect(page.locator('text=Highschool Curriculum')).toBeVisible();

  // Should see Medical and Nursing Curriculums locked
  await expect(page.locator('text=Medical Curriculum')).toBeVisible();
  await expect(page.locator('text=Nursing Curriculum')).toBeVisible();
  await expect(page.locator('text=Upgrade to Unlock')).toHaveCount(2);

  // Take screenshot
  await page.screenshot({ path: 'static/dashboard-refactored.png', fullPage: true });
});
