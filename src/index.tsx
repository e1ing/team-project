import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/ui/app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./main/bll/store";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
