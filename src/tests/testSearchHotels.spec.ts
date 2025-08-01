import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Search for hotels in a random city in India', () => {
  let hotelSearchPage: HotelSearchPage;

  test.beforeEach(async ({ page }) => {
    hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.goto();
  });

  test('should search for hotels in a random city in India and validate the results', async () => {
    const city = getRandomIndianCity();
    await hotelSearchPage.enterDestination(`${city}`);
    await hotelSearchPage.clickPopularCity();
    await hotelSearchPage.clickCheckInDate();
    await hotelSearchPage.clickSearch();
    const hotelResult = await hotelSearchPage.getHotelResult();
    expect(hotelResult).toContain(city);
  });
});
