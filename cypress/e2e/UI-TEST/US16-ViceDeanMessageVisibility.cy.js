const { contactMessagePage } = require("../support/pages/contactMessagePage");
const { homePage } = require("../support/pages/homePage");
const {loginPage } = require("../support/pages/loginPage");
describe('Vice Dean, kullanicilarin gönderdiği mesajlari görebilmelidir', () => {
    let loginData
  
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
    });
  
    beforeEach(() => {
        cy.visit('/' );
    });
    it('Vice Dean, mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', () => {
      cy.visit('/')
      loginPage.clickLoginButton1()
      loginPage.writeUserName(loginData.userName)
          loginPage.writePassword(loginData.passwordInput)
          loginPage.clickLoginButton2();
          homePage.clickMenuButton();
          homePage.clickContactGetAllButton();
          contactMessagePage.verifyMessageName();
          contactMessagePage.verifyMessageEmail();
          contactMessagePage.verifyMessageDate();
          contactMessagePage.verifyMessageSubject();
          contactMessagePage.verifyMessageDetails();
         
  
          
    })})