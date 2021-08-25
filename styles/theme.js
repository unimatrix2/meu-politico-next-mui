import { lightGreen, grey, teal, indigo, blueGrey, common } from '@material-ui/core/colors';

export const appTheme = {
  typography: {
    allVariants: {
      color: grey[900]
    }
  },
  palette: {
		type: 'light',
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
    type: 'dark',
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