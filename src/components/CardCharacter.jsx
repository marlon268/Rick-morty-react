import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import likeHeart from '../assets/like.png';
import likeHeartFull from '../assets/likeFull.png';
import verMas from '../assets/buscar.png';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToFavoriteCharacter,
	deleteToFavotireCharacter,
} from '../redux/actions/characters';

export const CardCharacter = ({ character, index }) => {
	const { id, image, name, species, origin, status } = character;
	const { favoriteCharacters } = useSelector((state) => state.storeCharacters);
	const [like, setLike] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		favoriteCharacters.forEach((favoriteCharacter) => {
			if (favoriteCharacter.id === id) {
				setLike(true);
			}
		});
	}, []);

	const addFavotire = () => {
		if (like) {
			setLike(false);
			dispatch(deleteToFavotireCharacter(character));
		} else {
			setLike(true);
			dispatch(addToFavoriteCharacter(character));
		}
	};

	return (
		<div className="home_hero">
			<div className="home_hero-img">
				<img src={image} alt="" />.
			</div>
			<div className="home_hero-text">
				<h1>{name}</h1>
			</div>
			<div className="home_nav">
				<img
					onClick={addFavotire}
					className={like ? 'home_nav-animate' : ''}
					src={like ? likeHeartFull : likeHeart}
					alt="favoritos"
				/>
				<Link to={`/character/${id}`}>
					<img src={verMas} alt="ver mas" />
				</Link>
			</div>
		</div>
	);
};
