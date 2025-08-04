# Search Top Rated Hotels

## Positive Test Cases

1. Search for top rated hotels in Delhi.
	* Expected result: List of top rated hotels in Delhi.
2. Search for top rated hotels in Delhi with a rating of 4 stars.
	* Expected result: List of top rated hotels in Delhi with a rating of 4 stars.
3. Search for top rated hotels in Delhi with a rating of 5 stars.
	* Expected result: List of top rated hotels in Delhi with a rating of 5 stars.
4. Search for top rated hotels in Delhi with a rating of 3 stars.
	* Expected result: List of top rated hotels in Delhi with a rating of 3 stars.
5. Search for top rated hotels in Delhi with a rating of 2 stars.
	* Expected result: List of top rated hotels in Delhi with a rating of 2 stars.
6. Search for top rated hotels in Delhi with a rating of 1 star.
	* Expected result: List of top rated hotels in Delhi with a rating of 1 star.
7. Search for top rated hotels in Delhi with a rating of 0 stars.
	* Expected result: No results found.
8. Search for top rated hotels in Delhi with a rating of 6 stars.
	* Expected result: No results found.

## Negative Test Cases

1. Search for top rated hotels in non-existent city.
	* Expected result: Error message "City not found".
2. Search for top rated hotels in city with no hotels.
	* Expected result: No results found.
3. Search for top rated hotels in city with no hotels with a specific rating.
	* Expected result: No results found.
4. Search for top rated hotels in city with hotels but no hotels with a specific rating.
	* Expected result: No results found.
5. Search for top rated hotels in city with hotels but no hotels with a specific rating and a specific price range.
	* Expected result: No results found.

## Edge Case Test Cases

1. Search for top rated hotels in a city with only one hotel.
	* Expected result: List of one hotel.
2. Search for top rated hotels in a city with hotels but only one hotel with a specific rating.
	* Expected result: List of one hotel.
3. Search for top rated hotels in a city with hotels but only one hotel with a specific rating and a specific price range.
	* Expected result: List of one hotel.
4. Search for top rated hotels in a city with hotels but no hotels with a specific rating and a specific price range.
	* Expected result: No results found.
5. Search for top rated hotels in a city with hotels but no hotels with a specific rating and a specific price range and a specific location.
	* Expected result: No results found.
