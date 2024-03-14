class HomePage{

    // Web Elementleri



    // Metotlar
    verifyUrl(url) {
        cy.url().should('contain', url)


}


constructor(){
    this.MenuButton = '[aria-controls="offcanvasNavbar-expand-false"]'
    this.contactGetAllButton='.justify-content-start > :nth-child(10)'
    this.GastBenutzerButon="//div[@class='justify-content-start flex-grow-1 fs-5 ps-3 navbar-nav']//a[11]"

}


clickMenuButton() {
    cy.get(this.MenuButton).click();
}

clickContactGetAllButton(contactButton) {
    cy.get(this.contactGetAllButton).click();
}
clickGastBenutzerButton(){
    cy.wait(2000)
    cy.xpath(this.GastBenutzerButon).click({force:true})
}

}
export const homePage= new HomePage()

