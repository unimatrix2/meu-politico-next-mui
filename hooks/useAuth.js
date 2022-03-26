import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';

import { Context } from '../contexts/auth.context';
import { protectedRoutesEnum } from '../enums/protectedRoutes.enum';
import { instance, source, isCancel } from '../configs/axios.config';
import { renewAuthCookie, hasAuthCookie } from '../utils/authCookieManager.util';

export const useAuth = () => {
	const { state, dispatch } = useContext(Context);
	const router = useRouter();

	useEffect(() => {
		const booleanAuthCookie = hasAuthCookie();
		if (
			protectedRoutesEnum.includes(router.pathname)
			&& !state.user.cpf && !booleanAuthCookie) return router.push('/');
		if (!state.user?.cpf && booleanAuthCookie) {
			const fetch = async () => {
				try {
					const { data, headers } = await instance
					.get('/usuario/acesso', {
						cancelToken: source.token
					});
					renewAuthCookie(headers.authorization);
					dispatch({
						type: 'PROVIDE-USER',
						payload: data
					});
				} catch (error) {
					if (isCancel(error)) {}
					else {
						dispatch({ type: 'LOGOUT' });
						router.push('/');
					}
				}
			}

			return fetch().then();
		}
		return () => { source.cancel(); };
	}, [state.user, dispatch, router]);
}