/// <reference types="Cypress /">
Cypress.config().waitForAnimations = true;

const phrase = 'Angular';
const exptectedPhrase = 'Programista front-end z Angular';

describe('WSB search for Angular', () => {
  it('should open wsb page', () => {
    cy.visit('www.wsb.pl/chorzow');
  });

  it('should check tab with courses', () => {
    cy.get('.links').contains('Studia');
  });

  it('should open search icon and find a phrase', () => {
    cy.get('.search-icon').click();
    // cy.get('#header-search > .grid-wrapper > .search-input > .search')
    //   .type(phrase)
    //   .type('{enter}');
    cy.get(
      '#header-search > .grid-wrapper > .search-button > .primary'
    ).click();
    cy.wait(2000);
  });

  it('should find expected phrase', () => {
    cy.get('.listing-content').should('contain', exptectedPhrase);
  });
});
