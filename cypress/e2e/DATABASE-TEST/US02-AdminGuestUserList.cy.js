describe('US02_GuestUserList', () => {
    
    it('Guest List Dogrulama', () => {
        cy.task('connectDB',"select*from guest_user").then((data)=>{
            console.log(data)
        
        })
    })
});