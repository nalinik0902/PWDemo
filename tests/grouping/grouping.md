test.describe() 
• Purpose: Group related tests together. 
• Use Case: Organize tests by feature, page, or functionality. 
grouping.spec.ts:  
test.describe('Group1', () => { 
  test('test1', async ({ page }) => { 
    // test logic 
  }); 
  test(' test2', async ({ page }) => { 
    // test logic 
  }); 
test(' test3', async ({ page }) => { 
    // test logic 
  }); 
  }); 
 
To run all the tests from all the groups. 
   npx playwright test tests/grouping.spec.ts  
 
To run specific group of tests. 
   npx playwright test tests/grouping.spec.ts --grep Group1 