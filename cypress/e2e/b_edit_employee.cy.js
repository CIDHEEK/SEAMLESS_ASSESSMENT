/// <reference types="cypress"/>

import pim from "../../pages/PIM_page"
import Sidemenu from "../../pages/SideMenu"
import admin from "../../pages/adminpage"
import employee from "../../pages/employeepage"
import login from "../../pages/loginpage"


describe('Employee', function() {

    it('Edit an Employee', function() {
        cy.visit(Cypress.env('ORANGEHRMURL'))
            login.username.type('Admin')
            login.password.type('admin123')
            cy.get('.oxd-button').click()    
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        Sidemenu.PIM.click()
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        employee.EmployeeName.type('sodiq')
            cy.wait(2000).get('.oxd-autocomplete-dropdown').click()
            admin.EditSearch.click({force:true})
            cy.contains('SODIQ')
        employee.EditEmployee.click()
            employee.NickEmployee.clear().type('agbaawo shelby')
            employee.SaveEditEmployee.click()
            cy.get('.oxd-toast')
    })
})