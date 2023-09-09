class Admin{

    get Edit () {
        return cy.get('.oxd-table-cell-actions > :nth-child(2)')
            }
            get username () {
    return cy.get(':nth-child(2) > .oxd-input')
            }
            get search(){
                return cy.get('.oxd-form-actions > .oxd-button--secondary')
            }
get add (){
    return cy.get('.orangehrm-header-container > .oxd-button')
}



}

const admin = new Admin();
export default admin