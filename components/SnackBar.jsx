import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { forwardRef, useState } from 'react';

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const withSnackBar = WrappedComponent => {
	return function SnackBar(props) {
		const [open, setOpen] = useState(false);
		const [message, setMessage] = useState('');
		const [duration, setDuration] = useState(4000);
		const [severity, setSeverity] = useState('success');

		const showMessage = (
			message,
			severity = 'success',
			duration = 4000
			) => {
				setMessage(message);
				setSeverity(severity);
				setDuration(duration);
				setOpen(true);
		};

		const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

		return (
			<>
				<WrappedComponent {...props} snack={showMessage} />
				<Snackbar
					open={open}
					onClose={handleClose}
					autoHideDuration={duration}
					TransitionComponent={Slide}
				>
					<Alert onClose={handleClose} severity={severity}>
						{ message }
					</Alert>
				</Snackbar>
			</>
		)
	}
};

// Essa implementação de SnackBar como Higher Order Component foi
// retirada de https://stackblitz.com/edit/snackbar-hoc?file=src%2FSnackbarHOC.js
// e encontrada em https://stackoverflow.com/questions/64754560/how-to-implement-material-ui-snackbar-as-a-global-function