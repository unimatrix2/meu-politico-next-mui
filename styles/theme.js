import { lightGreen, grey, teal, indigo, blueGrey, common } from '@material-ui/core/colors';

const appTheme = {
    typography: {
        allVariants: {
            color: grey[900]
        }
    },
    palette: {
        primary: {
            light: lightGreen[100],
            lighter: lightGreen[50],
            main: lightGreen[500],
            dark: lightGreen[700],
            accent: teal[500],
            primaryText: grey[900],
            secondaryText: grey[600],
            dividerColor: grey[400]
            
        },
        secondary: {
            light: indigo[100],
            main: indigo[500],
            dark: indigo[700],
            accent: blueGrey[500],
            primaryText: grey[900],
            secondaryText: grey[600],
            dividerColor: grey[400]
        },
        oled: {
            main: common.black,
        }
    }
};

export default appTheme;