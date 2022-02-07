describe("delete customers", () => {
    it("delete ", () => {
        cy.visit("http://localhost:3000");
        cy.get('button')
            .first()
            .click()
            .get(".row")
            .then(elems => {
                expect(elems.length).to.eq(5);
            })
    })
});