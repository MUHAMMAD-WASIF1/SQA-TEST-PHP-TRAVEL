import login from '../fixtures/example.json'

describe('Data driven for login', () => {

    
  it('TCL-01 | DATA DRIVEN APPROACH-----LOGGING IN USER', () => {

    cy.visit('https://phptravels.org/login')

    cy.get('#inputEmail').type(login.name)

    cy.get('#inputPassword').type(login.pass)

    cy.get('#login').click()

  })

})