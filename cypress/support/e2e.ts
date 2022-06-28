// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { envVariables } from "../components/env/envVariables";
import 'cypress-iframe';
import 'cypress-xpath';

// Alternatively you can use CommonJS syntax:
// require('./commands')

if (Cypress.env('HEALTH_CHECK_SKIP') === true) {
    before(() => {
      cy.log('Skipping Health Check');
    });
  } else {
    before(() => {
        cy.request(envVariables.mainurl)
        .its('isOkStatusCode')
        .should('be.true')
        .request(envVariables.paymenturl)
        .its('isOkStatusCode')
        .should('be.true');
    })};