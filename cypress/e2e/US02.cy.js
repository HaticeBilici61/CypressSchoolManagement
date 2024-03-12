
homePage
import { homePage } from "../support/pages/homePage";
import { loginPage } from "../support/pages/loginPage";
loginPage
describe('Dean Guest User List, Name, Phone Number, SSN, User Name bilgilerini görebilmeli', () => {
let loginData

    before(() => {
        cy.fixture('login_data').then((data) => {
         loginData = data
    
        })
      
      });
    
      beforeEach(() => {
        cy.visit('/' + Cypress.env('login'));
      });
    
});