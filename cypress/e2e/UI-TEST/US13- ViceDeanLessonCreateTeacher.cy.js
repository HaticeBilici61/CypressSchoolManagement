import { vicedeanteachercreatepage } from "../../support/pages/UI-PAGES/viceDeanTeacherCreatePage";
describe('Teacher Creation with Vice DEAN', () => {
  let createTeacherWithDeanAdmin;

  before(() => {
    cy.fixture("createTeacherWithDeanAdmin").then((data) => {
      createTeacherWithDeanAdmin = data;
    })
  });
  beforeEach(() => {
    cy.visit('/');
    vicedeanteachercreatepage.clickOnLoginButton()
  });

  it('Creating teachers successfully', () => {

    //cy.get(createTeacherWithDeanAdmin[0].username, createTeacherWithDeanAdmin[0].password);
  });
})
