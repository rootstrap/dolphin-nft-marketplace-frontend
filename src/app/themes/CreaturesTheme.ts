import { createTheme } from '@material-ui/core';
import { colors } from '../constants/constants';

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
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
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
        '&.Mui-disabled': {
          color: colors.darkGrey,
          border: `1px solid ${colors.darkGrey}`,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: colors.orange,
        border: `1px solid ${colors.white}`,
        fontSize: 13,
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
