import React from 'react';
import style from './Login.module.css'
import {Button} from "../common/Button/Button";
export const Login = () => {
    return (
        <div className={style.container}>
            <div>login</div>
            <input/>
            <input/>
            <Button>login</Button>
        </div>
    )
}