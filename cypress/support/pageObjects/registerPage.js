class registerLocators {
    namePage=".base"
    firstName="#firstname"
    lastName="#lastname"
    email="#email_address"
    password="#password"
    confirmPassword="#password-confirmation"
    createButton="#form-validate > .actions-toolbar > div.primary > .action > span"
    successMessage=".message-success"
    confirmsName=".box-content > p"

    fillFirstname(firtsname){
        cy.get('#firstname').type(firtsname)
    }

    fillLastname(lastname){
        cy.get('#lastname').type(lastname)
    }

    fillEmail(email){
        cy.get('#email_address').type(email)
    }

    fillPassword(password){
        cy.get('#password').type(password)
    }

    fillConfirmPass(confirmPass){
        cy.get('#password-confirmation').type(confirmPass)
    }

    clickCreateButton(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }

    verifySuccessRegis(){
        cy.get('.message-success').contains('Thank you for registering with Main Website Store.')
    }

    verifyNameRegis(fillFirstname, fillLastname){
        cy.get('.box-content > p').contains(fillFirstname, fillLastname)
    }

    verifyRegisFailed(){
        cy.get('.message-error').contains('There is already an account with this email address.')
    }

    verifyEmailInvalid(){
        cy.get('#email_address-error').contains('Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    verifyPassWeak(){
        cy.get('#password-error').contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    }

    verifyPassInvalid(){
        cy.get('#password-confirmation-error').contains('Please enter the same value again.')
    }
}

export default new registerLocators();
