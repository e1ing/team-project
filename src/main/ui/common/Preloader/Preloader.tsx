import loader from "../../assets/loader.gif";
import React from "react";
import commonStyles from '../../app/App.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {RequestStatusType} from "../../../bll/app-reducer";

export const Preloader = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    if (status!=="loading")
        return null

    return (
        <div  className={commonStyles.loaderContainer}>
            <div className={commonStyles.loader}>
            <img src={loader}/>
            </div>
        </div>
    )
}

