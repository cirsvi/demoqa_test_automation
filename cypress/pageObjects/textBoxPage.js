import { BasePage } from "./basePage";

export class TextBoxPage extends BasePage{
    static get url(){
        return '/text-box'
    }

    static get fullNameField(){
        return cy.get("[placeholder='Full Name']");
    }

    static get emailField(){
        return cy.get("[id='userEmail']");
    }

    static get currentAddressField(){
        return cy.get("[placeholder='Current Address']");
    }

    static get permanentAddressField(){
        return cy.get("#permanentAddress");
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static get nameOutput(){
        return cy.get('#name');
    }
        

    static get emailOutput(){
        return cy.get('#email');
    }

    static get currentAddressOutput(){
        return  cy.get('p#currentAddress');
    }

    static get permanentAddressOutput(){
        return cy.get('p#permanentAddress');
    }
}