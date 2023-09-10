import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe("Admin", () => {
   
    it("Create an Admin", () => {
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
            admin.UserRole.click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
            admin.Status.click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
            admin.EmployeeName.type('sodiq')
            cy.wait(2000).get('.oxd-autocomplete-option').click()
            admin.AdminUsername.type('CI')
            cy.get('.orangehrm-card-container').should('contain', 'Should be at least 5 characters')
            admin.AdminUsername.clear().type('adekanbi')
            admin.AdminPassword.type('Ad')
            cy.get('.orangehrm-card-container').should('contain', 'Should have at least 7 characters')
            admin.AdminPassword.clear().type('Ademola')
            cy.get('.orangehrm-card-container').should('contain', 'Your password must contain minimum 1 number')
            admin.AdminPassword.clear().type('Ademola1')
            admin.ConfirmAdminPassword.type('Ademola')
            cy.get('.orangehrm-card-container').should('contain', 'Passwords do not match')
            admin.ConfirmAdminPassword.clear().type('Ademola1')
            admin.AdminSave.click()
            cy.wait(2000).url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        admin.add.click()
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
            admin.AdminUsername.type('adekanbi')
            cy.get('.orangehrm-card-container').should('contain', 'Already exists')
        sidemenu.Admin.click()
    })   
    
})