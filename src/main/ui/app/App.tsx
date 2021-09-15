import React, { useEffect } from 'react';
import './App.module.css';
import { Routes } from "../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../bll/store";
import { initializeAppTC } from "../../bll/auth-reducer/auth-reducer";
import { Preloader } from '../common/Preloader/Preloader';
import Header from "../Header/Header";

function App() {
  const dispatch = useDispatch()
  const userID = useSelector<AppRootStateType, string>(state => state.auth.profile._id);
  const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized);

  useEffect(() => {
    !userID && dispatch(initializeAppTC())
  }, [dispatch, userID])

  if (!isInitialized) {
    return <Preloader />
}

  return (
    <div className="App">

          <Header/>
          <Routes/>
          <Preloader/>
    </div>
  );
}

export default App;
