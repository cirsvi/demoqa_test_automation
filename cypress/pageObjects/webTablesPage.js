import { BasePage } from "./basePage";

export class WebTablesPage extends BasePage{

    static get url(){
        return '/webtables';
    }

    static get addButton(){
        return cy.get('#addNewRecordButton');
    }

    // Registration Form:
    static get regFormFirstNameInput(){
        return cy.get('#firstName');
    }

    static get regFormLastNameInput(){
        return cy.get('#lastName');
    }

    static get regFormEmailInput(){
        return cy.get('#userEmail');
    }

    static get regFormAgeInput(){
        return cy.get('#age');
    }

    static get regFormSalaryInput(){
        return cy.get('#salary');
    }

    static get regFormDepartmentInput(){
        return cy.get('#department');
    }

    static get regFormSubmitButton(){
        return cy.get('#submit');
    }
    //---------------------------------
    

}