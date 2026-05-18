import { test, expect } from '@playwright/test';
/*synchronous and asynchronous function
  synchronous - statement will get executed one after the another. 
  asynchronous- statement will get executed parallely. It works in background task and returns Promise.
  which statement returns Promise(resole o reject) , infront of the statement put await.

  Many playwright API's such as page.goto(), page.title(),page.url() returns promises because they involve asunchronous browser operations.
  To handle them correctly,
  1. use await to pause execution until the promise resolves
  2. Mark the function as aync to allow the use of await.

  - statement that returns promise - use await infront of it 


  Await is not needed when
  - statement that doesn't perform any action 
  - statement that doesn't return promise 

  */

  test("Testcasename",async({page})=>{
    await page.goto("urllink");
  })



