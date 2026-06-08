/*
Configure Video Capture in playwright.config.ts file. 
export default defineConfig({ 
  use: { 
    video: 'on-first-retry', // Options: 'on', 'off', 'retain-on-failure', 'on-first-retry' 
  }, 
}); 
Video Options: 
• 'off': No video recording. 
• 'on': Record video for all tests. 
• 'retain-on-failure': Keep videos only for failed tests. 
• 'on-first-retry': Record video only when a test is retried for the first time. 
Note: Video files are saved in the test-results folder. And they embed with HTML report.


*/