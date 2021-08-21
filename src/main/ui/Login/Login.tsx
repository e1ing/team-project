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

                <Button>login</Button>
            </div>

        </div>
    )
}