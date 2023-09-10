/// <reference types="cypress"/>


import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe('Admin', function() {

    it('Edit an Admin', function () {
    cy.visit(Cypress.env('ORANGEHRMURL'))
        cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
        login.username.type('Admin')
        login.password .type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    sidemenu.Admin.click(),
        admin.EditUsername.type('Adekanbi')
        admin.EditSearch.click({force:true})
        cy.contains('adekanbi')
        admin.Edit.click()
        admin.Status.click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        admin.AdminSave.click()
        cy.get('.oxd-text--toast-message')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    })
   
   })