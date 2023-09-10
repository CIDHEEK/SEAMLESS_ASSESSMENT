/// <reference types="cypress"/>


import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe('Admin', function() {

    it('Edit an Admin', function () {
    cy.visit(Cypress.env('ORANGEHRMURL'))
        cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
        login.username
        login.password
        login.loginbutton
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
    sidemenu.Admin
        admin.EditUsername
        admin.EditSearch.click({force:true})
        cy.contains('adekanbi')
        admin.Edit
        admin.Status
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    
    admin.AdminSave
        cy.get('.oxd-text--toast-message')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    })
   
   })