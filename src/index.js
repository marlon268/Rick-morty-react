import React from 'react';
import ReactDOM from 'react-dom';
import './Normalize.css';
import { RickAndMorty } from './RickAndMorty';
import './scss/global.scss';

ReactDOM.render(
	<React.StrictMode>
		<RickAndMorty />
	</React.StrictMode>,
	document.getElementById('main')
);
