import React from 'react';
import style from './Login.module.css'
import {Button} from "../common/Button/Button";
export const Login = () => {
    return (
        <div className={style.container}>
            <div style={{fontSize: "50px", textAlign: "center"}}>It-incubator</div>
            <div>login</div>
            <input/>
            <input/>
            <Button>login</Button>
        </div>
    )
}