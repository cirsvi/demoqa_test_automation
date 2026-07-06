export class BasePage {
    static get url(){
        return '';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get textSuccessOutput(){
        return cy.get('.text-success');
    }
}