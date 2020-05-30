import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { connect } from 'react-redux'
import { setCounter } from './data/actions/counter.actions'
import { setMinState, setMaxState } from './data/actions/button.actions'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { ToastContainer } from 'react-toastify';

const max = 5;
const min = 0;

function App({
  counter, buttonState,
  setCounter, setMinState, setMaxState,
}) {

  const checkState = ((newCounter) => {
    if (newCounter > max) {
      setMaxState(false)
    } else {
      setMaxState(true)
    }
    if (newCounter < min) {
      setMinState(false)
    } else {
      setMinState(true)
    }

  })

  const setNewCounter = (newCounter) => {
    setCounter(newCounter, min, max);
    checkState(newCounter);
  }

  return (
    <div className="container">
      <div className="App">
        <ToastContainer />
        <div className="body">
          <h2> Klasyfikacja śmieci</h2>
          <Typeahead
            id="my-typeahead-id"
            defaultSelected={["John"]}
            onChange={(selected) => {
              console.log(selected);
            }}
            labelKey="name"
            options={[
              { id: 1, name: 'John' },
              { id: 2, name: 'Miles' },
              { id: 3, name: 'Charles' },
              { id: 4, name: 'Herbie' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    counter: state.counter.counter,
    buttonState: state.button,
  }
}, {
  setCounter, setMinState, setMaxState,
})(App);
