import { createTheme } from '@material-ui/core';
import { colors } from 'app/constants/contants';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#646464',
    },
    secondary: {
      main: '#35aed7',
    },
    background: {
      default: colors.backgroundDark,
    },
    text: {
      primary: colors.white,
    },
  },
  typography: {
    fontFamily: ['transat', 'Roboto'].join(', '),
  },
  props: {
    MuiButton: {
      color: 'secondary',
      variant: 'outlined',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'black',
        textTransform: 'none',
        width: '10rem',
        padding: '2rem',
        border: 'solid 2px',
        fontSize: '1.2rem',
      },
      contained: {
        border: 'none',
        borderRadius: 0,
        color: 'white',
        width: 'min-content',
        margin: '1rem 0',
      },
      containedSizeSmall: {
        padding: 0,
      },
    },
  },
});
