import { BasePage } from "./basePage";

export class RadioButtonPage extends BasePage{
    static get url(){
        return '/radio-button';
    }
    
    static returnRadioButton(buttonName) {
        return cy.get(".form-check-label")
            .contains(buttonName)
            .parent()
            .find("[type='radio']");
    }

    static get yesButton(){
        return cy.get('#yesRadio');
    }

    static get impressiveButton(){
        return cy.get('#impressiveRadio');
    }

    static get noButton(){
        return cy.get('#noRadio');
    }

}