import { SelectablePage } from "../pageObjects/selectablePage.js"

describe('DEMO QA: Selectable', () => {
  beforeEach(() => {
    SelectablePage.visit();
  })

  it('Grid Element Selectable Test - Click 2, 4, 6, 8; Verify Highlights', () => {
    SelectablePage.gridTabButton.click();
    
    SelectablePage.getGridItem('Two').click();
    SelectablePage.getGridItem('Four').click();
    SelectablePage.getGridItem('Six').click();
    SelectablePage.getGridItem('Eight').click();

    SelectablePage.getGridItem('Two').should('contain.class', 'active');
    SelectablePage.getGridItem('Four').should('contain.class', 'active');
    SelectablePage.getGridItem('Six').should('contain.class', 'active');
    SelectablePage.getGridItem('Eight').should('contain.class', 'active');

    SelectablePage.getGridItem('One').should('not.contain.class', 'active');
    SelectablePage.getGridItem('Three').should('not.contain.class', 'active');
    SelectablePage.getGridItem('Five').should('not.contain.class', 'active');
    SelectablePage.getGridItem('Seven').should('not.contain.class', 'active');
    SelectablePage.getGridItem('Nine').should('not.contain.class', 'active');
  })
})