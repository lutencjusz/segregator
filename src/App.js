import React, { useEffect } from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Searcher } from './components';
import {
  setDictionary,
  setCategories,
} from "data/actions/dictionary.actions";
import { useQuery } from "react-query";
import API from "data/fetch";
import { SuspenseErrorBoundary } from "components";


function App({
  setDictionary,
  setCategories
}) {

  const { data: allDictionary } = useQuery(
    "allDictionary",
    API.dictionary.fetchAllDictionary
  );

  useEffect(() => { //zamiast useMemo, które powoduje błąd
    setDictionary(allDictionary);
  }, [allDictionary, setDictionary])

  const { data: allCategories } = useQuery(
    "allCategories",
    API.dictionary.fetchAllCategories
  );

  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories, setCategories])

  return (

    <Router>
      <div className="container">
        <div className="App">
          <ToastContainer />
          <div className="body">
            <h2> Klasyfikacja śmieci</h2>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <SuspenseErrorBoundary>
              <Searcher />
            </SuspenseErrorBoundary>
          </Route>
          <Route path="/pomoc">
            <h3>Pomoc</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, {
  setDictionary,
  setCategories
})(App);
