import React from 'react';
import style from './Login.module.css';
import styleButton from './../common/Button/Button.module.css';
import styleInput from './../common/Input/Input.module.css';
import {PATH} from "../routes/Routes";
import {NavLink, Redirect} from "react-router-dom";
import {useFormik} from "formik";
import Checkbox from "../common/Checkbox/Checkbox";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {loginThunk} from "../../bll/auth-reducer";


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
            alert(JSON.stringify(values));
            dispatch(loginThunk(values.email, values.password, values.rememberMe))
            formik.resetForm()

        },

    })

    if (isLoggedIn) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.title}>
                    <h1>It-incubator</h1>
                    <h3>Sign In</h3>
                </div>
                <form className={style.input} onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <Input
                        className={styleInput.input}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    <label htmlFor="password">Password</label>
                    <Input
                        className={styleInput.input}
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
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
                        <Button className={styleButton.button}>
                            login
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