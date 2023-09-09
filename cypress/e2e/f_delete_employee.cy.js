/// <reference types="cypress"/> 

import employee from "../../pages/employeepage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"



describe('test_name', function() {

    it('what_it_does', function() {
    cy.visit(Cypress.env('ORANGEHRMURL'))  
        login.username.type('Admin')   
        login.password.type('admin123')
        cy.get('.oxd-button').click()       
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
    sidemenu.PIM.click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        employee.EmployeeName.type('SODIQ')
        cy.wait(2000).get('.oxd-autocomplete-dropdown').click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
    employee.DeleteEmployee.click()
        cy.get('.oxd-button--label-danger').click()
    employee.EmployeeName.clear().type('SODIQ')
        cy.get('.oxd-table-filter').should('contain', 'No Records Found')
    })
   
   })
   