import { useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ThemeSwitcher from './ThemeSwitchButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
  },
  title: {
    flexGrow: 1,
  },
	appBar: {
		background: 'transparent',
		boxShadow: 'none'
	}
}));

export default function LandingAppBar({ trigger }) {
  const classes = useStyles();
	const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
				<Typography variant="h6" className={classes.title}>
          </Typography>
					<ThemeSwitcher trigger={trigger} landing={true} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
