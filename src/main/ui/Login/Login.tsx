import React from 'react';
import style from './Login.module.css';
import styleButton from './../common/Button/Button.module.css';
import {PATH} from "../routes/Routes";
import {NavLink, Redirect} from "react-router-dom";
import {useFormik} from "formik";
import Checkbox from "../common/Checkbox/Checkbox";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";

import {AppRootStateType} from "../../bll/store";
import commonStyles from "../app/App.module.css";
import styles from "../Registration/Registartion.module.css";
import {loginTC} from "../../bll/auth-reducer/auth-reducer";




export const Login = () => {
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Incorrect password'
            } else if (values.password.length < 3) {
                errors.password = 'Please enter your password'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
            formik.resetForm()
        },

    })
    if (isLoggedIn) {
        return <Redirect to={"/profile"} />
    }



    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>it-incubator</h1>
                    <h2>Sign In</h2>
                </div>
                <form className={styles.content} onSubmit={formik.handleSubmit}>
                    <Input
                        type={"email"} placeholder={"Email"}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div className={commonStyles.error}>{formik.errors.email}</div> : null}
                    <Input
                        placeholder={"Password"}
                        type={"password"}
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? <div className={commonStyles.error}>{formik.errors.password}</div> : null}
                    <label htmlFor="rememberMe">Remember me</label>
                    <Checkbox
                        name="rememberMe"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                </form>
                <NavLink to={PATH.PASSWORD_RECOVERY} style={{textDecoration: "none"}}>Forgot Password</NavLink>
                <div className={style.bottom}>
                    <form onSubmit={formik.handleSubmit}>
                        <Button name={"login"} type={"submit"} className={styleButton.button}>
                            Login
                        </Button>
                    </form>
                    <div style={{color: "gray"}}>Don't have an account?</div>
                    <NavLink to={PATH.SIGN_UP} style={{color: "#232480", fontWeight: "bold", textDecoration: "none"}}>Sign
                        Up</NavLink>
                </div>
            </div>

        </div>
    )
}