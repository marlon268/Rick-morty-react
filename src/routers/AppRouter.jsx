import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/sesion/Login';
import { Register } from '../pages/sesion/Register';
import { DashBoardRouter } from './DashBoardRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/*" element={<DashBoardRouter />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
