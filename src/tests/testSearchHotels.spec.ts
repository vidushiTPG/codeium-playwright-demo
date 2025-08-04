import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Search hotels in a random Indian city', () => {
  let hotelSearchPage: HotelSearchPage;

  test.beforeEach(async ({ page }) => {
    hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.goto();
  });

  test('should search hotels in a random Indian city', async () => {
    const city = getRandomIndianCity();
    await hotelSearchPage.enterDestination(`${city}, India`);
    await hotelSearchPage.clickPopularCity();
    await hotelSearchPage.clickCheckInDate();
    await hotelSearchPage.clickSearch();

    const hotelResult = await hotelSearchPage.searchedCity;
    expect(hotelResult).toContain(city);
  });
});
