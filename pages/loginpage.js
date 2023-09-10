class Login{

    get username () 
         {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        }
get password () 
        {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        }
get loginbutton ()
        {
    return cy.get('.oxd-button').click()
        }

}

const login = new Login();
export default login