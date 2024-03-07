class LoginPage{
    //WebElements
    constructor(){
        this.loginIcon='[class="header_link ms-2"]';
        this.userNameInput='#username';
        this.passwordInput='#password';
        this.loginButton='[class="fw-semibold btn btn-primary"]';
    }
   
    //Methods

    writeUserName(DeanUsername){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.userNameInput, { timeout: 10000 }).should('be.visible').type(DeanUsername);
 
    }
    writePassword(Deanpassword){
         cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
       
        cy.get(this.passwordInput).type(Deanpassword)
    }
    clickLoginButton(){
        cy.get(this.loginButton).click();
    }
    clickLoginIcon(){
        cy.get(this.loginIcon).click();
    }
} 
export const loginPage = new LoginPage()









