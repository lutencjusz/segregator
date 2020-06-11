import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { SuspenseErrorBoundary, Searcher } from "components";

const DescCategories = React.lazy(() => import('./components/descCategories'));
const AddCandidate = React.lazy(() => import('./components/addCandidate'));

const App = () => {

  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div className="container tlo">
        <div className="App">
          <ToastContainer />
          <div>
            <div className="doPrawej">
              <button className="button_w" onClick={() => i18n.changeLanguage('pl')}>pl</button>
              <button className="button_w" onClick={() => i18n.changeLanguage('en')}>en</button>
              <button className="button_w" onClick={() => i18n.changeLanguage('de')}>de</button>
              <button className="button_w" onClick={() => i18n.changeLanguage('fr')}>fr</button>
              <button className="button_w" onClick={() => i18n.changeLanguage('zh-CN')}>ch</button>
            </div>
            <a href="/#/" className="naglowek_a">
              <h2 className="naglowek"> {t('Klasyfikacja śmieci')}</h2>
            </a>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <SuspenseErrorBoundary>
              <Searcher />
            </SuspenseErrorBoundary>
          </Route>
          <Route path="/pomoc">
            <SuspenseErrorBoundary>
              <DescCategories />
            </SuspenseErrorBoundary>
          </Route>
          <Route path="/dodajKandydata">
            <SuspenseErrorBoundary>
              <AddCandidate />
            </SuspenseErrorBoundary>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
