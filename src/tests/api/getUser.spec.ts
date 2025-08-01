import { test, expect, request } from '@playwright/test';

test.describe('API test', () => {


  test('GET /api/users/2', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.data.first_name).toBe('Janet');
    expect(data.data.last_name).toBe('Weaver');
  });
});

test.describe('API test with query parameters', () => {
  test('GET /api/users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users', {
      params: { page: 2 },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.page).toBe(2);
    expect(data.data.length).toBeGreaterThan(0);
  });
});
