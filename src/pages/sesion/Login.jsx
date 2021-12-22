import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fondoSesion from '../../../public/assets/rickfondo.jpg';

export const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		navigate('/', {
			replace: true,
		});
	};

	return (
		<>
			<div className="rick-fondo">
				<img src={fondoSesion} alt="FondoRick" />
			</div>
			<div className="formulario animate__animated animate__fadeIn">
				<h1>Iniciar sesión</h1>
				<form onSubmit={handleLogin}>
					<label htmlFor="correo">Correo</label>
					<input autoComplete="off" type="email" id="correo" />
					<label htmlFor="costraseña">Contraseña</label>
					<input autoComplete="off" type="password" id="costraseña" />
					<button type="submit" className="boton_formulario">
						Iniciar sesión
					</button>
				</form>
				<div className="registro">
					<h2>¿No tienes cuenta?</h2>
					<Link to="/register">Registrate</Link>
				</div>
			</div>
		</>
	);
};
