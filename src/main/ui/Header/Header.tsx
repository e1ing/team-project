import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "../routes/Routes";
import style from "./Header.module.css"
function Header() {
    return (
        <div className={style.containerHeader}>
            <div className={style.header}>
                <NavLink to={PATH.SIGN_UP}>sign Up</NavLink>
                <NavLink to={PATH.LOGIN}>login</NavLink>
                <NavLink to={PATH.PROFILE}>profile</NavLink>
                <NavLink to={PATH.PASSWORD_CHANGE}>new password</NavLink>
                <NavLink to={PATH.SUPER_COMPONENTS}>superComponents</NavLink>
            </div>
        </div>
    )
}

export default Header