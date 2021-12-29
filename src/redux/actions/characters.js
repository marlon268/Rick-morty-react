import { personalFetch } from '../../helpers/personalFetch';
import { types } from '../types';

const addCharacters = (characters) => ({
	type: types.eventLoadCharacters,
	payload: characters,
});

export const removeCharactersOfHome = () => ({
	type: types.eventRemoveCharactersOfHome,
});

export const addStartCharacters = (url) => {
	return async (dispatch) => {
		try {
			const resp = await personalFetch(url);
			const body = await resp.json();
			const characters = body.results;

			dispatch(addCharacters(characters));
		} catch (error) {
			console.log(error);
		}
	};
};
