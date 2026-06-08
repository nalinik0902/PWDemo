Flaky Tests and Retries 
 
What are Flaky Tests? 
A flaky test is a test that sometimes passes and sometimes fails.  These failures are usually caused by things like: 
• Slow network or server response 
• Delayed UI updates 
• Timing issues or animations 

To handle flaky tests, Playwright allows you to retry tests that fail. If a test fails, Playwright can automatically run it again, up to a set number of times.

Example Scenarios: 
Test Failed → Retry →    Passed → This is called a flaky test 
 
How to Use Retries in Playwright 
1. Configure in playwright.config.ts file: 
You can set how many times to retry a failed test like this: 

export default defineConfig({ 
  retries: 3, // This will retry a failed test up to 3 times 
}); 

2. Or Use CLI (Command Line Interface): 
You can also set retries while running your tests from the terminal: 
# Run all tests with 3 retry attempts 
npx playwright test --retries=3 
 
# Run a specific test file with retries 
npx playwright test tests/flakytest.spec.ts --retries=3