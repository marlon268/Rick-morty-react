import React from 'react';
import homeFondo from '../assets/rick.jpg';

export const FondoContainer = ({ cargando }) => {
	return (
		<div className={`fondo_container ${cargando && 'blur'}`}>
			<img src={homeFondo} alt="homeFondo" />
		</div>
	);
};
