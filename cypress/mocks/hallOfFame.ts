const baseUrl = 'http://localhost:8000/api/v1';

export const getHallOfFameNFTs = (response = []) =>
  cy.intercept({ method: 'GET', url: `${baseUrl}/nft` }, response).as('getHallOfFameNFTs');
