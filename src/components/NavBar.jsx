import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import home from '../assets/hogar.png';
import heart from '../assets/heart.png';
import search from '../assets/search.png';
import salir from '../assets/salida.png';
import { startLogout } from '../redux/actions/auth';

export const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { favoriteCharacters } = useSelector((state) => state.storeCharacters);

	const handleExit = () => {
		dispatch(startLogout());

		navigate('/auth/login', {
			replace: true,
		});
	};

	return (
		<nav className="nav_container animate__animated animate__fadeIn">
			<div className="nav_container-item">
				<Link to="/">
					<img src={home} alt="home" />
					<h2>Inicio</h2>
				</Link>
			</div>
			<div className="nav_container-item">
				<p className="nav_container-item_p">{favoriteCharacters.length}</p>
				<Link to="/favorite">
					<img src={heart} alt="favorite" />
					<h2>Favoritos</h2>
				</Link>
			</div>
			<div className="nav_container-item">
				<Link to="/search">
					<img src={search} alt="search" />
					<h2>Buscar</h2>
				</Link>
			</div>
			<div onClick={handleExit} className="nav_container-item">
				<button className="nav_container-button">
					<img src={salir} alt="cerrar sesión" />
					<h2>Salir</h2>
				</button>
			</div>
		</nav>
	);
};
