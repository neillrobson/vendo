let count = 0;

describe('Intercept logic', () => {
    it('intercepts once, calls twice', () => {
        cy.intercept('**', req => {
            req.reply(`<html><body><h1>${count}</h1></body></html>`);
        });

        cy.visit('/zero').pause();

        ++count;

        cy.visit('/one');

        cy.then(() => ++count);

        cy.visit('/two');
    });
})
