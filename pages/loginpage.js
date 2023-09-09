class Login{

    get username () {
return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
}
get password () {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
}


}

const login = new Login();
export default login