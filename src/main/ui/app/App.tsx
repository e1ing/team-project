import React from 'react';
import './App.module.css';
import {HashRouter} from "react-router-dom";
import {Routes} from '../routes/Routes';
import {Preloader} from "../common/Preloader/Preloader";


function App() {
    return (
            <div className="App">
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <Routes/>
                </HashRouter>
                <Preloader/>
            </div>
);
}

export default App;
