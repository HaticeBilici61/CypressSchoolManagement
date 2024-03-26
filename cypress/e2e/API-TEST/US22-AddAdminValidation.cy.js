describe('Admin Ekleme', () => {
 
    
    let loginData
    

    before(() => {
        cy.fixture('login_data').then((data) => {
            loginData = data
        })
      
       
    });

 
  
  it('US22_TC01 Tüm alanlar geçerli verilerle doldurulduğunda admin yeni admin ekleyebilmelidir', ()=> {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

   
    cy.generateToken(loginData.AdminUsername,loginData.AdminPassword).then(
      (token) => {
      console.log(token)

      cy.fixture("adminSavePayload").as("payload");
      
      
      cy.get("@payload").then((payload) => {
        


      cy.request({
        method: "POST",
        url: "https://managementonschools.com/app/admin/save",
        body: payload,
        headers:{
          Authorization:`${token}`,

        },
    }).then((response) => {
        
        const actualData=response.body.object;
        
        expect(response.status).to.eq(200);
        
        expect(actualData.username).to.eq(payload.username);
        
        expect(actualData.name).to.eq(payload.name);
        
        expect(actualData.surname).to.eq(payload.surname);
        
        expect(actualData.birthDay).to.eq(payload.birthDay);
        
        expect(actualData.ssn).to.eq(payload.ssn);
        
        expect(actualData.birthPlace).to.eq(payload.birthPlace);
  });
});
});
});
});
