import React, { useState } from "react";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { MainTitle } from "../PasswordRecovery/PasswordRecovery";
import s from "./UpdatePassword.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from "../../bll/store";
import { Redirect, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { updatePasswordTC } from "../../bll/update-password-reducer";

type FormikErrorType = {
    newPassword?: string
}
export const UpdatePassword: React.FC = React.memo(() => {

    const isSuccess = useSelector<AppRootStateType, boolean>(state => state.updatePasswordReducer.isSuccess);
    const isloggenIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { token } = useParams<{ token: string }>();

    const mouseDownPasswordHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    };

    const formik = useFormik({
        initialValues: {
            newPassword: "",
        },
        validate: (values) => {
            const error: FormikErrorType = {}
            if (!values.newPassword) {
                error.newPassword = "Required"
            } else if (values.newPassword.length < 6) {
                error.newPassword = "Must be at least 6 characters"
            }
            return error
        },
        onSubmit: values => {
            dispatch(updatePasswordTC(values.newPassword, token))
            formik.resetForm()
        }
    });

    if (isSuccess) {
        return <Redirect to={"/login"} />
    }
    if (isloggenIn) {
        return <Redirect to={"/"} />
    }

    return (
        <div className={s.container}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.block}>
                    <MainTitle title={"It-Incubator"} />
                    <h2>Create new password?</h2>
                    <Input
                        type={showPassword ? "text" : "password"}
                        {...formik.getFieldProps("newPassword")}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword ?
                        <div>{formik.errors.newPassword}</div> :
                        <div>&nbsp;</div>
                    }
                    <p className={s.instruction}>
                        Create new password and we will send you
                        further instructions to email
                    </p>
                    <Button
                        type={"submit"}
                        // disabled={status === "loading"}
                        className={s.button}>
                        Create new password
                    </Button>

                </div>
            </form>
        </div>
    )
})