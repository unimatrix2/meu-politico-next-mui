import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { instance, source, isCancel } from '../configs/axios.config';
import { Context } from '../contexts/auth.context';
import { protectedRoutesEnum } from '../enums/protectedRoutes.enum';
import { renewAuthCookie, getAuthCookie } from '../utils/authCookieManager.util';

export const useAuth = () => {
	const { state, dispatch } = useContext(Context);
	const router = useRouter();

	useEffect(() => {
		if (!state.user?.cpf && getAuthCookie()) {
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

			fetch();
		}
		if (protectedRoutesEnum.includes(router.pathname)) return router.push('/');
		return () => { source.cancel(); };
	}, [state.user, dispatch, router]);
}