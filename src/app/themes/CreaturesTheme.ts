import { createTheme } from '@material-ui/core';
import { colors } from '../constants/contants';

export const creaturesTheme = createTheme({
  palette: {
    primary: {
      main: colors.orangeCreatures,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.white,
    },
  },
  typography: {
    fontFamily: ['Avenue X', 'The Neue'].join(', '),
  },
  props: {
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Avenue X',
        textTransform: 'none',
      },
      contained: {
        margin: '1rem',
        width: '7rem',
        padding: '0.5rem',
      },
      outlined: {
        textTransform: 'none',
      },
    },
    MuiInputBase: {
      input: {
        color: colors.white,
      },
    },
    MuiAccordion: {
      root: {
        background: colors.black,
        color: colors.white,
      },
    },
  },
});
