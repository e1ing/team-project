import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {HashRouter} from "react-router-dom";
import {SuperComponents} from "../SuperComponents";
import {Routes} from "../routes/Routes";
import Header from "../routes/Header";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
          {/*<SuperComponents/>*/}
          <Header/>
          <Routes/>
       {/* <Provider>*/}
      {/*<Main/>*/}
       {/* </Provider>*/}
        </HashRouter>
    </div>
  );
}

export default App;
