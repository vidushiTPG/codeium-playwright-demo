| Test Case ID | Test Type | Description | Test Steps | Expected Result |
| --- | --- | --- | --- | --- |
| SRCH-001 | Positive | Search for hotels in Bangalore | Enter valid dates, select Bangalore as destination, and submit the form | List of hotels in Bangalore should be displayed |
| SRCH-002 | Positive | Search for hotels in Delhi | Enter valid dates, select Delhi as destination, and submit the form | List of hotels in Delhi should be displayed |
| SRCH-003 | Positive | Search for hotels in Mumbai | Enter valid dates, select Mumbai as destination, and submit the form | List of hotels in Mumbai should be displayed |
| SRCH-004 | Negative | Search for hotels in invalid city | Enter valid dates, enter invalid city name as destination, and submit the form | Error message should be displayed |
| SRCH-005 | Negative | Search for hotels without selecting destination | Enter valid dates, do not select destination, and submit the form | Error message should be displayed |
| SRCH-006 | Negative | Search for hotels with invalid dates | Enter invalid dates, select valid destination, and submit the form | Error message should be displayed |
| SRCH-007 | Edge Case | Search for hotels in city with no hotels | Enter valid dates, select city with no hotels as destination, and submit the form | Message indicating no hotels available should be displayed |
| SRCH-008 | Edge Case | Search for hotels with unsupported combination of filters | Select valid destination, select unsupported combination of filters, and submit the form | Error message should be displayed |
| SRCH-009 | Edge Case | Search for hotels with boundary values of dates | Enter boundary values of dates (e.g. 1st Jan 1970), select valid destination, and submit the form | List of hotels should be displayed |
