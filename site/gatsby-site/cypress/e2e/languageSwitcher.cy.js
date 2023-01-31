describe('The Language switcher', () => {
  it('Should be visible', () => {
    cy.visit('/');

    cy.get('[data-cy="language-switcher"]').should('be.visible');
  });

  it('Language should default to English', () => {
    cy.visit('/');

    cy.contains('h1', 'Welcome to the').should('be.visible');

    cy.contains('h1', 'AI Incident Database').should('be.visible');
  });

  it.skip('Should update the path with the selected language', () => {
    cy.visit('/');

    cy.get('[data-cy="language-switcher"]').click();

    cy.get('[data-cy="language-switcher"]').contains('[role="button"]', 'Spanish').click();

    cy.url().should('contain', '/es/');

    cy.contains(
      'h1',
      'Bienvenido a la base de datos de incidentes de Inteligencia Artificial'
    ).should('be.visible');
  });
});