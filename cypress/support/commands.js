import HomePage from "./pageObjects/homePage";
import LoginPage from "./pageObjects/loginPage";

Cypress.Commands.add('register', () => {
    cy.visit('')
    // cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    HomePage.visitCreateAccount()
    cy.contains('Create New Customer Account').should('be.visible')
    // cy.get('.base').should('contain text', 'Create New Customer Account')
})

Cypress.Commands.add('loginUser', () => {
    cy.visit('')
    HomePage.visitSignIn()
    HomePage.verifySignInPage()
})

Cypress.Commands.add('login', () => {
    cy.visit('')
    HomePage.visitSignIn()
    cy.fixture("loginCredentials.json").then((users) => {
        const datauser = users[0];
        LoginPage.fillEmail(datauser.email)
        LoginPage.fillPassword(datauser.password)
        LoginPage.clickLoginButton()
        LoginPage.verifyLoginSuccess()
    })
})