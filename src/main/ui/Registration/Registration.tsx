import React, {FC} from 'react';
import {useFormik} from 'formik'
import {Input} from '../common/Input/Input';
import styles from './Registartion.module.css'
import commonStyles from '../app/App.module.css'

type RegistrationPropsType = {}
type FormikErrorType = {
    email?: string
    password?: string
    confirmation?: string
}


export const Registration: FC<RegistrationPropsType> = () => {

    /*  const dispatch = useDispatch()*/

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

            if (!values.confirmation) {
                errors.confirmation = 'Password required';
            } else if (values.password.length < 7) {
                errors.confirmation = 'Must be more then 7 characters';
            }
            return errors;
        },
        onSubmit: values => {
            /* dispatch({})*/
            regForm.resetForm();
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.form}>

                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>it-incubator</h1>
                    <h2>Sign Up</h2>
                </div>

                <div className={styles.content}>
                    <form onSubmit={regForm.handleSubmit} autoComplete={"off"}></form>
                    <div>
                        <Input type={"email"} placeholder={"Email"}/>
                    </div>
                    <div>
                        <Input type={"password"} placeholder={"Password"}/>
                    </div>
                    <div>
                        <Input type={"confirmation"} placeholder={"Confirm password"}/>
                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <button>Cancel</button>
                    <button type={"submit"}>Register</button>
                </div>
            </div>

        </div>
    )
}