/// <reference types="cypress"/> 

import admin from "../../pages/adminpage"
import employee from "../../pages/employeepage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"



describe('Employee', function() {

    it('Delete an Employee', function() {
    cy.visit(Cypress.env('ORANGEHRMURL'))  
        login.username.type('Admin')   
        login.password.type('admin123')
        cy.get('.oxd-button').click()       
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
    sidemenu.PIM.click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        employee.EmployeeName.type('SODIQ')
        cy.wait(2000).get('.oxd-autocomplete-dropdown').click()
        admin.EditSearch.click({force:true})
    employee.DeleteEmployee.click()
        cy.get('.oxd-button--label-danger').click()

        // Confirming Deleted Employee does not exist in the list
        employee.EmployeeName.clear().type('SODIQ')
        cy.get('.oxd-table-filter').should('contain', 'No Records Found')
    })
   
   })
   