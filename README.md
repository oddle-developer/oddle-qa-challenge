# Oddle QA Challenge

**Welcome to Oddle Challenge**

* [General info](#general-info)
* [Requirements](#requirements)
* [Notes](#notes)

## General info

End-to-end integration testing for One-time $5 Donation flow on [Stripe Demo Site](https://stripe-samples.github.io/github-pages-stripe-checkout/). 


## Requirements

You are required to come up with the testing plan and automated test suites for the following user journey
One-time Donation flow of $5.

You may write a set of automated testing suites using any of the following tools

- Cypress
- Webdriver.io

Note: We use Cypress for end-to-end integration testing and Postman/RestAssured for API testing.

The following card details should be included as part of your test scenarios.

|Scenario|Number|CVC|Date|
|---|---|---|---|
|Without 3D secure Verfication|4242 4242 4242 4242|Any 3 digits|Any future date|
|||||
|With 3D secure Verfication|4000 0000 0000 3220|Any 3 digits|Any future date

Please include the following in the submission of the assignment
- Instructions on how to run your test suites should be included as part of the README.md
- Test results of the automated test suites 
- A test plan documentation describing your test cases in details

## Submission Steps

* Create a repository on your Github account. Name your repository as `oddle-qa-challenge`
* Include the following details in your README file: full name, email address and where did you apply from
* Code. Commit and Push as many times as you want, only the last Pull Request will be graded
* Create a Pull Request in your private repo and invite us as reviewer
* Add https://github.com/oddle-developer as collaborator for your repo and add `oddle-developer` as reviewer to your PR
