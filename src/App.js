import React from 'react'; // umożliwia posiadanie state w komponencie funkcyjnym (np. App.js)
import { connect } from 'react-redux'
import { setCounter } from './data/actions/counter.actions'
import { setMinState, setMaxState } from './data/actions/button.actions'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
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
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To jest przykładowa aplikcja</h1>
        <h3>Pokazuje działanie React Redux</h3>
        <h3>i react-toastify</h3>
      </header>
      <div className="body">
        <h2> Pokazuje wartość selectedId: {counter}</h2>
        <button className="btn btn-primary" disabled={!buttonState.maxButtonActive} onClick={() => setNewCounter(counter + 1)}>Zwiększ licznik</button>
        <button className="btn btn-primary" disabled={!buttonState.minButtonActive} onClick={() => setNewCounter(counter - 1)}>Zmniejsz licznik</button>
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
