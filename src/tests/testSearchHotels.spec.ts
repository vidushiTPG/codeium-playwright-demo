import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Search hotels in a city in India', () => {
  test.beforeEach(async ({ page }) => {
    const hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.goto();
  });

  test('Search hotels in a random city in India', async ({ page }) => {
    const city = getRandomIndianCity();
    const hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.enterDestination(`${city}, India`);
    await hotelSearchPage.clickPopularCity();
    await hotelSearchPage.clickSearch();

    const hotelResult = await hotelSearchPage.getHotelResult();
    expect(hotelResult).toContain(city);
  });
});
