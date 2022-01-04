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
		case types.eventAddToFavotire:
			return {
				...state,
				favoriteCharacters: [...state.favoriteCharacters, action.payload],
			};
		case types.eventDeleteToFavotire:
			return {
				...state,
				favoriteCharacters: state.favoriteCharacters.filter(
					(character) => character.id !== action.payload.id
				),
			};

		default:
			return state;
	}
};
