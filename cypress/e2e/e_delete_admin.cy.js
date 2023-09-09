/// <reference types="cypress"/>

import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe('test_name', function() {

   it('what_it_does', function() {
   
   cy.visit(Cypress.env('ORANGEHRMURL'))
      cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
      login.username.type('Admin')
      login.password .type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   sidemenu.Admin.click(),
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
      cy.get(':nth-child(2) > .oxd-input').type('adekanbi')
   cy.get('.oxd-form-actions > .oxd-button--secondary').click()
   cy.contains('Adekanbi')
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force:true})
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force:true})
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
      cy.get('body > #app > #oxd-toaster_1 > .oxd-toast')
         
         })
        
        })
        
   
   