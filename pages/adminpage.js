class Admin{

    get Edit () {
        return cy.get('.oxd-table-cell-actions > :nth-child(2)')
            }
            get EditUsername () {
    return cy.get(':nth-child(2) > .oxd-input')
            }
            get EditSearch(){
                return cy.get('.oxd-form-actions > .oxd-button--secondary')
            }
get add (){
    return cy.get('.orangehrm-header-container > .oxd-button')
}
get UserRole () {
    return  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
}
get Status() {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
}
get EmployeeName (){
    return cy.get('.oxd-autocomplete-text-input > input')
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
    return cy.get('.oxd-button--secondary')
}




}

const admin = new Admin();
export default admin