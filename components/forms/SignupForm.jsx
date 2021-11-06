import { useFormik } from 'formik';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

import { withSnackBar } from '../SnackBar';
import { signup } from '../../services/auth.service';
import signupSchema from '../../validations/signupSchema.validation';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		[theme.breakpoints.only('xs')]: {
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
			borderRadius: 5,
			padding: theme.spacing(3),
			marginTop: theme.spacing(8),
		},
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	formLinks: {
		[theme.breakpoints.down(420)]: {
			color: theme.palette.primary.dark,
		},
		[theme.breakpoints.only('xs')]: {
			color: theme.palette.primary.dark,
		},
		[theme.breakpoints.up('sm')]: {
			color:
				theme.palette.mode === 'dark'
					? theme.palette.primary.light
					: theme.palette.primary.dark,
		},
	},
}));

function SignupForm({ setSignup, snack }) {

	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			cpf: '',
			email: '',
			password: '',
			lastName: '',
			firstName: '',
			confirmPassword: '',
		},
		validationSchema: signupSchema,
		onSubmit: async (values, helpers) => {
			const success = await signup(values, helpers);
			switch (success) {
				case true:
					snack(
						'Usuário registrado com sucesso!',
						'success',
						2000
					);
					setTimeout(() => setSignup(false), 2500);
					break;
				case false:
					snack(
						'Oops! Algo deu errado.',
						'error',
						4000
					);
					break;
			}
		},
	});

	return (
		<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="firstName"
				label="Nome"
				name="firstName"
				autoComplete="firstName"
				autoFocus
				value={formik.values.firstName}
				onChange={formik.handleChange}
				helperText={formik.touched.firstName && formik.errors.firstName}
				error={formik.touched.firstName && Boolean(formik.errors.firstName)}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="lastName"
				label="Sobrenome"
				name="lastName"
				autoComplete="lastName"
				autoFocus
				value={formik.values.lastName}
				onChange={formik.handleChange}
				helperText={formik.touched.lastName && formik.errors.lastName}
				error={formik.touched.lastName && Boolean(formik.errors.lastName)}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="E-Mail"
				name="email"
				autoComplete="email"
				autoFocus
				value={formik.values.email}
				onChange={formik.handleChange}
				helperText={formik.touched.email && formik.errors.email}
				error={formik.touched.email && Boolean(formik.errors.email)}
			/>
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
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="confirmPassword"
				label="Confirmar Senha"
				type="password"
				id="confirmPassword"
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
				helperText={
					formik.touched.confirmPassword && formik.errors.confirmPassword
				}
				error={
					formik.touched.confirmPassword &&
					Boolean(formik.errors.confirmPassword)
				}
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
				<Grid item>
					<Link
						variant="body2"
						className={classes.formLinks}
						onClick={() => setSignup(false)}
					>
						Acessar minha conta
					</Link>
				</Grid>
			</Grid>
		</form>
	);
}

export default withSnackBar(SignupForm);