export const SUPPORTED_LANGUAGES: string[] = ['en'];
export const DEFAULT_LANGUAGE: string = 'en';

export const colors = {
  primary: '#35aed7',
  error: '#a52a2a',
  lightGrey: '#eaeaea',
  midGrey: '#646464',
  darkGrey: '#5c5c5c',
  backgroundDark: '#1f1f1f',
  backgroundPromotion: '#161616',
  orange: '#f58550',
  orangeCreatures: '#FF751D',
  black: '#000',
  white: '#FFF',
};

export const dropDownListCategories = [
  {
    key: 1,
    value: 'Sports',
    disabled: false,
    route: '/verticals/sports',
  },
  {
    key: 2,
    value: 'Creature Chronicles',
    disabled: false,
    route: process.env.REACT_APP_CREATURES_URL,
  },
];

export const CREATURES_URL: string = 'creaturechronicles.io';

export const socialMediaLinks = {
  facebook: 'https://www.facebook.com/creaturechroniclesnft',
  instagram: 'https://www.instagram.com/creaturechronicles_',
  twitter: 'https://twitter.com/creature_chron',
  discord: 'https://discord.com/invite/CRD4t276Vj',
  planetary: 'https://www.planetary.org/',
};

export const dolphinServiceLinks = {
  privacyPolicy: 'https://dolphinentertainment.zendesk.com/hc/en-us/articles/4410741692059-Privacy-Policy',
  termOfService: 'https://dolphinentertainment.zendesk.com/hc/en-us/articles/4410741678491-Terms-of-Service',
};

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const CIRCLE_FAILURE_CODES = {
  // Payment error codes
  no_error: '',
  payment_failed: 'Payment failed with external processor',
  payment_fraud_detected: 'Card suspected to be used for fraud',
  payment_denied: "Payment denied by our external processor's risk service",
  payment_not_supported_by_issuer: 'Issuer bank was unable to process the transaction',
  payment_not_funded: 'There were insufficient funds to cover the payment amount',
  payment_stopped_by_issuer: 'A stop has been placed by the issuer or customer',
  payment_canceled: 'Payment was canceled',
  payment_returned: 'Wire or ACH payment was returned',
  payment_failed_balance_check: 'Payment failed the Plaid balance check due to insufficient funds',
  payment_unprocessable: 'The provided data could not be processed',
  card_failed: 'There was a problem with the provided card information: likely an incorrect card number',
  card_invalid: 'The card number was invalid',
  card_cvv_invalid: 'Incorrect CVV value provided',
  card_expired: 'Card expired',
  card_limit_violated: 'The amount or frequency of payments exceeded card limits',
  card_not_honored: 'The issuing bank did not approve the request',
  card_account_ineligible: 'The card is not linked to an eligible bank account',
  card_restricted: 'The issuing bank has restricted this card to prevent fraud',
  unauthorized_transaction: 'The user has advised the bank that the payment was not authorized',
  bank_account_ineligible: 'The account is not eligible and no other default account was found',
  bank_transaction_error: 'The bank reported an error processing the transaction',
  invalid_account_number: 'The account number is invalid or missing',
  invalid_wire_rtn: 'The wire routing number is invalid',
  invalid_ach_rtn: 'The ACH routing number is invalid',

  // Card verification error codes. Card verification can also fail with some of the above.
  verification_failed: 'Verification failed due to an unknown reason',
  verification_fraud_detected: 'Card suspected to be used for fraud',
  risk_denied: "Denied by our external processor's risk service",
  verification_not_supported_by_issuer: 'Issuer bank was unable to process the transaction',
  verification_stopped_by_issuer: 'A stop has been placed on the card',
  card_address_mismatch:
    'The billing address provided when creating the card does not match the one recorded by the issuer bank',
  card_zip_mismatch:
    'The postal code provided when creating the card does not match the one recorded by the issuer bank',
  card_cvv_required: 'The cvv is either incorrect or missing',
};

export const recaptchaActions = {
  changePassword: 'CHANGEPASSWORD',
  login: 'LOGIN',
  register: 'REGISTER',
};

export const creditCardStatus = {
  approved: 'approved',
  rejected: 'rejected',
};

export const currency = {
  sol: 'SOL',
  usd: 'USD',
};

export const whitelist = [
  'gaston.rivata@rootstrap.com',
  'andreafajardotestingtest@email.com',
  'alejo.boga@rootstrap.com',
  'gastonrivata@gmail.com',
  'julia@dolphinentertainment.com',
  'julialevy22@gmail.com',
];
