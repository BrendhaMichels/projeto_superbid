const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://superbid.net', 
    setupNodeEvents(on, config) {
      
    },
  },
});
