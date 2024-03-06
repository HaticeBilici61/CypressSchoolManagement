const { faker } = require("@faker-js/faker");
import { loginPage } from "../../cypress/support/pages/loginPage"
import {vicedeanlogindata} from '../../cypress/fixtures/vicedeanlogindata'
import { data } from "cypress/types/jquery";

describe('US_14', () => {
  //Web sitesine gidilir-Login butonuna tıklanır
  let name= faker.person.firstName();
  let email =faker.internet.email();
  let password= faker.internet.password();
  let fakeSSN=generateFakeSSN();
  function generateFakeSSN() {
    return Array.from({length: 9}, () => Math.floor(Math.random() * 10))
                .join('')
                .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
}
function generateFakePhone() {
  const randomNumber = () => Math.floor(Math.random() * 10);
  return `${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}-${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`;
}
let vicedeanlogindata 
before(() => {
  
    cy.fixture('vicedeanlogindata').then((data) => {
      vicedeanlogindata = data
    })
});
beforeEach(() => {
    cy.visit('/' + Cypress.env('login'));
});

// Örnek kullanım
const fakePhoneNumber = generateFakePhone();

  it('US_14_TC_01', ()=> {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
  })
   // cy.visit('https://managementonschools.com/');
   // cy.get('.col-sm-2 > .ms-2').click();
   // cy.get('.ms-2').click();
   loginPage.writeUserName(vicedeanlogindata.userName);
   loginPage.writePassword(vicedeanlogindata.password);
   loginPage.clickLoginButton();

   /* cy.get('#username').clear().type('Albus');
    cy.get('#password').clear();
    cy.get('#password').type('Dumbledore1.');
    cy.wait(2)
    cy.get("button[class='fw-semibold btn btn-primary']").click();
    cy.get("button[class='fw-semibold text-white bg-primary navbar-toggler collapsed']").click({force: true});
    cy.xpath("//a[.='Teacher Management']").click();
    cy.wait(2000)
    cy.xpath("//div[@class=' css-19bb58m']").click
    cy.xpath("//div[@class=' css-19bb58m']").type('Muggle Studies{enter}');
    cy.wait(2000)
    cy.get('#name').clear();

    cy.get('#name').type(name);
    cy.get('#surname').clear();
    cy.get('#surname').type('Potter');
    cy.get('#birthPlace').clear('Hogwarts');
    cy.get('#birthPlace').type('Hogwarts');
    cy.get('#email').clear();
    cy.get('#email').type(email);
    cy.get('#phoneNumber').clear();
    cy.get('#phoneNumber').type(fakePhoneNumber);
    cy.get('#isAdvisorTeacher').uncheck();
    cy.get('#isAdvisorTeacher').check();

    cy.get(':nth-child(1) > .form-check > .form-check-input').check();
    cy.get('#birthDay').clear('0001-01-10');
    cy.get('#birthDay').type('1960-01-10');
    cy.get('#ssn').clear();
    cy.get('#ssn').type(fakeSSN);
    cy.get('#username').clear();
    cy.get('#username').type(name);
    cy.get('#password').clear();
    cy.get('#password').type(password+1);
    cy.get("button[class='fw-semibold btn btn-primary btn-lg']").click(179,48,{force:true});
    //Teacher Saved Succesfully Mesajının görüntülendiği Doğrulanır
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Teacher saved successfully');
    cy.get(':nth-child(3) > .mt-5 > .card-body > .row > :nth-child(2) > .d-flex > :nth-child(5) > .page-link > [aria-hidden="true"]').click();
    cy.get(':nth-child(3) > .mt-5 > .card-body > .row > :nth-child(2) > .d-flex > :nth-child(5) > .page-link > [aria-hidden="true"]').click();

    //Name, phone,ssn,username bilgisinin görüntülendiği doğrulanır
    cy.xpath('//tbody[1]/tr[19]/td[1]').should('be.visible');
    cy.xpath('//tbody[1]/tr[19]/td[2]').should('be.visible');
    cy.xpath('//tbody[1]/tr[19]/td[3]').should('be.visible');
    cy.xpath('//tbody[1]/tr[19]/td[4]').should('be.visible');

    //Teacher List için oluşturulan öğretmen bilgisi bulunur edit butonuna tıklanır

    /*cy.get(':nth-child(19) > :nth-child(5) > span > .text-dark').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(2) > .mb-4 > #name').clear('Alexandr');
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(2) > .mb-4 > #name').type('Alexand');
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(4) > .mb-4 > #birthPlace').clear('Hogwart');
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(4) > .mb-4 > #birthPlace').type('Hogwart');
    cy.get('.ms-4 > .card-body > form > :nth-child(3) > :nth-child(3) > .mb-4 > #password').clear('A');
    cy.get('.ms-4 > .card-body > form > :nth-child(3) > :nth-child(3) > .mb-4 > #password').type('Alex1234.');
    cy.get('.modal-footer > .fw-semibold').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(1) > .form-check').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(1) > .form-check > .form-check-input').check();
    cy.get('.modal-footer > .fw-semibold').click();
    cy.get('.css-hlgwow > .css-19bb58m').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(2) > .form-check > .form-check-label').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .pt-4.col > .form-check > #isAdvisorTeacher').check();
    cy.get('.ms-4 > .card-body > form > :nth-child(3) > :nth-child(3) > .mb-4 > #password').clear('A');
    cy.get('.ms-4 > .card-body > form > :nth-child(3) > :nth-child(3) > .mb-4 > #password').type('Alex123.');
    cy.get('.modal-footer > .fw-semibold').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(2) > .form-check').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(3) > .mb-4 > #surname').clear('Potte');
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(3) > .mb-4 > #surname').type('Potte');
    cy.get('.ms-4 > .card-body > form > :nth-child(1)').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(4) > .mb-4 > #birthPlace').clear('Hogwart');
    cy.get('.ms-4 > .card-body > form > :nth-child(1) > :nth-child(4) > .mb-4 > #birthPlace').type('Hogwart');
    cy.get('.ms-4 > .card-body > form > :nth-child(1)').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(2) > .form-check').click();
    cy.get('.ms-4 > .card-body > form > :nth-child(2) > .text-center > .row > :nth-child(2) > .form-check > .form-check-input').check();
    cy.get('.modal-footer > .fw-semibold').click();*/
   
  });
})

