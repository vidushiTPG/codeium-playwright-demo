import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Search Hotels', () => {
  let hotelSearchPage: HotelSearchPage;

  test.beforeEach(async ({ page }) => {
    hotelSearchPage = new HotelSearchPage(page);
    await hotelSearchPage.goto();
  });

  test('Search for hotels in a city in India', async () => {
    const city = getRandomIndianCity();
    await hotelSearchPage.enterDestination(`${city}`);
    await hotelSearchPage.clickPopularCity();
    await hotelSearchPage.clickSearch();
    await hotelSearchPage.clickSearch();
    const hotelResult = await hotelSearchPage.getHotelResult();
    expect(hotelResult).toContain(city);
  });
});
