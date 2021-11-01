import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useAuth } from '../hooks/useAuth';
import { Context } from '../contexts/auth.context';
import AppBar from '../components/navigation/AppBar';
import LoginForm from '../components/forms/LoginForm';
import LandingAppBar from '../components/LandingAppBar';

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    height: '100vh',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(100vh - 56px)',
      backgroundImage: 'url(/tse.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.down(361)]: {
      height: '105vh'
    },
    [theme.breakpoints.down(325)]: {
      height: '120vh'
    }
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    backgroundImage: 'url(/tse.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: theme.palette.mode === 'light' ? 'grayscale(50%)' : 'grayscale(90%)',
  },
  paper: {
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(8),
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  searchButton: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  },
  sbIcon: {
    marginLeft: theme.spacing(1)
  },
  backdropBlur: {
    [theme.breakpoints.only('xs')]: {
      backdropFilter: theme.palette.mode === 'light'
      ? 'blur(5px) grayscale(80%)'
      : 'blur(5px) grayscale(90%)',
      backgroundColor: 'transparent'
    },
  },
  headerSubtitle: {
    alignSelf: 'flex-start',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    [theme.breakpoints.down(420)]: {
      marginLeft: theme.spacing(0.5),
      color: theme.palette.common.black,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight
    },
    [theme.breakpoints.only('xs')]: {
      color: theme.palette.common.black,
      fontWeight: theme.typography.h4.fontWeight,
    }
  },
  headerTitle: {
    alignSelf: 'flex-start',
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight + 100,
    lineHeight: 1.4,
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
      lineHeight: 1.2,
    },
    [theme.breakpoints.down(420)]: {
      fontSize: theme.typography.h2.fontSize
    }
  }
}));

export default function SignInSide({ themeTrigger }) {

  const classes = useStyles();
  
  const { state } = useContext(Context);
  const router = useRouter();

  useAuth();

  useEffect(() => {
    if (state.user?.cpf) {
      router.push('/busca');
    }
  }, [state.user?.cpf]);


  return (
    <>
    <AppBar mobileOnly={true} trigger={themeTrigger} />
    <Grid container component="main" className={classes.rootGrid}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.backdropBlur}>
        <LandingAppBar trigger={themeTrigger} />
        <div className={classes.paper}>
          <Typography className={classes.headerTitle}>Meu Político</Typography>
          <Typography className={classes.headerSubtitle}>Seu voto, no seu bolso.</Typography>
          <LoginForm />
        </div>
        <NextLink href="/busca">
          <Fab
            variant="extended"
            color="primary"
            className={classes.searchButton}
          >
            Buscar
            <ArrowForwardIcon className={classes.sbIcon} />
          </Fab>
        </NextLink>
      </Grid>
    </Grid>
    </>
  );
}