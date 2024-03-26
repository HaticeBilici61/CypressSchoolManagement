describe("Teacher Validation DB", () => {
    let vicedeanlogindata 
    before(() => {
      
      cy.fixture("vicedeanlogindata").then((data) => {
        vicedeanlogindata = data;
      });
    });
    it("teacher validation db test", () => {
      cy.task("connectDB", "SELECT * FROM teacher WHERE surname = 'Potter';").then((data) => {
       
        console.log(data);
     
        expect(
          data.rows.some(
            (teacher) =>
              teacher.surname === "Potter"
              
          )
        ).to.be.true;
      });
    });
  });