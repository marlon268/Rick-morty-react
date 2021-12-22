import { useState, useEffect } from 'react';

export const useGetCharacters = (url) => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((response) => response.json())
				.then((data) => setCharacters(data.results));
		}, 2000);
	}, [url]);

	return characters;
};