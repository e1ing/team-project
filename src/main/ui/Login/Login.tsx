import React from 'react';
import style from './Login.module.css'
import {Button} from "../common/Button/Button";
import {PATH} from "../routes/Routes";
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";
import Checkbox from "../common/Checkbox/Checkbox";


export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.title}>
                    <h1>It-incubator</h1>
                    <h3>Sign In</h3>
                </div>
                <form className={style.input} onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                    <Checkbox
                        name="rememberMe"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}

                    />

                </form>
                <NavLink to={PATH.PASSWORD_CHANGE} style={{textDecoration: "none"}}>Forgot Password</NavLink>
                <div className={style.bottom}>
                    <form onSubmit={formik.handleSubmit}>
                        <button className={style.button}>
                            login
                        </button>
                    </form>
                    <div style={{color: "gray"}}>Don't have an account?</div>
                    <NavLink to={PATH.SIGN_UP} style={{color: "#232480", fontWeight: "bold", textDecoration: "none"}}>Sign
                        Up</NavLink>
                </div>
            </div>

        </div>
    )
}