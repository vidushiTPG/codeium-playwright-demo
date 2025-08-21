import { test, expect } from '@playwright/test';

test.describe('API Tests - ReqRes Demo', () => {
    
    test('GET /api/users/2 - Verify user Janet Weaver', async ({ request }) => {
        // Send GET request to the API endpoint
        const response = await request.get('https://reqres.in/api/users/2');
        
        // Assert status code is 200
        expect(response.status()).toBe(200);
        
        // Parse response body as JSON
        const responseBody = await response.json();
        
        // Assert the response structure and user data
        expect(responseBody).toHaveProperty('data');
        expect(responseBody.data).toHaveProperty('first_name', 'Janet');
        expect(responseBody.data).toHaveProperty('last_name', 'Weaver');
        
        // Additional assertions for complete validation
        expect(responseBody.data).toHaveProperty('id', 2);
        expect(responseBody.data).toHaveProperty('email', 'janet.weaver@reqres.in');
        expect(responseBody.data).toHaveProperty('avatar');
        
        // Validate response headers
        expect(response.headers()['content-type']).toContain('application/json');
        
        console.log('API Response:', JSON.stringify(responseBody, null, 2));
    });

    test('GET /api/users/2 - Validate response schema', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2');
        
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        
        // Validate the complete response schema
        expect(responseBody).toMatchObject({
            data: {
                id: expect.any(Number),
                email: expect.any(String),
                first_name: expect.any(String),
                last_name: expect.any(String),
                avatar: expect.any(String)
            },
            support: {
                url: expect.any(String),
                text: expect.any(String)
            }
        });
        
        // Specific validations for Janet Weaver
        expect(responseBody.data.first_name).toBe('Janet');
        expect(responseBody.data.last_name).toBe('Weaver');
        expect(responseBody.data.email).toMatch(/^janet\.weaver@reqres\.in$/);
    });

    test('GET /api/users/2 - Performance and timing validation', async ({ request }) => {
        const startTime = Date.now();
        
        const response = await request.get('https://reqres.in/api/users/2');
        
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        // Assert response time is reasonable (under 5 seconds)
        expect(responseTime).toBeLessThan(5000);
        
        // Assert successful response
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        
        // Verify core user data
        expect(responseBody.data.first_name).toBe('Janet');
        expect(responseBody.data.last_name).toBe('Weaver');
        
        console.log(`API Response time: ${responseTime}ms`);
    });
});
