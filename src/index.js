/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import './_metronic/_assets/plugins/flaticon/flaticon.css';
import './_metronic/_assets/plugins/flaticon2/flaticon.css';
import './_metronic/_assets/plugins/keenthemes-icons/font/ki.css';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-datepicker/dist/react-datepicker.css';
import 'socicon/css/socicon.css';

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import { MetronicI18nProvider } from './_metronic/i18n';
import { MetronicLayoutProvider, MetronicSplashScreenProvider, MetronicSubheaderProvider } from './_metronic/layout';
import App from './app/App';
import * as _redux from './redux';
import store, { persistor } from './redux/store';

// import "./sass/style.react.rtl.css"; // RTL version
// Datepicker
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock =  _redux.mockAxios(axios);*/

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store);

ReactDOM.render(
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          <App store={store} persistor={persistor} basename={PUBLIC_URL} />
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>,
  document.getElementById("root")
);
