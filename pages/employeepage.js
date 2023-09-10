class Employee{

    get EmployeeName () {
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('sodiq',{ force: true })
            }
    get DeleteEmployee () {
    return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
            }
    get EditEmployee () {
            return cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
        }
    get NickEmployee () {
        return cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('agbaawo shelby')
    }

    get SaveEditEmployee () {
       return cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }
}

const employee = new Employee();
export default employee