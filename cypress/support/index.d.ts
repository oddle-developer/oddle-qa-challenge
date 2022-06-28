/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    iframeCustom(): Chainable<Element>; 
  }
}