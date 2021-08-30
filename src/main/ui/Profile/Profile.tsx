import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Button} from "../common/Button/Button";
import {logoutTC} from "../../bll/auth-reducer";

export const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = useCallback(()=> {
        dispatch(logoutTC())
    }, [])
    return (
        <div style={{fontSize: "50px", textAlign: "center"}}>
            Profile
            {isLoggedIn && <Button color={"inherit"} onClick={logoutHandler}>Log out</Button>}
        </div>
    )
}