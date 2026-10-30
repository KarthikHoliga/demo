import { test, expect } from '@playwright/test';

test('get user by id', async ({ request }) => {
  const response = await request.get('https://api.example.com/users/1');

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
});