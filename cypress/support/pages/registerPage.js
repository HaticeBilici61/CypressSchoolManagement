class RegisterPage{
    //Webelementler
    constructor(){
this.registerGirisButton='[class="header_link me-2"]'
this.registerName='#name'
this.registerNachname='#surname'
this.registerGeburtsort='#birthPlace'
this.registerTelefon='#phoneNumber'
this.registerGeschlecht='[value="MALE"]'
this.registerGeburtsdatum='#birthDay'
this.registerSSN='#ssn'
this.registerNutzername='#username'
this.registerPasswort='#password'
this.registerbuton='type="button"][class="fw-semibold btn btn-primary"]'
this.registerZorunlualanMessage='.invalid-feedback'



    }

    //metotlar

    writeRegisterGirisbuton(){
    cy.get(this.registerGirisButton).click();
    }
    writeRegisterName(Name){
        cy.get(this.registerName).type(Name);
    }
    writeRegisterNachname(Nachname){
        cy.get(this.registerNachname).type(Nachname);
    }
    writeRegisterGeburtsOrt(Geburtsort){
        cy.get(this.registerGeburtsort).type(Geburtsort);
    }
    writeRegisterTelefon(Telefon){
        cy.get(this.registerTelefon).type(Telefon);
    }
    writeRegisterGschlecht(Geschlecht){
        cy.get(this.registerGeschlecht).type(Geschlecht);
    }
    writeRegisterGeburtsdatum(Geburtsdatum){
        cy.get(this.registerGeburtsdatum).type(Geburtsdatum);
    }
   writeRegisterSSN(SSN){
    cy.get(this.registerSSN).type(SSN);
   }
   writeRegisterNutzername(Nutzername){
    cy.get(this.registerNutzername).type(Nutzername);
   }

   writeRegisterPasswort(Passwort){
    cy.get(this.registerPasswort).type(Passwort);
   }
   clickRegisterButton(){
    cy.get(this.registerbuton).click();
   }

   verifyZorunluAlanMessage(zorunluMessage){
    cy.get(this.registerZorunlualanMessage).should('contain',zorunluMessage);
   }
}