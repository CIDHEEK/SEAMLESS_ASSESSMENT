class Admin{

    get Edit () {
        return cy.wait(1000).get('.oxd-table-cell-actions > :nth-child(2)').click()
            }
            get EditUsername () {
    return cy.get(':nth-child(2) > .oxd-input').type('Adekanbi')
            }
            get EditSearch(){
                return cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
            }
get add (){
    return cy.get('.orangehrm-header-container > .oxd-button').click()
}
get UserRole () {
    return  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
}
get Status() {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
}
get EmployeeName (){
    return cy.get('.oxd-autocomplete-text-input > input').type('sodiq')
}
get AdminUsername () {
    return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
}
get AdminPassword () {
    return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
}
get ConfirmAdminPassword () {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
}
get AdminSave () {
    return cy.get('.oxd-button--secondary').click()
}
get ErrorMessage () {
    return cy.get('.orangehrm-card-container')
}
get confirmDelete() {
    cy.get('.oxd-button--label-danger').click({force: true})
}


}

const admin = new Admin();
export default admin