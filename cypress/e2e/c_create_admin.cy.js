import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe("Add User", () => {
   
    it("Create a user", () => {
        cy.visit(Cypress.env('ORANGEHRMURL'))
            cy.title().should('eq', 'OrangeHRM', 'OPEN SOURCE HR MANAGEMENT')
            login.username.type('Admin')
            login.password .type('admin123')
            cy.get('.oxd-button').click()
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        sidemenu.Admin.click(),
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            admin.add.click()
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
            cy.get('.oxd-topbar-header-title').should('contain', 'Admin')
            cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add User')
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
            cy.get('.oxd-autocomplete-text-input > input').type('sodiq')
            cy.wait(2000).get('.oxd-autocomplete-option').click()
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('CI')
            cy.get('.orangehrm-card-container').should('contain', 'Should be at least 5 characters')
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('adekanbi')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ad')
            cy.get('.orangehrm-card-container').should('contain', 'Should have at least 7 characters')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ademola')
            cy.get('.orangehrm-card-container').should('contain', 'Your password must contain minimum 1 number')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ademola1')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ademola')
            cy.get('.orangehrm-card-container').should('contain', 'Passwords do not match')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ademola1')
            cy.get('.oxd-button--secondary').click()
            cy.wait(2000).url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        admin.add.click()
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('adekanbi')
            cy.get('.orangehrm-card-container').should('contain', 'Already exists')
        sidemenu.Admin.click()
    })   
    
})