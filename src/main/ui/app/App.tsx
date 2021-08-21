import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { SuperComponents } from "../SuperComponents";
import { store } from '../../bll/store';
import { Main } from './Main/Main';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <SuperComponents />
        <Provider store={store}>
          <Main />
        </Provider>
      </HashRouter>
    </div>
  );
}

// dima

export default App;
