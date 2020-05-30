import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { connect } from 'react-redux'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { ToastContainer } from 'react-toastify';
import { setDictionary } from './data/actions/dictionary.actions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
            <Typeahead
              id="my-typeahead-id"
              defaultSelected={[dictionary[0]]}
              onChange={(selected) => {
                console.log(selected);
              }}
              labelKey="name"
              options={dictionary}
            />
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
