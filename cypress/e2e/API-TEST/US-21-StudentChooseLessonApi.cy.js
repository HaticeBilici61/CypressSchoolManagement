describe('US_21 Students, choose lesson, grades and announcement', () => {
    it('US_21_TC_01 Öğrenci Choose Lesson listesinde; Teacher, Day, Start Time ve Stop Time bilgilerini görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.generateToken(studentlogindata.userName, studentlogindata.password).then(
            (token) => {
            console.log(token)
            cy.request({
                method: "GET",
                url: "https://managementonschools.com/app/getByStudentId/3258",
                headers: {
                  Authorization:`${token}`,
                },
              }).then((response) => {
        
                expect(response.status).to.eq(200)
                console.log(response.body);
                cy.log(JSON.stringify(response.body));
                expect(response.statusText).to.eq("OK");
                expect(response.headers["content-type"]).to.include("application/json");
                
              });    
            });
            
      

        
    });
});