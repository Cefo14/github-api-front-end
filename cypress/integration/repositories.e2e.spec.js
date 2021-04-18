/// <reference types="Cypress" />
/// <reference types="cypress-react-selector" />

describe('Repositories e2e', () => {
  describe('when is ok', () => {
    it('should visit users route and to be ok', () => {
      cy.visit('/');

      cy.waitForReact();

      cy
        .get('*[data-testid="CardRoute"]')
        .eq(1)
        .click();

      cy.waitForReact();

      cy
        .get('*[data-testid="Search-Input"]')
        .type('a');

      cy.waitForReact();

      cy
        .get('*[data-testid="GithubCard"]')
        .should('have.length.gte', 1)
    });
  });
});
