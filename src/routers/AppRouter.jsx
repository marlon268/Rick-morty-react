import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/sesion/Login';
import { Register } from '../pages/sesion/Register';
import { DashBoardRouter } from './DashBoardRouter';
import { LoginAndRegister } from './LoginAndRegister';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route
						path="/auth/*"
						element={
							<PublicRoute>
								<LoginAndRegister />
							</PublicRoute>
						}
					/>
					<Route
						path="/*"
						element={
							<PrivateRoute>
								<DashBoardRouter />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
