import { useContext } from 'react';
import { useFormik } from 'formik';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';

import { login } from '../../services/auth.service';
import { Context } from '../../contexts/auth.context';
import loginSchema from '../../validations/loginSchema.validation';

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
		[theme.breakpoints.up("sm")]: {
			color:
				theme.palette.mode === 'dark'
					? theme.palette.primary.light
					: theme.palette.primary.dark,
		},
	},
}));

export default function LoginForm() {
	const { dispatch } = useContext(Context);

	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			cpf: '',
			password: '',
			remember: false,
		},
		validationSchema: loginSchema,
		onSubmit: async (values, helpers) => {
			await login(
				{
					cpf: values.cpf,
					password: values.password,
				},
				helpers,
				dispatch
			);
		},
	});

	return (
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
				control={
					<Checkbox
						value={formik.values.remember}
						color="primary"
						onChange={formik.handleChange}
						name="remember"
						id="remember"
					/>
				}
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
	);
}
