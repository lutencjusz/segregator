import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Searcher, Trashes } from './components';

function App() {

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
            <Searcher/>
            <Trashes/>
          </Route>
          <Route path="/pomoc">
            <h3>Pomoc</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
