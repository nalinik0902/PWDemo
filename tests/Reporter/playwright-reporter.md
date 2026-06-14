In Playwright, reporters help to visualize the test output in different format like html,list,line,dot,json and junit.

  
1. HTML Reporter 
The HTML reporter provides a rich visual interface to explore test results in the browser. 
Default Behavior: 
• Opens automatically only when tests fail. 
Control Open Behaviour: 
You can customize when the HTML report should open using the open option: 
Option Behaviour 
open: 'never' Never opens the report automatically 
open: 'always' Always opens the report 
open: 'on-failure' Opens only when a test fails (default) 
 
Configuration Example: 
export default defineConfig({ 
  reporter: [['html', { open: 'never' }]], 
}); 

Save Report to Custom Folder: 
export default defineConfig({ 
  reporter: [['html', { open: 'never', outputFolder: 'my-report' }]], 
}); 

View the Report: 
• If using default folder: 
npx playwright show-report 

• If using custom folder: 
npx playwright show-report my-report 

Set via Command Line: 
npx playwright test --reporter=html 

2. List Reporter (Default) 
The List reporter prints one line per test. Results get displayed in console.

Configuration: 
export default defineConfig({ 
  reporter: 'list', 
}); 

Or via CLI: 
npx playwright test --reporter=list 
 
3. Line Reporter 
The Line reporter displays only the last executed test on a single line, and shows failures when they occur

Configuration: 
export default defineConfig({ 
  reporter: 'line', 
}); 

Or via CLI: 
npx playwright test --reporter=line 
 
4. Dot Reporter 
It shows one character (dot) per test. 

Configuration: 
export default defineConfig({ 
  reporter: 'dot', 
}); 

Or via CLI: 
npx playwright test --reporter=dot 
 
 
5. JSON Reporter 
The JSON reporter outputs test results in JSON format.

Configuration: 
export default defineConfig({ 
  reporter: [['json', { outputFile: 'results.json' }]], 
}); 

Or via CLI: 
npx playwright test --reporter=json 
 
6. JUnit Reporter 
The JUnit reporter creates results in XML format, compatible with tools like Jenkins and CI systems. 

Configuration: 
export default defineConfig({ 
  reporter: [['junit', { outputFile: 'results.xml' }]], 
}); 

Or via CLI: 
npx playwright test --reporter=junit 
 
7. Custom Reporter 
You can build your own custom reporter by implementing the Playwright Reporter interface. 
Example (my-awesome-reporter.ts): 
import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from 
'@playwright/test/reporter'; 
class MyReporter implements Reporter { 
  onBegin(config: FullConfig, suite: Suite) { 
    console.log(`Starting the run with ${suite.allTests().length} tests`); 
  } 
  onTestBegin(test: TestCase, result: TestResult) { 
    console.log(`Starting test ${test.title}`); 
  } 
  onTestEnd(test: TestCase, result: TestResult) { 
    console.log(`Finished test ${test.title}: ${result.status}`); 
  } 
  onEnd(result: FullResult) { 
    console.log(`Finished the run: ${result.status}`); 
  } 
} 
export default MyReporter; 
  

Use in Config: 
export default defineConfig({ 
  reporter: [['./my-awesome-reporter.ts', { customOption: 'some value' }]], 
}); 
Or via CLI: 
npx playwright test --reporter="./myreporter/my-awesome-reporter.ts" 
 
We can configure all Playwright reporters together in a single playwright.config.ts file: 
export default defineConfig({ 
  reporter: [ 
    ['list'], // Default list reporter 
    ['line'], // Line reporter 
    ['dot'],  // Dot reporter 
    ['html', { open: 'never', outputFolder: 'html-report' }], // HTML reporter with custom folder 
    ['json', { outputFile: 'results.json' }], // JSON reporter 
    ['junit', { outputFile: 'results.xml' }], // JUnit reporter 
    [MyReporter], // Custom reporter 
  ], 
}); 
 
 
 
 
 
 
 
 
 
 
 
 
