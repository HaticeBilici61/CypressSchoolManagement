class StudentChooseLessonPage {
    constructor() {
        this.lessonNAme = "//tbody/tr[5]/td[2]/span[1]"
        this.teacherName="//tbody/tr[5]/td[3]/span[1]"
        this.day="//tbody/tr[5]/td[4]/span[1]"
        this.startTime="//tbody/tr[5]/td[5]/span[1]"
        this.stopTime="//tbody/tr[5]/td[6]/span[1]"
        this.selectLessonCheckBox="//tbody/tr[11]/td[1]/span[1]/div[1]/input[1]"
        this.submitButton="button[class='fw-semibold btn btn-primary btn-lg']"
        this.LessonAddedMessage='.Toastify__toast-body > :nth-child(2)'
    }

    verifyLessonName(lessonName) {
        cy.xpath(this.lessonNAme).should('be.visible', lessonName)
    }
    verifyTeacherName(teacherName) {
        cy.xpath(this.teacherName).should('be.visible', teacherName)
    }
    verifyDay(day) {
        cy.xpath(this.day).should('be.visible', day)
    }
    verifyStartTime(startTime) {
        cy.xpath(this.startTime).should('be.visible', startTime)
    }
    verifyStopTime(stopTime) {
        cy.xpath(this.stopTime).should('be.visible', stopTime)
    }

    selectLesson(selectLessonCheckBox){
        cy.xpath(this.selectLessonCheckBox).click(selectLessonCheckBox);
    }
    clickSubmit(submitButton){
        cy.get(this.submitButton).click(submitButton);
        cy.wait(2000);
        cy.get(this.LessonAddedMessage).should('contain', 'Lesson added to Student')
    }
   
}
export const studentChooseLesson = new StudentChooseLessonPage()