import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#646464',
    },
    secondary: {
      main: '#5c5c5c',
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '5rem',
        textTransform: 'none',
        width: '6rem',
      },
    },
  },
});
