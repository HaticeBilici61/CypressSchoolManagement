import { register } from "../../support/pages/registerPage";
import { faker } from "@faker-js/faker";



describe('Erfolgreiche Anmeldung-Positive', () => {
    let registerData
    let fakeEmail
    let fakePasswort
    before(()=>{
        cy.fixture('register_data').then((data)=>{
            registerData=data
            fakeEmail=faker.internet.email()
            fakePasswort=faker.internet.password()
        })
    });
    beforeEach(() => {
        cy.wait(2000)
    //cy.visit('/')
    cy.visit('/' + Cypress.env('register'));
    // cy.visit('https://test.salevali.com/auth/login?recaptcha_token=03AAYGu2SpqMrWbLLS6FNvfxgXQ0jc8_YqIRKkJ_4p1JXvZLvtrBp6oHiN7XAgiujUj83_NT3-TfDvLcGEwCHcmKEJg0EjLe4h6rGifbrHTwYalvuqnGcRaM7SM2xAAl9A5bf8AVKliOzNg6dmNRvFFgf__zBy-_SC0DV9igtoGGkmu-IlZUUmYBCb0M0ajkVINBv_7GyAzybNMhMnWgt1JdiA5WU4rGvLlWAQxShz35M4UAtH9Iz55mazZoTkg1urKPbW8u_qz1QClZ2ZFOGuhB3TxlIlvt9H1AycZa-bQyUhRRMHuxPYu8dy-0PtSfKBD0BkZ_h4dn0nFrN-J8rfQuZ61-KH2t4ACk7357rlWUzq2--LrL9UJ_HrfQ2ivtxNnYnS4sFetiDryaQdpmypDT3okWvIVDExH1n2ZkEFF6H8Ir_wknRqiBkGGDTNQk-VrgDImkZEJx7wIh0mEYuKs-ccsUQ1EywfJfJIzw7OdqwtG8dNDpV95KW_0CpE17Csx2qrs_YLc5_tE7J94sAdB0zUNMT5_oXIPSmV44yx6bDafN7kVr80u6k')
     
        
    });
        it('Register Positive Test', () => {
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              })
    
          
           register.writeRegisterVorname(registerData.Vorname)
           register.writeRegisterNachname(registerData.Nachname)
           register.writeRegisterEmail(fakeEmail)
           register.writeRegisterPasswort(fakePasswort)
           register.clickRegisterKayitButon()
       
        })
        it('Register Negative Test-Name alani bos', () => {
            
            // register.writeRegisterVorname(registerData.Bosvorname)
             register.writeRegisterNachname(registerData.Nachname)
             register.writeRegisterEmail(fakeEmail)
             register.writeRegisterPasswort(fakePasswort)
             register.clickRegisterKayitButon()
             register.verifyBosVornameMessage(registerData.BosVornameUyarimesaji)
             
          });
          it('Register Positive Test-Nachname alani bos', () => {
          
            register.writeRegisterVorname(registerData.Vorname)
            //register.writeRegisterNachname(registerData.Nachname)
            register.writeRegisterEmail(fakeEmail)
            register.writeRegisterPasswort(fakePasswort)
            register.clickRegisterKayitButon()
            register.verifyBosNachMessage(registerData.BosNachnameUyarimesaji)
        
         });



            
        })


        
