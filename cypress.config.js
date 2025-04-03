const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://superbid.net', 
    e2e: {
      viewportWidth: 1366,  
      viewportHeight: 768, 
    },
    setupNodeEvents(on, config) {      
    },
  },
});
