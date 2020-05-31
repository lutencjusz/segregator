import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { connect } from 'react-redux'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { setDictionary } from './data/actions/dictionary.actions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Searcher } from './components';

function App({
  dictionary,
  setDictionary,
}) {

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
            <Searcher dictionary={dictionary}></Searcher>
            <div>
              <a href="https://www.w3schools.com">
                <img border="0" alt="W3Schools" src="https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/bio.png" width="100" height="100"/>
              </a>
            </div>
          </Route>
            <Route path="/pomoc">
              <h3>Pomoc</h3>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(state => {
  return {
        dictionary: state.dictionary.dictionary,
  }
}, {
        setDictionary
      })(App);
