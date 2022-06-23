import { defineConfig } from "cypress";

const dotenvPlugin = require('cypress-dotenv');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  config.env = process.env;

  const path = process.env.CYPRESS_ENV?.length
    ? ['.env', process.env.CYPRESS_ENV].join('.')
    : '.env';

  return dotenvPlugin(config, { path }, true);
    },
  },
});
