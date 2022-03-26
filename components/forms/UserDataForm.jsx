import { useFormik } from 'formik';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

import { withSnackBar } from '../SnackBar';
import { Context } from '../../contexts/auth.context';
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
		cursor: 'pointer',
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

function UpdateUserDataForm({ snack }) {
    const { state } = useContext(Context);

	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			cpf: state.user.cpf,
			email: state.user.email,
			password: '',
			lastName: state.user.lastName,
			firstName: state.user.firstName,
			confirmPassword: '',
		},
		validationSchema: signupSchema,
		onSubmit: async (values, helpers) => {
			/* await signup(
				values,
				helpers,
				snack
			); */
            console.log('Reached Form Submit, values ==> ', values);
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
				value={formik.values.email}
				onChange={formik.handleChange}
				helperText={formik.touched.email && formik.errors.email}
				error={formik.touched.email && Boolean(formik.errors.email)}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
                disabled
				fullWidth
				id="cpf"
				label="CPF"
				name="cpf"
				autoComplete="cpf"
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
				disabled={!formik.dirty}
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
				disabled={!formik.dirty}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			>
				Atualizar Meus Dados
			</Button>
		</form>
	);
}

export default withSnackBar(UpdateUserDataForm);