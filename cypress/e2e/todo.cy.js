describe("TODO App > ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport(1600, 900);
    });

    it("Check First Child", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="fc"]').click();
        cy.get('.fc > .example .example-result__show > p').first().should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check Last Child", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="lc"]').click();
        cy.get('.lc > .example .example-result__show > p').last().should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check Nth Child", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="nc"]').click();

        cy.get('button[id="style-1"]').click();
        cy.get('.nc .example-result > #style-1-result > p:nth-child(2)').should("have.css", "color", "rgb(255, 0, 0)");
       
        cy.get('button[id="style-2"]').click();
        cy.get('#style-2-result').should("have.css", "display", "block");
        cy.get('.nc .example-result > #style-2-result > p:nth-child(odd)').should("have.css", "color", "rgb(255, 0, 0)");

        cy.get('button[id="style-3"]').click();
        cy.get('#style-3-result').should("have.css", "display", "block");
        cy.get('.nc .example-result > #style-3-result > p:nth-child(n+4)').should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check Nth Last Child", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="nlc"]').click();
        cy.get('.nlc .example-result > .example-result__show > p:nth-last-child(2)').should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check Nth Of Type", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="not"]').click();
        cy.get('.not .example-result > .example-result__show > p:nth-of-type(2)').should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check Nth Last Of Type", () => {
        cy.get('button[id="css-selector"]').click();
        cy.get('li[id="nlot"]').click();
        cy.get('.nlot .example-result > .example-result__show > p:nth-last-of-type(2)').should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("Check CSS Combinator", () => {
        cy.get('button[id="css-combinator"]').click();

        //Descendant Selector Check
        cy.get('li[id="ds"]').click();
        cy.get('.ds .example-result > .example-result__show p').should("have.css", "color", "rgb(255, 0, 0)");

        //Child Selector Check
        cy.get('li[id="cs"]').click();
        cy.get('.cs .example-result > .example-result__show > p').should("have.css", "color", "rgb(255, 0, 0)");

        //Adjacent Sibling Selector Check
        cy.get('li[id="ass"]').click();
        cy.get('.ass .example-result > #ass-result div + p').should("have.css", "color", "rgb(255, 0, 0)");

        //General Sibling Selector Check
        cy.get('li[id="gss"]').click();
        cy.get('.gss .example-result > #gss-result div ~ p').should("have.css", "color", "rgb(255, 0, 0)");
    })

    it("It's time to check assignment 1", () => {
        cy.get('button[id="css-assignment"]').click();
        cy.get('li[id="ma1"]').click();
        cy.get('input[id="ma1__answer"]').type("nth-child(3n)");
        cy.get('button[id="submit__button"]').click();
        cy.get("#ma1__correct").should("have.css", "display", "block");

        cy.get('input[id="ma1__answer"]').clear();
        cy.get('input[id="ma1__answer"]').type("I don't know");
        cy.get('button[id="submit__button"]').click();
        cy.get("#ma1__correct").should("have.css", "display", "none");
    })

    it("It's time to check assignment 2", () => {
        cy.get('button[id="css-assignment"]').click();
        cy.get('li[id="ma2"]').click();
        cy.get('input[id="ma2__answer"]').type("li   + li");
        cy.get('button[id="submit__button2"]').click();
        cy.get(".actual > ul > li + li").should("have.css", "border-top", "1px solid rgb(128, 128, 128)");
        cy.get(".actual > ul > li + li").should("have.length", 4);

        cy.get('input[id="ma2__answer"]').clear();
        cy.get('input[id="ma2__answer"]').type("ul li");
        cy.get('button[id="submit__button2"]').click();
        cy.get(".actual > ul li").should("have.css", "border-top", "1px solid rgb(128, 128, 128)");
        cy.get(".actual > ul li").should("have.length", 4);
    })
});
