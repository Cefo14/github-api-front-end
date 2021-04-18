/// <reference types="Cypress" />
/// <reference types="cypress-react-selector" />

describe('Home e2e', () => {
  describe('when is ok', () => {
    it('should visit home route an to be ok', () => {
      cy.visit('/');
      cy.waitForReact();
      cy
        .get('*[data-testid="CardRoute"]')
        .should('have.length', 2)
    });
  });
});
