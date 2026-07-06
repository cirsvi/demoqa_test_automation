import { WebTablesPage } from "../pageObjects/webTablesPage";

describe('DEMO QA: Web Tables', () => {
    beforeEach(() => {
        WebTablesPage.visit();
    })

    it('Add new record to the table', () => {
        const firstName = 'Jane';
        const lastName = 'Doe';
        const email = `jane.doe${Date.now()}@example.com`;
        const age = '28';
        const salary = '2000'
        const department = 'Finance';

        WebTablesPage.addButton.click();

        WebTablesPage.regFormFirstNameInput.type(firstName);
        WebTablesPage.regFormLastNameInput.type(lastName);
        WebTablesPage.regFormEmailInput.type(email);
        WebTablesPage.regFormAgeInput.type(age);
        WebTablesPage.regFormSalaryInput.type(salary);
        WebTablesPage.regFormDepartmentInput.type(department);

        WebTablesPage.regFormSubmitButton.click();
        
        // Email is a unique identifier for every person.
        cy.contains('tbody tr', email).within(() => { 
            cy.get('td').eq(0).should('contain', firstName);
            cy.get('td').eq(1).should('contain', lastName);
            cy.get('td').eq(2).should('contain', age);
            cy.get('td').eq(3).should('contain', email);
            cy.get('td').eq(4).should('contain', salary);
            cy.get('td').eq(5).should('contain', department);
        })
    })

    it('Edit record in the table', () => {
        const aldenEmail = 'alden@example.com'
        const newFirstName = 'Alden-Edited';

        cy.contains('tbody tr', aldenEmail).find('[title="Edit"]').click();
        WebTablesPage.regFormFirstNameInput.type(newFirstName);
        WebTablesPage.regFormSubmitButton.click();

        cy.contains('tbody tr', aldenEmail).within(() => { 
            cy.get('td').eq(0).should('contain', newFirstName);
        })
    })

    it('Delete record in the table', () => {
        const targetEmail = 'kierra@example.com';

        cy.contains('tbody tr', targetEmail).find('[title="Delete"]').click();
        cy.contains('tbody tr', targetEmail).should('not.exist');
    })
})