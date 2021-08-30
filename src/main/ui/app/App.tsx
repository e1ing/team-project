import React, {useEffect} from 'react';
import './App.module.css';
import {HashRouter, Redirect} from "react-router-dom";
import {PATH, Routes} from "../routes/Routes";
import Header from "../Header/Header";
import {Preloader} from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {initializeAppTC} from "../../bll/auth-reducer";

function App() {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized)
    //const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(initializeAppTC())
    }, [])
    if (!isInitialized) {
        return <Preloader/>
    }
    // if (!isLoggedIn){
    //     return <Redirect to={PATH.LOGIN}/>
    // }
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
