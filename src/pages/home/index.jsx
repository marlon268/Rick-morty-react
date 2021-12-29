import React from 'react';

import { CardCharacter } from '../../components/CardCharacter';

export const Home = ({ characters, changePage }) => {
	return (
		<div className="home animate__animated animate__fadeIn">
			<section className="home_herolist">
				{characters.map((character) => {
					return <CardCharacter {...character} key={character.id} />;
				})}
				<button onClick={changePage}>Cargar mas personajes</button>
			</section>

			<section className="home_nav"></section>
		</div>
	);
};
