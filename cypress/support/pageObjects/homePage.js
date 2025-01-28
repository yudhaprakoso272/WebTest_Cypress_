class HomePage {
    visitSignIn(){
        cy.get('.panel > .header > .authorization-link > a').contains('Sign In').click()
    }

    verifySignInPage(){
        cy.get('.base').contains('Customer Login')
    }

    visitCreateAccount(){
        cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()
    }

    verifyCreateAccountPage(){
        cy.get('.base').contains('Create New Customer Account')
    }
}

export default new HomePage();