import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

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

    const [typeIcon, setTypeIcon] = useState<string>('password')
    const hideShow = () => {
        setTypeIcon(typeIcon === "text" ? "password" : "text")
    }; // I don't know yet or need it


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
        return (
            <div>
                <label htmlFor='email' />
                <Input
                    id='email'
                    type='email'
                    placeholder='email'
                    {...formik.getFieldProps('email')}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                    <div>{formik.errors.confirmPassword}</div>}
            </div>
        )
    };

    // Reusable Password Field

    const passwordField = () => {
        return (
            <>
                <div>
                    <label htmlFor='password' />
                    <Input
                        id='password'
                        placeholder="password"
                        type={typeIcon}
                        {...formik.getFieldProps("password")}
                    />
                    <span
                        onClick={hideShow}
                    >
                        {typeIcon === "text" ? "🔒" : "🔑"}
                    </span>
                    {formik.errors.password && formik.touched.password &&
                        <div>{formik.errors.password}</div>}
                </div>
            </>
        )
    };

    //  Confirm Password Field

    const confirmPasswordField = () => {
        return (
            <>
                <div>
                    <label htmlFor="confirmPassword" />
                    <Input
                        type="password"
                        placeholder="confirm password"
                        {...formik.getFieldProps("comnirmPassword")}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                        <div>{formik.errors.confirmPassword}</div>}
                </div>
            </>
        )
    };


    // Generator Form

    const formGenerator = () => {
        switch (type) {
            case 'Login':
                return (
                    <>

                    </>
                )
            case 'Register':
                return (
                    <>


                    </>
                )
            case 'Recovery password':
                return (
                    <>
                        {emailField()}
                        {submitButton()}
                    </>
                )
            case 'New password':
                return (
                    <>

                    </>
                )
            default:
                return (
                    <>

                    </>
                )
        }
    };

    // Form Title

    const formTitle = (typeTitle: string) => {
        switch(typeTitle){
            case "Login":
                return "Sing in"
            case "Register":
                return "Sing ip"
            case "Recover Password":
                return "New password"
            case "New password":
                return "New password"
            default:
                return ''
        }
    };

    //  Form Desctiption

    const formDescription = (type: string) => {
        switch (type) {
            case "Register":
                return "Please fill in the form below"
            case "Recovery password":
                return "Please, enter your email";
            case "New password":
                return "Please, enter and confirm your new password"
            default:
                return ""
        }
    };


    return (
        <>

            {/* Form Title */}
            <span>{formTitle(type)}</span>

            {/* Form Discription */}
            <span >{formDescription(type)}</span>
            <form onSubmit={formik.handleSubmit}/>
            {/* Form generato function */}
                {formGenerator()}
            {/* Form additional field */}


        </>
    )
}