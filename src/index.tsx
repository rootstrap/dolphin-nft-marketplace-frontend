import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { store } from './app/store/store';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { DEFAULT_LANGUAGE } from './app/constants/contants';
import flatten from 'flat';
import locales from './app/locales';
import './app/styles/styles.scss';

const messages = locales['en'];

ReactDOM.render(
	<React.StrictMode>
		<IntlProvider
			messages={flatten(messages)}
			locale={'en'}
			defaultLocale={DEFAULT_LANGUAGE}
		>
			<Provider store={store}>
				<App />
			</Provider>
		</IntlProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
