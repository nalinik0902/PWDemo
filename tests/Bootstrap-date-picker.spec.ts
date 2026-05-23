import{test,expect} from '@playwright/test'

test('Booking.com Date Picker', async({page})=>{
    await page.goto("https://www.booking.com/");
    // click on date picker input field to open the date picker
    await page.getByTestId("searchbox-dates-container").click();

    // Select check-in date
    const chechinDate:string="20";
    const checkinMonth:string="July";
    const checkinYear:string="2026";

    while(true){
        const currentMonthYear= await page.locator("#bui-calendar-month-2026-5").innerText();
        const currentMonth=currentMonthYear.split(" ")[0];
        const currentYear=currentMonthYear.split(" ")[1];
        if(currentMonth===checkinMonth && currentYear===checkinYear){

            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

   // select the specified check-in date
   const checkinDateElements= await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
    for(let dateElement of checkinDateElements)
    {
        const dateText=await dateElement.innerText();
        if(dateText===chechinDate)
        {
            await dateElement.click();
            break;
        }
    }




})
