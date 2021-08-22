import React from 'react';
import { Button } from '../common/Button/Button';
import { NavLink } from 'react-router-dom';
import { Input } from '../common/Input/Input';
import s from "./PasswordRecovery.module.css"

type RecoveryPassPropsType = {
    submit: any
    changeHandler: any
    emailValue: any
    status: any
    errors: any
    isSand: boolean
}

export const RecoveryPassword: React.FC<RecoveryPassPropsType> = (props) => {

    const {
        submit,
        changeHandler,
        emailValue,
        status,
        errors,
        isSand,
    } = props



    return (
        <div className={s.container}>
            <div className={s.block}>
                <h3>It-incubator</h3>
                {!isSand
                    ? <div>
                        <h4>Recovery password</h4>
                        <form onSubmit={submit}>
                            <div className={s.fields}>
                                <Input 
                                    id='email'
                                    type='email'
                                    placeholder='email'
                                    onChange={changeHandler}
                                    value={emailValue}
                                    />
                            </div>
                            <span className={s.instruction}>
                                Enter your email address and we wil send you furher instructions
                            </span>
                            <div className={s.buttonR}>
                                <Button type="submit" >Send Instructions</Button>
                            </div>
                        </form>
                        <div className={s.blokLink}>
                            <span className={s.question}>Did you remember your password ?</span>
                            <NavLink to="/login"><span className={s.link}>Try logging in</span></NavLink>
                        </div>

                    </div> : <Message email={emailValue} />
                }
            </div>
        </div>

    )
}

type MessagePropsType = {
    email: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <h4>
                Chec your Email
            </h4>
            <span>
                We sent an email with instructions to the address {props.email}
            </span>
        </div>
    )
}