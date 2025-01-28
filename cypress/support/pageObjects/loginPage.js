class LoginPage {
    fillEmail(email){
        cy.get('#email').type(email)
    }

    fillPassword(password){
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    }

    clickLoginButton(){
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    }

    verifyLoginSuccess(){
        cy.get(':nth-child(2) > .greet > .logged-in').contains('Welcome,')
    }

    verifyLoginFailed(){
        cy.get('.message-error').contains('The account sign-in was incorrect or your account is disabled temporarily.')
    }

    verifyEmailInvalid(){
        cy.get('#email-error').contains('Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    verifyEmailNotFill(){
        cy.get('#email-error').contains('This is a required field.')
    }

    verifyPassNotFill(){
        cy.get('#pass-error').contains('This is a required field.')
    }
}

export default new LoginPage();