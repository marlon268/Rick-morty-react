import React from 'react';
import { useSelector } from 'react-redux';

import { CardCharacter } from '../../components/CardCharacter';

export const Favorite = () => {
	const { favoriteCharacters } = useSelector((state) => state.storeCharacters);

	if (favoriteCharacters.length === 0) {
		return (
			<div className="home animate__animated animate__fadeIn">
				<h1 className="home_no-favorite">
					No tienes personajes agregados a favoritos
				</h1>
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
