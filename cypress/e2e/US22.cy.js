
const { adminManagement } = require("../support/pages/adminManagementPage");
const { loginPage } = require("../support/pages/loginPage");


describe('Admin Ekleme', () => {
   let adminManagementData
   let loginData
  
    before(() => {

        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
        cy.fixture('admin_management_data').then((data) => {
            adminManagementData = data
        })
       
    });
  
    beforeEach(() => {
        cy.visit('/');
      });
    it('Vice Dean, mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', () => {
    cy.visit('/');
   loginPage.clickLoginButton1()
   loginPage.writeUserName(loginData.userName)
    loginPage.writePassword(loginData.passwordInput)
   loginPage.clickLoginButton2();
    adminManagement.writeNameAdminManagement(adminManagementData.nameAdminManagement)
    adminManagement.writeSurnameAdminManagement(adminManagementData.surnameAdminManagement)
    adminManagement.writeBirthPlaceAdminManagement(adminManagementData.birthPlaceAdminManagement)
    adminManagement.clickGenderAdminManagement(adminManagementData.genderAdminManagement)
    adminManagement.writeDateOfAdminManagement(adminManagementData.dateOfBirthAdminManagement)
    adminManagement.writePhoneAdminManagement(adminManagementData.phoneAdminManagement)
    adminManagement.writeSsnAdminManagement(adminManagementData.ssnAdminManagement)
    adminManagement.writeUserNameAdminManagement(adminManagementData.usernameAdminManagement)
    adminManagement.writePasswordAdminManagement(adminManagementData.passwordAdminManagement)
    adminManagement.clickSubmitButtonAdminManagement(adminManagementData.submitButtonAdminManagement)
      
  
          
    })})