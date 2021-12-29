import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
	const { logged } = useSelector((state) => state.login);
	const { pathname } = useLocation();

	return logged ? children : <Navigate to="/auth/login" />;
};
