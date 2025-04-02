const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://accounts.superbid.net/signin', 
    setupNodeEvents(on, config) {
      
    },
  },
});
