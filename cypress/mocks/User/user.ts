const ftxUrl = 'http://localhost:8010/proxy';
const baseUrl = 'http://localhost:8000/api/v1';

export const signupFTX = (response = {}) =>
  cy.intercept({ method: 'POST', url: `${ftxUrl}/users/create` }, response);

export const signup = (response = {}) =>
  cy.intercept({ method: 'POST', url: `${baseUrl}/auth/signup` }, response);
