import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { useCharacter } from '../../hooks/useCharacter';
import volver from '../../assets/return.png';

export const Character = () => {
	const { characterId } = useParams();
	const navigate = useNavigate();

	const handleReturn = () => {
		navigate(-1);
	};

	const character = useCharacter(
		`https://rickandmortyapi.com/api/character/${characterId}`
	);

	if (character.length === 0) {
		return <Loading />;
	} else {
		return (
			<div className="character animate__animated animate__fadeIn">
				<div className="character_container">
					<div className="character_container-image animate__animated animate__bounceInLeft animate__slow">
						<h1>{character.name}</h1>
						<img src={character.image} alt="character.name" />
					</div>
					<div className="character_container-text animate__animated animate__fadeInDown">
						<h1>Origin: {character.origin.name}</h1>
						<h1>Location: {character.location.name}</h1>
						<h1>Specie: {character.species}</h1>
						<h1>Gender: {character.gender}</h1>
						<h1>Status: {character.status}</h1>
					</div>
					<div
						onClick={handleReturn}
						className="character_container-return"
					>
						<img src={volver} alt="volver" />
					</div>
				</div>
			</div>
		);
	}
};
