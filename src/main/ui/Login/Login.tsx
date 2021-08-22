import React from 'react';
import style from './Login.module.css'
import {Button} from "../common/Button/Button";
import {PATH} from "../routes/Routes";
import {NavLink} from "react-router-dom";
export const Login = () => {
    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.title}>
                    <h1>It-incubator</h1>
                    <h3>Sign In</h3>
                </div>
                <div className={style.input}>
                    <input/>
                    <input/>
                </div>
                <NavLink to={PATH.PASSWORD_CHANGE} style={{textDecoration: "none"}}>Forgot Password</NavLink>
                <button className={style.button}>
                    login
                </button>
                <div style={{color: "gray"}}>Don't have an account?</div>
                <NavLink to={PATH.SIGN_UP} style={{color: "#232480", fontWeight: "bold", textDecoration: "none"}}>Sign Up</NavLink>

            </div>

        </div>
    )
}