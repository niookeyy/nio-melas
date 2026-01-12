
import { test, expect } from '@playwright/test';

test.describe('Navbar Globe Icon Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
    // Tunggu hingga elemen <nav> terlihat, yang menandakan loading selesai.
    // Timeout ditingkatkan untuk memberi waktu pada animasi loading.
    await page.waitForSelector('nav', { state: 'visible', timeout: 20000 });
  });

  test('should display the globe icon on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const navbar = page.locator('nav');

    // Verifikasi bahwa ikon globe ada di dalam navbar
    const globeIcon = navbar.locator('svg[class*="flex-shrink-0"]');
    await expect(globeIcon).toBeVisible();

    await navbar.screenshot({ path: 'tests/screenshots/navbar-desktop-fixed.png' });
  });

  test('should display the globe icon on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Ukuran iPhone 8
    const navbar = page.locator('nav');

    // Verifikasi bahwa ikon globe ada di dalam navbar
    const globeIcon = navbar.locator('svg[class*="flex-shrink-0"]');
    await expect(globeIcon).toBeVisible();

    await navbar.screenshot({ path: 'tests/screenshots/navbar-mobile-fixed.png' });
  });
});
