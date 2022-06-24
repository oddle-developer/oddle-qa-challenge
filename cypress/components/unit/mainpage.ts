class mainpage {
    static Donation5$ ='[data-price-id="sku_GU4JYXyvvRb2sX"]';
    static Donation15$ ='[data-price-id="sku_GU4KO8nfdg8G2Z"]';
    static Donation50$ ='[data-price-id="sku_GU4LB0wBViiYsm"]';
    static DonationRecur20$ ='[data-price-id="plan_GU4MXg0k0Uv1S6"]';

    public static PageComponentCheck(): void{
        cy.get(this.Donation5$).should('be.visible');
        cy.get(this.Donation15$).should('be.visible');
        cy.get(this.Donation50$).should('be.visible');
        cy.get(this.DonationRecur20$).should('be.visible');
    }
}

export default mainpage;