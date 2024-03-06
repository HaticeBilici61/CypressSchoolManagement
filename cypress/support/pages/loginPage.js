class LoginPage{
    //WebElements
    constructor(){
        this.userNameInput='#username',
        this.passwordInput='#password',
        this.loginButton="button[class='fw-semibold btn btn-primary']"
    }  //button[class='fw-semibold btn btn-primary']

    //Methods

    writeUserName(userName){
        cy.get(this.userNameInput).type(userName)
    }
    writePassword(password){
        cy.get(this.passwordInput).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginButton).click()
        
    }
   
} 
export const loginPage = new LoginPage()