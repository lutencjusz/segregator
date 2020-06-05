import React, { useEffect } from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { useQuery } from "react-query";
import { connect } from "react-redux";
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
import {
  setDictionary,
  setCategories,
} from "./data/actions/dictionary.actions";
import { SuspenseErrorBoundary, Searcher, DescCategories, ButtonNew, AddCandidate } from "components";
import API from "data/fetch";

const App = ({
  setDictionary,
  setCategories,
}) => {

  const { t, i18n } = useTranslation();
  
  const { data: allDictionary } = useQuery(
    "allDictionary",
    API.dictionary.fetchAllDictionary
  );

  useEffect(() => {
    //zamiast useMemo, które powoduje błąd
    setDictionary(allDictionary);
  }, [allDictionary, setDictionary]);

  const { data: allCategories } = useQuery(
    "allCategories",
    API.dictionary.fetchAllCategories
  );

  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories, setCategories]);

  return (
    <Router>
      <div className="container tlo">
        <div className="App">
          <ToastContainer />
          <div>
            <div className="doPrawej">
              <ButtonNew category={{ id: 1 }} size={100} onClick={() => i18n.changeLanguage('pl')}>pl</ButtonNew>
              <ButtonNew category={{ id: 2 }} size={100} onClick={() => i18n.changeLanguage('en')}>en</ButtonNew>
              <ButtonNew category={{ id: 3 }} size={100} onClick={() => i18n.changeLanguage('de')}>de</ButtonNew>
              <ButtonNew category={{ id: 4 }} size={100} onClick={() => i18n.changeLanguage('fr')}>fr</ButtonNew>
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
            <DescCategories />
          </Route>
          <Route path="/dodajKandydata">
            <AddCandidate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, {
  setDictionary,
  setCategories,
})(App);
