const ftxUrl = 'http://localhost:8010/proxy';

export const getBalances = (response = { success: true, result: [] }) =>
  cy.intercept({ method: 'GET', url: `${ftxUrl}/wallet/balances` }, response).as('getBalances');
