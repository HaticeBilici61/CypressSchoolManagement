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
        this.submitButtonAdminManagement = '.fw-semibold btn btn-primary btn-lg'
        this.nameErrorMessageAdminManagement = '[id="name"][class="form-control is-invalid"]'
    }

   // Methodlar
   writeNameAdminManagement(nameAdminManagement) {
    cy.get(this.nameAdminManagement).type(nameAdminManagement)
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





}
export const adminManagement = new AdminManagementPage()