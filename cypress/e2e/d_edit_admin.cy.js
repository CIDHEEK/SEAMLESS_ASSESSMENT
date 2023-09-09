/// <reference types="cypress"/>


import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe('Edit Admin', function() {

    it('Edit Admin', function () {
    cy.visit(Cypress.env('ORANGEHRMURL'))
        cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
        login.username.type('Admin')
        login.password .type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    sidemenu.Admin.click(),
        admin.username.type('AAAAAA')
        admin.search.click({force:true})
        cy.contains('AAAAAA')
        admin.Edit.click()
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-text--toast-message')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    })
   
   })