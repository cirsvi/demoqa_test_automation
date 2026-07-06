import { CheckboxPage } from "../pageObjects/checkboxPage";

describe('DEMO QA: Checkbox Test', () => {
    beforeEach(() => {
        CheckboxPage.visit();
    })

    it('Chech the Notes, Angular, Private, Excel File.doc', () => {
        CheckboxPage.expandCheckbox('Home');
        CheckboxPage.expandCheckbox('Desktop');
        CheckboxPage.expandCheckbox('Documents');
        CheckboxPage.expandCheckbox('WorkSpace');
        CheckboxPage.expandCheckbox('Office');
        CheckboxPage.expandCheckbox('Downloads');
        
        CheckboxPage.checkCheckbox('Notes');
        CheckboxPage.checkCheckbox('Angular');
        CheckboxPage.checkCheckbox('Private');
        CheckboxPage.checkCheckbox('Excel File.doc');

        CheckboxPage.resultOutput.should('contain.text', 'You have selected :notesangularprivateexcelFile');
        CheckboxPage.textSuccessOutput.should('contain.text', 'notes');
        CheckboxPage.textSuccessOutput.should('contain.text', 'angular');
        CheckboxPage.textSuccessOutput.should('contain.text', 'private');
        CheckboxPage.textSuccessOutput.should('contain.text', 'excelFile');
    })
})