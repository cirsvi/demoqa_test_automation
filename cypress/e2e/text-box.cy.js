import { TextBoxPage } from "../pageObjects/textboxPage";

describe('DEMO QA: Text Box Test', () => {
  context('Text Box Tests', () => {
    beforeEach(() => {
        TextBoxPage.visit();
    })

    it('Set input values and validate', () => {
        TextBoxPage.fullNameField.type('Joe');
        TextBoxPage.emailField.type('joe.dawn@example.com');
        TextBoxPage.currentAddressField.type('Address A');
        TextBoxPage.permanentAddressField.type('Address B');
        
        TextBoxPage.submitButton.click()

        TextBoxPage.nameOutput.should('have.text', 'Name:Joe');
        TextBoxPage.emailOutput.should('have.text', 'Email:joe.dawn@example.com');
        TextBoxPage.currentAddressOutput.should('contain.text', 'Current Address :Address A')
        TextBoxPage.permanentAddressOutput.should('contain.text', 'Permananet Address :Address B');
    });

    it('Incorrect email format', () => {
        TextBoxPage.emailField.should('not.have.class', 'field-error')
        TextBoxPage.emailField.type('xxx@xxx@xxx@xxx.com');
        TextBoxPage.submitButton.click();
        TextBoxPage.emailField.should('have.class', 'field-error');
    })
  })
})