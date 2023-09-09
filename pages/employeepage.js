class Employee{

    get EmployeeName () {
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
            }
    get DeleteEmployee () {
    return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')
            }
    get EditEmployee () {
            return cy.get('.oxd-table-cell-actions > :nth-child(2)')
        }
    get NickEmployee () {
        return cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
}

const employee = new Employee();
export default employee