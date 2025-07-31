# Search Hotels in Goa

## Positive Test Cases

### TC1: Search with valid data

* Preconditions:
	+ User is on the homepage
	+ User has a valid search query (e.g. "Goa")
* Steps:
	1. Enter valid search query in the search bar
	2. Click on the search button
	3. Verify that the search results page is displayed
	4. Verify that the search query is displayed in the search bar
	5. Verify that the list of hotels is displayed
	6. Verify that each hotel has a name, rating, price, and location
	7. Verify that the user can sort the list of hotels by rating, price, and location
	8. Verify that the user can filter the list of hotels by rating, price, and location
	9. Verify that the user can click on a hotel to view its details
	10. Verify that the hotel details page is displayed
	11. Verify that the hotel details page displays the hotel's name, rating, price, location, and amenities
	12. Verify that the user can book a hotel room
	13. Verify that the booking confirmation page is displayed
	14. Verify that the booking confirmation page displays the booking details and a confirmation number
	15. Verify that the user can cancel the booking
	16. Verify that the cancellation confirmation page is displayed
	17. Verify that the cancellation confirmation page displays the cancellation details and a cancellation number

### TC2: Search with invalid data

* Preconditions:
	+ User is on the homepage
	+ User has an invalid search query (e.g. "invalid query")
* Steps:
	1. Enter invalid search query in the search bar
	2. Click on the search button
	3. Verify that the search results page is not displayed
	4. Verify that an error message is displayed
	5. Verify that the error message indicates that the search query is invalid

### TC3: Search with empty data

* Preconditions:
	+ User is on the homepage
	+ User has an empty search query (e.g. "")
* Steps:
	1. Enter empty search query in the search bar
	2. Click on the search button
	3. Verify that the search results page is not displayed
	4. Verify that an error message is displayed
	5. Verify that the error message indicates that the search query is empty

### TC4: Search with special characters

* Preconditions:
	+ User is on the homepage
	+ User has a search query with special characters (e.g. "Goa!")
* Steps:
	1. Enter search query with special characters in the search bar
	2. Click on the search button
	3. Verify that the search results page is displayed
	4. Verify that the search query is displayed in the search bar
	5. Verify that the list of hotels is displayed
	6. Verify that each hotel has a name, rating, price, and location
	7. Verify that the user can sort the list of hotels by rating, price, and location
	8. Verify that the user can filter the list of hotels by rating, price, and location
	9. Verify that the user can click on a hotel to view its details
	10. Verify that the hotel details page is displayed
	11. Verify that the hotel details page displays the hotel's name, rating, price, location, and amenities
	12. Verify that the user can book a hotel room
	13. Verify that the booking confirmation page is displayed
	14. Verify that the booking confirmation page displays the booking details and a confirmation number
	15. Verify that the user can cancel the booking
	16. Verify that the cancellation confirmation page is displayed
	17. Verify that the cancellation confirmation page displays the cancellation details and a cancellation number

### TC5: Search with multiple words

* Preconditions:
	+ User is on the homepage
	+ User has a search query with multiple words (e.g. "Goa beach")
* Steps:
	1. Enter search query with multiple words in the search bar
	2. Click on the search button
	3. Verify that the search results page is displayed
	4. Verify that the search query is displayed in the search bar
	5. Verify that the list of hotels is displayed
	6. Verify that each hotel has a name, rating, price, and location
	7. Verify that the user can sort the list of hotels by rating, price, and location
	8. Verify that the user can filter the list of hotels by rating, price, and location
	9. Verify that the user can click on a hotel to view its details
	10. Verify that the hotel details page is displayed
	11. Verify that the hotel details page displays the hotel's name, rating, price, location, and amenities
	12. Verify that the user can book a hotel room
	13. Verify that the booking confirmation page is displayed
	14. Verify that the booking confirmation page displays the booking details and a confirmation number
	15. Verify that the user can cancel the booking
	16. Verify that the cancellation confirmation page is displayed
	17. Verify that the cancellation confirmation page displays the cancellation details and a cancellation number

### TC6: Search with special characters and multiple words

* Preconditions:
	+ User is on the homepage
	+ User has a search query with special characters and multiple words (e.g. "Goa beach!")
* Steps:
	1. Enter search query with special characters and multiple words in the search bar
	2. Click on the search button
	3. Verify that the search results page is displayed
	4. Verify that the search query is displayed in the search bar
	5. Verify that the list of hotels is displayed
	6. Verify that each hotel has a name, rating, price, and location
	7. Verify that the user can sort the list of hotels by rating, price, and location
	8. Verify that the user can filter the list of hotels by rating, price, and location
	9. Verify that the user can click on a hotel to view its details
	10. Verify that the hotel details page is displayed
	11. Verify that the hotel details page displays the hotel's name, rating, price, location, and amenities
	12. Verify that the user can book a hotel room
	13. Verify that the booking confirmation page is displayed
	14. Verify that the booking confirmation page displays the booking details and a confirmation number
	15. Verify that the user can cancel the booking
	16. Verify that the cancellation confirmation page is displayed
	17. Verify that the cancellation confirmation page displays the cancellation details and a cancellation number

## Negative Test Cases

### TC7: Search with no data

* Preconditions:
	+ User is on the homepage
	+ User has not entered any search query
* Steps:
	1. Click on the search button
	2. Verify that the search results page is not displayed
	3. Verify that an error message is displayed
	4. Verify that the error message indicates that the search query is empty

### TC8: Search with invalid data and special characters

* Preconditions:
	+ User is on the homepage
	+ User has an invalid search query with special characters (e.g. "!@#$%^&*()")
* Steps:
	1. Enter invalid search query with special characters in the search bar
	2. Click on the search button
	3. Verify that the search results page is not displayed
	4. Verify that an error message is displayed
	5. Verify that the error message indicates that the search query is invalid

### TC9: Search with special characters and no data

* Preconditions:
	+ User is on the homepage
	+ User has a search query with special characters but no data (e.g. "!")
* Steps:
	1. Enter search query with special characters but no data in the search bar
	2. Click on the search button
	3. Verify that the search results page is not displayed
	4. Verify that an error message is displayed
	5. Verify that the error message indicates that the search query is empty

## Edge Case Test Cases

### TC10: Search with a very long search query

* Preconditions:
	+ User is on the homepage
	+ User has a very long search query (e.g. "this is a very long search query that is much longer than the normal search query")
* Steps:
	1. Enter very long search query in the search bar
	2. Click on the search button
	3. Verify that the search results page is displayed
	4. Verify that the search query is displayed in the search bar
	5. Verify that the list of hotels is displayed
	6. Verify that each hotel has a name, rating, price, and location
	7. Verify that the user can sort the list of hotels by rating, price, and location
	8. Verify that the user can filter the list of hotels by rating, price, and location
	9. Verify that the user can click on a hotel to view its details
	10. Verify that the hotel details page is displayed
	11. Verify that the hotel details page displays the hotel's name, rating, price, location, and amenities
	12. Verify that the user can book a hotel room
	13. Verify that the booking confirmation page is displayed
	14. Verify that the booking confirmation page displays the booking details and a confirmation number
	15. Verify that the user can cancel the booking
	16. Verify that the cancellation confirmation page is displayed

