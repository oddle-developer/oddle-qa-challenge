class paymentpage {
    static backButton = '[title="Pasha"]';
    static ProductAmmount = '#ProductSummary-totalAmount';
    static ProductSummary = '#ProductSummary-description';
    static emailField = '#email';
    static cardNumberField = '#cardNumber';
    static cardExpiry = '#cardExpiry';
    static cardCVC = '#cardCvc';
    static cardSet = '#cardNumber-fieldset';
    static cardAlert = '[role="alert"]';
    static billingName = '#billingName';
    static billingCountry = '#billingCountry';
    static signUp = '#enableStripePass';
    static phoneNumber ='#phoneNumber';
    static payButton = '[data-testid="hosted-payment-submit-button"]';
    static paymentConfirmationText = '[data-testid="ConfirmPaymentTermsText"]';
    static emailRedmessage = '#required-email-fieldset';
    static cardRedmessage = '#required-cardNumber-fieldset';
    static nameRedmessage = '#required-billingName-fieldset';
    static sessionId = '#session';
    static challengeIframe = '#challengeFrame';
    static challengeOkButton = '#test-source-authorize-3ds';
    
    public static PageComponentCheck(totalammount: string, summaryofProduct: string): void{
        cy.get(this.backButton).should('be.visible');
        cy.get(this.ProductAmmount).should('contain', totalammount);
        cy.get(this.ProductSummary).should('contain', summaryofProduct);
        cy.get(this.emailField).should('be.visible');
        cy.get(this.cardNumberField).should('be.visible');
        cy.get(this.cardExpiry).should('be.visible');
        cy.get(this.cardCVC).should('be.visible');
        cy.get(this.billingName).should('be.visible');
        cy.get(this.billingCountry).should('be.visible');
        cy.get(this.signUp).click().then(()=>{
            cy.get(this.phoneNumber);
        });
        cy.get(this.payButton).should('be.visible');
        cy.get(this.paymentConfirmationText).should('not.be.visible');
    }
}

export default paymentpage;