const USERNAME = 'neill'
const BAD_PASSWORD = 'badpass'

describe('The Login Page', () => {
    it('displays an error when given invalid credentials', () => {
        cy.visit('/login')
        cy.get('input[name=username]').type(USERNAME)
        cy.get('input[name=password]').type(BAD_PASSWORD)
        cy.get('button[type=submit]').click()
        cy.get('div.message.negative').contains('Invalid credentials')
    })
})
