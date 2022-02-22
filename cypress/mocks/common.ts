const baseUrl = 'http://localhost:8000/api/v1';

export const getFeaturesNFTs = (response = []) =>
  cy.intercept({ method: 'GET', url: `${baseUrl}/nft?featured=true` }, response).as('getFeaturedNFTs');

export const getCountries = (response = []) =>
  cy.intercept({ method: 'GET', url: `${baseUrl}/countries` }, response).as('getCountries');

export const getSubRegions = (response = []) =>
  cy
    .intercept({ method: 'GET', url: `${baseUrl}/countries/subregions?country=undefined` }, response)
    .as('getSubRegions');
