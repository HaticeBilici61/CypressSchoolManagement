describe('US16_Vice Dean, kullanicilarin gönderdiği mesajlari görebilmelidir', () => {
 
    
        let loginData
        let contactData
  
        before(() => {
            cy.fixture('login_data').then((data) => {
                loginData = data
            })
           cy.fixture('contact_get_all_data').then((data) => {
            contactData = data
            })
           
        });
    
     
      
      it('US16_TC02_Vice Dean, mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', ()=> {
        cy.on('uncaught:exception', (err, runnable) => {
          return false
        })
    
        //token olustur
        cy.generateToken(loginData.ViceDeanUsername,loginData.ViceDeanPasword).then(
          (token) => {
          console.log(token)
    
          cy.request({
            method: "GET",
            url: contactData.getContactURL,
            headers: {
              Authorization:`${token}`,
            },
          }).then((response) => {
            /*
            "content": [
        {
            "name": "Admin",
            "email": "admin1@gmail.com",
            "subject": "final project",
            "message": "about team management",
            "date": "2024-03-22"
        },
            */
    
            expect(response.status).to.eq(200)
            console.log(response.body);
            cy.log(JSON.stringify(response.body));
            expect(response.statusText).to.eq("OK");
            expect(response.headers["content-type"]).to.include("application/json");
        
            expect(response.body.content[0].name).to.eq("Admin");
            expect(response.body.content[0].email).to.eq("admin1@gmail.com");
            expect(response.body.content[0].subject).to.eq("final project");
  expect(response.body.content[0].message).to.eq("about team management");
 expect(response.body.content[0].date).to.eq("2024-03-22");
            
          });
        })
      });
    

    
          });
       