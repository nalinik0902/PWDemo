playwright is smart enough to automatically scroll the elements.
we dont need to scroll manually to interact with the elements.

But, manual scrolling is needed when handling the infinite load scrolling.
To manual scroll, use page.evaluate() function.
This page.evaluate() function allow us to run javascript code directly in the webpage.


// scroll to the bottom of the page
await page.evaluate(()=>{
 window.scrollTo(0,document.body.scrollHeight);
})

 // Get the current page height (Total scrollable height of the page)
const currentHeight = await page.evaluate(() => {
return document.body.scrollHeight;
});