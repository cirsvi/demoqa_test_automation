import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage{
    static get url(){
        return '/automation-practice-form';
    }

    static get firstNameField(){
        return cy.get('#firstName');
    }

    static get lastNameField(){
        return cy.get('#lastName');
    }

    static get userEmailField(){
        return cy.get('#userEmail');
    }

    static getGenderField(gender){
        return cy.get(`input[type="radio"][value="${gender}"]`);
    }

    static get userPhoneNumberField(){
        return cy.get('#userNumber');
    }

    static get birthDateField(){
        return cy.get('#dateOfBirthInput');
    }

    static get birthDateYearSelect(){
        return cy.get('.react-datepicker__year-select');
    }

    static get birthDateMonthSelect(){
        return cy.get('.react-datepicker__month-select');
    }

    static getBirthDateDay(day, month, year){
        const formattedDate = `${month} ${day}th, ${year}`;
        return cy.get(`[aria-label*="${formattedDate}"]`);
    }

    static get subjectField(){
        return cy.get('#subjectsInput');
    }

    static getHobbyLabel(hobbyName){
        return cy.get('#hobbiesWrapper').contains('.form-check-label', hobbyName);
    }

    static get uploadPictureField(){
        return cy.get('#uploadPicture');
    } 

    static get currentAddressField(){
        return cy.get('#currentAddress');
    }

    static get stateField(){
        return cy.get('#state');
    }

    static get cityField(){
        return cy.get('#city');
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static get tableSubmittedForm(){
        return cy.get('.table');
    }
}