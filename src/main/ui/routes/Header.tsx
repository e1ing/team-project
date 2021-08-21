import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.SIGN_UP}>sign Up</NavLink>
            <NavLink to={PATH.LOGIN}>login</NavLink>
            <NavLink to={PATH.PROFILE}>profile</NavLink>
            <NavLink to={PATH.PASSWORD}>password</NavLink>
            <NavLink to={PATH.PASSWORD_CHANGE}>new password</NavLink>
            <NavLink to={PATH.SUPER_COMPONENTS}>superComponents</NavLink>
        </div>
    )
}

export default Header