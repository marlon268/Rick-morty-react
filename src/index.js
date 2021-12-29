import React from 'react';
import ReactDOM from 'react-dom';

import { RickAndMorty } from './RickAndMorty';
import './Normalize.css';
import './scss/global.scss';

ReactDOM.render(
	<React.StrictMode>
		<RickAndMorty />
	</React.StrictMode>,
	document.getElementById('main')
);
