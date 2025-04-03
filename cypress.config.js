const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://superbid.net', 
    e2e: {
      viewportWidth: 1366,  // Largura da tela (ou tente 1280)
    viewportHeight: 768, // Altura da tela
    },
    setupNodeEvents(on, config) {
      
    },
  },
});
