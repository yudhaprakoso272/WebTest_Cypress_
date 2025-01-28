class ChooseProduct {
    clickProduct(){
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').contains('Radiant Tee').click()
    }

    verifyProductName(){
        cy.get('.base').contains('Radiant Tee')
    }
}

export default new ChooseProduct();