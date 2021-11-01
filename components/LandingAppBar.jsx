import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ThemeSwitcher from './ThemeSwitchButton';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
		[theme.breakpoints.down('sm')]: {
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
