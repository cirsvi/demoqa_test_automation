import { PracticeFormPage } from "../pageObjects/practiceFormPage"

describe('Demo QA: Practice Form', () => {
  beforeEach(() => {
    PracticeFormPage.visit();
  })

  it('Succesfully submit practice form and verify data validity', () => {
    const firstName = 'Jane';
    const lastName = 'Doe';
    const email = 'jane.doe@example.com';
    const gender = 'Female';
    const phoneNumber = '2000000000';
    const birthYear = '1930';
    const birthMonth = 'February';
    const birthDay = '28';
    const subject = 'Economics';
    const hobby = 'Music';
    const address = "Delhi, India";
    const state = 'NCR';
    const city = 'Delhi';
    const pictureName = 'cat.jpg';
    
    PracticeFormPage.firstNameField.type(firstName);
    PracticeFormPage.lastNameField.type(lastName);
    PracticeFormPage.userEmailField.type(email);
    PracticeFormPage.getGenderField(gender).click();
    PracticeFormPage.userPhoneNumberField.type(phoneNumber);

    PracticeFormPage.birthDateField.click();
    
    PracticeFormPage.birthDateYearSelect.select(birthYear);
    PracticeFormPage.birthDateMonthSelect.select(birthMonth);
    PracticeFormPage.getBirthDateDay(birthDay, birthMonth, birthYear).click();

    
    PracticeFormPage.subjectField.type(`${subject}{enter}`)
    PracticeFormPage.currentAddressField.type(address);
    PracticeFormPage.getHobbyLabel(hobby).click();
    PracticeFormPage.uploadPictureField.selectFile(`cypress/files/${pictureName}`);

    PracticeFormPage.stateField.type(`${state}{enter}`);
    PracticeFormPage.cityField.type(`${city}{enter}`);

    PracticeFormPage.submitButton.click();
    
    // https://www.geeksforgeeks.org/software-testing/cypress-within-method/
    PracticeFormPage.tableSubmittedForm.within(() => {
      cy.contains('tr', 'Student Name').should('contain', `${firstName} ${lastName}`);
      cy.contains('tr', 'Student Email').should('contain', email);
      cy.contains('tr', 'Gender').should('contain', gender);
      cy.contains('tr', 'Mobile').should('contain', phoneNumber);
      cy.contains('tr', 'Date of Birth').should('contain', `${birthDay} ${birthMonth},${birthYear}`);
      cy.contains('tr', 'Subjects').should('contain', subject);
      cy.contains('tr', 'Hobbies').should('contain', hobby);
      cy.contains('tr', 'Picture').should('contain', pictureName);
      cy.contains('tr', 'Address').should('contain', address);
      cy.contains('tr', 'State and City').should('contain', `${state} ${city}`);
    })
  })
  
})