import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardCharacter } from '../../components/CardCharacter';
import { FondoContainer } from '../../components/FondoContainer';
import { Loading } from '../../components/Loading';
import {
	addStartCharacters,
	removeCharactersOfHome,
} from '../../redux/actions/characters';
import cargar from '../../assets/signo-de-mas.png';

export const Home = () => {
	const { characters } = useSelector((state) => state.storeCharacters);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

	const loadMoreCharacters = () => {
		setLoading(true);
		setTimeout(() => {
			setPage(page + 1);
		}, 1000);
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(addStartCharacters(url));
			setLoading(false);
		}, 1000);
	}, [dispatch, url]);

	useEffect(() => {
		return () => {
			dispatch(removeCharactersOfHome());
		};
	}, [dispatch]);

	if (characters.length === 0) {
		return (
			<>
				<FondoContainer cargando={true} />
				<Loading />
			</>
		);
	} else {
		return (
			<div className="home animate__animated animate__fadeIn">
				<section className="home_herolist">
					{characters.map((character) => {
						return <CardCharacter {...character} key={character.id} />;
					})}

					{loading ? (
						<div className="home_cargando">
							<div class="loadingio-spinner-rolling-mo7grisetcm">
								<div class="ldio-0rgqc6yvldb">
									<div></div>
								</div>
							</div>
						</div>
					) : (
						<button
							className="home_cargar-mas"
							onClick={loadMoreCharacters}
						>
							<img src={cargar} alt="cargar" />
						</button>
					)}
				</section>

				<section className="home_nav"></section>
			</div>
		);
	}
};
