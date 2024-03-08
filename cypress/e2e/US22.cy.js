
const { adminManagement } = require("../support/pages/adminManagementPage");
adminManagement



describe('Admin Ekleme', () => {
   let adminManagementData
  
   
    before(() => {

        cy.fixture('login_data').then((data) => {
            loginData = data
        })
       
        cy.fixture('admin_management_data').then((data) => {
            adminManagementData = data
        })

    fakeName=faker.internet.name()
       
    });
  
    beforeEach(() => {
        cy.visit('/'  + Cypress.env('adminManagement'));
      });
    it.only('Admin Ekleme', () => {
    
    adminManagement.writeNameAdminManagement(adminManagementData.nameAdminManagement)
    adminManagement.writeSurnameAdminManagement(adminManagementData.surnameAdminManagement)
    adminManagement.writeBirthPlaceAdminManagement(adminManagementData.birthPlaceAdminManagement)
    adminManagement.clickGenderAdminManagement(adminManagementData.genderAdminManagement)
    adminManagement.writeDateOfAdminManagement(adminManagementData.dateOfBirthAdminManagement)
    adminManagement.writePhoneAdminManagement(adminManagementData.phoneAdminManagement)
    adminManagement.writeSsnAdminManagement(adminManagementData.ssnAdminManagement)
    adminManagement.writeUserNameAdminManagement(adminManagementData.userNameAdminManagement)
    adminManagement.writePasswordAdminManagement(adminManagementData.passwordAdminManagement)
    adminManagement.clickSubmitButtonAdminManagement(adminManagementData.submitButtonAdminManagement)
    adminManagement.verifySubmitSaveMessageAdminManagement(adminManagementData.submitSaveMessageAdminManagement)
      
  
          
    })

    it('Admin Ekleme', () => {
       
       loginPage.clickLoginButton1()
       loginPage.writeUserName(loginData.userName)
        loginPage.writePassword(loginData.passwordInput)
       loginPage.clickLoginButton2();
        adminManagement.writeNameAdminManagement(adminManagementData.bosNameAdminManagement)
        adminManagement.writeSurnameAdminManagement(adminManagementData.surnameAdminManagement)
        adminManagement.writeBirthPlaceAdminManagement(adminManagementData.birthPlaceAdminManagement)
        adminManagement.clickGenderAdminManagement(adminManagementData.genderAdminManagement)
        adminManagement.writeDateOfAdminManagement(adminManagementData.dateOfBirthAdminManagement)
        adminManagement.writePhoneAdminManagement(adminManagementData.phoneAdminManagement)
        adminManagement.writeSsnAdminManagement(adminManagementData.ssnAdminManagement)
        adminManagement.writeUserNameAdminManagement(adminManagementData.userNameAdminManagement)
        adminManagement.writePasswordAdminManagement(adminManagementData.passwordAdminManagement)
        adminManagement.clickSubmitButtonAdminManagement(adminManagementData.submitButtonAdminManagement)
        adminManagement.verifySubmitSaveMessageAdminManagement(adminManagementData.submitSaveMessageAdminManagement)
          
      
              
        })
    
    

})