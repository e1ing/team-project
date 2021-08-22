import React, {FC} from 'react';
import {useFormik} from 'formik'
import {Input} from '../common/Input/Input';
import styles from './Registartion.module.css'
import commonStyles from '../app/App.module.css'
import {registerUserTC} from "../../bll/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {AppRootStateType} from "../../bll/store";
import {RequestStatusType} from "../../bll/app-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    confirmation?: string
}

export const Registration: FC = () => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registation.isRegistered)
    const dispatch = useDispatch()

    const regForm = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmation: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password required';
            } else if (values.password.length < 7) {
                errors.password = 'Must be more then 7 characters';
            }

            if (values.password && !values.confirmation) {
                errors.confirmation = 'Confirm password';
            } else if (values.password !== values.confirmation) {
                errors.confirmation = 'Password mismatch';
            }
            return errors;
        },
        onSubmit: values => {
            if (values.password === values.confirmation) {
                dispatch(registerUserTC({email: values.email, password: values.password}))
                regForm.resetForm();
            }
        }
    })

    if (isRegistered) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>

                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>it-incubator</h1>
                    <h2>Sign Up</h2>
                </div>

                <form onSubmit={regForm.handleSubmit} autoComplete={"off"}>
                    <div className={styles.content}>
                        <div>
                            <Input type={"email"} placeholder={"Email"}
                                   {...regForm.getFieldProps("email")}
                            />
                        </div>
                        <div>
                            <Input type={"password"} placeholder={"Password"}
                                   {...regForm.getFieldProps("password")}
                            />
                        </div>
                        <div>
                            <Input type={"password"} placeholder={"Confirm password"}
                                   {...regForm.getFieldProps("confirmation")}
                            />
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <NavLink to={"/login"}>
                            <button>Cancel</button>
                        </NavLink>
                        <button type={"submit"}>Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}