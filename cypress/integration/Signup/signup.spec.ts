/// <reference types="cypress" />
import * as user from '../../mocks/User/user';
import { getBalances } from '../../mocks/Deposit/deposit';
import { getCreditCards } from '../../mocks/CreditCard/creditCard';
import { setup } from '../../utils/homeSetup';

const fillSingupForm = () => {
  cy.contains('Sign up').click();
  cy.get('[name=firstName]').type('UserFirstName');
  cy.get('[name=lastName]').type('UserLastName');
  cy.get('[name=email]').type('UserEmail@email.com');
  cy.get('[name=password]').type('TestingTest1234!');
  cy.get('[name=passwordConfirmation]').type('TestingTest1234!');
};

context('Signup Suite', () => {
  before(() => {
    setup();
    cy.fixture('User/signupFTX.json').then(response => user.signupFTX(response));
    cy.fixture('User/signup.json').then(response => user.signup(response));
    getBalances();
    getCreditCards();
  });

  beforeEach(() => cy.visit('http://localhost:3000/'));

  it('Should signup successfully', () => {
    fillSingupForm();
    cy.get('[type=checkbox]').check();
    cy.contains('Get started').click();
    cy.contains('Activate Now').should('exist');
  });

  it('Should not signup if user not agree', () => {
    fillSingupForm();
    cy.contains('Get started').should('be.disabled');
  });
});
