/// <reference types="cypress" />

const testRoutes = {
  hallOfFame: 'halloffame',
  heroletes: 'heroletes',
};

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=categories]').click();
  });

  it('should navigate go to hall of fame village', () => {
    cy.get(`[data-cy=HallOfFame]`).click();
    cy.url().should('contain', testRoutes.hallOfFame);
  });
  it('should navigate go to heroletes', () => {
    cy.get(`[data-cy=Heroletes]`).click();
    cy.url().should('contain', testRoutes.heroletes);
  });
});
