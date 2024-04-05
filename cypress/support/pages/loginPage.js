class LoginPage{

    constructor(){
      this.email='[name="email"]'
      this.passwort='[name="password"]'
      this.loginbutton='//button[@id="btn_login"]'
  
    
    }

//metotlar

     writeLoginMail(mail){
        cy.get(this.email).type(mail);
     }

     writeLoginPasswort(passwort){
        cy.get(this.passwort).type(passwort);
     }

     clickLoginButton(){
        cy.xpath(this.loginbutton).click({force:true})
     }


}

export const login=new LoginPage()