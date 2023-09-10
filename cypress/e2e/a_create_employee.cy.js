/// <reference types="cypress"/>

import pim from "../../pages/PIM_page"
import Sidemenu from "../../pages/SideMenu"
import login from "../../pages/loginpage"


describe('Employee', function() {

    it('Create an Employee', function() {
      cy.visit(Cypress.env('ORANGEHRMURL'))  
       login.username.type('Admin')   
       login.password.type('admin123')
       cy.get('.oxd-button').click()       
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
      Sidemenu.PIM.click() 
       cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
       pim.Add.click()  
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')   
       pim.FirstName.click().type('SODIQ')   
       pim.MiddleName.type('ADEMOLA')
       pim.LastName.type('OMIDELE')
       pim.EmployeeId.type('1234')
       cy.get('.oxd-button--secondary').click()
       cy.url().should('contain', 'pim', 'viewPersonalDetails', 'empNumber')
    
    })
   
   })