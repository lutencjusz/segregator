import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './data/Store';
import './components/i18n/i18n';
import { Provider } from 'react-redux';
import { ReactQueryConfigProvider } from 'react-query'; // umożliwa użycie useQuery
import { SuspenseErrorBoundary } from 'components';

const store = configureStore()
const queryConfig = {
  suspense: true,
  retry: 2, // ilość prób powtórzenia na 2
  refetchAllOnWindowFocus: false, // blokuje ponowne pobieranie danych po przełączneniu na inne okno
  setTimeout: 100
}

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfigProvider config={queryConfig}>
      <SuspenseErrorBoundary>
        <Provider store={store}>
          <App/>
        </Provider>
      </SuspenseErrorBoundary>
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

