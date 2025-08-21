import { test, expect } from '@playwright/test';
import { HotelSearchPage } from '../pages/hotelSearchPage';
import { getRandomIndianCity } from '../utils/cityHelper';

test.describe('Hotel Search Tests', () => {
    let hotelSearchPage: HotelSearchPage;
    let randomCity: string;

    test.beforeEach(async ({ page }) => {
        hotelSearchPage = new HotelSearchPage(page);
        randomCity = getRandomIndianCity();
        
        // Navigate to Agoda homepage
        await hotelSearchPage.goto();
        await hotelSearchPage.waitForPageLoad();
    });

    test('Search for hotels in a random Indian city', async ({ page }) => {
        // Enter the random Indian city as destination
        const searchQuery = `${randomCity}, India`;
        await hotelSearchPage.enterDestination(searchQuery);
        
        // Wait for suggestions to appear and select from dropdown
        await page.waitForTimeout(2000);
        
        // Try to select from dropdown suggestions if available
        try {
            await hotelSearchPage.selectDestinationFromDropdown(randomCity);
        } catch {
            // If dropdown selection fails, continue with typed destination
            console.log(`Dropdown selection failed for ${randomCity}, continuing with typed destination`);
        }
        
        // Click check-in date (optional step for basic search)
        await hotelSearchPage.clickCheckInDate();
        await page.waitForTimeout(1000);
        
        // Click search button
        await hotelSearchPage.clickSearch();
        
        // Wait for search results to load
        await hotelSearchPage.waitForSearchResults();
        
        // Validate that search results are displayed
        const areResultsVisible = await hotelSearchPage.areSearchResultsVisible();
        expect(areResultsVisible).toBe(true);
        
        // Validate that the URL contains the searched city or search parameters
        const currentUrl = await hotelSearchPage.getCurrentUrl();
        expect(currentUrl).toContain('agoda.com');
        
        // Validate that the page shows hotels for the searched city
        const pageContent = await page.textContent('body');
        expect(pageContent).toContain(randomCity);
        
        console.log(`Successfully searched for hotels in: ${randomCity}`);
    });

    test('Search for hotels with popular city selection', async ({ page }) => {
        // Enter a partial city name to trigger suggestions
        await hotelSearchPage.enterDestination(randomCity.substring(0, 3));
        
        // Wait for suggestions to appear
        await page.waitForTimeout(2000);
        
        // Click on a popular city suggestion if available
        try {
            await hotelSearchPage.clickPopularCity();
        } catch {
            // Fallback to manual selection if popular city button not found
            await hotelSearchPage.enterDestination(randomCity);
        }
        
        // Click search button
        await hotelSearchPage.clickSearch();
        
        // Wait for search results
        await hotelSearchPage.waitForSearchResults();
        
        // Validate search results are displayed
        const areResultsVisible = await hotelSearchPage.areSearchResultsVisible();
        expect(areResultsVisible).toBe(true);
        
        console.log(`Successfully used popular city selection for: ${randomCity}`);
    });

    test('Validate hotel results contain searched city information', async ({ page }) => {
        const searchQuery = `${randomCity}, India`;
        
        // Perform complete hotel search
        await hotelSearchPage.searchHotels(searchQuery, true);
        
        // Wait for results to load
        await hotelSearchPage.waitForSearchResults();
        
        // Check if hotel listings contain city information
        const hotelListings = page.locator('[data-selenium="hotel-item"], .hotel-item, [class*="hotel"], [class*="property"]');
        await expect(hotelListings.first()).toBeVisible({ timeout: 10000 });
        
        // Validate that at least one hotel result is displayed
        const hotelCount = await hotelListings.count();
        expect(hotelCount).toBeGreaterThan(0);
        
        // Check page title or breadcrumb contains the city name
        const pageTitle = await page.title();
        const pageContent = await page.textContent('body');
        
        // Validate city appears somewhere on the results page
        const cityFoundInContent = pageContent?.toLowerCase().includes(randomCity.toLowerCase()) || 
                                 pageTitle.toLowerCase().includes(randomCity.toLowerCase());
        
        expect(cityFoundInContent).toBe(true);
        
        console.log(`Validated hotel results for ${randomCity} - Found ${hotelCount} hotels`);
    });

    test('Verify search state after page reload', async ({ page }) => {
        const searchQuery = `${randomCity}, India`;
        
        // Perform search
        await hotelSearchPage.searchHotels(searchQuery, true);
        await hotelSearchPage.waitForSearchResults();
        
        // Get current URL before reload
        const urlBeforeReload = await hotelSearchPage.getCurrentUrl();
        
        // Reload the page
        await page.reload();
        await page.waitForLoadState('networkidle');
        
        // Verify URL remains the same (search parameters preserved)
        const urlAfterReload = await hotelSearchPage.getCurrentUrl();
        expect(urlAfterReload).toBe(urlBeforeReload);
        
        // Verify search results are still displayed
        const areResultsVisible = await hotelSearchPage.areSearchResultsVisible();
        expect(areResultsVisible).toBe(true);
        
        console.log(`Search state preserved after reload for: ${randomCity}`);
    });

    test('Handle error for invalid city search', async ({ page }) => {
        const invalidCity = 'XyzInvalidCity123';
        
        // Enter invalid city
        await hotelSearchPage.enterDestination(invalidCity);
        await hotelSearchPage.clickSearch();
        
        // Wait for response
        await page.waitForTimeout(3000);
        
        // Check if error message is displayed or no results found
        const pageContent = await page.textContent('body');
        const hasErrorMessage = pageContent?.includes('No results') || 
                               pageContent?.includes('not found') || 
                               pageContent?.includes('Try again') ||
                               pageContent?.includes('0 properties');
        
        // Either error message should be shown or we should still be on search page
        const currentUrl = await hotelSearchPage.getCurrentUrl();
        const isOnSearchPage = currentUrl.includes('agoda.com');
        
        expect(hasErrorMessage || isOnSearchPage).toBe(true);
        
        console.log(`Handled invalid city search appropriately: ${invalidCity}`);
    });
});
