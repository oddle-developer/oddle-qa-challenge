import { envVariables } from '../components/env/envVariables';
import mainpage from '../components/unit/mainpage';
import Idonation from '../fixtures/donation'


describe('Donate Once 5$', () => {
  let donationchosen: Idonation;
  beforeEach(function () {
    cy.fixture<Idonation>('donation').then((donation) => {
      donationchosen = donation;
    });
  })

  it('Main Page Component Check', () => {
   cy.visit(envVariables.mainurl);
    mainpage.PageComponentCheck();
  })

  it('Payment Page Component Check', () => {
   
  })

  it('Payment failed', () => {
   
  })

  it('Using non-3D Secure Card', () => {
   
  })

  it('Using 3D Secure Card', () => {
   
  })
})