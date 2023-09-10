/// <reference types="cypress"/>

import pim from "../../pages/PIM_page"
import Sidemenu from "../../pages/SideMenu"
import admin from "../../pages/adminpage"
import employee from "../../pages/employeepage"
import login from "../../pages/loginpage"


describe('Employee', function() {

    it('Edit an Employee', function() {
        cy.visit(Cypress.env('ORANGEHRMURL'))
            login.username
            login.password
            login.loginbutton   
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        
        Sidemenu.PIM
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        
        employee.EmployeeName
            cy.wait(2000).get('.oxd-autocomplete-dropdown').click()
            admin.EditSearch.click({force:true})
            cy.contains('SODIQ')
        
        employee.EditEmployee
            employee.NickEmployee
            employee.SaveEditEmployee
        
        cy.get('.oxd-toast')
    })
})