import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import React, {useCallback} from "react";
import {logoutTC} from "../../bll/auth-reducer/auth-reducer";
import {Button} from "../common/Button/Button";
import styleButton from "../common/Button/Button.module.css";

export const Logout = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = useCallback(()=> {
        dispatch(logoutTC())
    }, [])

    return (
        <div>
            {isLoggedIn &&
            <Button className={styleButton.button} color={"inherit"} onClick={logoutHandler}>Logout</Button>}
        </div>
    )
}