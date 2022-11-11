/// <reference types="Cypress" />

describe("TODO App > ", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Let's try it!", () => {
        cy.viewport(1200, 800);
        cy.get('button[id="ma1"]').click();
        cy.get('input[id="ma1__answer"]').type("nth-child(3n)");
        cy.get('button[id="submit__button"]').click();
        cy.get("#ma1__correct").should("have.css", "display", "block");

        cy.get('input[id="ma1__answer"]').clear();
        cy.get('input[id="ma1__answer"]').type("I don't know");
        cy.get('button[id="submit__button"]').click();
        cy.get("#ma1__correct").should("have.css", "display", "none");
    });
});
