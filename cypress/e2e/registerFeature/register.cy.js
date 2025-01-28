import registerLocators from "../../support/pageObjects/registerPage";

describe('Process Registration', () => {
  // it('Registration Successfully', () => {
  //   cy.register();
  //   registerLocators.fillFirstname('anton');
  //   registerLocators.fillLastname('sebrianto');
  //   registerLocators.fillEmail('anton00@gmail.com');
  //   registerLocators.fillPassword('anton02.,');
  //   registerLocators.fillConfirmPass('anton02.,');
  //   registerLocators.clickCreateButton();
  //   registerLocators.verifySuccessRegis();
  // })

  it('Registration Failed - Registration with email registered', () => {
    cy.register();
    registerLocators.fillFirstname('anton');
    registerLocators.fillLastname('sebrianto');
    registerLocators.fillEmail('anton00@gmail.com');
    registerLocators.fillPassword('anton02.,');
    registerLocators.fillConfirmPass('anton02.,');
    registerLocators.clickCreateButton();
    registerLocators.verifyRegisFailed();
  })

  it('Registration Failed - Registration with invalid email', () => {
    cy.register();
    registerLocators.fillFirstname('anton');
    registerLocators.fillLastname('sebrianto');
    registerLocators.fillEmail('anton07');
    registerLocators.fillPassword('anton02.,');
    registerLocators.fillConfirmPass('anton02.,');
    registerLocators.clickCreateButton();
    registerLocators.verifyEmailInvalid();
  })

  it('Registration Failed - Registration with password weak', () => {
    cy.register();
    registerLocators.fillFirstname('anton');
    registerLocators.fillLastname('sebrianto');
    registerLocators.fillEmail('anton08@gmail.com');
    registerLocators.fillPassword('anton');
    registerLocators.fillConfirmPass('anton');
    registerLocators.clickCreateButton();
    registerLocators.verifyPassWeak();
  })

  it('Registration Failed - Registration with password not match', () => {
    cy.register();
    registerLocators.fillFirstname('anton');
    registerLocators.fillLastname('sebrianto');
    registerLocators.fillEmail('anton09@gmail.com');
    registerLocators.fillPassword('anton02.,');
    registerLocators.fillConfirmPass('anton');
    registerLocators.clickCreateButton();
    registerLocators.verifyPassInvalid();
  })
})