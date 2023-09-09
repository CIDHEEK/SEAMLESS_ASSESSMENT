class Sidemenu {

    get Admin() {
return cy.get(':nth-child(1) > .oxd-main-menu-item')
    }

    get PIM () {
return cy.get('.oxd-navbar-nav > .oxd-sidepanel-body > .oxd-main-menu > .oxd-main-menu-item-wrapper:nth-child(2) > .oxd-main-menu-item')
    }
}

const sidemenu = new Sidemenu();
export default sidemenu