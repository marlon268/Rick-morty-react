import React from 'react';
import { Routes as BRoutes, Route } from 'react-router-dom';

import { Home } from '../pages/home/';
import { useGetCharacters } from '../hooks/useGetCharacters';
import { FondoContainer } from '../components/FondoContainer';
import { Loading } from '../components/Loading';
import { NavBar } from '../components/NavBar';

export const DashBoardRouter = () => {
	const characters = useGetCharacters(
		'https://rickandmortyapi.com/api/character'
	);

	console.log(characters);

	if (characters.length === 0) {
		return (
			<>
				<FondoContainer cargando={true} />
				<Loading />
			</>
		);
	}

	return (
		<>
			<FondoContainer cargando={false} />
			<NavBar />
			<BRoutes>
				<Route path="/" element={<Home />} />
			</BRoutes>
		</>
	);
};
