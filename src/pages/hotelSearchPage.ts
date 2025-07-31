import { Page, Locator } from 'playwright';
export class HotelSearchPage {
  private readonly page: Page;
  private readonly destinationInput: Locator;
  private readonly popularCityButton: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationInput = page.getByPlaceholder('Enter a destination or property');
    this.popularCityButton = page.locator('.Suggestion__boxBadge');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async enterDestination(destination: string) {
    await this.destinationInput.fill(destination);
  }

  async clickPopularCity() {
    await this.popularCityButton.click();
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/en-in/?ds=qvIotc7QHhj5Qg2u`);
  }

    async getHotelResult(): Promise<string> {
        const hotelResult = await this.page.locator('//button[@data-selenium="area-city-text"]//span').first().textContent();
        return hotelResult || '';
    }
}
