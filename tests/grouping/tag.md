Tags are used to organize the test suites

test('Check title of the home page',{tag:'@sanity'}, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


test('Check navigation to Store page',{tag:'@regression'}, async ({ page }) => {
 await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
});

test('Check top recommendations',{tag:['@sanity','@regression']}, async ({ page }) => {
 await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
});



Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity" 


2. Run all regression tests:
    npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression

npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression (special case)
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
    
