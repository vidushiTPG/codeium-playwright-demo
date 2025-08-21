import { Page, Locator } from '@playwright/test';

export class HotelSearchPage {
    readonly page: Page;
    
    // Locators using Playwright's recommended approach
    private readonly destinationInput: Locator;
    private readonly popularCityButton: Locator;
    private readonly checkInDateButton: Locator;
    private readonly searchedCity: Locator;
    private readonly searchButton: Locator;
    private readonly checkOutDateButton: Locator;
    private readonly guestsAndRoomsButton: Locator;
    private readonly searchResultsContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators using Playwright's recommended methods
        this.destinationInput = this.page.getByPlaceholder('Enter a destination or property');
        
        // Fallback to page.locator() for specific elements that don't have semantic locators
        this.popularCityButton = this.page.locator('//span[@class="Suggestion__boxBadge"]');
        this.checkInDateButton = this.page.locator('//div[@data-selenium="checkInBox"]');
        this.searchedCity = this.page.locator('//button[@data-selenium="area-city-text"]//span');
        
        // Search button - try semantic locator first, fallback to specific selector
        this.searchButton = this.page.getByRole('button', { name: 'Search' }).or(
            this.page.locator('[data-selenium="searchButton"]')
        );
        
        // Additional useful locators
        this.checkOutDateButton = this.page.locator('//div[@data-selenium="checkOutBox"]');
        this.guestsAndRoomsButton = this.page.locator('//div[@data-selenium="occupancyBox"]');
        this.searchResultsContainer = this.page.locator('[data-selenium="hotel-list"]');
    }

    /**
     * Navigate to Agoda.com homepage
     */
    async goto(): Promise<void> {
        const baseUrl = process.env.BASE_URL || 'https://www.agoda.com';
        await this.page.goto(`${baseUrl}/en-in/?ds=qvIotc7QHhj5Qg2u`);
        
        // Wait for the page to load and destination input to be visible
        await this.destinationInput.waitFor({ state: 'visible' });
    }

    /**
     * Enter destination in the search input
     * @param destination - The destination city or property name
     */
    async enterDestination(destination: string): Promise<void> {
        await this.destinationInput.click();
        await this.destinationInput.clear();
        await this.destinationInput.fill(destination);
        
        // Wait a moment for suggestions to appear
        await this.page.waitForTimeout(1000);
    }

    /**
     * Click on a popular city suggestion
     */
    async clickPopularCity(): Promise<void> {
        await this.popularCityButton.first().click();
    }

    /**
     * Click on the check-in date selector
     */
    async clickCheckInDate(): Promise<void> {
        await this.checkInDateButton.click();
    }

    /**
     * Click on the check-out date selector
     */
    async clickCheckOutDate(): Promise<void> {
        await this.checkOutDateButton.click();
    }

    /**
     * Click on guests and rooms selector
     */
    async clickGuestsAndRooms(): Promise<void> {
        await this.guestsAndRoomsButton.click();
    }

    /**
     * Click the search button to initiate hotel search
     */
    async clickSearch(): Promise<void> {
        await this.searchButton.click();
        
        // Wait for search results to load
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Get the text of the searched city
     * @returns The searched city text
     */
    async getSearchedCityText(): Promise<string> {
        return await this.searchedCity.textContent() || '';
    }

    /**
     * Select a destination from the dropdown suggestions
     * @param destinationText - The exact text of the destination to select
     */
    async selectDestinationFromDropdown(destinationText: string): Promise<void> {
        const suggestion = this.page.getByText(destinationText).first();
        await suggestion.click();
    }

    /**
     * Perform a complete hotel search
     * @param destination - The destination to search for
     * @param selectFromDropdown - Whether to select from dropdown suggestions
     */
    async searchHotels(destination: string, selectFromDropdown: boolean = true): Promise<void> {
        await this.enterDestination(destination);
        
        if (selectFromDropdown) {
            // Wait for suggestions and select the first matching one
            await this.page.waitForTimeout(2000);
            const firstSuggestion = this.page.locator('[data-selenium="suggestion"]').first();
            if (await firstSuggestion.isVisible()) {
                await firstSuggestion.click();
            }
        }
        
        await this.clickSearch();
    }

    /**
     * Wait for search results to be visible
     */
    async waitForSearchResults(): Promise<void> {
        await this.searchResultsContainer.waitFor({ state: 'visible', timeout: 10000 });
    }

    /**
     * Check if search results are displayed
     * @returns True if search results are visible
     */
    async areSearchResultsVisible(): Promise<boolean> {
        try {
            await this.searchResultsContainer.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Get the current URL
     * @returns Current page URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Wait for the page to be fully loaded
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
        await this.destinationInput.waitFor({ state: 'visible' });
    }
}
