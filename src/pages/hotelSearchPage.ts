import { Locator, Page } from '@playwright/test';
export class HotelSearchPage {
  private readonly page: Page;
  private readonly destinationInput: Locator;
  private readonly popularCityButton: Locator;
  private readonly checkInDateButton: Locator;
  private readonly searchedCityLocator: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationInput = page.getByPlaceholder('Enter a destination or property');
    this.popularCityButton = page.locator('//span[@class="Suggestion__boxBadge"]');
    this.checkInDateButton = page.locator('//div[@data-selenium="checkInBox"]');
    this.searchedCityLocator = page.locator('//button[@data-selenium="area-city-text"]//span');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async enterDestination(destination: string) {
    await this.destinationInput.fill(destination);
  }

  async clickPopularCity() {
    await this.popularCityButton.click();
  }

  async clickCheckInDate() {
    await this.checkInDateButton.click();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/en-in/?ds=qvIotc7QHhj5Qg2u`);
  }

  async searchedCity() {
    return this.searchedCityLocator.first().textContent();
  }
}
