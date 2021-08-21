import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import loginSchema from '../validations/loginSchema';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NextLink from 'next/link';
import useTheme from '@material-ui/core/styles/useTheme';
import AppBar from '../components/navigation/AppBar';
import { login } from '../services/auth.service';
import { Context } from '../contexts/auth.context';
import { useContext } from 'react';

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
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    backgroundImage: 'url(/tse.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(90%)',
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 5,
      padding: theme.spacing(3),
      marginTop: theme.spacing(8),
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
      backdropFilter: 'blur(5px) grayscale(70%)',
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
  },
  formLinks: {
    [theme.breakpoints.down(420)]: {
      color: theme.palette.primary.dark
    }
  }
}));

export default function SignInSide() {

  const classes = useStyles();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      cpf: '',
      password: '',
      remember: false
    },
    validationSchema: loginSchema,
    onSubmit: async (values, helpers) => {
      try {
        delete values.remember;
        const userData = await login(values);
        values.remember = false;
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <>
    <AppBar />
    <Grid container component="main" className={classes.rootGrid}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.backdropBlur}>
        <div className={classes.paper}>
          <Typography className={classes.headerTitle}>Meu Político</Typography>
          <Typography className={classes.headerSubtitle}>Seu voto, no seu bolso.</Typography>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="CPF"
              name="cpf"
              autoComplete="cpf"
              autoFocus
              value={formik.values.cpf}
              onChange={formik.handleChange}
              helperText={formik.touched.cpf && formik.errors.cpf}
              error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <FormControlLabel
              control={<Checkbox
              value={formik.values.remember}
              color="primary"
              onChange={formik.handleChange}
              />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Acessar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.formLinks}>
                  Esqueci minha senha
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className={classes.formLinks}>
                  {"Criar uma conta"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <NextLink href="/busca">
          <Fab variant="extended" color="primary" className={classes.searchButton}>
            Buscar
            <ArrowForwardIcon className={classes.sbIcon} />
          </Fab>
        </NextLink>
      </Grid>
    </Grid>
    </>
  );
}