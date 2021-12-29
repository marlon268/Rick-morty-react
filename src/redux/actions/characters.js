import { types } from '../types';

export const addCharacters = (characters) => ({
	type: types.eventLoadCharacters,
	payload: characters,
});
