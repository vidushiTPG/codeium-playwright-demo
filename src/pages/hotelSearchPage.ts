import { Page, Locator } from "@playwright/test";

export class HotelSearchPage {
  private page: Page;

  private readonly destinationInput: Locator ; 
  private readonly popularCityButton: Locator ;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationInput = this.page.getByPlaceholder('Enter a destination or property');
    this.popularCityButton = this.page.locator("//span[@class='Suggestion__boxBadge']");
    this.searchButton = this.page.locator("//button[@data-selenium='searchButton']");
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
    const hotelResult = this.page.locator("//button[@data-selenium='area-city-text']//span");
    return await hotelResult.textContent() || '';
  }
}
