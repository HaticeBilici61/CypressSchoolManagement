import { loginPage } from "../support/pages/loginPage";
import { studentChooseLesson } from "../support/pages/studentChooseLessonPage";
describe('US_21 Students, choose lesson, grades and announcement', () => {
    
    let studentlogindata
    before(() => {
  
        cy.fixture('studentlogindata').then((data) => {
            studentlogindata = data
        })
    });
    beforeEach(() => {
      cy.visit('/');
      loginPage.clickLoginButton1();
        loginPage.writeUserName(studentlogindata.userName);
        loginPage.writePassword(studentlogindata.password);
        loginPage.clickLoginButton2();
    });

    it('US_21_TC_01 Öğrenci Choose Lesson listesinde; Teacher, Day, Start Time ve Stop Time bilgilerini görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        studentChooseLesson.verifyLessonName();
        studentChooseLesson.verifyTeacherName();
        studentChooseLesson.verifyDay();
        studentChooseLesson.verifyStartTime();
        studentChooseLesson.verifyStopTime();
      
    });

    it('US_21_TC_02 Öğrenci İstediği ders veya dersleri seçebilmeli Seçtiği dersleri Lesson Program List’te görebilmeli', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        studentChooseLesson.selectLesson();
        studentChooseLesson.clickSubmit();
        studentChooseLesson.verifyLessonName();
        
        
        //tbody/tr[9]/td[1]/span[1]/div[1]/input[1]
        
    });
});