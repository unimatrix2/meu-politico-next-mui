import { lightGreen, grey, teal, indigo, blueGrey, common } from '@mui/material/colors';

export const appTheme = {
  typography: {
    allVariants: {
      color: grey[900]
    }
  },
  palette: {
		mode: 'light',
    primary: {
      light: lightGreen[100],
      main: lightGreen[500],
      dark: lightGreen[700],
      contrastText: common.white,
    },
    secondary: {
      light: indigo[100],
      main: indigo[500],
      dark: indigo[700],
      contrastText: common.white
    }
  }
};

export const darkTheme = {
  typography: {
    allVariants: {
      color: common.white
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: indigo[500],
      light: indigo[100],
      dark: indigo[700],
      contrastText: common.white
    },
    secondary: {
      light: lightGreen[100],
      main: lightGreen[500],
      dark: lightGreen[700],
      contrastText: common.white,
    }
  }
};