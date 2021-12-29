import React, { useState } from 'react';

import likeHeart from '../assets/like.png';
import likeHeartFull from '../assets/likeFull.png';
import verMas from '../assets/buscar.png';

export const CardCharacter = ({ id, image, name, species, origin, status }) => {
	const [like, setLike] = useState(false);

	return (
		<div className="home_hero">
			<div className="home_hero-img">
				<img src={image} alt="" />.
			</div>
			<div className="home_hero-text">
				<h1>{name}</h1>
				<h2>Specie: {species}</h2>
				<h2>Origin: {origin.name}</h2>
				<h2>Status: {status}</h2>
			</div>
			<div className="home_nav">
				<img
					onClick={() => setLike(!like)}
					className={like ? 'home_nav-animate' : ''}
					src={like ? likeHeartFull : likeHeart}
					alt="favoritos"
				/>
				<img src={verMas} alt="ver mas" />
			</div>
		</div>
	);
};
