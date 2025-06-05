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
    }
    enter_name(first_name,last_name){
        cy.get(`#firstname`).type(first_name)
        cy.get(`#lastname`).type(last_name)
    }
    enter_email_password(email,password) {
        cy.get(`#email_address`).type(email)
        cy.get(`[name="password"]#password`).type(password)
        cy.get(`[name="password_confirmation"]`).type(password)
        cy.get(`[type="submit"][title="Create an Account"]`).click()
    }
    logout(){
        cy.get(`.panel.wrapper .logged-in`).should('be.visible')
        cy.get(`header li.customer-welcome > span > button`).click()
        cy.get(`.customer-welcome.active .header.links .link.wishlist ~li a`).click()
    }
    relogin(email,password){
        cy.get(`.panel.header .header li:nth-child(2) a`).click()
        cy.get(`[name="login[username]"]`).type(email)
        cy.get(`[name="login[password]"]`).type(password)
        cy.get(`.login-container [type="submit"]#send2`).click()
        cy.get(`.panel.wrapper .logged-in`).should('be.visible')
    }
}

const login = new login_page()
export default login