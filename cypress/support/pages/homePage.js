class HomePage{
    // Web Elementleri
    constructor() {
        
    }


    // Metotlar
    verifyUrl(url) {
        cy.url().should('contain', url)
    }



}
export const homePage = new HomePage()