import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Button} from "../common/Button/Button";
import {logoutTC} from "../../bll/auth-reducer";
import styleButton from "../common/Button/Button.module.css";

export const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = useCallback(()=> {
        dispatch(logoutTC())
    }, [])
    return (
        <div>
            <div style={{fontSize: "50px", textAlign: "center"}}>
                Profile
            </div>
            {isLoggedIn &&
            <Button className={styleButton.button} color={"inherit"} onClick={logoutHandler}>Logout</Button>}
        </div>
    )
}