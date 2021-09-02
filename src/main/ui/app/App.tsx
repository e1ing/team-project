import React, { useEffect } from 'react';
import './App.module.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "../routes/Routes";
import Header from "../Header/Header";
import {Preloader} from "../common/Preloader/Preloader";
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { isInitializedTC } from '../../bll/app-reducer';

function App() {

  const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isInitializedTC())
  }, [dispatch]);
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Header/>
          <Routes/>
      {/*<Main/>*/}
          <Preloader/>
        </HashRouter>
    </div>
  );
}

export default App;
