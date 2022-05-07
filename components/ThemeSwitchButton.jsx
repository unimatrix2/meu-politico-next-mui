import { useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import handleThemeChange from '../handlers/themeTrigger.handle';

const useStyles = makeStyles(theme => ({
	lightTheme: {
		color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[900]
	}
}))

export default function ThemeSwitcher({ trigger, landing }) {
	const theme = useTheme();
	const classes = useStyles();
	return (
        <IconButton onClick={() => handleThemeChange(trigger)} size="large">
            {theme.palette.mode === 'light'
				? <Brightness6Icon className={!landing ? classes.lightTheme : null} />
				: <Brightness4Icon />
			}
        </IconButton>
    );
}