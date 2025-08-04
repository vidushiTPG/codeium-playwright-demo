import { test, expect, request } from '@playwright/test';

test.describe('GET /api/users/2', () => {
  test('should return user data', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data).toEqual({
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    });
  });
});
