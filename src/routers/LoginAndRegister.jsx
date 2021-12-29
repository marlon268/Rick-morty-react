import React from 'react';
import { Routes as BRoutes, Route } from 'react-router-dom';

import { Login } from '../pages/sesion/Login';
import { Register } from '../pages/sesion/Register';

export const LoginAndRegister = () => {
	return (
		<>
			<BRoutes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</BRoutes>
		</>
	);
};
