class PIM{

    get Add () {
        return cy.get('.oxd-layout-context > .orangehrm-background-container > .orangehrm-paper-container > .orangehrm-header-container > .oxd-button')
        }
    get FirstName () {
           return  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
        }
    get MiddleName () {
           return cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
        }
    get LastName () {
            return cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
        }
    get EmployeeId () {
            return cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
        }
}

const pim = new PIM();
export default pim