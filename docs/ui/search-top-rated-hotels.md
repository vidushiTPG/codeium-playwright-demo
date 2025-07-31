/*************  ✨ Windsurf Command ⭐  *************/
# Search Top Rated Hotels in Goa

## Positive Test Cases

1. **Search hotels in Goa with valid location**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Click on the "Search" button
		3. Verify that the search results page is displayed with a list of hotels in Goa
	* Expected Result: The search results page should display a list of hotels in Goa with their respective details (name, price, rating, etc.)
2. **Search hotels in Goa with valid location and check-in date**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Select a valid check-in date
		3. Click on the "Search" button
		4. Verify that the search results page is displayed with a list of hotels in Goa, filtered by the selected check-in date
	* Expected Result: The search results page should display a list of hotels in Goa with their respective details (name, price, rating, etc.), filtered by the selected check-in date
3. **Search hotels in Goa with valid location and check-in/check-out dates**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Select a valid check-in date
		3. Select a valid check-out date
		4. Click on the "Search" button
		5. Verify that the search results page is displayed with a list of hotels in Goa, filtered by the selected check-in and check-out dates
	* Expected Result: The search results page should display a list of hotels in Goa with their respective details (name, price, rating, etc.), filtered by the selected check-in and check-out dates

## Negative Test Cases

1. **Search hotels in Goa with invalid location**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Invalid Location" as the location in the search bar
		2. Click on the "Search" button
		3. Verify that an error message is displayed
	* Expected Result: An error message should be displayed indicating that the location is invalid
2. **Search hotels in Goa with invalid check-in date**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Select an invalid check-in date (e.g. a date in the past)
		3. Click on the "Search" button
		4. Verify that an error message is displayed
	* Expected Result: An error message should be displayed indicating that the check-in date is invalid
3. **Search hotels in Goa with invalid check-out date**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Select a valid check-in date
		3. Select an invalid check-out date (e.g. a date before the check-in date)
		4. Click on the "Search" button
		5. Verify that an error message is displayed
	* Expected Result: An error message should be displayed indicating that the check-out date is invalid

## Edge Case Test Cases

1. **Search hotels in Goa with no check-in/check-out dates**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Leave the check-in and check-out dates blank
		3. Click on the "Search" button
		4. Verify that the search results page is displayed with a list of hotels in Goa
	* Expected Result: The search results page should display a list of hotels in Goa with their respective details (name, price, rating, etc.)
2. **Search hotels in Goa with only check-in date**
	* Preconditions: User is on the Agoda homepage
	* Steps:
		1. Enter "Goa" as the location in the search bar
		2. Select a valid check-in date
		3. Leave the check-out date blank
		4. Click on the "Search" button
		5. Verify that the search results page is displayed with a list of hotels in Goa, filtered by the selected check-in date
	* Expected Result: The search results page should display a list of hotels in Goa with their respective details (name, price, rating, etc.), filtered by the selected check-in date
/*******  2d589a70-d9e6-4e75-8373-73dfa1897741  *******/    