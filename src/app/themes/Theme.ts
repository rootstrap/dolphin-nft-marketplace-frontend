import { createTheme } from '@material-ui/core';
import { colors } from 'app/constants/constants';

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
    MuiLink: {
      root: {
        color: colors.primary,
        cursor: 'pointer',
      },
    },
    MuiButton: {
      root: {
        backgroundColor: 'black',
        textTransform: 'none',
        width: '10rem',
        padding: '2rem',
        borderRadius: 0,
        fontSize: '1.2rem',
      },
      outlinedSecondary: {
        border: 'solid 2px',
        '&:hover': {
          border: 'solid 2px',
        },
      },
      contained: {
        border: 'none',
        borderRadius: 0,
        color: 'white',
        width: 'min-content',
        margin: '1rem 0',
        padding: '0.5rem',
      },
      text: {
        margin: '0 0.5rem',
      },
      containedSizeSmall: {
        padding: 0,
      },
    },
    MuiInputBase: {
      input: {
        border: '1px solid white',
        borderRadius: 0,
      },
    },
    MuiCheckbox: {
      root: {
        '& .MuiSvgIcon-root': {
          color: '#35aed7',
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.darkGrey,
      },
    },
    MuiAccordionSummary: {
      root: {
        padding: 0,
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: 0,
      },
    },
  },
});
