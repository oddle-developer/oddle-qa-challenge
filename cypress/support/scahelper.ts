const puppeteer = require('puppeteer')


exports.processSCA = async function processSCA({url, action}) {


    const creds = await puppeteer
        .launch({headless: false})

        .then(async browser => {
            try{
                let page = await browser.newPage();
                debugger

                //Navigate to Login Page
                await page.goto(url);

                //lazy wait to handle Stripe loading
                await page.waitFor(5000)

                let element;
                if(action === 'pass')
                {
                    element = '#test-source-authorize-3ds'
                }
                else
                {
                    element = '#test-source-fail-3ds'
                }

                await page.click(element)


                await page.waitForSelector('.FallbackMessageTitle')
                await browser.close()


                await browser.close()
                return true

            } catch (error) {
                console.log(error)
            }
        })

    return true
}