import { RadioButtonPage } from "../pageObjects/radioButtonPage";

describe('DEMO QA: Radio Button Test', () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    })

    it.only('Radio Button', () => {
        RadioButtonPage.returnRadioButton('Yes').click();
        RadioButtonPage.textSuccessOutput.should('contain.text', 'Yes');

        RadioButtonPage.returnRadioButton('Impressive').click();
        RadioButtonPage.textSuccessOutput.should('contain.text', 'Impressive');

        RadioButtonPage.returnRadioButton('No').should('be.disabled');
    })
})