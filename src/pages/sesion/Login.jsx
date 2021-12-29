import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import fondoSesion from '../../assets/rickfondo.jpg';

import logoRick from '../../assets/rickymorty.png';
import { startLogin } from '../../redux/actions/auth';

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(startLogin('Hola Marlon'));

		navigate('/', {
			replace: true,
		});
	};

	return (
		<>
			<div className="rick-fondo">
				<img src={fondoSesion} alt="FondoRick" />
			</div>
			<div className="logo_rick">
				<img src={logoRick} alt="logoRick" />
			</div>
			<div className="formulario animate__animated animate__fadeIn">
				<h1>Iniciar sesión</h1>
				<form onSubmit={handleLogin}>
					<label htmlFor="correo">Correo</label>
					<input
						readOnly
						autoComplete="off"
						type="email"
						id="correo"
						value="correro@correro.com"
					/>
					<label htmlFor="costraseña">Contraseña</label>
					<input
						readOnly
						autoComplete="off"
						type="password"
						id="costraseña"
						value="Hptcui1."
					/>
					<button type="submit" className="boton_formulario">
						Iniciar sesión
					</button>
				</form>
				<div className="registro">
					<h2>¿No tienes cuenta?</h2>
					<Link to="/auth/register">Registrate</Link>
				</div>
			</div>
		</>
	);
};
