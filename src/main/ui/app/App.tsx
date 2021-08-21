import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {HashRouter} from "react-router-dom";
import {Registration} from "../Registration/Registration";


function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Registration/>
       {/* <Provider>*/}
      {/*<Main/>*/}
       {/* </Provider>*/}
        </HashRouter>
    </div>
  );
}

export default App;
