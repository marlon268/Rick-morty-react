import { types } from '../types';

const initialState = {
	logged: true,
	userName: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				...state,
				logged: true,
				userName: action.payload,
			};

		case types.authLogout:
			return {
				...state,
				logged: false,
				userName: '',
			};

		default:
			return state;
	}
};
