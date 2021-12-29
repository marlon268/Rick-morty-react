import { types } from '../types';

const initialState = {
	characters: [],
	favoriteCharacters: [],
};

export const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.eventLoadCharacters:
			return {
				...state,
				characters: [...state.characters, ...action.payload],
			};

		case types.eventRemoveCharactersOfHome:
			return {
				...state,
				characters: [],
			};

		default:
			return state;
	}
};
