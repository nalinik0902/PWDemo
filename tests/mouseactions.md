 Mouse Hover – hover()
Purpose: To simulate a mouse hover over an element.
Syntax:
await page.locator('selector').hover();
Example:
await page.locator('#menu').hover();
2. Right Click – click({ button: 'right' })
Purpose: To simulate a right-click on an element.
Syntax:
await page.locator('selector').click({ button: 'right' });
Example:
await page.locator('#file-icon').click({ button: 'right' });
3. Double Click – dblclick()
Purpose: To simulate a double-click on an element.
Syntax:
await page.locator('selector').dblclick();
Example:
await page.locator('#editable-text').dblclick();
4. Drag and Drop – dragTo()
Purpose: To drag an element and drop it to another target.
Syntax:
await page.locator('source-selector').dragTo(page.locator('target-selector'));