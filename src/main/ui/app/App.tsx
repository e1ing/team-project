import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "../routes/Routes";
import Header from "../Header/Header";
import {Preloader} from "../common/Preloader/Preloader";

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
          <Preloader/>
        </HashRouter>
    </div>
  );
}

export default App;
