import React, { useEffect } from 'react';
import './App.module.css';
import { Routes } from "../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../bll/store";
import { initializeAppTC } from "../../bll/auth-reducer/auth-reducer";
import HeaderInMockup from "../Header/HeaderInMockup";
import { Preloader } from '../common/Preloader/Preloader';

function App() {
  const dispatch = useDispatch()
  const userID = useSelector<AppRootStateType, string>(state => state.auth.profile._id)


  useEffect(() => {
    !userID && dispatch(initializeAppTC())
  }, [dispatch, userID])


  return (
    <div className="App">

          <HeaderInMockup/>
          <Routes/>
          <Preloader/>
    </div>
  );
}

export default App;
