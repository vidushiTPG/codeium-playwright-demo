import { Page, Locator } from '@playwright/test';

export class HotelSearchPage {
    // Locators
    private readonly destinationInput: Locator;
    private readonly popularCityButton: Locator;
    private readonly checkInDateButton: Locator;
    private readonly searchButton: Locator;
    private readonly searchedCity: Locator;

    constructor(private readonly page: Page) {
        // Initialize locators in constructor
        this.destinationInput = page.getByPlaceholder('Enter a destination or property');
        this.popularCityButton = page.locator('span.Suggestion__boxBadge').first();
        this.checkInDateButton = page.locator('div[data-selenium="checkInBox"]');
        this.searchButton = page.getByRole('button', { name: /search/i });
        this.searchedCity = page.locator('button[data-selenium="area-city-text"] span');
    }

    /**
     * Navigates to the Agoda hotel search page
     */
    async goto(): Promise<void> {
        const baseUrl = process.env.BASE_URL || 'https://www.agoda.com';
        await this.page.goto(`${baseUrl}/en-in/?ds=qvIotc7QHhj5Qg2u`);
    }

    /**
     * Enters destination in the search input
     * @param destination - The destination city or property name
     */
    async enterDestination(destination: string): Promise<void> {
        await this.destinationInput.fill(destination);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks on the first popular city suggestion
     */
    async clickPopularCity(): Promise<void> {
        await this.popularCityButton.click();
    }

    /**
     * Clicks on the check-in date picker
     */
    async clickCheckInDate(): Promise<void> {
        await this.checkInDateButton.click();
    }

    /**
     * Clicks the search button
     */
    async clickSearch(): Promise<void> {
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Gets the text of the searched city
     * @returns The text content of the searched city element
     */
    async getSearchedCityText(): Promise<string | null> {
        return await this.searchedCity.textContent();
    }
}
