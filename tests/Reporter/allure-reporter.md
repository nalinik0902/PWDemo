Generate Allure Reports in Playwright 

Allure Reports provide beautiful, detailed test execution reports for your Playwright automation tests. 

Install Allure Playwright Reporter 
This package connects Playwright with Allure. 
Install using: 
npm install -D allure-playwright 


Configure the Allure Reporter  in playwright.config.ts
export default defineConfig({ 
  reporter: 'allure-playwright', 
}); 
      or 
Use Command Line (Without Changing Config File) 
npx playwright test --reporter=allure-playwright 

After test executed, this will create allure.results folder

To generate and view the allure report , we need to install Allure CLI

npm install -g allure-commandline --save-dev 
Note: After installing, make sure the path is added to your system’s environment variables along with bin folder


To Generate allure report:
allure generate ./allure-results -o ./allure-report 

Or, to clean old reports: 

allure generate ./allure-results -o ./allure-report --clean 

Open the report in your browser: 
allure open ./allure-report 

This command launches a browser showing a detailed test execution report, including: 
• Step-by-step logs 
• Screenshots 
• Attachments 
• Test durations 










 
 
 

 

