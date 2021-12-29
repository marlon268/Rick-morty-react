import React, { useEffect, useState } from 'react';
import { Routes as BRoutes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from '../pages/home/';
import { FondoContainer } from '../components/FondoContainer';
import { Loading } from '../components/Loading';
import { NavBar } from '../components/NavBar';
import logoRick from '../assets/rickymorty.png';
import { useGetCharacters } from '../hooks/useGetCharacters';
import { addCharacters } from '../redux/actions/characters';

export const DashBoardRouter = () => {
	const dispatch = useDispatch();
	const { userName } = useSelector((state) => state.login);
	const { characters } = useSelector((state) => state.storeCharacters);
	const [pages, setPages] = useState(1);

	const changePage = () => {
		setPages(pages + 1);
	};

	const getCharacters = useGetCharacters(
		`https://rickandmortyapi.com/api/character/?page=${pages}`
	);

	useEffect(() => {
		dispatch(addCharacters(getCharacters));
	}, [getCharacters]);

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
			<div className="logo_rick">
				<img src={logoRick} alt="logoRick" />
			</div>
			<div className="name">
				<h1>{userName}</h1>
			</div>
			<div className="container_dashboard">
				<NavBar />
				<BRoutes>
					<Route
						path="/"
						element={
							<Home characters={characters} changePage={changePage} />
						}
					/>
					<Route
						path="/character/:id"
						element={<Home characters={characters} />}
					/>
				</BRoutes>
			</div>
		</>
	);
};
