import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../bll/store";
import {useFormik} from "formik";
import { RecoveryPassword } from "./PasswordRecovery";

export const PasswordRecoveryContainer: React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    // const status = useSelector<AppStoreType, any>(state => state.app.status);
    const isSand = useSelector<AppStoreType, boolean>(state => state.recoveryPassword.messages);



    const from = 'test-front-admin <ai73a@wandex.by>';
    const message =
        `
        <div> 
        Please, click on the link and enter a new password
        //ссылка на страницу
        <a href=" ">Go to recovery password</a>
        </div>
        `;

        const formik = useFormik({
            initialValues: {
                email: "",
            },
            validate: (values) => {
                const errors: any = {};
                if (!values.email) {
                    errors.email = "Email is required"
                } else if (values.email.length < 10) {
                    errors.email = "Email should be more 10 symbols"
                }
                return errors;
            },
            onSubmit: values => {
                // @ts-ignore
                dispatch(forgotPass({email: values.email, from, message}))
            }
        }
    )


    return (
        <RecoveryPassword
            errors={formik.errors}
            emailValue={formik.values.email}
            submit={formik.handleSubmit}
            // status={status}
            changeHandler={formik.handleChange}
            isSand={isSand}
        />
    )
}