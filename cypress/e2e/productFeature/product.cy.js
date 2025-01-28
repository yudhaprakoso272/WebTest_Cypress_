import ChooseProduct from "../../support/pageObjects/productPage";

describe('Choose Product Process', () => {
  it('Choosing a product to payment', () => {
    cy.login();
    ChooseProduct.clickProduct()
    ChooseProduct.verifyProductName()
  })
})