import loader from "../../../../assets/images/loader.gif";
import React from "react";
import s from './Preloader.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {RequestStatusType} from "../../../bll/app-reducer";

export const Preloader = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    if (status!=="loading")
        return null

    return (
        <div  className={s.loaderContainer}>
            <div className={s.loader}>
            <img src={loader}/>
            </div>
        </div>
    )
}

