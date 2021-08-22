import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { Redirect } from 'react-router-dom';
import s from './PasswordChange.module.css'
import icon from '../../../assets/images/email.svg'

export const PasswordChange: React.FC = React.memo(() => {

    const isloggenIn = useSelector<AppRootStateType, boolean>(state => state.loginReducer.isLoggedIn)

    if (isloggenIn) {
        return <Redirect to={"/"} />
    }
    return (
        <div className={s.checkEmailBlock}>
            <div className={s.checkEmail}>
                <div className={s.iconBg}>
                    <img src={icon} />
                </div>
                <h2 className={s.caption}>Check Email</h2>
                <p className={s.text}>We've sent an Email with instructions to example to @mail.com</p>
            </div>

        </div>
    )
})