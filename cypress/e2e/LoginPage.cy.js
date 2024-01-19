import login from '../fixtures/example.json'

describe('Data driven for login', () => {

    beforeEach(() =>{
        cy.visit('https://phptravels.org/login')
      })


    it('TCL-02 | ASSERTING THE LOGIN HEADING', () => {
        cy.contains('#main-body > div > div.row > div > form > div > div.card-body.px-sm-5.py-5 > div:nth-child(1) > h6', 'Login').should('be.visible');
        })
  
        it('TCL-03 | ASSERTION OF EMAIL  FIELD', () => {
          cy.get('#inputEmail').should('be.visible');
        })
  
       it('TCL-04 | ASSERTION OF PASSWORD FIELD', () => {
        cy.get('#inputPassword').should('be.visible');
        })
  
        it('TCL-05 | ASSERTION OF LOGIN BUTTON', () => {
          cy.get('#login').should('be.visible');
        })

  it('TCL-06 | LOGGING IN USER WITH CORRECT DATA - POSITIVE', () => {


    cy.get('#inputEmail').type('muhammad.wasif@gmail.com')

    cy.get('#inputPassword').type("Wasif123")

    cy.get('#login').click()

  })

  it('TCL-07 | LOGGING IN USER WITH WRONG DATA - NEGITIVE', () => {


    cy.get('#inputEmail').type('wasif@gmail.com')

    cy.get('#inputPassword').type("asif123")

    cy.get('#login').click()
//POST ASSERTION
    cy.url().should('include','https://phptravels.org/login')

  })

})