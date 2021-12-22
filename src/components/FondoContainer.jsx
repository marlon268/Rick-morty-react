import React from 'react';
import homeFondo from '../../public/assets/rick.jpg';

export const FondoContainer = ({ cargando }) => {
	return (
		<div
			className={`fondo_container animate__animated animate__fadeIn animate__faster ${
				cargando && 'blur'
			}`}
		>
			<img src={homeFondo} alt="homeFondo" />
		</div>
	);
};
