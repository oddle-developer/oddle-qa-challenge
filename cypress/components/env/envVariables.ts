export class envVariables {
    public static readonly mainurl = Cypress.env('MAIN_URL');
    public static readonly paymenturl = Cypress.env('PAYMENT_URL');
    public static readonly cardwithverification = Cypress.env('3D_SECURE_CARD');
    public static readonly cardwithoutverification = Cypress.env('NON_3D_SECURE_CARD');
}