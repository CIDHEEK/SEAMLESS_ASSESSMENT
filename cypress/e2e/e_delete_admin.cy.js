/// <reference types="cypress"/>

import admin from "../../pages/adminpage"
import employee from "../../pages/employeepage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe('Admin', function() {

   it('Delete an Admin', function() {
   
   cy.visit(Cypress.env('ORANGEHRMURL'))
      cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
      login.username.type('Admin')
      login.password .type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   sidemenu.Admin.click(),
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
      admin.EditUsername.type('adekanbi')
   admin.EditSearch.click({force:true})
      cy.contains('adekanbi')
      employee.DeleteEmployee.click()
      cy.get('.oxd-button--label-danger').click()
      cy.get('.oxd-toast')

// Confirming the deleted admin is not on the list 
      admin.EditUsername.clear().type('adekanbi')
      admin.EditSearch.click({force:true})
      cy.get('.oxd-toast')


         })
        
        })
        
   
   