import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "../routes/Routes";
import Header from "../Header/Header";

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
