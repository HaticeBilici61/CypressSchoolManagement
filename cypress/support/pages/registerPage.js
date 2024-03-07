class RegisterPage {
    //Webelementler
    constructor() {
        this.registerGirisButton = '[class="header_link me-2"]'
        this.registerName = '#name'
        this.registerNachname = '[placeholder="Surname"]'
        this.registerGeburtsort = '#birthPlace'
        this.registerTelefon = '#phoneNumber'
        this.registerGeschlecht = '[value="MALE"]'
        this.registerGeburtsdatum = '#birthDay'
        this.registerSSN = '#ssn'
        this.registerNutzername = '#username'
        this.registerPasswort = '#password'
        this.registerbuton = '[class="fw-semibold btn btn-primary"]'
        this.registerZorunlualanMessage ="//div[contains(@class,'card-body')]//div[1]//div[1]"
        



    }

    //metotlar

    writeRegisterGirisbuton() {
        cy.get(this.registerGirisButton).click();
    }
    writeRegisterName(Name) {
        cy.get(this.registerName).type(Name);
    }
    writeRegisterNachname(Surname) {
        cy.get(this.registerNachname).type(Surname);
    }
    writeRegisterGeburtsOrt(Birth_Place) {
        cy.get(this.registerGeburtsort).type(Birth_Place);
    }
    writeRegisterTelefon(Phone) {
        cy.get(this.registerTelefon).type(Phone);
    }
    writeRegisterGschlechtclick(){
     cy.get(this.registerGeschlecht).click()
    
    }
    writeRegisterGeburtsdatum(Date_Of_Birth) {
        cy.get(this.registerGeburtsdatum).type(Date_Of_Birth);
    }
    writeRegisterSSN(Ssn) {
        cy.get(this.registerSSN).type(Ssn);
    }
    writeRegisterNutzername(User_Name) {
        cy.get(this.registerNutzername).type(User_Name);
    }

    writeRegisterPasswort(Password) {
        cy.get(this.registerPasswort).type(Password);
    }
    clickRegisterButton() {
        cy.get(this.registerbuton).click();
        

    }

     verifyZorunluAlanMessage(requiredZorunluAlanMessage) {
         cy.wait(2000)
          cy.xpath(this.registerZorunlualanMessage).should('have.to',requiredZorunluAlanMessage);
        cy.wait(2000)
     }clear

    writeBosUsername(Bosname){
        cy.get(this.registerName).type(Bosname)
    }
}

export const register = new RegisterPage()