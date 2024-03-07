class ViceDeanManagementPage{
    //WebElements
        constructor(){
        this.nameInput='#name';
        this.surnameInput='#surname';
        this.birthPlaceInput='#birthPlace';
        this.genderFemaleInput='[value="FEMALE"]';
         this.genderMaleInput='[value="MALE"]';
            this.birthDayInput='#birthDay';
         this.phoneNumberInput='#phoneNumber';        
         this.ssnInput='#ssn';   
        this.userNameInput='#username';
         this.passwordInput='#password';
        this.submitButton='[class="fw-semibold btn btn-primary btn-lg"]';

    }
   
    //Methods

    writeName(ViceDeanName){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.nameInput, { timeout: 10000 }).should('be.visible').type(ViceDeanName);
 
    }
    writeSurName(ViceDeanSurName){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.surnameInput, { timeout: 10000 }).should('be.visible').type(ViceDeanSurName);
 
    }

    writeBirthPlace(BirthPlace){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.birthPlaceInput, { timeout: 10000 }).should('be.visible').type(BirthPlace);
 
    }
    clickGenderFemaleButton(){
        cy.get(this.genderFemaleInput).click();
    }

    clickGenderMaleButton(){
        cy.get(this.genderMaleInput).click();
    }
    writeBirthPlace(BirthPlace){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.birthPlaceInput, { timeout: 10000 }).should('be.visible').type(BirthPlace);
 
    }

    writeDateofBirth(DateofBirth){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.birthDayInput, { timeout: 10000 }).should('be.visible').type(DateofBirth);
 
    }

    writePhoneNumber(PhoneNumber){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.phoneNumberInput, { timeout: 10000 }).should('be.visible').type(PhoneNumber);
 
    }

    writeSsn(ssn){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.ssnInput, { timeout: 10000 }).should('be.visible').type(ssn);
 
    }
    writeUserName(ViceDeanUsername){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
        cy.get(this.userNameInput, { timeout: 10000 }).should('be.visible').type(ViceDeanUsername);
 
    }

    writePassword(ViceDeanpassword){
        cy.wait(2000); // veya sayfanın yüklenmesini bekleme süresini ayarlayın
       
        cy.get(this.passwordInput).type(ViceDeanpassword)
    }
   clickSubmitButton(){
    cy.get(this.submitButton)
   }
} 
export const viceDeanManagementPage = new ViceDeanManagementPage()





