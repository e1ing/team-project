import React from 'react';
import style from './Login.module.css'
import {Button} from "../common/Button/Button";
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
                <a>Forgot Password</a>
                <button className={style.button}>
                    login
                </button>
                <div style={{color: "gray"}}>Don't have an account?</div>
                <a style={{color: "#232480", fontWeight: "bold"}}>Sign Up</a>

            </div>

        </div>
    )
}