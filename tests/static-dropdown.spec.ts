import{test,expect,Locator} from '@playwright/test'

test("Single Select Dropdown Actions",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator('#country').selectOption("India");  // by using visible text
   await page.locator('#country').selectOption({value: "germany"});  // by using value
   await page.locator('#country').selectOption({index: 2});  // by using index
   await page.locator('#country').selectOption({label: "Australia"});  // by using label
});

test("verify options in dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#country>option'); // returns all the option elements
    await expect(dropdownOptions).toHaveCount(10);
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim()); // text content of each option element and trim whitespace
    console.log("Dropdown options are:",options); // display all the options in the dropdown
});

test("verify specific option exists in dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#country>option'); // returns all the option elements
    await expect(dropdownOptions).toHaveCount(10);
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim()); // text content of each option element and trim whitespace
    await expect(options).toContain("India");
});

test("Display all options in dropdown using for of loop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#country>option');
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    for(let allOptions of options){
        console.log("Dropdown options are:",allOptions);
    }

});
//-------------------------------------------------------------------------------------------
test("Select multiple options from multi select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#colors').selectOption(['Red','Blue','Yellow']); // using visible text
    await page.locator('#colors').selectOption([{value:'red'},{value:'blue'},{value:'yellow'}]); // using value
    await page.locator('#colors').selectOption([{index:0},{index:1},{index:2}]);
    await page.locator('#colors').selectOption([{label:'Red'},{label:'Blue'},{label:'Yellow'}]); // using label
});

test("Verify options in multi select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log("Dropdown options are:",options);
})
test("Verify specific option exists in multi select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    await expect(options).toContain("Red");
})
test("Display all options in multi select dropdown using for of loop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#colors>option');
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    for(let allOptions of options){
        console.log("Dropdown options are:",allOptions);
    }
});

//---------------------------------------------------------

// find duplicate options in dropdown
test("Find duplicate options in dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator('#country>option');
    const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    const uniqueOptions:Set<string>=new Set(); // to store unique options, set does not allow duplicates
    const duplicateOptions:string[]=[];
    for(let option of options){
        if(uniqueOptions.has(option)){
            duplicateOptions.push(option);
        }else{
            uniqueOptions.add(option);
        }
    }
    console.log("Duplicate options in dropdown are:",duplicateOptions);
})