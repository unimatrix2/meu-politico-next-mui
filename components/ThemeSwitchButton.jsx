import { useTheme, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import handleThemeChange from '../handlers/themeTrigger.handle';

const useStyles = makeStyles(theme => ({
	lightTheme: {
		color: theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.grey[900]
	}
}))

export default function ThemeSwitcher({ trigger, landing }) {
	const theme = useTheme();
	const classes = useStyles();
	return <IconButton onClick={() => handleThemeChange(trigger)}>
		{theme.palette.type === 'light' ? <Brightness6Icon className={!landing ? classes.lightTheme : null} /> : <Brightness4Icon />}
	</IconButton>
}