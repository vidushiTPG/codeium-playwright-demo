import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Hotel Search Tests', () => {
  let hotelSearchPage: HotelSearchPage;
  const baseUrl = process.env.BASE_URL || 'https://www.agoda.com';

  test.beforeEach(async ({ page }) => {
    hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.goto();
  });

  test('should search and display hotels for a random Indian city', async ({ page }) => {
    // Get a random Indian city
    const city = getRandomIndianCity();
    console.log(`Searching for hotels in: ${city}`);

    // Perform search
     test.step('Search for a random Indian city', async () => {
      await hotelSearchPage.enterDestination(`${city}`);
      await hotelSearchPage.clickPopularCity();
      await hotelSearchPage.clickCheckInDate();
      await hotelSearchPage.clickSearch();
      
      // Wait for search results to load
      await page.waitForLoadState('networkidle');
    });

    // Verify results
     test.step('Verify search results', async () => {
      // Get the actual searched city from the results page
      const searchedCity = await hotelSearchPage.getSearchedCityText();
      
      // Assert that the searched city appears in the results
      expect(searchedCity?.toLowerCase()).toContain(city.toLowerCase());
      
      // Verify URL contains the city name
      const url = page.url().toLowerCase();
      expect(url).toContain(city.toLowerCase().replace(/\s+/g, '-'));
      
      // Verify page title contains the city name
      const pageTitle = await page.title();
      expect(pageTitle.toLowerCase()).toContain(city.toLowerCase());
    });
  });

  test('should display error for invalid city search', async ({ page }) => {
    const invalidCity = 'NonexistentCity123';
    
     test.step('Search for an invalid city', async () => {
      await hotelSearchPage.enterDestination(invalidCity);
      await hotelSearchPage.clickSearch();
    });

     test.step('Verify no results', async () => {
      // Wait for error message or no results message
      await expect(hotelSearchPage.getSearchedCityText()).resolves.toBe(null);

    });
  });

 test('should maintain search state after page reload', async ({ page }) => {
    const city = getRandomIndianCity();
    
     test.step('Perform initial search', async () => {
      await hotelSearchPage.enterDestination(city);
      await hotelSearchPage.clickPopularCity();
      await hotelSearchPage.clickCheckInDate();
      await hotelSearchPage.clickSearch();
      await page.waitForLoadState('networkidle');
    });

     test.step('Reload the page and verify search state', async () => {
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const searchedCity = await hotelSearchPage.getSearchedCityText();
      expect(searchedCity?.toLowerCase()).toContain(city.toLowerCase());
    });
  });
});
