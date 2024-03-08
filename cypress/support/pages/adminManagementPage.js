class AdminManagementPage {
    constructor() {
        this.nameAdminManagement='#name'
        this.surnameAdminManagement ='#surname'
        this.birthPlaceAdminManagement ='#birthPlace'
        this.genderAdminManagement = '[value="FEMALE"]'
        this.dateOfBirthAdminManagement = '#birthDay'
        this.phoneAdminManagement = '#phoneNumber'
        this.ssnAdminManagement = '#ssn'
        this.usernameAdminManagement = '#username'
        this.passwordAdminManagement = '#password'
        this.submitButtonAdminManagement = '.mx-auto > .fw-semibold'
        this.nameErrorMessageAdminManagement = '[id="name"][class="form-control is-invalid"]'
        this.submitSaveMessageAdminManagement ='.Toastify__toast-body'
        this.submitErrorMessageAdminManagement ='(//div[@class="invalid-feedback"])[1]'
    }

   // Methodlar
  writeNameAdminManagement(nameAdminManagement) {
    cy.wait(2000)
  cy.get(this.nameAdminManagement).type(nameAdminManagement)
  cy.wait(2000)
  }
 writeSurnameAdminManagement(surnameAdminManagement) {
    cy.get(this.surnameAdminManagement).type(surnameAdminManagement)

 }
writeBirthPlaceAdminManagement(birthPlaceAdminManagement) {
    cy.get(this.birthPlaceAdminManagement).type(birthPlaceAdminManagement)
}


clickGenderAdminManagement(genderAdminManagement) {
    cy.get(this.genderAdminManagement).click();
}


writeDateOfAdminManagement(dateOfBirthAdminManagement) {
    cy.get(this.dateOfBirthAdminManagement).type(dateOfBirthAdminManagement)
}

writeSsnAdminManagement(ssnAdminManagement) {
    cy.get(this.ssnAdminManagement).type(ssnAdminManagement)
}
writePhoneAdminManagement(phoneAdminManagement) {
    cy.get(this.phoneAdminManagement).type(phoneAdminManagement)
}
writeUserNameAdminManagement(usernameAdminManagement) {
cy.get(this.usernameAdminManagement).type(usernameAdminManagement)
}
writePasswordAdminManagement(passwordAdminManagement) {
    cy.get(this.passwordAdminManagement).type(passwordAdminManagement)
}
clickSubmitButtonAdminManagement(submitButtonAdminManagement) {
    cy.get(this.submitButtonAdminManagement).click
}

verifySubmitSaveMessageAdminManagement(submitSaveMessageAdminManagement){
cy.get().should('have.to', submitSaveMessageAdminManagement);

}
verifysubmitErrorMessageAdminManagement() {
    cy.wait(2000)
     cy.xpath(this.submitErrorMessageAdminManagement).should('have.to',submitErrorMessageAdminManagement);
   cy.wait(2000)
}clear

writeBosName(bosnameAdminManagement){
   cy.get(this.nameAdminManagement).type(bosname)
}

}
export const adminManagement = new AdminManagementPage()