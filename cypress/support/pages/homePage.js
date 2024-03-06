class HomePage{
    //WebElements
  constructor(){
      this.clickLoginIcon='.col-sm-2 > .ms-2'
  }
  
  //Methods
  clickLogin(){
    cy.get (this.clickLoginIcon).click()
  }
}
export const homePage = new HomePage()


































































