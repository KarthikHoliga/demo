# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.ts >> get user by id
- Location: tests\API.spec.ts:3:5

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND api.example.com
Call log:
  - → GET https://api.example.com/users/1
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:155.0) Gecko/20100101 Firefox/155.0
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('get user by id', async ({ request }) => {
> 4 |   const response = await request.get('https://api.example.com/users/1');
    |                                  ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND api.example.com
  5 | 
  6 |   expect(response.status()).toBe(200);
  7 |   const body = await response.json();
  8 |   expect(body.id).toBe(1);
  9 | });
```