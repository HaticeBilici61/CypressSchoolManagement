class HomePage{

    // Web Elementleri



    // Metotlar
    verifyUrl(url) {
        cy.url().should('contain', url)


}


constructor(){
    this.MenuButton = '[aria-controls="offcanvasNavbar-expand-false"]'
    this.contactGetAllButton='.justify-content-start > :nth-child(10)'

}


clickMenuButton(MenuButton) {
    cy.get(this.MenuButton).click();
}

clickContactGetAllButton(contactButton) {
    cy.get(this.contactGetAllButton).click();
}

}
export const homePage= new HomePage()

