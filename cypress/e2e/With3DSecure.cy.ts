import { envVariables } from '../components/env/envVariables'

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.log(envVariables.cardwithoutverification);
    cy.log(envVariables.cardwithverification);
    cy.log(envVariables.mainurl);
    cy.log(envVariables.paymenturl);
  })
})