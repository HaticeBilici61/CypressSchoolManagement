class LoginPage{
    //WebElements
    constructor(){
        this.userNameInput='#username'
        this.passwordInput='#password'
        this.loginButton='[class="fw-semibold btn btn-primary"]'
    }

    //Methods

    writeUserName(userName){
        cy.get(this.userNameInput).type(userName)
    }
    writePassword(password){
        cy.get(this.passwordInput).type(password)
    }
   
} 
export const loginPage = new LoginPage()