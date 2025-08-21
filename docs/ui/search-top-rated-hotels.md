# Hotel Search Test Cases - agoda.com

## Test Environment
- **Base URL**: https://www.agoda.com
- **Supported Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Viewports**: Desktop (1920x1080), Tablet (1024x768), Mobile (375x812)
- **Test Data**: Indian cities including Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, Ahmedabad, Kolkata, Jaipur, Kochi

## Test Cases

### Positive Test Cases

#### TC-P001: Search hotels with valid Indian city
- **Description**: Verify hotel search with a valid Indian city
- **Preconditions**: User is on agoda.com homepage
- **Test Steps**:
  1. Enter a valid Indian city (e.g., "Mumbai, India") in the destination field
  2. Select check-in and check-out dates
  3. Click 'Search' button
- **Expected Results**:
  - Search results page loads successfully
  - Search results show hotels in the specified city
  - City name is displayed in the search results header

#### TC-P002: Search with city selection from popular cities
- **Description**: Verify city selection from popular cities dropdown
- **Test Steps**:
  1. Start typing a city name (e.g., "Del")
  2. Select the city from the popular cities dropdown
  3. Verify dates and click 'Search'
- **Expected Results**:
  - City is auto-completed in the search field
  - Search results show hotels in the selected city

### Negative Test Cases

#### TC-N001: Search with non-existent city
- **Description**: Verify behavior when searching for a non-existent city
- **Test Steps**:
  1. Enter "NonexistentCity, India" in the destination field
  2. Click 'Search'
- **Expected Results**:
  - Appropriate error message is displayed
  - No search results shown

#### TC-N002: Search with special characters in city name
- **Test Steps**:
  1. Enter "Mum@bai, India" in the destination field
  2. Click 'Search'
- **Expected Results**:
  - Input validation error is shown
  - Search button is disabled

### Edge Cases

#### TC-E001: Search with minimum date range
- **Description**: Verify search with same check-in and check-out date
- **Test Steps**:
  1. Select today's date for both check-in and check-out
  2. Click 'Search'
- **Expected Results**:
  - Appropriate error message about minimum stay requirement
  - Search not executed

#### TC-E002: Search with maximum date range (1 year)
- **Test Steps**:
  1. Set check-in date to today
  2. Set check-out date to exactly 1 year from today
  3. Click 'Search'
- **Expected Results**:
  - Search executes successfully
  - Results show availability for the selected date range

## Test Data

### Valid Indian Cities
- Mumbai
- Delhi
- Bengaluru
- Chennai
- Hyderabad
- Pune
- Ahmedabad
- Kolkata
- Jaipur
- Kochi

### Invalid Test Data
- NonexistentCity
- Special characters (e.g., @#$
- Numbers (e.g., 12345)
- Very long city names
- SQL injection attempts

## Cross-Browser Testing
- Verify all test cases on:
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

## Mobile Responsiveness
- Test search functionality on:
  - iOS Safari
  - Android Chrome
  - Different screen sizes (320px to 1440px)

## Performance Testing
- Page load time < 3 seconds
- Search results load time < 5 seconds
- API response time < 2 seconds

## Security Testing
- Verify HTTPS is enforced
- Test for XSS vulnerabilities
- Verify input sanitization

## Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast ratio
- ARIA labels

## Test Execution
1. Execute all positive test cases
2. Execute negative test cases
3. Execute edge cases
4. Perform cross-browser testing
5. Verify mobile responsiveness
6. Execute performance tests
7. Conduct security and accessibility testing

## Defect Reporting Template
```
Title: [Brief description of the issue]
Environment: [Browser/Device/OS]
Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]
Expected Result: [Expected behavior]
Actual Result: [Actual behavior]
Severity: [Critical/Major/Minor/Cosmetic]
Priority: [High/Medium/Low]
Screenshots: [Attach if applicable]
```

## Test Sign-off
- [ ] All test cases executed
- [ ] All critical bugs fixed and retested
- [ ] Test results documented
- [ ] Stakeholder approval obtained
