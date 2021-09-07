import React, {useEffect} from 'react';
import './App.module.css';
import {HashRouter, Redirect} from "react-router-dom";
import {PATH, Routes} from "../routes/Routes";
import Header from "../Header/Header";
import {Preloader} from "../common/Preloader/Preloader";
import {Main} from "./Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {initializeAppTC} from "../../bll/auth-reducer/auth-reducer";
import HeaderInMockup from "../Header/HeaderInMockup";

function App() {
    const dispatch = useDispatch()
    const userID = useSelector<AppRootStateType, string>(state => state.auth.profile._id)


    useEffect(()=> {
        !userID && dispatch(initializeAppTC())
        //debugger
    }, [])


  return (
    <div className="App">
          <HeaderInMockup/>
          <Routes/>
      {/*<Main/>*/}
          <Preloader/>
    </div>
  );
}

export default App;
