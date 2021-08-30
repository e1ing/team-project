import React from 'react';
import './App.module.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "../routes/Routes";
import Header from "../Header/Header";
import {Preloader} from "../common/Preloader/Preloader";
import {Main} from "./Main/Main";

function App() {


  return (
      <div className="App">
          <HashRouter basename={process.env.PUBLIC_URL}>
              <Header/>
              <Routes/>
              <Main/>
              <Preloader/>
          </HashRouter>
      </div>
  );
}

export default App;
