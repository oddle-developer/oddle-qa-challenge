import { envVariables } from '../components/env/envVariables';
import mainpage from '../components/unit/mainpage';
import paymentpage from '../components/unit/paymentpage'
import Idonation from '../fixtures/donation';
import { faker } from '@faker-js/faker';
import { scahelper }  from '../support/scahelper';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
    
let paymentdetail = {
  randomEmail: faker.internet.email(),
  randomCardNum: faker.finance.creditCardNumber(),
  randomCardCVC: faker.finance.creditCardCVV(),
  CardExpiry: '1225',
  randomCardName: faker.name.findName(),
  randomPhoneNumber: faker.phone.number(),
}

describe('Donate Once 5$', () => {
  let donationchosen: Idonation;
  let url;
  let sessionid;
  beforeEach(function () {
    cy.fixture<Idonation>('donation').then((donation) => {
      donationchosen = donation;
    });
  })

  it('Main Page Component Check', () => {
   cy.visit(envVariables.mainurl);
    mainpage.PageComponentCheck(); 
  })

  it('5$ Donation Payment Page Component Check', () => {
    cy.task("getCheckoutURL", envVariables.mainurl, { timeout: 50000 }).then((generatedurl) => {
      url = generatedurl;
      cy.log(url);
      cy.visit(url.slice(1, -1));
      paymentpage.PageComponentCheck(donationchosen.productAmmount5, donationchosen.summary5);
    }); 
  })

  it('Payment failed - Required Fields', () => {
    cy.task("getCheckoutURL", envVariables.mainurl, { timeout: 50000 }).then((generatedurl) => {
      url = generatedurl;
      cy.log(url);
      cy.visit(url.slice(1, -1));
      cy.get(paymentpage.payButton).click().then(() => {
        cy.get(paymentpage.emailRedmessage).should('be.visible');
        cy.get(paymentpage.cardRedmessage).should('be.visible');
        cy.get(paymentpage.nameRedmessage).should('be.visible');
      });
    }); 
  })

  it('Payment failed - Using non test card', () => {
   cy.task("getCheckoutURL", envVariables.mainurl, { timeout: 50000 }).then((generatedurl) => {
      url = generatedurl;
      cy.log(url);
      cy.visit(url.slice(1, -1));
      cy.get(paymentpage.emailField).type(paymentdetail.randomEmail);
      cy.get(paymentpage.cardNumberField).type(paymentdetail.randomCardNum);
      cy.get(paymentpage.cardExpiry).type(paymentdetail.CardExpiry);
      cy.get(paymentpage.cardCVC).type(paymentdetail.randomCardCVC);
      cy.get(paymentpage.billingName).type(paymentdetail.randomCardName);
     cy.intercept('POST', envVariables.apimainurl + 'payment_methods').as('paymentprocess').then(() => {
       cy.log('Intercept Success');
      });
     cy.get(paymentpage.payButton).click().then(() => {
       cy.wait('@paymentprocess', {timeout:30000});
       cy.contains('Your card was declined.', {timeout:10000});
      });
    });
  })

  it('Using non-3D Secure Card - Positive Scenario', () => {
    cy.intercept('POST', envVariables.apimainurl+'payment_pages/**').as('paymentpage');
    cy.task("getCheckoutURL", envVariables.mainurl, { timeout: 50000 }).then((generatedurl) => {
      url = generatedurl;
      cy.log(url);
      cy.visit(url.slice(1, -1));
      cy.wait('@paymentpage', {timeout:30000}).then((request) => {
      sessionid = request.response.body.session_id;
      cy.log(request.response.body);
    });
    cy.log(sessionid);
      cy.get(paymentpage.emailField).type(paymentdetail.randomEmail);
      cy.get(paymentpage.cardNumberField).type(envVariables.cardwithoutverification);
      cy.get(paymentpage.cardExpiry).type(paymentdetail.CardExpiry);
      cy.get(paymentpage.cardCVC).type(paymentdetail.randomCardCVC);
      cy.get(paymentpage.billingName).type(paymentdetail.randomCardName);
      cy.intercept('POST', envVariables.apimainurl + 'payment_methods').as('paymentprocess');
      cy.get(paymentpage.payButton).click().then(() => {
        cy.wait('@paymentprocess');
        cy.get(paymentpage.sessionId, { timeout: 30000 }).should('contain', sessionid);
        cy.url().should('contain', envVariables.mainurl);
      });
    }); 
  })

  it.only('Using 3D Secure Card - Positive Scenario', () => {
   cy.intercept('POST', envVariables.apimainurl+'payment_pages/**').as('paymentpage');
    cy.task("getCheckoutURL", envVariables.mainurl, { timeout: 50000 }).then((generatedurl) => {
      url = generatedurl;
      cy.log(url);
      cy.visit(url.slice(1, -1));
      cy.wait('@paymentpage', {timeout:30000}).then((request) => {
      sessionid = request.response.body.session_id;
      cy.log(request.response.body);
    });
    cy.log(sessionid);
      cy.get(paymentpage.emailField).type(paymentdetail.randomEmail);
      cy.get(paymentpage.cardNumberField).type(envVariables.cardwithverification);
      cy.get(paymentpage.cardExpiry).type(paymentdetail.CardExpiry);
      cy.get(paymentpage.cardCVC).type(paymentdetail.randomCardCVC);
      cy.get(paymentpage.billingName).type(paymentdetail.randomCardName);
      cy.intercept('POST', envVariables.apimainurl + 'payment_methods').as('paymentprocess');
      cy.intercept('POST', envVariables.apimainurl + '3ds2/authenticate').as('3dsecure');
      cy.get(paymentpage.payButton).click().then(() => {
        cy.wait('@paymentprocess');
        cy.wait('@3dsecure');
        //cy.iframe('[src^="https://js.stripe.com/v3/three-ds-2-challenge"]').find('3D Secure 2', {timeout:20000});
        // cy.get('[src^="https://js.stripe.com/v3/three-ds-2-challenge"]').then((firstiframe) => {
        //   cy.wrap(firstiframe).iframe('#challengeFrame').find(paymentpage.challengeOkButton).click();
        // });
        
      })
        cy.get(paymentpage.sessionId, { timeout: 30000 }).should('contain', sessionid);
        cy.url().should('contain', envVariables.mainurl);
      });
    });
  })
})