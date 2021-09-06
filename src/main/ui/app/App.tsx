import React, { useEffect } from 'react';
import './App.module.css';
import { Routes } from "../routes/Routes";
import { Preloader } from "../common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../bll/store";
import { initializeAppTC } from "../../bll/auth-reducer/auth-reducer";

function App() {
  const dispatch = useDispatch()
  const userID = useSelector<AppRootStateType, string>(state => state.auth.profile._id)


  useEffect(() => {
    !userID && dispatch(initializeAppTC())
  }, [])


  return (
    <div className="App">
      <Routes />
      <Preloader />
    </div>
  );
}

export default App;
