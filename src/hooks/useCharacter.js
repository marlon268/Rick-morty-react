import { useState, useEffect } from 'react';

export const useCharacter = (url) => {
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		console.log('datos pedidos');
		fetch(url)
			.then((response) => response.json())
			.then((data) => setCharacter(data));
	}, [url]);
	return character;
};
