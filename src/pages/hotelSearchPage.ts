import { Locator, Page } from '@playwright/test';
export class HotelSearchPage {
  private readonly destinationInput: Locator;
  private readonly popularCityButton: Locator;
  private readonly checkInDateButton: Locator;
  private readonly searchButton: Locator;

  constructor(private readonly page: Page) {
    this.destinationInput = this.page.getByPlaceholder('Enter a destination or property');
    this.popularCityButton = this.page.locator('//span[@class="Suggestion__boxBadge"]');
    this.checkInDateButton = this.page.locator('//div[@data-selenium="checkInBox"]');
    this.searchButton = this.page.getByRole('button', { name: 'SEARCH' });
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
async getHotelResult(): Promise<string> {
  const hotelResult = await this.page.locator("//button[@data-selenium='area-city-text']//span").first().textContent();
  return hotelResult || '';
}
}
