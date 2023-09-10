import admin from "../../pages/adminpage"
import login from "../../pages/loginpage"
import sidemenu from "../../pages/SideMenu"

describe("Admin", () => {
   
    it("Create an Admin", () => {
        cy.visit(Cypress.env('ORANGEHRMURL'))
            cy.title().should('eq', 'OrangeHRM')
              
                login.username
                login.password
                login.loginbutton
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

            sidemenu.Admin
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            
            admin.add
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
                cy.get('.oxd-topbar-header-title').should('contain', 'Admin')
                cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add User')
                
            admin.UserRole
                cy.get('.oxd-select-dropdown > :nth-child(2)').click()
                
            admin.Status
                cy.get('.oxd-select-dropdown > :nth-child(2)').click()
                
            admin.EmployeeName
                cy.wait(2000).get('.oxd-autocomplete-option').click()
            
            admin.AdminUsername.type('CI')
                admin.ErrorMessage.should('contain', 'Should be at least 5 characters')
                admin.AdminUsername.clear().type('adekanbi')
            
            admin.AdminPassword.type('Ad')
                admin.ErrorMessage.should('contain', 'Should have at least 7 characters')
                admin.AdminPassword.clear().type('Ademola')
                admin.ErrorMessage.should('contain', 'Your password must contain minimum 1 number')
                admin.AdminPassword.clear().type('Ademola1')

            admin.ConfirmAdminPassword.type('Ademola')
                admin.ErrorMessage.should('contain', 'Passwords do not match')
                admin.ConfirmAdminPassword.clear().type('Ademola1')

            admin.AdminSave.click()
                cy.wait(2000).url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            
            admin.add.click()
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')

            admin.AdminUsername
                admin.ErrorMessage.should('contain', 'Already exists')
                
            sidemenu.Admin


            })
            
    })   