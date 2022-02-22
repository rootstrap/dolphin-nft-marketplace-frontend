const ftxUrl = 'http://localhost:8010/proxy';

export const getCreditCards = (response = { success: true, result: [] }) =>
  cy.intercept({ method: 'GET', url: `${ftxUrl}/cards` }, response).as('getCreditCards');
