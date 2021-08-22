import React from 'react';
import { Button } from '../common/Button/Button';
import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../common/Input/Input';
import s from "./PasswordRecovery.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { useFormik } from "formik";
import { RequestStatusType } from '../../bll/auth-reducer';
import { restorePasswordTC } from '../../bll/recovery-password-rebucer';

type FormikErrorType = {
    email?: string
}

export const RestorePassword = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.loginReducer.isLoggedIn)
    const errorMessage = useSelector<AppRootStateType, string | null>(message => message.recoveryPassword.errorMessage)
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

    if (errorMessage?.slice(0, 8) === "Recovery") {
        return <Redirect to={"/password-change"} />
    }

    if (isLoggedIn) {
        return <Redirect to={"/"} />
    }

    return (
        <div className={s.container}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.block}>
                    <MainTitle title={"It-Incubator"} />
                    <h4 >Forgot your password?</h4>
                    <div className={s.inputWrap}>
                        <Input
                            type={"email"}
                            {...formik.getFieldProps("email")}
                            // label={"Email"}
                            autoComplete="off"
                        />
                        {formik.touched.email && formik.errors.email
                            ? <div>{formik.errors.email}</div>
                            : <div>&nbsp;</div>
                        }
                    </div>
                    <p className={s.instruction}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <Button
                        type={"submit"}
                        // disabled={status === "loading"}
                        className={s.button}>
                        Send Instructions
                    </Button>
                    <div className={s.blokLink}>
                        <span className={s.question}>Did you remember your password?</span>
                        <NavLink to={"/login"} ><span className={s.link}>Try logging in</span></NavLink>
                    </div>
                </div>
            </form>
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
})