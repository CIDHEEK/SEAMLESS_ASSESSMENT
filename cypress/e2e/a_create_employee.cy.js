/// <reference types="cypress"/>

import pim from "../../pages/PIM_page"
import Sidemenu from "../../pages/SideMenu"
import login from "../../pages/loginpage"


describe('Employee', function() {

    it('Create an Employee', function() {
      cy.visit(Cypress.env('ORANGEHRMURL'))  
        login.username 
        login.password
        login.loginbutton      
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
      
      Sidemenu.PIM 
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        pim.Add  
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')   
        pim.FirstName  
        pim.MiddleName
        pim.LastName
        pim.EmployeeId
        pim.SaveEmployee
        cy.url().should('contain', 'pim', 'viewPersonalDetails', 'empNumber')
    
    })
   
   })