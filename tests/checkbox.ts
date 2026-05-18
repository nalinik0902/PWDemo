/* In Playwright, we mostly prefer playwright built in locators 
getbyRole
getbyText,
getbyAltText,
getbyLabel
getbyplaceHolder
getbytitle
getbytestID

// second , we prefer cssSelector
// Third, we prefer xpath

xpathAxes:
parent
Child 
Ancestor 
decendent - child's child 
following - siblings and its Child 
preceding - siblings and its Child 
following-sibling - only following siblings
preceding-sibling - only preceding siblings
*/
// --------------------------------------------------

import{test,expect, Locator} from '@playwright/test'

 test("Text Input Actions",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  const textbox:Locator=page.locator('#name');
  await expect (textbox).toBeVisible();
  await expect(textbox).toBeEnabled();
  await textbox.fill("Nalini");
  console.log("Text of firstname is:" ,await textbox.textContent()); // returns the text content of the element, which is empty for input fields
  const enteredInput:string=await textbox.inputValue()
  console.log("Value of firstname is:" ,enteredInput);
  expect(enteredInput).toBe("Nalini");
  await page.waitForTimeout(3000);
}) 

/* test("Radio Button Actions",async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  const radioButton:Locator=page.locator("input#male");
  await expect(radioButton).toBeVisible();
  await page.waitForTimeout(3000);

  await expect(radioButton).toBeEnabled();
  await radioButton.check();
  await expect(radioButton).toBeChecked();

})
 */

 // select a specific checkbox
test("Checkbox Actions",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  const checkbox:Locator=page.getByLabel("Sunday");
  await expect(checkbox).toBeVisible();
  await checkbox.check();
  await page.waitForTimeout(3000);
})

//  select all checkboxes
// Method 1:
/* I store the checkbox labels in an array, 
use map() to convert each label into a Playwright locator with getByLabel(), 
and then iterate through the locators using a for...of loop and
 call .check() on each to select all checkboxes." */

  test("select all checkboxex using array",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");

 const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const checkboxes=days.map(day=>page.getByLabel(day)); 



 for(let boxes of checkboxes){
   await boxes.check();
   await expect(boxes).toBeChecked();
 }
}) 
// Method 2 of selecting all check boxes using for loop
test("select all checkboxes",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
  const checkboxes:Locator=page.locator('input.form-check-input[type="checkbox"]'); // this returns multiple checkbox locator
  const count:number=await checkboxes.count();
  console.log("No.of checkboxes",count);
  for (let i:number=0; i<count; i++){
   await checkboxes.nth(i).check();
  }
})   
 
 // uncheck last three checkboxes
 test("Uncheck last 3 checkboxes",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
 const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const checkboxes=days.map(day=>page.getByLabel(day)); 
 for(let checkbox of checkboxes.slice(-3)){
  await checkbox.uncheck();  
  await expect(checkbox).not.toBeChecked();
 }
 console.log("successfully verified");
 await page.waitForTimeout(3000);

}) 
 
 // Toggle checkboxex
 test("Toggle checkbox",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
 const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const checkboxes=days.map(day=>page.getByLabel(day)); 
 for( const box of checkboxes){
  if(await box.isChecked()){
    await box.uncheck();
    await expect(box).not.toBeChecked();
  }
  else{
     await box.check();
     await expect(box).toBeChecked();
  }
 }

}) 
 
 // select checkboxes randomly using indexex
/* test("select random checkbox",async({page})=>{
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const checkboxes=days.map(day=>page.getByLabel(day)); 
 const index:number[]=[1,4,2];
 for(const i of index){
  await checkboxes[i].check();
  await expect(checkboxes[i]).toBeChecked();
})  */

  // select checkbox randomly using for loop
  test("checkbox rendom selection",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxes:Locator=page.locator('input.form-check-input[type="checkbox"]'); // this returns multiple checkbox locator
    const count:number=await checkboxes.count();
    for(let i:number=0;i<count;i++){
      if(i===1 || i===5){
        await checkboxes.nth(i).check({force:true});
      }
    }
    await page.waitForTimeout(3000);


  })
 
  