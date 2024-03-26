const { expect } = require("chai");

describe('US_14 Vice Dean öğretmenleri görebilmeli ve güncelleme yapabilmelidir.', () => {
 
let vicedeanlogindata 

before(() => {
  cy.fixture('vicedeanlogindata').then((data) => {
    vicedeanlogindata = data
   })
});
  
  it('US_14_TC_01 Oluşturulan öğretmenin bilgileri doğrulanabilmeli', ()=> {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    //token olustur
    cy.generateToken(vicedeanlogindata.userName, vicedeanlogindata.password).then(
      (token) => {
      console.log(token)

      cy.request({
        method: "GET",
        url: "https://managementonschools.com/app/teachers/getSavedTeacherById/5339",
        headers: {
          Authorization:`${token}`,
        },
      }).then((response) => {

        expect(response.status).to.eq(200)
        console.log(response.body);
        cy.log(JSON.stringify(response.body));
        expect(response.statusText).to.eq("OK");
        expect(response.headers["content-type"]).to.include("application/json");
        expect(response.body.message).to.eq("Teacher successfully found");
        expect(response.body.object.id).to.eq(5339);
        expect(response.body.object.surname).to.eq("Sprout")
        expect(response.body.object.phoneNumber).to.eq("549-454-1728")        
        expect(response.body.object.ssn).to.eq("325-47-5874")
      });
    })
  });

  it.only('US_14_TC_02 Oluşturulan öğretmenin bilgileri güncellenebilmeli', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    //Set the url
    //const pathparam1= "/teachers";
    //const pathparam2= "/update";
    //const pathparam3= "/5339";

    //token olustur
    cy.generateToken(vicedeanlogindata.userName, vicedeanlogindata.password).then(
      (token) => {
      console.log(token)

     cy.fixture("updateTeacherPayload").as("payload");
     //cy.fixture("updateTeacherResponse").as("expectedData");
     cy.get("@payload").then((payload) => {
   //  cy.get("@expectedData").then((expectedData) => {
     cy.request({
          method: "PUT",
          url: `https://managementonschools.com/app/teachers/update/5339`,
          //${pathparam1}${pathparam2}${pathparam3}`,
          body: payload,
          headers:{
           "Content-Type": "application/json",
        },
        //failOnStatusCode: false,
        // ignoreUnknown: true
       }).then((response) => {
        console.log(response.body);
        cy.log(JSON.stringify(response.body));
       // const actualData=response.body
             
      // expect(response.status).to.eq(200);
      // expect(response.body.object.userId).to.eq(5339);
      // expect(response.body.object.username).to.eq(payload.username);
      // expect(response.body.object.name).to.eq(payload.name);
      // expect(response.body.object.surname).to.eq(payload.surname);
       //expect(response.body.object.birthDay).to.eq(payload.birthDay);
      // expect(response.body.object.ssn).to.eq(payload.ssn);
      // expect(response.body.object.birthPlace).to.eq(payload.birthPlace);
      // expect(response.body.object.phoneNumber).to.eq(payload.phoneNumber);
      // expect(response.body.object.gender).to.eq(payload.gender);
      // expect(response.body.object.email).to.eq(payload.email);
       //expect(response.body.object.isAdvisorTeacher).to.eq(payload.isAdvisorTeacher);
       //expect(response.body.message).to.eq("Teacher updated Successful");
       //expect(response.body.httpStatus).to.eq("OK");
       });
      
    });
    });      
  })
}); 


