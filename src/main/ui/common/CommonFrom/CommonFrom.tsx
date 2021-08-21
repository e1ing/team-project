import { Formik, useFormik } from 'formik';
import React from 'react';
import { Button } from '../Button/Button';

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

type FormPropsType = {
    type: 'Login' | 'Register' | 'Recovery password' | 'New password'
    callBack: (values: any) => void
}

export const CommonFrom: React.FC<FormPropsType> = (props) => {

    const {
        type,
        callBack
    } = props;


    // Set initial values for Formik start
    let initialValues: any = null;

    // conditions for entry, through if


    // conditions for registration


    // recovery password
    if (type === 'Recovery password') {
        initialValues = {
            email: '',
        }
    }

    // new password


    // Set initial values for Formik end

    const formik = useFormik({
        initialValues,
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invaild email address';
            }

            if (type === 'Login' || type === 'Register' || type === 'New password') // только если форма для входа или регистрации или нового пароля
                if (!values.password) {
                    errors.password = 'Password is required';

                } else if (!/(?=.*[a-z])(?=.*[A-Z])/gi.test(values.password)) {
                    errors.password = 'The password  must contain at least one lowercase or uppercase Latin letter';

                } else if (!/(?=.*[0-9])/gi.test(values.password)) {
                    errors.password = 'The password must contain at least one number';

                } else if (!/[0-9a-zA-Z!@#$%^&*]{6,}/gi.test(values.password)) {
                    errors.password = 'The password must have a minimum 6 characters';
                }

            if (type === 'New password' || type === 'Register') { // только если форма для регистрации или нового пароля
                if (!values.confirmPassword) {
                    errors.confirmPassword = 'Confirm the password';
                } else if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = 'Do not match';
                }
            }
            return errors
        },
        onSubmit: values => {
            // callBack(values);
            // formik.resetForm()

            alert('everything goes according to plan')

        }
    })



    // Reusable Button
    const submitButton = () => { // title
        return <>
            <div>
                <Button
                    disabled={status === 'loading'}
                    type='submit'
                    className=''
                >
                    {/* {title} */}
                </Button>
            </div>
        </>
    };

    // Reusable Email Field

    const emailField = () => {
        return(
            <div>
                
            </div>
        )
    }


    return (
        <>

            {/* Form Title */}

            {/* Form Discription */}

            {/* Form generato function */}

            {/* Form additional field */}

        </>
    )
}