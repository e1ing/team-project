import React, {useEffect} from "react";
import Header from "../../Header/Header";
import {PATH, Routes} from "../../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {initializeAppTC} from "../../../bll/auth-reducer/auth-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

export const Main = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(initializeAppTC())
    }, [])


    if (!isInitialized) {
        return <Preloader/>
    }
    if (!isLoggedIn){
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
        </div>
    )
}