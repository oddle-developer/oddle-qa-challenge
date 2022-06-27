/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("processStripeSCA", (action) => {


    //Find the first frame - Named differently each load ( __privateStripeFrameXXXX )
    cy.get("iframe[name*='__privateStripeFrame']")
        .within(($element) => {

            //Get the body from the first frame
            const $body = $element.contents().find("body");
            let topLevel = cy.wrap($body)

            //Find the second frame
            topLevel.find("iframe[name*='__stripeJSChallengeFrame']")
                .within(($secondElement) => {

                    //Get the body from the second frame
                    const $secondBody = $secondElement.contents().find("body");
                    let secondLevel = cy.wrap($secondBody)

                    //Find the third frame -  acsFrame
                    secondLevel.find("iframe[name*='acsFrame']")


                        //Scope into the actual modal
                        .within(($thirdElement) => {

                            //Grab the URL of the stripe popup, then have puppeteer browse to it!
                            cy.task('processSCA', {url: $thirdElement[0]["baseURI"], action: action});


                        })


                })

        })

 })