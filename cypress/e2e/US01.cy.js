const { register } = require("../support/pages/registerPage");

register


describe('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
  let registerData
  //let loginData


  before(() => {
    cy.fixture('register-data').then((data) => {
      registerData = data
    })
   // cy.fixture('login_data').then((data) => {
   //   loginData = data
   // })
  });

  beforeEach(() => {
    cy.visit('/' + Cypress.env('register'));
  });

  it('US01-TC01-Aday ogrenciler sisteme kayit olabilmelidir.', () => {
    register.writeRegisterGirisbuton()
    register.writeRegisterName(registerData.Name)
    register.writeRegisterNachname(registerData.Surname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(registerData.Phone)
    register.writeRegisterGschlechtclick()
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.Ssn)
    register.writeRegisterNutzername(registerData.User_Name)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()

  })

  it.only('US01-TC02-Aday ogrenci olusturma.(name alani bos birakilamaz.)', () => {

    register.writeRegisterGirisbuton()
    register.writeBosUsername(registerData.Bosname)
    register.writeRegisterNachname(registerData.Surname)
    register.writeRegisterGeburtsOrt(registerData.Birth_Place)
    register.writeRegisterTelefon(registerData.Phone)
    register.writeRegisterGschlechtclick()
    register.writeRegisterGeburtsdatum(registerData.Date_Of_Birth)
    register.writeRegisterSSN(registerData.Ssn)
    register.writeRegisterNutzername(registerData.User_Name)
    register.writeRegisterPasswort(registerData.Password)
    register.clickRegisterButton()
    register.verifyZorunluAlanMessage(registerData.requiredZorunluAlanMessage)
  });







});


