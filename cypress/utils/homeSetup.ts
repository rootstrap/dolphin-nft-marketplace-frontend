import * as getHomeInfo from '../mocks/common';

export const setup = () => {
  cy.fixture('featuredNFTs.json').then(response => {
    getHomeInfo.getFeaturesNFTs(response);
  });
  cy.fixture('countries.json').then(response => {
    getHomeInfo.getCountries(response);
  });
  getHomeInfo.getSubRegions();
};
