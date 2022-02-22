/// <reference types="cypress" />
import * as getHomeInfo from '../../mocks/common';
import { getHallOfFameNFTs } from '../../mocks/hallOfFame';

const testRoutes = {
  hallOfFame: 'halloffame',
  heroletes: 'heroletes',
};

context('Navigation Suite', () => {
  beforeEach(() => {
    cy.fixture('featuredNFTs.json').then(response => {
      getHomeInfo.getFeaturesNFTs(response);
    });
    cy.fixture('countries.json').then(response => {
      getHomeInfo.getCountries(response);
    });
    cy.fixture('hallOfFameNFTs.json').then(response => getHallOfFameNFTs(response));
    getHomeInfo.getSubRegions();
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=categories]').click();
  });

  it('should navigate to hall of fame village', () => {
    cy.get(`[data-cy=${testRoutes.hallOfFame}]`).click();
    cy.url().should('contain', testRoutes.hallOfFame);
  });

  it('should navigate to heroletes', () => {
    cy.get(`[data-cy=${testRoutes.heroletes}]`).click();
    cy.url().should('contain', testRoutes.heroletes);
  });
});
