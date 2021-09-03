import React from 'react';
import { Button } from '../common/Button/Button';
import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../common/Input/Input';
import s from "./PasswordRecovery.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { useFormik } from "formik";
import styles from "../Registration/Registartion.module.css";
import commonStyles from "../app/App.module.css";
import styleButton from "../common/Button/Button.module.css";
import style from "../Login/Login.module.css";
import {restorePasswordTC} from "../../bll/auth-reducer/recovery-password-reducer";

type FormikErrorType = {
    email?: string
}

export const PasswordRecovery = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const recovered = useSelector<AppRootStateType, boolean>(state => state.recoveryPassword.isRecovered);
    // const status = useSelector<AppRootStateType, RequestStatusType>(state => state.appReducer.status)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: (values) => {

            const error: FormikErrorType = {}
            if (!values.email) {
                error.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Invalid email address"
            }
            return error
        },
        onSubmit: values => {
            dispatch(restorePasswordTC(values.email))
            formik.resetForm()
        }
    })

    if (recovered) {
        return <Redirect to={"/password-change"} />
    }

    if (isLoggedIn) {
        return <Redirect to={"/"} />
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>it-incubator</h1>
                    <h2>Forgot your password?</h2>
                </div>
                <form className={styles.content} onSubmit={formik.handleSubmit}>

                    <Input
                        type={"email"}
                        placeholder={"Email"}
                        {...formik.getFieldProps("email")}
                        // label={"Email"}
                        autoComplete="off"
                    />
                    {formik.touched.email && formik.errors.email
                        ? <div>{formik.errors.email}</div>
                        : <div>&nbsp;</div>
                    }
                    <div className={style.bottom}>
                        <p className={s.instruction}>
                            Enter your email address and we will send you further instructions
                        </p>
                        <Button
                            type={"submit"}
                            // disabled={status === "loading"}
                            className={styleButton.button}>
                            Send Instructions
                        </Button>
                        <div className={s.question}>Did you remember your password?</div>
                        <NavLink to={"/login"}
                                 style={{
                                     color: "#232480",
                                     fontWeight: "bold",
                                     textDecoration: "none"
                                 }}>

                            Try logging in</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
})

type MainTitlePropsType = {
    title: string
    textStyle?: string
}

export const MainTitle = React.memo((props: MainTitlePropsType) => {
    return (
        <h2 className={s.titleT}>
            {props.title}
        </h2>
    )
});