import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { store } from './app/store/store';
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { DEFAULT_LANGUAGE } from './app/constants/constants';
import { theme } from './app/themes/Theme';
import { ModalProvider } from './app/context/ModalContext';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import flatten from 'flat';
import locales from './app/locales';
import './app/styles/styles.scss';

const messages = locales['en'];
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <StylesProvider injectFirst>
                <App />
              </StylesProvider>
            </ModalProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
