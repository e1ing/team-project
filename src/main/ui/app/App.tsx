import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
       {/* <Provider>*/}
      {/*<Main/>*/}
       {/* </Provider>*/}
        </HashRouter>
    </div>
  );
}

export default App;
