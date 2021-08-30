import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Button} from "../common/Button/Button";
import {logoutTC} from "../../bll/auth-reducer";
import styleButton from "../common/Button/Button.module.css";
import {inspect} from "util";
import styles from "./Profile.module.css"
import {Redirect} from "react-router-dom";
import {PATH} from "../routes/Routes";

export const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = useCallback(()=> {
        dispatch(logoutTC())
    }, [])
    // if(!isLoggedIn) {
    //     return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={styles.block}>
            <div style={{fontSize: "50px", textAlign: "center"}}>
                Profile
            </div>
            {isLoggedIn &&
            <Button className={styleButton.button} color={"inherit"} onClick={logoutHandler}>Logout</Button>}
        </div>
    )
}