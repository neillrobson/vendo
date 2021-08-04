let count = 0;

describe('Intercept logic', () => {
    beforeEach(() => {
        cy.intercept('**', req => {
            req.reply(`<html><body style="display: flex; justify-content: center; align-items: center"><h1>${count}</h1></body></html>`);
        });
    });

    it('executes "then" statements in sequence', () => {
        cy.visit('/not-zero').get('h1').should('contain', '1');

        ++count;

        cy.visit('/one').get('h1').should('contain', '1');

        cy.then(() => ++count);

        cy.visit('/two').get('h1').should('contain', '2');
    });

    it('remembers the state of previous tests', () => {
        cy.visit('/two-again').get('h1').should('contain', '2');
    });

    it('parses the entire test before actually executing it', () => {
        count = 5555555;

        cy.visit('/jennifer').get('h1').should('contain', '8675309');

        count = 8675309;
    });
});
