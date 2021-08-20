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

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/tse.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      cpf: '',
      password: '',
      remember: false
    },
    validationSchema: loginSchema,
    onSubmit: (values, helpers) => console.log(values)
  });

  return (
    <Grid container component="main" className={classes.rootGrid}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h1">Meu Político</Typography>
          <Typography variant="h4">Seu voto, no seu bolso.</Typography>
          <form className={classes.form} noValidate>
            <InputMask
              mask="999.999.999-99"
              value={formik.values.cpf}
              onChange={formik.handleChange}
            >
              {() => <TextField
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
                />}
            </InputMask>
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
              label="Renovar sessão automaticamente"
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
                <Link href="#" variant="body2">
                  Esqueci minha senha
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Criar uma conta"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}