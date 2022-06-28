# Oddle QA Challenge

**Oddle Challenge - by Firman Isma Serdana**

* [Personal Info](#personal-info)
* [How to use the code](#how-to-use-the-code)
* [Test Scenario - General Explanation](#test-scenario---general-explanation)
* [Test Results](#test-results)

## Personal Info

*Name*: Firman Isma Serdana
*Email Address*: firman.serdana18@alumni.imperial.ac.uk
*Applied from*: Linkedin
*Linkedin*: [in/firmaniserdana](https://www.linkedin.com/in/firmaniserdana)

## How to use the code

- make sure [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) is already installed
- `git clone` this repo
- rename `.env.example` into `.env`
- *for m1 mac users only*, changes `PUPPETEER_EXECUTABLE_PATH` in `.env` files into your Google Chrome Path
- `yarn install` to install dependencies
- use `yarn test-run` to run the cypress headless-ly
- use `yarn test-open` to use the interactive cypress GUI

## Test Scenario - General Explanation

* main-page component check = check if all components are loaded normally in main page
* 5$ donation-page component check = same as above
* Payment Failed - Required Fields = not filling the required fields, but attempt to proceed with payment
* Payment Failed - Using Non Test Card = using real live card to see if the payment will be proceed (it shouldn't)
* Using non-3D Secure Card - Positive Scenario = using non-3D secure test card to proceed payment
* Using 3D Secure Card - Positive Scenario = using non-3D secure test card to proceed payment

## Test Results
Test results will be saved in `cypress/results` and `cypress/videos` after using `yarn test-run`
