import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardCharacter } from '../../components/CardCharacter';

export const Favorite = () => {
	const { favoriteCharacters } = useSelector((state) => state.storeCharacters);

	const dispatch = useDispatch();

	if (favoriteCharacters.length === 0) {
		return (
			<div className="home animate__animated animate__fadeIn">
				<h1>No has agregado personajes favoritos aún</h1>
			</div>
		);
	} else {
		return (
			<div className="home animate__animated animate__fadeIn">
				<section className="home_herolist">
					{favoriteCharacters.map((favoriteCharacter, index) => {
						return (
							<CardCharacter
								index={index}
								character={favoriteCharacter}
								key={favoriteCharacter.id}
							/>
						);
					})}
				</section>
			</div>
		);
	}
};
