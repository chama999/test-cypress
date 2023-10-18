const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    loginPage: "/login",
    tablesPage: "/tables",
    dropdownPage: "/dropdown"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://the-internet.herokuapp.com",
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots'
  },
});
