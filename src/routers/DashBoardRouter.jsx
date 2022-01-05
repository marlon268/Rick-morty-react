import React from 'react';
import { Routes as BRoutes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Home } from '../pages/home/';
import { FondoContainer } from '../components/FondoContainer';
import { NavBar } from '../components/NavBar';
import logoRick from '../assets/rickymorty.png';
import { Character } from '../pages/character';
import { Favorite } from '../pages/favorite';
import { Search } from '../pages/search';

export const DashBoardRouter = () => {
	const { userName } = useSelector((state) => state.login);
	const { characters } = useSelector((state) => state.storeCharacters);

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
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="/search" element={<Search />} />
					<Route path="character/:characterId" element={<Character />} />
				</BRoutes>
			</div>
		</>
	);
};
