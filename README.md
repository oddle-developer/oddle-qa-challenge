# Oddle QA Challenge

**Welcome to Oddle Challenge**

* [General info](#general-info)
* [Requirements](#requirements)
* [Notes](#notes)

## General info

End-to-end integration testing for One-time Donation flow of $5 flow of [https://stripe-samples.github.io/github-pages-stripe-checkout/](https://stripe-samples.github.io/github-pages-stripe-checkout/). 


## Requirements

You are required to come up with both the testing plan and automated test suites for the following user journey
One-time Donation flow of $5.

You may write a set of automated testing suites using any of the following tools

- Cypress
- Webdriver.io
- Selenium

The following card details should be included as part of your test scenarios.

|Scenario|Number|CVC|Date|
|---|---|---|---|
|Without 3D secure Verfication|4242 4242 4242 4242|High|Any 3 digits|Any future date|
|||||
|With 3D secure Verfication|4000 0000 0000 3220|High|Any 3 digits|Any future date

Instructions on how to run your test suites should be included as part of the READ.me


## Submission Steps

* Submit your assignment by creating a repository on your Github account
* Code. Commit and Push as many times as you want, only the last Pull Request will be graded
* Create a Pull Request in your private repo and invite us as reviewer
* Add https://github.com/oddle-developer as collaborator for your repo and add `oddle-developer` as reviewer to your PR