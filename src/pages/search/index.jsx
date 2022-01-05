import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { CardCharacter } from '../../components/CardCharacter';
import { Loading } from '../../components/Loading';
import { useCharacter } from '../../hooks/useCharacter';
import { useForm } from '../../hooks/useForm';

export const Search = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { name = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: name,
	});

	const { searchText } = formValues;
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(searchText);
		navigate(`?name=${searchText}`);
	};

	const data = useCharacter(
		`https://rickandmortyapi.com/api/character/?name=${name}`
	);

	if (data.length === 0) {
		return <Loading />;
	} else {
		const characters = data.results;
		return (
			<div className="home animate__animated animate__fadeIn">
				<form onSubmit={handleSearch}>
					<div className="form">
						<input
							id="buscar"
							type="text"
							placeholder="Buscar por nombre"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button type="submit">Buscar</button>
					</div>
				</form>

				{data.error && <h1>No hay resultados para: {name}</h1>}
				{data.results && (
					<section className="home_herolist">
						{characters.map((character, index) => {
							return (
								<CardCharacter
									index={index}
									character={character}
									key={character.id}
								/>
							);
						})}
					</section>
				)}
			</div>
		);
	}
};
