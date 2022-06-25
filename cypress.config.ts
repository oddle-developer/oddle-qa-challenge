import { defineConfig } from "cypress";
import mainpage from "./cypress/components/unit/mainpage";
import cypress = require("cypress");

const dotenvPlugin = require('cypress-dotenv');
const puppeeter = require('puppeteer');

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
  config.env = process.env;

      on('task', {
        getCheckoutURL: () => {
          return (async () => {
        
        const browser = await puppeeter.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto('https://stripe-samples.github.io/github-pages-stripe-checkout/');
        await page.click(mainpage.Donation5$);
        await page.waitForNavigation();

        let url = await page.url();
            url = JSON.stringify(url);
            
            await browser.close();
            return url;
        })();
    }
      })
  const path = process.env.CYPRESS_ENV?.length
    ? ['.env', process.env.CYPRESS_ENV].join('.')
    : '.env';

  return dotenvPlugin(config, { path }, true);
    },
  },
});
