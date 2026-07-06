import { BasePage } from "./basePage";

export class SelectablePage extends BasePage{
    static get url(){
        return '/selectable';
    }

    static get gridTabButton(){
        return cy.get('#demo-tab-grid')
    }

    static get gridContainer(){
        return cy.get('#gridContainer');
    }

    static getGridItem(text){
        return this.gridContainer.contains('.list-group-item', text);
    }
}