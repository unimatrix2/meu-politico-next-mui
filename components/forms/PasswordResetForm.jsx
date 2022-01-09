import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

import { withSnackBar } from '../SnackBar';
import passwordResetSchema from '../../validations/passwordResetSchema.validation';

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

function ResetUserPasswordForm({ snack }) {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
            password: '',
            oldPassword: '',
			confirmPassword: '',
		},
		validationSchema: passwordResetSchema,
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
				name="oldPassword"
				label="Senha Antiga"
				type="password"
				id="oldPassword"
				value={formik.values.oldPassword}
				onChange={formik.handleChange}
				helperText={formik.touched.oldPassword && formik.errors.oldPassword}
				error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
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
				Atualizar Minha Senha
			</Button>
		</form>
	);
}

export default withSnackBar(ResetUserPasswordForm);