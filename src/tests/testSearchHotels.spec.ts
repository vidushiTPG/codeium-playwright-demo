import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Search hotels in a city', ( ) => {

  test('should search for hotels in a city', async ({page}) => {
      const hotelSearchPage = new HotelSearchPage(page);
      await hotelSearchPage.goto()
    const city = getRandomIndianCity();
    await hotelSearchPage.enterDestination(`${city}, India`);
    await hotelSearchPage.clickPopularCity();
    await hotelSearchPage.clickCheckInDate();
    await hotelSearchPage.clickSearch();

    const hotelResult = await hotelSearchPage.getHotelResult();
    expect(hotelResult).toContain(city);
  });
});
