import React from 'react';
import { Link } from 'react-router-dom';
import fondoSesion from '../../../public/assets/rickfondo.jpg';

export const Register = () => {
	return (
		<>
			<div className="rick-fondo">
				<img src={fondoSesion} alt="FondoRick" />
			</div>
			<div className="formulario animate__animated animate__fadeIn">
				<h1>Registro</h1>
				<form>
					<label htmlFor="nombre">Nombre</label>
					<input autoComplete="off" type="text" id="nombre" />
					<label htmlFor="correo">Correo</label>
					<input autoComplete="off" type="email" id="correo" />
					<label htmlFor="password">Contraeña</label>
					<input
						autoComplete="off"
						type="password"
						id="password"
						placeholder=""
					/>
					<label htmlFor="contraseña2">Repetir contraseña</label>
					<input autoComplete="off" type="password" id="contraseña2" />
				</form>
				<div className="registro">
					<h2>¿Ya tienes cuenta?</h2>
					<Link to="/login">Inicia sesión</Link>
				</div>
			</div>
		</>
	);
};
