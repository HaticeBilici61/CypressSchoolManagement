const { loginPage } = require("../support/pages/loginPage");
const { viceDeanManagementPage } = require("../support/pages/viceDeanManagementPage");

describe('Dean Login Test Suite', () => {
    let loginData;
    let viceDeanData;
   
    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data;
        });
        cy.fixture('vice_dean_management_register_data').then((data) => {
            viceDeanData = data;
        });
    });

    beforeEach(() => {
        cy.visit('/');
    });

    it('TC00 - Login test with valid data', () => {
        loginPage.clickLoginIcon();
        loginPage.writeUserName(loginData.DeanUsername);
        loginPage.writePassword(loginData.DeanPassword);
        loginPage.clickLoginButton();
    });

    it('TC01 - Positive test for Vice Dean Management Page', () => {
        loginPage.clickLoginIcon();
        loginPage.writeUserName(loginData.DeanUsername);
        loginPage.writePassword(loginData.DeanPassword);
        loginPage.clickLoginButton();
        viceDeanManagementPage.writeName(viceDeanData.name);
        viceDeanManagementPage.writeSurName(viceDeanData.surName);
        viceDeanManagementPage.writeDateofBirth(viceDeanData.dateOfBirth);
        viceDeanManagementPage.writePhoneNumber(viceDeanData.phone);
        viceDeanManagementPage.writeBirthPlace(viceDeanData.birhtPlace);
        viceDeanManagementPage.clickGenderFemaleButton(viceDeanData.gender);
        viceDeanManagementPage.writePassword(viceDeanData.password);
        viceDeanManagementPage.writeSsn(viceDeanData.ssn);
        viceDeanManagementPage.writeUserName(viceDeanData.userName);
    });
});