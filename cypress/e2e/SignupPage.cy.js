

describe('SIGNING UP THE USER', () => {
 
  beforeEach(() =>{
    cy.visit('/')
  })

  it('TC08 | VISITING THE SIGN UP PAGE', () => {

  })

  it('TC09 | FILLING THE COMPLETE SIGN UP PAGE AND CLICKING ON THE SIGNUP BUTTON', () => {
   
    cy.get('#inputFirstName').type('wasif')  //firt name field
    cy.get('#inputLastName').type('rehan')    //last name field
    cy.get('#inputEmail').type('muhammad.wasif@stixor.com')   //email field
    cy.get('#inputPhone').type('3042211006')    //phone number field

    cy.get('#inputCompanyName').type('Stixor') //Company name field
    cy.get('#inputAddress1').type('bahria town phase 7')    //street address field
    cy.get('#inputCity').type('Islamabad')      //city field
    cy.get('#stateinput').type('islamabad')       //state field
    cy.get('#inputPostcode').type('0443')         //postal code field

    cy.get('#customfield2').type('03042211006')       //whatsapp number field
    cy.get('#inputNewPassword1').type('Wasif123')       //new Password field
    cy.get('#inputNewPassword2').type('Wasif123')       // input password again field
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()     //capcha click
    cy.get('[align="center"] > .btn').click()       // register button click field

  })

})
