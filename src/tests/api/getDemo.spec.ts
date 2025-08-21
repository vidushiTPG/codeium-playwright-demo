import { test, expect } from '@playwright/test';

test.describe('GET /api/users/2', () => {
  test('should return user details for user with id 2', async ({ request }) => {
    // Send GET request to the API endpoint
    const response = await request.get('https://reqres.in/api/users/2');

    // Assert status code is 200
    expect(response.status()).toBe(200);

    // Parse the response body
    const responseBody = await response.json();
    const userData = responseBody.data;

    // Assert the response body contains the expected user details
    expect(userData).toHaveProperty('first_name', 'Janet');
    expect(userData).toHaveProperty('last_name', 'Weaver');
    
    // Additional assertions for response structure
    expect(userData).toHaveProperty('id', 2);
    expect(userData).toHaveProperty('email');
    expect(userData).toHaveProperty('avatar');
  });
});
