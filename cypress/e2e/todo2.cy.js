describe("Now make your own test", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport(1600, 900);
    })
    it("Let's go", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="fc"]').click();
        cy.get('.page').contains('First Child').invoke('text').then((text) => {
            expect(text.length).to.be.at.least(20)
        })
        cy.get('.fc .example-result > .example-result__show p:first-child').invoke('text').then((text) => {
            expect(text.length).to.eq(10);
        })
        cy.get('#css-selector-list').find('li').as('sidebar-button');
        cy.get('@sidebar-button').first().click();
    });

});
