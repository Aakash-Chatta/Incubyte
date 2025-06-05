class login_page {
    open_webpage(url) {
        cy.visit(url)
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }
    open_signin_page() {
        cy.get(`.panel.header .header li:nth-child(3) a`).click()
        cy.get(``)
    }
    enter_name(first_name,last_name){
        cy.get(`#firstname`).type(first_name)
        cy.get(`#lastname`).type(last_name)
    }
    enter_email_password() {}
}

const login = new login_page()
export default login