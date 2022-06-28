import { defineConfig } from "cypress";
import mainpage from "./cypress/components/unit/mainpage";
import cypress = require("cypress");
import { envVariables } from "./cypress/components/env/envVariables";


const dotenvPlugin = require('cypress-dotenv');
const puppeeter = require('puppeteer');

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: false,
    chromeWebSecurity: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      "configFile": "./reporter-config.json"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
  config.env = process.env;

      on('task', {
        getCheckoutURL: (mainurl) => {
          return (async () => {
        
        const browser = await puppeeter.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto(mainurl);
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
