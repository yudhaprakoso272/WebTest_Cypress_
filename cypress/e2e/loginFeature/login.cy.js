import LoginPage from "../../support/pageObjects/loginPage";

describe('Process Login', () => {
  it('User Login Successfully', () => {
    cy.login();
  })

  it('User Login Failed - Login with invalid credentials', () => {
    cy.loginUser();
    LoginPage.fillEmail('anton000@gmail.com')
    LoginPage.fillPassword('anton02.,')
    LoginPage.clickLoginButton()
    LoginPage.verifyLoginFailed()
  })

  it('User Login Failed - Login with email invalid', () => {
    cy.loginUser();
    LoginPage.fillEmail('anton00')
    LoginPage.fillPassword('anton02.,')
    LoginPage.clickLoginButton()
    LoginPage.verifyEmailInvalid()
  })

  it('User Login Failed - Login with email and password not fill', () => {
    cy.loginUser();
    LoginPage.clickLoginButton()
    LoginPage.verifyEmailNotFill()
    LoginPage.verifyPassNotFill()
  })
})