import React, { useEffect } from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { useQuery } from "react-query";
import { connect } from "react-redux";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  setDictionary,
  setCategories,
} from "./data/actions/dictionary.actions";
import { SuspenseErrorBoundary, Searcher, DescCategories } from "components";
import API from "data/fetch";

const App = ({
  setDictionary,
  setCategories,
}) => {

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

  const Child = ({match}) => { //użycie components powoduje, że jest dynamiczne odświerzanie
    return <DescCategories selectedCategories={match.params.id} />;
  }

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
          <Route path="/pomoc/:id" component={Child}/>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, {
  setDictionary,
  setCategories,
})(App);
