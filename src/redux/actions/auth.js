import { types } from '../types';

export const startLogin = (userName) => ({
	type: types.authLogin,
	payload: userName,
});

export const startLogout = () => ({
	type: types.authLogout,
});
