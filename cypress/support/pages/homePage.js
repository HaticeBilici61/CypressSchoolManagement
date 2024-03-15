class HomePage{
constructor(){
    this.MenuButton = '[aria-controls="offcanvasNavbar-expand-false"]'
    this.contactGetAllButton='.justify-content-start > :nth-child(10)'
    this.contactGetAllButton2= '.offcanvas.show > .offcanvas-body > .justify-content-start > :nth-child(2)'




}


clickMenuButton(MenuButton) {
    cy.get(this.MenuButton).click();
}

clickContactGetAllButton(contactButton) {
    cy.get(this.contactGetAllButton).click();
}

clickContactGetAllButton2(contactButton2) {
    cy.get(this.contactGetAllButton2).click();
}

}
export const homePage= new HomePage()