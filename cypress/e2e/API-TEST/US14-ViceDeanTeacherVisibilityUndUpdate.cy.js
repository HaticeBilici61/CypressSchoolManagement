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

  it('US_14_TC_02 Oluşturulan öğretmenin bilgileri güncellenebilmeli', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    //token olustur
    cy.generateToken(vicedeanlogindata.userName, vicedeanlogindata.password).then(
      (token) => {
      console.log(token)
      cy.fixture("updateTeacherPayload").as("payload");
      cy.get("@payload").then((payload) => {


      cy.request({
        method: "PUT",
        url: "https://managementonschools.com/app/teachers/update/5339",
        body: payload,
        headers:{
          Authorization:`${token}`,
        },
      }).then((response) => {
        const actualData=response.body
        expect(response.status).to.eq(201)
        console.log(response.body);
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.object.id).to.eq(5339);
        expect(response.body.object.surname).to.eq("Sprout")
        expect(response.body.object.phoneNumber).to.eq("549-454-1728")        
        expect(response.body.object.ssn).to.eq("325-47-5874")
        expect(response.body.object.name).to.eq(payload.name);
        expect(response.body.object.birthPlace).to.eq(payload.birthPlace);
        expect(response.body.object.birthDay).to.eq(payload.birthDay);
       

        



                

      });
    })
      
  });
});
   
});