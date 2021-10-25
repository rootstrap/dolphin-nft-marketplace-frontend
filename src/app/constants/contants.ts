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
    value: 'Arts (coming soon)',
    disabled: true,
    route: '/verticals/arts',
  },
];

export const socialMediaLinks = {
  facebook: 'https://www.facebook.com/Dolphin-Marketplace-243870417566415',
  instagram: 'https://www.instagram.com/dolphin_marketplace',
  twitter: 'https://twitter.com/Dolphin_mktpl',
  discord: 'https://discord.com/dolphin_marketplace',
};

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
