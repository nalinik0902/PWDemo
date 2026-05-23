import{test,expect,Locator} from '@playwright/test'

test('static webtable', async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   const table:Locator=page.locator("table[name='BookTable'] tbody");

   // count number of rows in the table
   // page.locator("table[name='BookTable'] tbody tr") - this will return all the rows in the table.
   // Instead of writing above code, we can use chain locators to find the rows in the table. We can use the locator of the table and then find the rows in it.
   const rows:Locator =table.locator("tr");
   const rowCount:number=await rows.count();
    console.log("No.of rows in the table are:",rowCount);

    // count no of columns in the table
    const columns:Locator=rows.locator("th");
    const columnCount:number=await columns.count();
    console.log("No.of columns in the table are:",columnCount);

    // Read all data from second row of the table(index 2 means 3rd row including header)

    const secondRow:Locator=rows.nth(1).locator("td");
    const secondRowDataCount:number=await secondRow.count();
    console.log("No.of data in the second row are:",secondRowDataCount);
    const secondRowTexts:string[]=await secondRow.allTextContents();
    console.log("Text in the second row are:",secondRowTexts);
    for(let secondrowData of secondRowTexts){
        console.log(secondrowData);
    }


    // Read all data from the table(excluding header)\
    const allrowData:Locator[]=await rows.all();
    for(let rowdata of allrowData.slice(1)){ // slice(1) is used to exclude the header row
        const allData:string[]=await rowdata.locator("td").allInnerTexts();
        console.log(allData.join("/t"));
        

})
