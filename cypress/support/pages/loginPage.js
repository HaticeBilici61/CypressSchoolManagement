class LoginPage{
    //WebElements
    constructor(){
        this.userNameInput='#username'
        this.passwordInput='#password'
        this.loginButton='[class="fw-semibold btn btn-primary"]'

        this.loginButton1 = 'a[class="header_link ms-2"][href="/login"]'
        this.userName = 'input[placeholder="username"]'
        this.passwordInput = 'input[placeholder="Password"]'
        this.loginButton2 = 'button[type="button"][class="fw-semibold btn btn-primary"]'
       

    }

    //Methods

    //writeUserName(userName){
      //  cy.get(this.userNameInput).type(userName)
    //}
    //writePassword(password){
      //  cy.get(this.passwordInput).type(password)
    //}


    clickLoginButton1(loginButton) {
        cy.get(this.loginButton1).click();
    }

    writeUserName(userName) {
        cy.get(this.userName).type(userName)
    }

    writePassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickLoginButton2(){
        cy.get(this.loginButton2).click();
    }

   
    clickMenuButton(MenuButton) {
        cy.get(this.MenuButton).click();
    }


   
} 
export const loginPage = new LoginPage()