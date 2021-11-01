import { useEffect, useContext } from 'react';
import instance from '../configs/axios.config';
import { Context } from '../contexts/auth.context';

export const useAuth = () => {
	const { state, dispatch } = useContext(Context);

	useEffect(() => {
		if (!state.user?.cpf) {
			instance.get('/usuario/acesso')
				.then(data => {
					dispatch({
						type: 'PROVIDE-USER',
						payload: data.data
					});
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [state.user]);
}