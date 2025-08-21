# Test Documentation: Search Hotels in Random City in India

## Test Objective
To verify the functionality of searching for top-rated hotels in various Indian cities on agoda.com, ensuring accurate and relevant search results.

## Test Environment
- **Browser**: Chrome (Latest), Firefox (Latest), Safari (Latest)
- **Device**: Desktop, Mobile, Tablet
- **Environment**: Staging, Production
- **Test Data**: List of Indian cities (Mumbai, Delhi, Bangalore, Goa, Jaipur, etc.)

## Test Setup
1. Clear browser cache and cookies
2. Ensure stable internet connection
3. Navigate to agoda.com
4. Accept cookies and dismiss any pop-ups

## Test Cases

### Positive Test Cases

#### TC-P001: Search with Valid Indian City
- **Description**: Verify search with a valid Indian city
- **Steps**:
  1. Enter a valid Indian city (e.g., "Mumbai") in the search field
  2. Select the city from the dropdown
  3. Select check-in and check-out dates (current date + 7 days)
  4. Click 'Search' button
- **Expected Result**:
  - Page should load with hotel listings for the selected city
  - Map should show the correct location
  - Results should be relevant to the searched city
  - Price and availability should be displayed for each hotel

#### TC-P002: Search with Different Date Ranges
- **Description**: Verify search with various date combinations
- **Steps**:
  1. Enter a valid Indian city
  2. Select different date ranges (weekday, weekend, holiday period)
  3. Click 'Search' button
- **Expected Result**:
  - Results should adjust based on selected dates
  - Price variations should be reflected for different dates
  - No error messages should appear

### Negative Test Cases

#### TC-N001: Search with Non-Existent City
- **Description**: Verify search with invalid city name
- **Steps**:
  1. Enter a non-existent city (e.g., "Xyzabc")
  2. Click 'Search' button
- **Expected Result**:
  - Appropriate error message should be displayed
  - No results should be shown
  - User should be prompted to try a different location

#### TC-N002: Search with Special Characters
- **Description**: Verify search with special characters
- **Steps**:
  1. Enter special characters (e.g., "@#$") in search field
  2. Click 'Search' button
- **Expected Result**:
  - Input should be validated
  - Appropriate error message should be displayed
  - No results should be shown

### Edge Cases

#### TC-E001: Search with Very Long City Name
- **Description**: Verify search with extremely long city name
- **Steps**:
  1. Enter a very long city name (100+ characters)
  2. Click 'Search' button
- **Expected Result**:
  - Input should be truncated or validated
  - Appropriate error message should be displayed if invalid
  - No system crash should occur

#### TC-E002: Search with Past Dates
- **Description**: Verify search with past check-in dates
- **Steps**:
  1. Enter a valid city
  2. Select past dates for check-in/check-out
  3. Click 'Search' button
- **Expected Result**:
  - System should not allow past dates
  - Appropriate error message should be displayed
  - User should be prompted to select future dates

## Performance Testing
- **PT-001**: Search response time should be under 3 seconds for first-time search
- **PT-002**: Subsequent searches should be faster due to caching
- **PT-003**: System should handle 100+ concurrent users without degradation

## Security Testing
- **ST-001**: Verify HTTPS is enforced on all pages
- **ST-002**: Test for SQL injection in search field
- **ST-003**: Verify no sensitive data is exposed in API responses

## Cross-Browser Testing
- **CB-001**: Verify consistent functionality across Chrome, Firefox, Safari
- **CB-002**: Verify responsive design on mobile devices
- **CB-003**: Test on different screen resolutions

## Accessibility Testing
- **A11Y-001**: Verify keyboard navigation
- **A11Y-002**: Check color contrast ratios
- **A11Y-003**: Test with screen readers

## Test Data
### Valid Indian Cities
- Mumbai, Maharashtra
- Delhi
- Bangalore, Karnataka
- Goa
- Jaipur, Rajasthan
- Chennai, Tamil Nadu
- Kolkata, West Bengal
- Hyderabad, Telangana
- Pune, Maharashtra
- Udaipur, Rajasthan

### Invalid Test Data
- Xyzabc
- 12345
- !@#$
- <script>alert('xss')</script>

## Defect Reporting Template