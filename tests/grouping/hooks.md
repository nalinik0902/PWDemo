Playwright provides several hooks to manage how and when tests are executed. 

test.beforeAll() 
• Purpose: Runs once before all tests in a file or a describe block. 
• Use Case: Initialize shared resources like launching a browser or setting up test data. 
beforeAll(async () => { 
  console.log('Runs once before all tests'); 
}); 
test.afterAll() 
• Purpose: Runs once after all tests in a file or a describe block. 
• Use Case: Clean up resources like closing the browser or deleting test data. 
afterAll(async () => { 
  console.log('Runs once after all tests'); 
}); 
test.beforeEach() 
• Purpose: Runs before each individual test. 
• Use Case: Set up a fresh state like opening a new page or logging into an app. 
beforeEach(async ({ page }) => { 
  await page.goto('https://example.com'); 
}); 
test.afterEach() 
• Purpose: Runs after each individual test. 
• Use Case: Clean up after each test like closing the page or clearing local storage. 
afterEach(async ({ page }) => { 
  await page.close(); 
});
