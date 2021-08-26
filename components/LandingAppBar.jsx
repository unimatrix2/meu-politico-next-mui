import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import handleThemeChange from '../handlers/themeTrigger.handle';
import { useTheme } from '@material-ui/core';

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
					<IconButton onClick={() => handleThemeChange(trigger)}>
						{theme.palette.type === 'light' ? <Brightness6Icon /> : <Brightness4Icon />}
					</IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
