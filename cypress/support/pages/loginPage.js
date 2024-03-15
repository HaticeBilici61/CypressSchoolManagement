class LoginPage{
    //WebElements
    constructor(){
        this.userNameInput='#username'
        this.passwordInput='#password'
        this.loginButton='button.fw-semibold.btn.btn-primary[type="button"]'
        this.loginIcon='[class="header_link ms-2"]'
        
    }

    //Methods

    writeUserName(DeanUserName){
        cy.get(this.userNameInput).type(DeanUserName)
    }
    writePassword(DeanPassword){
        cy.get(this.passwordInput).type(DeanPassword)
    }
    clickLoginIcon(){
        cy.get(this.loginIcon).click()
    }
    clickLoginButton(){
        cy.get(this.loginButton).click();
    }

    writeUserName(AdminUsername){
        cy.get(this.userNameInput).type(AdminUsername)
    }
    writePassword(AdminPassword){
        cy.get(this.passwordInput).type(AdminPassword)
    }
   
} 
export const loginPage = new LoginPage()









