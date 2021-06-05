import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Routes} from './Components';
import { Provider } from "react-redux";
import { store } from './store';


function App() {
    return (
      <div className="App">
        <React.Fragment>
        <Provider store={store}>
          <Routes />
          </Provider>
        </React.Fragment>
      </div>
    );
}

export default App;
